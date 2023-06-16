import * as vscode from 'vscode';
import { User } from '../models/User';

export class UsersProvider implements vscode.TreeDataProvider<User> {

	public users: User[] = [];

	constructor() {
	}

	private _onDidChangeTreeData: vscode.EventEmitter<any> = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData: vscode.Event<any> = this._onDidChangeTreeData.event;

	getChildren(element?: any): vscode.ProviderResult<User[]> {
		return element ? [] : this.users;
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
