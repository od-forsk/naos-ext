/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ChangePasswordObject = {
    /**
     * Current password
     */
    old_password: string;
    /**
     * New password
     */
    new_password: string;
    /**
     * Confirmed new password. Must match 'new_password'.
     */
    confirm_new: string;
};

