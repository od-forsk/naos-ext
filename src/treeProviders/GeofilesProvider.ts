import * as vscode from 'vscode';
import { NaosClient } from '../naosclient';
import { GeoFile } from '../naosclient/models/GeoFile';
import { handleErrors } from '../utils';

export class GeofilesProvider implements vscode.TreeDataProvider<GeoFile> {

	constructor(
		private api: NaosClient
	) { }

	private _onDidChangeTreeData = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

	@handleErrors
	async getChildren(element?: any) {
		if (!element) {
			return await this.api.geo.getGeoFiles();
		}
	}

	getTreeItem(geofile: GeoFile): vscode.TreeItem | Thenable<vscode.TreeItem> {
		return {
			collapsibleState: vscode.TreeItemCollapsibleState.None,
			label: geofile.name,
			description: geofile.file_format,
			tooltip: geofile.id,
			iconPath: new vscode.ThemeIcon("globe"),
			contextValue: "naos.geofile",
			id: geofile.id,
			command: {
				command: "vscode.open",
				title: "Open Call",
				arguments: [
					vscode.Uri.parse(`naos:${geofile.id}.geofile.naos`),
					<vscode.TextDocumentShowOptions>{}
				]
			}
		};
	}

	refresh() {
		this._onDidChangeTreeData.fire(null);
	}

}
