/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Technologies } from './Technologies';
export type Coverage = {
    created?: string;
    description?: string | null;
    id?: string;
    metadata?: Record<string, any>;
    modified?: string;
    name?: string;
    /**
     * [NOT IMPLEMENTED] Planned for a later version.
     * For now, uses project default receiver height.
     *
     */
    receiver_heights?: Array<number> | null;
    /**
     * Must be a multiple of project resolution
     */
    resolution?: number;
    technologies?: Technologies;
    type?: Coverage.type;
    readonly unit?: string;
    readonly work_area?: Record<string, any>;
};
export namespace Coverage {
    export enum type {
        SIGNAL_LEVEL = 'Signal Level',
        RSRP = 'RSRP',
    }
}

