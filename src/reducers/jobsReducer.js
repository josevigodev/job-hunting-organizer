import { getLocalStorage, updateLocalStorage } from "../utils/localStorage";

let nextId = getLocalStorage('nextId') || 1;

export const jobsReducer = (jobs, action) => {
  const { type, newJob, id, newState } = action;
  switch (type) {
    case 'added_job': {
      const jobUpdate =  [
        ...jobs,
        {
          ...newJob,
          id: nextId++,
          state: 'Offer',
        },
      ];

      updateLocalStorage('jobs', jobUpdate);
      updateLocalStorage('nextId', nextId++);
      return jobUpdate;
    }

    case 'edited_job': {
      const jobUpdate = jobs.map((job) => {
        if (id === job.id) {
          return newJob;
        }
        return job;
      });

      updateLocalStorage('jobs', jobUpdate);
      return jobUpdate;
    }

    case 'deleted_job': {
      const jobUpdate = jobs.filter((job) => job.id !== id);

      updateLocalStorage('jobs', jobUpdate);
      return jobUpdate;
    }

    case 'changed_state': {
      const jobUpdate = jobs.map(job => {
        if (job.id === id) {
          return {
            ...job,
            state: newState
          }
        } else {
          return job;
        }
      })

      updateLocalStorage('jobs', jobUpdate)
      return jobUpdate
    }

    default: {
      throw new Error(`Action ${type} is not permited`);
    }
  }
};