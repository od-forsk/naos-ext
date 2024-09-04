import * as vscode from 'vscode';
import { NaosClient } from '../naosclient';
import { invalidColor, validColor } from '../utils';
import { NaosInstance } from '../naosclient/models/NaosInstance';


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
		const uri = vscode.Uri.parse(`naos:/instance/${instance.id}.json`);
		const icon = instance.service_state === "healthy" ?
			new vscode.ThemeIcon("gear", validColor) :
			new vscode.ThemeIcon("error", invalidColor);
		return {
			collapsibleState: vscode.TreeItemCollapsibleState.None,
			label: instance.name,
			description: instance.url,
			iconPath: icon,
			contextValue: "naos.instance",
			id: instance.id,
			command: {
				command: "vscode.open",
				title: "Open Call",
				arguments: [
					uri,
					<vscode.TextDocumentShowOptions>{
						
					}
				]
			}
		};
	}

	refresh() {
		this._onDidChangeTreeData.fire(null);
	}

}
