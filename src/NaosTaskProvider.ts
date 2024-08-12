import * as vscode from 'vscode';
import { NaosClient } from './naosclient';
import { Project } from './naosclient/models/Project';


interface NaosTaskDefinition extends vscode.TaskDefinition {
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

    constructor(
        private definition: NaosTaskDefinition,
        private apiClient: NaosClient,
    ) { }

    async open(initialDimensions?: vscode.TerminalDimensions) {
        this.writeEmitter.fire('Starting NAOS Job...\r\n');
        this.writeEmitter.fire(`${this.definition.jobId}\r\n`);
        // TODO {priority: this.definition.priority}
        await this.apiClient.scheduler.schedulerProxyPost(`/jobs/${this.definition.jobId}/_run`);
        // TODO ws output
        this.writeEmitter.fire(`posted...\r\n`);
        this.closeEmitter.fire(0);
    }

    close(): void {
        // The terminal has been closed. Shutdown the build.
    }
}