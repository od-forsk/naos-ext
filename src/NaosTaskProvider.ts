import * as vscode from "vscode";
import { WebSocket } from "ws";
import { RunDescribe } from "./models/RunDescribe";
import { TaskDescribe } from "./models/TaskDescribe";
import { TaskLogMessage } from "./models/TaskLogMessage";
import { NaosClient } from "./naosclient";
import { JobSummary } from "./naosclient/models/JobSummary";
import { TokenResponse } from "./naosclient/models/TokenResponse";
import { handleErrors } from "./utils";


export interface NaosTaskDefinition extends vscode.TaskDefinition {
    jobId: string;
    priority?: number;
}

// https://github.com/microsoft/vscode-extension-samples/blob/main/task-provider-sample/src/extension.ts
export class NaosTaskProvider implements vscode.TaskProvider<vscode.Task> {
    static taskType = "naos-job";

    constructor(
        private apiClient: NaosClient,
    ) { }

    async provideTasks(token: vscode.CancellationToken) {
        const tasks: vscode.Task[] = [];
        const jobs: JobSummary[] = await this.apiClient.scheduler.schedulerProxyGet("jobs");
        for (const job of jobs) {
            tasks.push(this.getTask(job.id, job.name));
        }
        return tasks;
    }

    resolveTask(task: vscode.Task, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Task> {
        const definition: NaosTaskDefinition = <any>task.definition;
        return this.getTask(definition.jobId, task.name, definition);
    }

    private getTask(jobId: string, name: string, definition?: NaosTaskDefinition): vscode.Task {
        if (definition === undefined) {
            definition = {
                type: NaosTaskProvider.taskType,
                jobId,
            };
        }
        return new vscode.Task(
            definition,
            vscode.TaskScope.Workspace,
            // `${project.name}: ${job.name}`,
            name,
            "naos-job",
            new vscode.CustomExecution(async definition => new NaosTaskTerminal(definition as NaosTaskDefinition, this.apiClient))
        );
    }
}


const TERMINAL_STATUSES = ["COMPLETED", "FAILED", "ABORTED", "CANCELLED"];

class NaosTaskTerminal implements vscode.Pseudoterminal {
    private writeEmitter = new vscode.EventEmitter<string>();
    onDidWrite: vscode.Event<string> = this.writeEmitter.event;
    private closeEmitter = new vscode.EventEmitter<number>();
    onDidClose?: vscode.Event<number> = this.closeEmitter.event;

    private websockets: WebSocket[] = [];
    private interval: any = null;

    constructor(
        private definition: NaosTaskDefinition,
        private apiClient: NaosClient,
    ) { }

    @handleErrors
    async open(initialDimensions?: vscode.TerminalDimensions) {
        const job_id = this.definition.jobId;
        // TODO {priority: this.definition.priority}
        this.write(`Starting NAOS Job ${job_id}.\r\n`);
        const { run_id } = await this.apiClient.scheduler.schedulerProxyPost(`jobs/${this.definition.jobId}/_run`);
        this.write(`posted as run ${run_id}\r\n`);
        vscode.commands.executeCommand("naos.refresh");

        const { access_token } = await this.apiClient.auth.login() as TokenResponse;
        const config = vscode.workspace.getConfiguration("naos");
        const baseURL = config.get<string>("gatewayURL");
        const host = new URL(baseURL!).host;
        const minLogLevel = config.get<number>("messages.minloglevel", 20);
        this.write(`minimum log level: ${minLogLevel}\r\n`);

        let lastMessage = Date.now();
        const tasks: TaskDescribe[] = await this.apiClient.scheduler.schedulerProxyGet(`jobs/${job_id}/runs/${run_id}/tasks`);
        tasks.forEach(task => {
            const ws = new WebSocket(`ws://${host}/scheduler/messages/${task.id}?token=${access_token}`);
            this.websockets.push(ws);
            ws.on("message", data => {
                lastMessage = Date.now();
                const message: TaskLogMessage = JSON.parse(data.toString());
                if (message.headers.level >= minLogLevel) {
                    const dt = new Date(message.dt / 1e6).toLocaleTimeString();
                    this.write(`${dt} [${message.content?.levelname}] ${message.content?.message}\r\n`);
                }
            });
        });

        this.interval = setInterval(async () => {
            const noMessageMs = Date.now() - lastMessage;
            if (noMessageMs > 2000) {
                const run: RunDescribe = await this.apiClient.scheduler.schedulerProxyGet(`jobs/${job_id}/runs/${run_id}`);
                if (TERMINAL_STATUSES.includes(run.status.status)) {
                    this.closeEmitter.fire(0);
                    this.close();
                }
            }
        }, 3000);
    }

    private write(line: string) {
        this.writeEmitter.fire(line);
    }

    close(): void {
        this.interval && clearInterval(this.interval);
        this.websockets.forEach(ws => {
            ws.close();
            console.debug("closing task messages websocket.");
            vscode.commands.executeCommand("naos.refresh");
        });
    }
}