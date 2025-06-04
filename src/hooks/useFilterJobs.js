import { useCallback, useContext, useMemo } from "react"
import { FilterContext } from "../contexts/FilterContext"
import { JobsContext } from "../contexts/JobsContext."

export function useFilterJobs () {
  const {filter} = useContext(FilterContext)
  const {jobs} = useContext(JobsContext);

  const filterJobs = useCallback((jobs) => {
    return jobs.filter(job => {
      return +job.salary >= filter.minSalary && (
        filter.workplace === 'workplace' || filter.workplace === job.workplace
      )
    })
  }, [filter])
  
  const filteredJobs = useMemo(() => {
    return filterJobs(jobs)
  }, [filterJobs, jobs])

  return {jobs: filteredJobs}
}