/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Status of a run execution.
 */
export type Status = {
    /**
     * Status of this execution.
     */
    status: Status.status;
    /**
     * Progress in % of this execution.
     */
    progress: number;
    modified_at: string;
};
export namespace Status {
    /**
     * Status of this execution.
     */
    export enum status {
        PENDING = 'PENDING',
        RUNNING = 'RUNNING',
        RETRYING = 'RETRYING',
        FAILED = 'FAILED',
        COMPLETED = 'COMPLETED',
        ABORTED = 'ABORTED',
        CANCELLED = 'CANCELLED',
        PAUSED = 'PAUSED',
    }
}

