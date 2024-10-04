/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Technologies } from './Technologies';
export type Coverage = {
    id?: string;
    readonly work_area?: Record<string, any>;
    name?: string;
    created?: string;
    modified?: string;
    type?: Coverage.type;
    description?: string | null;
    readonly unit?: string;
    technologies?: Technologies;
    /**
     * Must be a multiple of project resolution
     */
    resolution?: number;
    /**
     * [NOT IMPLEMENTED] Planned for a later version.
     * For now, uses project default receiver height.
     *
     */
    receiver_heights?: Array<number> | null;
    metadata?: Record<string, any>;
};
export namespace Coverage {
    export enum type {
        SIGNAL_LEVEL = 'Signal Level',
        RSRP = 'RSRP',
    }
}

