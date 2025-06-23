import { useCallback, useContext, useMemo } from 'react';
import { FilterContext } from '../contexts/FilterContext.ts';
import { JobsContext } from '../contexts/JobsContext.ts';
import { Job } from '../types.ts';

export function useFilterJobs() {
  const filterContext = useContext(FilterContext);
  const jobsContext = useContext(JobsContext);
  if (!filterContext) return;
  if (!jobsContext) return;
  const { filter } = filterContext;
  const { jobs } = jobsContext;

  const filterJobs = useCallback(
    (jobs: Job[]) => {
      return jobs.filter((job) => {
        return (
          +job.salary >= +filter.minSalary &&
          (filter.workplace === 'workplace' ||
            filter.workplace === job.workplace) &&
          (filter.search === '' ||
            job.company.toLowerCase().includes(filter.search.toLowerCase()) ||
            job.job.toLowerCase().includes(filter.search.toLowerCase()) ||
            job.link.toLowerCase().includes(filter.search.toLowerCase()) ||
            job.date.toLowerCase().includes(filter.search.toLowerCase()) ||
            job.description
              ?.toLowerCase()
              .includes(filter.search.toLowerCase()))
        );
      });
    },
    [filter]
  );

  const filteredJobs = useMemo(() => {
    return filterJobs(jobs);
  }, [filterJobs, jobs]);

  return filteredJobs;
}
