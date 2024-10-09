import * as vscode from 'vscode';
import { NaosClient } from '../naosclient';
import { Project } from '../naosclient/models/Project';
import { Workspace } from '../naosclient/models/Workspace';
import { handleErrors, isProject } from '../utils';

export class WorkareasProvider implements vscode.TreeDataProvider<Project | Workspace> {

	constructor(
		private api: NaosClient
	) { }

	private _onDidChangeTreeData = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

	@handleErrors
	async getChildren(element?: any) {
		if (!element) {
			return await this.api.projects.getProjects() as Project[];
		}
		const proj = element as Project;
		return await this.api.admin.getAllWorkspaces(undefined, undefined, undefined, undefined, undefined, undefined, undefined, proj.id) as Workspace[];
	}

	getTreeItem(work_area: Project | Workspace): vscode.TreeItem | Thenable<vscode.TreeItem> {
		if (isProject(work_area)) {
			return {
				collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
				label: work_area.name,
				description: `[${work_area.source?.type}] ${work_area.id}`,
				tooltip: work_area.id,
				iconPath: new vscode.ThemeIcon("database"),
				contextValue: "naos.project",
				id: work_area.id,
				command: {
					command: "vscode.open",
					title: "Open Call",
					arguments: [
						vscode.Uri.parse(`naos:${work_area.id}.project.naos`),
						<vscode.TextDocumentShowOptions>{},
					]
				}
			};
		} else {
			return {
				collapsibleState: vscode.TreeItemCollapsibleState.None,
				label: work_area.name,
				description: `[${work_area.source?.type}] ${work_area.id}`,
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

