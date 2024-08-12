/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CoverageArtifact } from './CoverageArtifact';
export type CoverageResult = {
    artifacts?: Array<CoverageArtifact>;
    created?: string;
    id?: string;
    /**
     * Workflow manager job id
     */
    job_id?: string;
    name?: string;
    readonly retain?: {
        comment?: string;
        created?: string;
        owner?: string;
    };
    /**
     * Workflow manager run id
     */
    run_id?: string;
};

