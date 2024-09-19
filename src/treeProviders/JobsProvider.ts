import * as vscode from 'vscode';
import { RunDescribe } from '../models/RunDescribe';
import { TaskDescribe } from '../models/TaskDescribe';
import { NaosClient } from '../naosclient';
import { JobDescribe } from '../naosclient/models/JobDescribe';
import { invalidColor, validColor } from '../utils';

type Job = JobDescribe & { kind: "job" };
type Run = RunDescribe & { kind: "run" };
type Task = TaskDescribe & { kind: "task" };
type SchedulingUnit = Job | Run | Task;

export class JobsProvider implements vscode.TreeDataProvider<SchedulingUnit> {

	constructor(
		private api: NaosClient
	) { }

	private _onDidChangeTreeData = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

	async getChildren(element?: SchedulingUnit) {
		if (!element) {
			const jobs: [any] = await this.api.scheduler.schedulerProxyGet("jobs");
			return jobs.map(job => ({ ...job, kind: "job" }));
		}
		if (element.kind === "job") {
			const runs: [any] = await this.api.scheduler.schedulerProxyGet(`jobs/${element.id}/runs`);
			return runs.map(run => ({ ...run, kind: "run" }));
		}
		if (element.kind === "run") {
			const tasks: [any] = await this.api.scheduler.schedulerProxyGet(`jobs/${element.job_id}/runs/${element.id}/tasks`);
			return tasks.map(task => ({ ...task, kind: "task" }));
		}
	}

	getTreeItem(item: SchedulingUnit): vscode.TreeItem | Thenable<vscode.TreeItem> {
		switch (item.kind) {
			case "job":
				const jobStatus = item.last_run_status?.status;
				return {
					collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
					label: item.name,
					description: [
						item.job_version ? `v${item.job_version}` : "",
						jobStatus === "COMPLETED" ? undefined : jobStatus,
					].filter(e => e !== undefined).join(" "),
					tooltip: item.id,
					iconPath: new vscode.ThemeIcon("wrench", statusColor(jobStatus)),
					contextValue: "naos.job",
					id: item.id,
					command: {
						command: "vscode.open",
						title: "Open Call",
						arguments: [
							vscode.Uri.parse(`naos:${item.id}.job.naos`),
							<vscode.TextDocumentShowOptions>{},
						]
					}
				};
			case 'run':
				const runStatus = item.status?.status;
				return {
					collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
					label: new Date(item.creation_date).toLocaleString(),
					description: `${item.status.status} ${item.status.progress}%`,
					tooltip: item.id,
					iconPath: new vscode.ThemeIcon(runStatus === "FAILED" ? "run-errors" : "run", statusColor(runStatus)),
					contextValue: "naos.run",
					id: item.id,
					command: {
						command: "vscode.open",
						title: "Open Call",
						arguments: [
							vscode.Uri.parse(`naos:${item.job_id}/${item.id}.run.naos`),
							<vscode.TextDocumentShowOptions>{},
						]
					}
				};
			case 'task':
				return {
					collapsibleState: vscode.TreeItemCollapsibleState.None,
					label: item.name,
					description: `${item.status?.status} ${item.status.progress}%`,
					tooltip: item.id,
					iconPath: new vscode.ThemeIcon("debug-breakpoint", statusColor(item.status?.status)),
					contextValue: "naos.task",
					id: item.id,
					command: {
						command: "vscode.open",
						title: "Open Call",
						arguments: [
							vscode.Uri.parse(`naos:${item.job_id}/${item.run_id}/${item.id}.task.naos`),
							<vscode.TextDocumentShowOptions>{},
						]
					}
				};
		}

		return {};
	}

	refresh() {
		this._onDidChangeTreeData.fire(null);
	}

}

function statusColor(jobStatus?: string): vscode.ThemeColor | undefined {
	switch (jobStatus) {
		case "COMPLETED":
			return validColor;
		case "FAILED":
			return invalidColor;
	}
}

