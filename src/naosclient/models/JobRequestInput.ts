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
    /**
     * default priority for this job
     */
    default_priority?: number;
    job_version?: string;
    name: string;
    /**
     * List of input and ID of unit task definition.
     */
    tasks: Array<{
        function_name: string;
        input: Input;
        link: boolean;
        name: string;
    }>;
    trigger?: Trigger;
};

