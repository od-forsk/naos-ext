/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Information for creating a new password.
 */
export type SetPasswordObject = {
    /**
     * New password
     */
    password: string;
    /**
     * Confirmed new password. Must match 'password'.
     */
    confirm: string;
};

