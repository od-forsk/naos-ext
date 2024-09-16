/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Object describing a Naos/Atoll source top level information.
 */
export type SourceInfo = {
    /**
     * For hostname connections (MS SQL Server, Oracle, PostgreSQL, etc.).
     */
    dbname?: string;
    /**
     * For file-based sources (MS Access, SQLite, Atl, etc.).
     */
    filepath?: string;
    /**
     * For hostname connections (MS SQL Server, Oracle, PostgreSQL, etc.).
     */
    host?: string;
    /**
     * Naos database connection string.
     */
    readonly naos_connection_string?: string;
    /**
     * Naos database schema.
     */
    naos_schema?: string;
    /**
     * Driver specific extra options.
     */
    options?: Record<string, any>;
    /**
     * For hostname connections (MS SQL Server, Oracle, PostgreSQL, etc.).
     */
    port?: number;
    /**
     * For **Scenario Manager** managed databases.
     */
    scenario?: string;
    /**
     * For **Scenario Manager** managed databases.
     */
    scenario_geodata?: string;
    /**
     * Database schema (MS SQL Server, PostgreSQL, etc.).
     */
    schema?: string;
    /**
     * Source provider.
     */
    type: SourceInfo.type;
};
export namespace SourceInfo {
    /**
     * Source provider.
     */
    export enum type {
        MS_SQL_SERVER = 'MS_SQL_Server',
        ORACLE = 'Oracle',
        POSTGRE_SQL = 'PostgreSQL',
        ATL = 'Atl',
    }
}
