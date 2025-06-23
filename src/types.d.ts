export interface Job {
  company: string;
  date: `${number}-${number}-${number}`;
  id?: string;
  job: string;
  link: string;
  salary: string;
  state?: JobState;
  workplace: 'Onsite' | 'Remote' | 'Hybrid';
  description?: string;
}

export type Jobs = Array<Job>;

export type JobState = 'Offer' | 'Applied' | 'Interview' | 'Rejected';

export interface Action {
  type: string;
  newJob?: Job;
  id?: Job['id'];
  newState?: string;
}

export interface JobsContextType {
  jobs: Jobs;
  addJob: ({ newJob }: { newJob: Job }) => void;
  deleteJob: (id: Job['id']) => void;
  editJob: ({ id, newJob }: { id: Job['id']; newJob: Job }) => void;
  changeState: (id: Job['id'], newState: string) => void;
}

export interface Filter {
  search: string;
  workplace: 'workplace' | Job['workplace'];
  minSalary: string;
}

export interface FilterContextType {
  filter: Filter;
  setFilter: (value: Filter | ((prevState: Filter) => Filter)) => void;
}
