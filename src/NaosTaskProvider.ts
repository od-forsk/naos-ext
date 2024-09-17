import * as vscode from 'vscode';
import { WebSocket } from 'ws';
import { TaskDescribe } from './models/TaskDescribe';
import { TaskLogMessage } from './models/TaskLogMessage';
import { NaosClient } from './naosclient';
import { Project } from './naosclient/models/Project';
import { TokenResponse } from './naosclient/models/TokenResponse';


export interface NaosTaskDefinition extends vscode.TaskDefinition {
    jobId: string;
    priority?: number;
}

// https://github.com/microsoft/vscode-extension-samples/blob/main/task-provider-sample/src/extension.ts
export class NaosTaskProvider implements vscode.TaskProvider<vscode.Task> {
    static taskType = 'naos-job';

    constructor(
        private apiClient: NaosClient,
    ) { }

    async provideTasks(token: vscode.CancellationToken) {
        const tasks: vscode.Task[] = [];
        for (const project of await this.apiClient.projects.getProjects() as Project[]) {
            for (const job of await this.apiClient.jobs.getProjectJobs(project.id!)) {
                tasks.push(this.getTask(job.id, `${project.name}: ${job.name}`));
            }
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
            'naos-job',
            new vscode.CustomExecution(async definition => new NaosTaskTerminal(definition as NaosTaskDefinition, this.apiClient))
        );
    }
}


class NaosTaskTerminal implements vscode.Pseudoterminal {
    private writeEmitter = new vscode.EventEmitter<string>();
    onDidWrite: vscode.Event<string> = this.writeEmitter.event;
    private closeEmitter = new vscode.EventEmitter<number>();
    onDidClose?: vscode.Event<number> = this.closeEmitter.event;

    private websockets: WebSocket[] = [];

    constructor(
        private definition: NaosTaskDefinition,
        private apiClient: NaosClient,
    ) { }

    async open(initialDimensions?: vscode.TerminalDimensions) {
        const job_id = this.definition.jobId;
        // TODO {priority: this.definition.priority}
        this.write(`Starting NAOS Job ${job_id}.\r\n`);
        const { run_id } = await this.apiClient.scheduler.schedulerProxyPost(`/jobs/${this.definition.jobId}/_run`);
        this.write(`posted as run ${run_id}\r\n`);
        vscode.commands.executeCommand("naos.refresh");

        const { access_token } = await this.apiClient.auth.login() as TokenResponse;
        const config = vscode.workspace.getConfiguration("naos");
        const baseURL = config.get<string>("gatewayURL");
        const host = new URL(baseURL!).host;
        const minLogLevel = config.get<number>("messages.minloglevel", 20);

        const tasks: TaskDescribe[] = await this.apiClient.scheduler.schedulerProxyGet(`jobs/${job_id}/runs/${run_id}/tasks`);
        tasks.forEach(task => {
            const ws = new WebSocket(`ws://${host}/scheduler/messages/${task.id}?token=${access_token}`);
            this.websockets.push(ws);
            ws.on('message', data => {
                const message: TaskLogMessage = JSON.parse(data.toString());
                if (message.headers.level >= minLogLevel) {
                    const dt = new Date(message.dt / 1e6).toLocaleTimeString();
                    this.write(`${dt} [${message.content?.levelname}] ${message.content?.message}\r\n`);
                }
            });
        });

        // TODO call when all websockets are done... not with current WS status
        // this.closeEmitter.fire(0);
    }

    private write(line: string) {
        this.writeEmitter.fire(line);
    }

    close(): void {
        this.websockets.forEach(ws => {
            ws.close();
            console.debug('closing task messages websocket.')
        });
    }
}