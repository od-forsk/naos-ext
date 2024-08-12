/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Trigger = {
    /**
     * Timezone to use with the cron value.
     */
    timezone?: string;
    /**
     * Type of trigger.
     */
    type: Trigger.type;
    /**
     * Value of the trigger.
     */
    value: string;
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

