/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifact } from './Artifact';
export type Result = {
    artifacts?: Array<Artifact>;
    created?: string;
    /**
     * result id
     */
    id?: string;
    /**
     * Workflow manager job id
     */
    job_id?: string;
    metadata?: Record<string, any>;
    name?: string;
    retain?: {
        comment?: string;
        created?: string;
        owner?: string;
    } | null;
    /**
     * Workflow manager run id
     */
    run_id?: string;
};

