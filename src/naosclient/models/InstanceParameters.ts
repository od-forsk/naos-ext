/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type InstanceParameters = {
    cpu?: number;
    memory?: string;
    flavor?: string;
    haspid?: string | null;
    /**
     * Extra pod options when using kube spawner. Typically used to define node_selector, affinity or tolerations at runtime.
     * See https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/ for more info and
     * https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#scheduling for API usage.
     * Options defined here will override the corresponding pod options defined in SPAWNER_CONFIG.
     *
     */
    pod_options?: Record<string, any> | null;
    /**
     * Extra service options when using swarm spawner. Typically used to define service constraints or placement preferences at runtime.
     * See https://docs.docker.com/reference/cli/docker/service/create/#constraint for more info and
     * https://docker-py.readthedocs.io/en/stable/services.html for API usage.
     * Options defined here will override the corresponding service options defined in SPAWNER_CONFIG.
     *
     */
    service_options?: Record<string, any> | null;
    /**
     * Extra service options when using docker spawner. Used to define container options at runtime.
     * https://docs.docker.com/reference/cli/docker/container/run/ for more info and
     * https://docker-py.readthedocs.io/en/stable/containers.html# for API usage.
     * Options defined here will override the corresponding container options defined in SPAWNER_CONFIG.
     *
     */
    container_options?: Record<string, any> | null;
    license_server?: string | null;
};

