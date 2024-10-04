/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CoverageArtifact } from './CoverageArtifact';
export type CoverageResult = {
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
    readonly retain?: {
        created?: string;
        owner?: string;
        comment?: string;
    };
    artifacts?: Array<CoverageArtifact>;
};

