import * as vscode from 'vscode';
import { NaosClient } from '../naosclient';
import { Artifact } from '../naosclient/models/Artifact';

export class ArtifactsProvider implements vscode.TreeDataProvider<Artifact> {

	constructor(
		private api: NaosClient
	) { }

	private _onDidChangeTreeData = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

	async getChildren(element?: any) {
		if (!element) {
			return await this.api.artifacts.getArtifacts(
				undefined, undefined, undefined, undefined, undefined, undefined,
				'-created'
			) as Artifact[];
		}
	}

	getTreeItem(artifact: any): vscode.TreeItem | Thenable<vscode.TreeItem> {
		return {
			collapsibleState: vscode.TreeItemCollapsibleState.None,
			label: artifact.name ?? artifact.id,
			description: artifact.type ?? artifact.metadata?.type,
			tooltip: artifact.id,
			iconPath: new vscode.ThemeIcon("gift"),
			contextValue: "naos.artifact",
			id: artifact.id,
			command: {
				command: "vscode.open",
				title: "Open Call",
				arguments: [
					vscode.Uri.parse(`naos:${artifact.id}.artifact.naos`),
					<vscode.TextDocumentShowOptions>{},
				]
			}
		};
	}

	refresh() {
		this._onDidChangeTreeData.fire(null);
	}

}
