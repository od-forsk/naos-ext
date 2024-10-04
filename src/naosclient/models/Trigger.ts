/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Trigger = {
    /**
     * Type of trigger.
     */
    type: Trigger.type;
    /**
     * Value of the trigger.
     */
    value: string;
    /**
     * Timezone to use with the cron value.
     */
    timezone?: string;
};
export namespace Trigger {
    /**
     * Type of trigger.
     */
    export enum type {
        DATE = 'DATE',
        CRON = 'CRON',
        EVENT = 'EVENT',
    }
}

