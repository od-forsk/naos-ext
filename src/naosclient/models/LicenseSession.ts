/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Feature } from './Feature';
import type { Link } from './Link';
export type LicenseSession = (Feature & {
    /**
     * License key identifier (haspId)
     */
    key?: string;
    /**
     * Client IP address
     */
    address?: string;
    /**
     * System user running the client application
     */
    systemUser?: string;
    /**
     * Client hostname
     */
    machine?: string;
    /**
     * License login date
     */
    loginDate?: string;
    /**
     * License timeout in case of client inactivity
     */
    timeout?: string;
    /**
     * Number of license tokens in use by the client
     */
    count?: number;
    /**
     * User identifier.
     */
    userId?: string;
    /**
     * Team identifier.
     */
    teamId?: string;
    links?: Array<Link>;
});

