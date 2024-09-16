
export interface RunDescribe {
	id: string;
	user_id: string;
	job_id: string;
	job_name: string;
	creation_date: string;
	start_date: string;
	end_date: string;
	priority: number;
	nb_tasks: number;
	nb_tasks_per_status: [
		{
			count: number;
			status: string;
		}
	];
	status: {
		status: string;
		progress: number;
		modified_at: string;
	};
	has_log: boolean;
}
