import * as vscode from 'vscode';
import { User } from '../models/User';
import axios from 'axios';

export class UsersProvider implements vscode.TreeDataProvider<User> {

	public users: User[] = [];

	constructor() {
	}

	private _onDidChangeTreeData: vscode.EventEmitter<any> = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData: vscode.Event<any> = this._onDidChangeTreeData.event;

	getChildren(element?: any): vscode.ProviderResult<User[]> {
		const gateway = vscode.workspace.getConfiguration('naos.gatewayURL');
		return axios.get(`${gateway}/admin/users`).then(resp => resp.data.map((u: any) => new User(u.name)));
		// return element ? [] : this.users;
	}

	getTreeItem(user: User): vscode.TreeItem | Thenable<vscode.TreeItem> {
		return {
			collapsibleState: vscode.TreeItemCollapsibleState.None,
			label: user.name,
			iconPath: new vscode.ThemeIcon("person"),
			
		};
	}

	refresh() {
		this._onDidChangeTreeData.fire(null);
	}

}
