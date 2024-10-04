/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Status } from './Status';
import type { Trigger } from './Trigger';
export type JobSummary = {
    id: string;
    job_version?: string;
    /**
     * Name of the job.
     */
    name: string;
    creation_date: string;
    modification_date?: string;
    next_run_date?: string;
    last_run_date?: string;
    last_run_status?: Status;
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
    /**
     * default priority for this job
     */
    default_priority?: number;
    /**
     * Number of tasks in the job.
     */
    nb_tasks: number;
    run_now: boolean;
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

