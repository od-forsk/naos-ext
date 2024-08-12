/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserInfo = {
    /**
     * Confirmed user password.
     */
    confirm?: string;
    /**
     * Email of the user
     */
    email?: string;
    /**
     * Unique user identifier.
     */
    id?: string;
    /**
     * User has administrator privileges.
     */
    is_admin?: boolean;
    /**
     * Timestamp of the last login.
     */
    readonly last_login?: string;
    /**
     * Timestamp of the last activity.
     */
    readonly last_seen_at?: string;
    /**
     * User login
     */
    login?: string;
    /**
     * Full name of the user.
     */
    name?: string;
    /**
     * User password
     */
    password?: string;
};

