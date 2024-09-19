import * as vscode from 'vscode';
import { NaosClient } from '../naosclient';
import { invalidColor, validColor } from '../utils';

export interface Service {
	name: string;
	status: string;
	version: string;
}

export class ServicesProvider implements vscode.TreeDataProvider<Service> {

	constructor(
		private api: NaosClient
	) { }

	private _onDidChangeTreeData = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

	async getChildren(element?: any): Promise<Service[]> {
		const services = await this.api.service.getGlobalStatus();
		return Object.entries(services).map(([k, v]) => ({ name: k, ...v }));
	}

	getTreeItem(service: Service): vscode.TreeItem {
		const icon = service.status === "healthy" ?
			new vscode.ThemeIcon("run", validColor) :
			new vscode.ThemeIcon("run-errors", invalidColor);
		return {
			collapsibleState: vscode.TreeItemCollapsibleState.None,
			label: service.name,
			description: service.version,
			tooltip: JSON.stringify(service, undefined, 2),
			iconPath: icon,
			contextValue: "naos.service",
			id: service.name,
		};
	}

	refresh() {
		this._onDidChangeTreeData.fire(null);
	}

}
