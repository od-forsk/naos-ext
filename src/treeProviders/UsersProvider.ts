import * as vscode from 'vscode';
import { NaosClient } from '../naosclient';
import { UserInfo } from '../naosclient/models/UserInfo';

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
		// return await this.api.admin.getUsers();
	}

	getTreeItem(user: UserInfo) {
		return {
			collapsibleState: vscode.TreeItemCollapsibleState.None,
			label: user.name,
			iconPath: new vscode.ThemeIcon("person"),
			user,
		};
	}

	refresh() {
		this._onDidChangeTreeData.fire(null);
	}

}
