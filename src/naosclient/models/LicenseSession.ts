/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Feature } from './Feature';
import type { Link } from './Link';
export type LicenseSession = (Feature & {
    /**
     * Client IP address
     */
    address?: string;
    /**
     * Number of license tokens in use by the client
     */
    count?: number;
    /**
     * License key identifier (haspId)
     */
    key?: string;
    links?: Array<Link>;
    /**
     * License login date
     */
    loginDate?: string;
    /**
     * Client hostname
     */
    machine?: string;
    /**
     * System user running the client application
     */
    systemUser?: string;
    /**
     * Team identifier.
     */
    teamId?: string;
    /**
     * License timeout in case of client inactivity
     */
    timeout?: string;
    /**
     * User identifier.
     */
    userId?: string;
});

