import * as vscode from 'vscode';
import { NaosClient } from '../naosclient';
import { Project } from '../naosclient/models/Project';
import { Workspace } from '../naosclient/models/Workspace';

export class WorkareasProvider implements vscode.TreeDataProvider<Project | Workspace> {

	constructor(
		private api: NaosClient
	) { }

	private _onDidChangeTreeData = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

	async getChildren(element?: any) {
		if (!element) {
			return await this.api.projects.getProjects() as Project[];
		}
		const proj = element as Project;
		return await this.api.admin.getAllWorkspaces(undefined, undefined, undefined, undefined, undefined, undefined, undefined, proj.id) as Workspace[];
	}

	getTreeItem(work_area: Project | Workspace): vscode.TreeItem | Thenable<vscode.TreeItem> {
		if ("project_id" in work_area) {
			return {
				collapsibleState: vscode.TreeItemCollapsibleState.None,
				label: work_area.name,
				description: work_area.source?.type ?? '',
				tooltip: work_area.id,
				iconPath: new vscode.ThemeIcon("file"),
				contextValue: "naos.workspace",
				id: work_area.id,
				command: {
					command: "vscode.open",
					title: "Open Call",
					arguments: [
						vscode.Uri.parse(`naos:${work_area.id}.workspace.naos`),
						<vscode.TextDocumentShowOptions>{},
					]
				}
			};
		} else {
			const project = work_area as Project;
			return {
				collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
				label: project.name,
				description: project.source?.type ?? '',
				tooltip: project.id,
				iconPath: new vscode.ThemeIcon("database"),
				contextValue: "naos.project",
				id: project.id,
				command: {
					command: "vscode.open",
					title: "Open Call",
					arguments: [
						vscode.Uri.parse(`naos:${project.id}.project.naos`),
						<vscode.TextDocumentShowOptions>{},
					]
				}
			};
		}

	}

	refresh() {
		this._onDidChangeTreeData.fire(null);
	}

}

export async function sendProject(editorText: string, apiClient: NaosClient) {
	const project: Project = JSON.parse(editorText!);
	if (project.id) {
		await apiClient.projects.editProject(project.id, undefined, true, project);
	} else {
		await apiClient.projects.createProject(true, project);
	}
}

