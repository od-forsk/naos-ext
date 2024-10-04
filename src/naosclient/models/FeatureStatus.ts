/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Feature } from './Feature';
export type FeatureStatus = (Feature & {
    /**
     * Number of license tokens currently in use
     */
    usedTokens?: number;
    /**
     * Maximum number of token available
     */
    tokenLimit?: number;
    /**
     * True if the license has expired False otherwise
     */
    isExpired?: boolean;
});

