/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GatewayTeamUser = {
    user_id?: string;
    readonly user_name?: string;
    role: GatewayTeamUser.role;
};
export namespace GatewayTeamUser {
    export enum role {
        MEMBER = 'MEMBER',
        ADMIN = 'ADMIN',
    }
}

