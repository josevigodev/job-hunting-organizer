import { useMemo } from "react";

export function useGroupedJobs (jobs) {
  const groupedJobs = useMemo(() => {
    return jobs.reduce((acc, job) => {
      const key = job.state;
      if(!acc[key]) acc[key] = [];

      acc[key].push(job)
      return acc;
    }, {})
  }, [jobs])

  return groupedJobs;
}