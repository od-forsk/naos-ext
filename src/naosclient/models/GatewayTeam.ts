/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Information related to a Gateway team.
 */
export type GatewayTeam = {
    /**
     * Unique team identifier
     */
    readonly id?: string;
    /**
     * Name of the team
     */
    name: string;
    /**
     * Timestamp of when the team was created
     */
    readonly created?: string;
    /**
     * Timestamp of when the team was last modified
     */
    readonly modified?: string;
    /**
     * Number of Naos license tokens that are allocated to the team
     */
    allocated_naos_tokens?: number;
    /**
     * Number of Naos license tokens that are currently in use by the team members
     */
    readonly used_naos_tokens?: number;
};

