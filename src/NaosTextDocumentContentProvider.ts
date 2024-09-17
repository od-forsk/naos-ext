import * as vscode from "vscode";
import { NaosClient } from "./naosclient";

export class NaosTextDocumentContentProvider implements vscode.TextDocumentContentProvider {

    constructor(
        private apiClient: NaosClient,
    ) { }

    onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
    onDidChange = this.onDidChangeEmitter.event;

    async provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken) {
        let path = uri.path;
        path = path.endsWith(".json") ? path.slice(0,-5) : path;
        let [_, resourceKind, ...resourceIds] = path.split('/');
        let content: object | undefined = undefined;
        if (resourceKind === "user") {
            content = await this.apiClient.admin.getUser(resourceIds[0]);
        }
        if (resourceKind === "team") {
            content = await this.apiClient.teams.getTeam(resourceIds[0]);
        }
        if (resourceKind === "instance") {
            content = await this.apiClient.admin.getGlobalInstance(resourceIds[0]);
        }
        if (resourceKind === "job") {
            content = await this.apiClient.scheduler.schedulerProxyGet(`jobs/${resourceIds[0]}`);
        }
        if (resourceKind === "run") {
            content = await this.apiClient.scheduler.schedulerProxyGet(`jobs/${resourceIds[0]}/runs/${resourceIds[1]}`);
        }
        if (resourceKind === "task") {
            content = await this.apiClient.scheduler.schedulerProxyGet(`jobs/${resourceIds[0]}/runs/${resourceIds[1]}/tasks/${resourceIds[2]}`);
        }
        if (resourceKind === "project") {
            content = await this.apiClient.projects.getProject(resourceIds[0]);
        }
        if (resourceKind === "workspace") {
            content = await this.apiClient.workspaces.getWorkspace(resourceIds[0]);
        }
        if (resourceKind === "geofile") {
            content = await this.apiClient.geo.getGeoFile(resourceIds[0]);
        }
        if (resourceKind === "coverage") {
            content = await this.apiClient.coverages.getCoverage(resourceIds[0]);
        }
        if (resourceKind === "artifact") {
            content = await this.apiClient.artifacts.getArtifact(resourceIds[0]);
        }
        if (resourceKind === "messages") {
            content = await this.apiClient.scheduler.schedulerProxyGet(`jobs/${resourceIds[0]}/runs/${resourceIds[1]}/tasks/${resourceIds[2]}/_messages`);
        }
        if (content) {
            return JSON.stringify(content, null, 2);
        }
    }
}