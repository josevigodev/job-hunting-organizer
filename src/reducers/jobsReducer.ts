import { updateLocalStorage } from '../utils/localStorage.ts';
import { Action, Job, Jobs } from '../types';

export const jobsReducer = (jobs: Jobs, action: Action) => {
  const { type, newJob, id, newState } = action;
  switch (type) {
    case 'added_job': {
      const jobUpdate = [
        ...jobs,
        {
          ...newJob,
          id: crypto.randomUUID(),
          state: 'Offer',
        },
      ] as Jobs;

      updateLocalStorage('jobs', jobUpdate);
      return jobUpdate;
    }

    case 'edited_job': {
      const jobUpdate = jobs.map((job) => {
        if (id === job.id) {
          return newJob;
        }
        return job;
      }) as Jobs;

      updateLocalStorage('jobs', jobUpdate);
      return jobUpdate;
    }

    case 'deleted_job': {
      const jobUpdate: Array<Job> = jobs.filter((job) => job.id !== id);

      updateLocalStorage('jobs', jobUpdate);
      return jobUpdate;
    }

    case 'changed_state': {
      const jobUpdate = jobs.map((job) => {
        if (job.id === id) {
          return {
            ...job,
            state: newState,
          };
        } else {
          return job;
        }
      }) as Jobs;

      updateLocalStorage('jobs', jobUpdate);
      return jobUpdate;
    }

    default: {
      throw new Error(`Action ${type} is not permited`);
    }
  }
};
