import * as vscode from 'vscode';
import { NaosClient } from '../naosclient';
import { UserInfo } from '../naosclient/models/UserInfo';
import { validColor } from '../utils';

export class UsersProvider implements vscode.TreeDataProvider<UserInfo> {

	constructor(
		private api: NaosClient
	) { }

	private _onDidChangeTreeData = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

	async getChildren(element?: any) {
		if (!element) {
			return await this.api.admin.getUsers();
		}
	}

	getTreeItem(user: UserInfo): vscode.TreeItem | Thenable<vscode.TreeItem> {
		return {
			collapsibleState: vscode.TreeItemCollapsibleState.None,
			label: user.name,
			description: user.id,
			tooltip: user.id,
			iconPath: new vscode.ThemeIcon("person", user.is_admin ? validColor : undefined),
			contextValue: "naos.user",
			id: user.id,
			command: {
				command: "vscode.open",
				title: "Open Call",
				arguments: [
					vscode.Uri.parse(`naos:${user.id}.user.naos`),
					<vscode.TextDocumentShowOptions>{}
				]
			}
		};
	}

	refresh() {
		this._onDidChangeTreeData.fire(null);
	}

}
