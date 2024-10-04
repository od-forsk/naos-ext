/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Input } from './Input';
import type { JobSummary } from './JobSummary';
export type JobDescribe = (JobSummary & {
    /**
     * If `run_now` is set, this returns the `run_id`
     */
    run_id?: string;
    /**
     * List of input and ID of unit task definition.
     */
    tasks: Array<{
        task_definition_id?: string;
        function_name?: string;
        link?: boolean;
        name?: string;
        input?: Input;
    }>;
});

