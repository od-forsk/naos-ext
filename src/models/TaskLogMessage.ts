export interface TaskLogMessage {
    _id: {
        $oid: string
    },
    destination: string,
    dt: number,
    headers: {
        level: number,
        _taskdef: string,
        _request_id: string,
        [k: string]: any,
    },
    content: {
        name: string,
        levelname: string,
        thread: number,
        threadName: string,
        processName: string,
        process: number,
        state: string,
        target: string,
        target_class: string,
        task_id: string,
        task_name: string,
        message: string,
        asctime: string,
        [k: string]: any,
    }
}