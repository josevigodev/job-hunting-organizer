import { getLocalStorage, updateLocalStorage } from "../utils/localStorage";

let nextId = getLocalStorage('nextId') || 1;

export const jobsReducer = (jobs, action) => {
  const { type, newJob, id } = action;
  switch (type) {
    case 'added_job': {
      const newState =  [
        ...jobs,
        {
          ...newJob,
          id: nextId++,
          state: 'Offer',
        },
      ];

      updateLocalStorage('jobs', newState);
      updateLocalStorage('nextId', nextId++);
      return newState;
    }

    case 'edited_job': {
      const newState = jobs.map((job) => {
        if (id === job.id) {
          return newJob;
        }
        return job;
      });

      updateLocalStorage('jobs', newState);
      return newState;
    }

    case 'deleted_job': {
      const newState = jobs.filter((job) => job.id !== id);

      updateLocalStorage('jobs', newState);
      return newState;
    }

    default: {
      throw new Error(`Action ${type} is not permited`);
    }
  }
};