/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InstanceParameters } from './InstanceParameters';
import type { Operation } from './Operation';
export type NaosInstance = {
    readonly created: string;
    readonly expires: string;
    readonly id: string;
    name?: string;
    /**
     * Background operations thay may be running on the instance.
     * Direct calls to the instance may be locked while the list is not empty.
     * Operational errors are kept while an other background process is triggered.
     *
     */
    readonly operations?: Array<Operation>;
    parameters?: InstanceParameters;
    /**
     * One of ['starting', 'running', 'healthy', 'unhealthy', 'removed', 'stopping', 'failed']
     */
    readonly service_state?: string;
    /**
     * Service state error description
     */
    readonly service_state_error?: Record<string, any>;
    team_id?: string;
    readonly url: string;
    user_id?: string;
};

