import { useCallback, useContext, useMemo } from "react"
import { FilterContext } from "../contexts/FilterContext"

export function useFilterJobs (jobs) {
  const {filter} = useContext(FilterContext)
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
  console.log(filteredJobs)
  console.log(jobs)

  return {filteredJobs}
}