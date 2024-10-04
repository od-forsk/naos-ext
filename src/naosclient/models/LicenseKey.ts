/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeatureStatus } from './FeatureStatus';
export type LicenseKey = {
    /**
     * License server address
     */
    readonly serverAddress?: string;
    /**
     * License key identifier
     */
    readonly haspid?: string;
    features?: Array<FeatureStatus>;
};

