/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Input } from './Input';
import type { Trigger } from './Trigger';
/**
 * Job scheduling input payload.
 */
export type JobRequestInput = {
    job_version?: string;
    name: string;
    /**
     * default priority for this job
     */
    default_priority?: number;
    /**
     * List of input and ID of unit task definition.
     */
    tasks: Array<{
        function_name: string;
        link: boolean;
        name: string;
        input: Input;
    }>;
    trigger?: Trigger;
};

