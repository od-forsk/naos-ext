import * as vscode from 'vscode';

export interface ConfigConnection {
    protocol: 'http' | 'https';
    host: string;
    port: number;
}

export class NAOSConfigAgent implements vscode.LanguageModelTool<ConfigConnection> {

    async invoke(options: vscode.LanguageModelToolInvocationOptions<ConfigConnection>, token: vscode.CancellationToken){
        const { protocol, host, port } = options.input;
        const url = `${protocol}://${host}:${port}`;
        vscode.window.showInformationMessage(`Connected to ${url}`);
        return new vscode.LanguageModelToolResult([new vscode.LanguageModelTextPart(`Connected to ${url}`)]);
    }
}