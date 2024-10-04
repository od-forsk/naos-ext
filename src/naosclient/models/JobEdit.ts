/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Input } from './Input';
import type { Trigger } from './Trigger';
/**
 * Job scheduling update payload.
 */
export type JobEdit = {
    job_version?: string;
    name?: string;
    /**
     * Unique identifier of the work area where job will be launched.
     */
    work_area_id?: string;
    /**
     * Type of the work area where job will be launched.
     */
    work_area_type?: JobEdit.work_area_type;
    /**
     * default priority for this job
     */
    default_priority?: number;
    /**
     * List of input and ID of unit task definition.
     */
    tasks?: Array<{
        function_name: string;
        link: boolean;
        name: string;
        input: Input;
    }>;
    trigger?: Trigger;
};
export namespace JobEdit {
    /**
     * Type of the work area where job will be launched.
     */
    export enum work_area_type {
        PROJECT = 'project',
        WORKSPACE = 'workspace',
    }
}

