import * as vscode from 'vscode';
import { NaosClient } from '../naosclient';
import { NaosInstance } from '../naosclient/models/NaosInstance';
import { invalidColor, validColor } from '../utils';


export class InstancesProvider implements vscode.TreeDataProvider<NaosInstance> {

	constructor(
		private api: NaosClient
	) { }

	private _onDidChangeTreeData = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

	async getChildren(element?: any) {
		if (!element) {
			return await this.api.admin.getGlobalInstances();
		}
	}

	getTreeItem(instance: NaosInstance): vscode.TreeItem | Thenable<vscode.TreeItem> {
		return {
			collapsibleState: vscode.TreeItemCollapsibleState.None,
			label: instance.name,
			description: `${instance.service_state} ${instance.url}`,
			iconPath: instance.service_state === "healthy" ?
				new vscode.ThemeIcon("gear", validColor) :
				new vscode.ThemeIcon("error", invalidColor),
			contextValue: "naos.instance",
			id: instance.id,
			command: {
				command: "vscode.open",
				title: "Open Call",
				arguments: [
					vscode.Uri.parse(`naos:/instance/${instance.id}.json`),
					<vscode.TextDocumentShowOptions>{},
				]
			}
		};
	}

	refresh() {
		this._onDidChangeTreeData.fire(null);
	}

}
