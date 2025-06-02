import { useState } from 'react';
import { JobsContext } from './JobsContext.';

let nextId = 2;

const initialJob = {
  company: 'Google',
  job: 'Frontend Web Developer',
  link: 'https://linkedin.com/google-job',
  salary: 1200,
  date: '2025-06-04',
  description:
    'The best job of all time with greate salary at Google Enterprise',
  state: 'Offer',
  id: 1,
};

export function JobsContextProvider({ children }) {
  const [jobs, setJobs] = useState([initialJob]);

  const addJob = ({ newJob }) => {
    setJobs((prevJobs) => [
      ...prevJobs,
      {
        ...newJob,
        id: nextId++,
        state: 'Offer',
      },
    ]);
  };

  return (
    <JobsContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobsContext.Provider>
  );
}
