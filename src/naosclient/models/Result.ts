/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifact } from './Artifact';
export type Result = {
    /**
     * result id
     */
    id?: string;
    name?: string;
    created?: string;
    /**
     * Workflow manager job id
     */
    job_id?: string;
    /**
     * Workflow manager run id
     */
    run_id?: string;
    retain?: {
        created?: string;
        owner?: string;
        comment?: string;
    } | null;
    artifacts?: Array<Artifact>;
    metadata?: Record<string, any>;
};

