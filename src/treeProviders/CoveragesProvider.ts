import * as vscode from 'vscode';
import { NaosClient } from '../naosclient';
import { Coverage } from '../naosclient/models/Coverage';

export class CoveragesProvider implements vscode.TreeDataProvider<Coverage> {

	constructor(
		private api: NaosClient
	) { }

	private _onDidChangeTreeData = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

	async getChildren(element?: any) {
		if (!element) {
			return await this.api.coverages.getCoverages() as Coverage[];
		}
	}

	getTreeItem(coverage: Coverage): vscode.TreeItem | Thenable<vscode.TreeItem> {
		return {
			collapsibleState: vscode.TreeItemCollapsibleState.None,
			label: coverage.name,
			description: `${coverage.type ?? ''} ${coverage.work_area?.name ?? ''}`,
			tooltip: coverage.id,
			iconPath: new vscode.ThemeIcon("graph"),
			contextValue: "naos.coverage",
			id: coverage.id,
			command: {
				command: "vscode.open",
				title: "Open Call",
				arguments: [
					vscode.Uri.parse(`naos:${coverage.id}.coverage.naos`),
					<vscode.TextDocumentShowOptions>{}
				]
			}
		};
	}

	refresh() {
		this._onDidChangeTreeData.fire(null);
	}

}
