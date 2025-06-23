import { useMemo } from 'react';
import { useFilterJobs } from './useFilterJobs.ts';
import { Job, Jobs, JobState } from '../types';

interface GroupType {
  Offer: Jobs;
  Applied: Jobs;
  Interview: Jobs;
  Rejected: Jobs;
}

export function useGroupedJobs() {
  const jobs = useFilterJobs();

  const groupedJobs = useMemo(() => {
    return jobs?.reduce(
      (acc: GroupType, job: Job) => {
        const key = job.state as JobState;
        if (!acc[key]) acc[key] = [];

        acc[key].push(job);
        return acc;
      },
      {
        Offer: [],
        Applied: [],
        Interview: [],
        Rejected: [],
      }
    );
  }, [jobs]);

  return groupedJobs;
}
