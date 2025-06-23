import { ReactNode, useReducer } from 'react';
import { JobsContext } from './JobsContext.ts';
import { jobsReducer } from '../reducers/jobsReducer.js';
import { getLocalStorage } from '../utils/localStorage.ts';
import { JobsContextType, type Job } from '../types.ts';

const initialJobs = getLocalStorage('jobs') || [];

export const JobsContextProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, dispatch] = useReducer(jobsReducer, initialJobs);

  const addJob = ({ newJob }: { newJob: Job }) => {
    dispatch({
      type: 'added_job',
      newJob: newJob,
    });
  };

  const editJob = ({ id, newJob }: { id: Job['id']; newJob: Job }) => {
    dispatch({
      type: 'edited_job',
      newJob: newJob,
      id: id,
    });
  };

  const deleteJob = (id: Job['id']) => {
    dispatch({
      type: 'deleted_job',
      id: id,
    });
  };

  const changeState = (id: Job['id'], newState: string) => {
    dispatch({
      type: 'changed_state',
      id: id,
      newState: newState,
    });
  };

  const value: JobsContextType = {
    jobs,
    addJob,
    deleteJob,
    editJob,
    changeState,
  };

  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
};
