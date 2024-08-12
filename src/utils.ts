
import { version as uuidVersion } from 'uuid';
import { validate as uuidValidate } from 'uuid';

export function uuidValidateV4(uuid: string) {
    return uuidValidate(uuid) && uuidVersion(uuid) === 4;
}

export function checkProps(o: object, props: string[]): boolean {
    return props.every(prop => prop in o);
}