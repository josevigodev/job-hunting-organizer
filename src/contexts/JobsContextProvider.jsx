import { useReducer } from 'react';
import { JobsContext } from './JobsContext.';
import { jobsReducer } from '../reducers/jobsReducer';
import { getLocalStorage } from '../utils/localStorage';

const initialJobs = getLocalStorage('jobs') || [];

export function JobsContextProvider({ children }) {
  const [jobs, dispatch] = useReducer(jobsReducer, initialJobs);

  const addJob = ({ newJob }) => {
    dispatch({
      type: 'added_job',
      newJob: newJob,
    });
  };

  const editJob = ({ id, newJob }) => {
    dispatch({
      type: 'edited_job',
      newJob: newJob,
      id: id,
    });
  };

  const deleteJob = (id) => {
    dispatch({
      type: 'deleted_job',
      id: id,
    });
  };

  const changeState = (id, newState) => {
    dispatch({
      type: 'changed_state',
      id: id,
      newState: newState,
    });
  };

  return (
    <JobsContext.Provider
      value={{ jobs, addJob, deleteJob, editJob, changeState }}
    >
      {children}
    </JobsContext.Provider>
  );
}
