
import { version as uuidVersion } from 'uuid';
import { validate as uuidValidate } from 'uuid';
import * as vscode from 'vscode';

export const validColor = new vscode.ThemeColor("naos.serviceStatus.valid");
export const invalidColor = new vscode.ThemeColor("naos.serviceStatus.invalid");

export function uuidValidateV4(uuid: string) {
    return uuidValidate(uuid) && uuidVersion(uuid) === 4;
}

export function checkProps(o: object, props: string[]): boolean {
    return props.every(prop => prop in o);
}