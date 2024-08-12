/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Status } from './Status';
import type { Trigger } from './Trigger';
export type JobSummary = {
    creation_date: string;
    /**
     * default priority for this job
     */
    default_priority?: number;
    id: string;
    job_version?: string;
    last_run_date?: string;
    last_run_status?: Status;
    modification_date?: string;
    /**
     * Name of the job.
     */
    name: string;
    /**
     * Number of tasks in the job.
     */
    nb_tasks: number;
    next_run_date?: string;
    run_now: boolean;
    trigger?: Trigger;
    /**
     * ID of the creator of the job.
     */
    user_id?: string;
    /**
     * Unique identifier of the work area where the job will be launched.
     */
    work_area_id: string;
    /**
     * Type of work area where the job will be launched.
     */
    work_area_type: JobSummary.work_area_type;
};
export namespace JobSummary {
    /**
     * Type of work area where the job will be launched.
     */
    export enum work_area_type {
        PROJECT = 'project',
        WORKSPACE = 'workspace',
    }
}

