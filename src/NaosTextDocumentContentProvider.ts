import * as vscode from "vscode";
import { NaosClient } from "./naosclient";

export class NaosTextDocumentContentProvider implements vscode.TextDocumentContentProvider {

    constructor(
        private apiClient: NaosClient,
    ) { }

    onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
    onDidChange = this.onDidChangeEmitter.event;

    async provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken) {
        let [_, resourceKind, resourceId] = uri.path.split('/');
        resourceId = resourceId.endsWith(".json") ? resourceId.slice(0,-5) : resourceId;
        let content: object | undefined = undefined;
        if (resourceKind === "user") {
            content = await this.apiClient.admin.getUser(resourceId);
        }
        if (resourceKind === "team") {
            content = await this.apiClient.teams.getTeam(resourceId);
        }
        if (resourceKind === "instance") {
            content = await this.apiClient.admin.getGlobalInstance(resourceId);
        }
        if (content) {
            return JSON.stringify(content, null, 2);
        }
    }
}