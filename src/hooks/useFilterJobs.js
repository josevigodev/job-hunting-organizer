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
      ) && (
        filter.search === '' ||
        job.company.toLowerCase().includes(filter.search.toLowerCase()) ||
        job.job.toLowerCase().includes(filter.search.toLowerCase()) ||
        job.link.toLowerCase().includes(filter.search.toLowerCase()) ||
        job.date.toLowerCase().includes(filter.search.toLowerCase()) ||
        job.description.toLowerCase().includes(filter.search.toLowerCase())
      )
    })
  }, [filter])
  
  const filteredJobs = useMemo(() => {
    return filterJobs(jobs)
  }, [filterJobs, jobs])

  return {jobs: filteredJobs}
}