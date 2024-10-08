
import { validate as uuidValidate, version as uuidVersion } from 'uuid';
import * as vscode from 'vscode';
import { consoleNAOS } from './extension';
import { Workspace } from './naosclient/models/Workspace';
import { Project } from './naosclient/models/Project';

export const validColor = new vscode.ThemeColor("naos.serviceStatus.valid");
export const invalidColor = new vscode.ThemeColor("naos.serviceStatus.invalid");

export function uuidValidateV4(uuid: string) {
    return uuidValidate(uuid) && uuidVersion(uuid) === 4;
}

export function checkProps(o: object, props: string[]): boolean {
    return props.every(prop => prop in o);
}

export const naosFileRegexp = /(.*)\.([^]*)\.naos/;

export function parseNaosURI(uri: vscode.Uri): [string, string[]] {
    const path = uri.path;
    const matches = path.match(naosFileRegexp)!;
    return [matches[2], matches[1].split('/').reverse()];
}

export function getActiveEditorText() {
    const text = vscode.window.activeTextEditor?.document.getText();
    if (!text) {
        const reason = "Unable to get active editor text";
        consoleNAOS.error(reason);
        consoleNAOS.show();
        throw new Error(reason);
    }
    return text;
}

export function isProject(workarea: Project | Workspace): workarea is Project {
    return (workarea as Workspace).project_id === undefined;
}

