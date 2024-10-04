/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserInfo = {
    /**
     * Unique user identifier.
     */
    id?: string;
    /**
     * Full name of the user.
     */
    name?: string;
    /**
     * User login
     */
    login?: string;
    /**
     * User password
     */
    password?: string | null;
    /**
     * Confirmed user password.
     */
    confirm?: string | null;
    /**
     * Email of the user
     */
    email?: string;
    /**
     * User has administrator privileges.
     */
    is_admin?: boolean | null;
    /**
     * Timestamp of the last login.
     */
    readonly last_login?: string;
    /**
     * Timestamp of the last activity.
     */
    readonly last_seen_at?: string;
};

