/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeatureStatus } from './FeatureStatus';
export type LicenseKey = {
    features?: Array<FeatureStatus>;
    /**
     * License key identifier
     */
    readonly haspid?: string;
    /**
     * License server address
     */
    readonly serverAddress?: string;
};

