import { useMemo } from "react";
import { useFilterJobs } from "./useFilterJobs";

export function useGroupedJobs () {
  const { jobs } = useFilterJobs(); 
  
  const groupedJobs = useMemo(() => {
    return jobs?.reduce((acc, job) => {
      const key = job.state;
      if(!acc[key]) acc[key] = [];

      acc[key].push(job)
      return acc;
    }, {
      Offer: [],
      Applied: [],
      Interview: [],
      Rejected:[]
    })
  }, [jobs])

  return groupedJobs;
}