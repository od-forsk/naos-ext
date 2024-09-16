
export interface TaskDescribe {
	id: string;
	name: string;
	creation_date: string;
	start_date: string;
	end_date: string;
	run_id: string;
	job_id: string;
	status: {
		status: string;
		progress: number;
		modified_at: string;
	};
}
