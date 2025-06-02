import { useContext } from 'react';
import { JobsContext } from '../../contexts/JobsContext.';
import { JobCard } from '../JobCard/JobCard';
import { JobColumn } from '../JobColumn/JobColumn';
import styles from './Dashboard.module.css';
import { useGroupedJobs } from '../../hooks/useGroupedJobs';

export function Dashboard() {
  const { jobs } = useContext(JobsContext);
  const groupedJobs = useGroupedJobs(jobs);

  return (
    <main className={styles.dashboard}>
      <JobColumn title='Offer'>
        {groupedJobs.Offer?.map((job) => (
          <JobCard key={job.id} {...job} jobData={job} />
        ))}
      </JobColumn>

      <JobColumn title='Applied'>
        {groupedJobs.Applied?.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </JobColumn>

      <JobColumn title='Interview'>
        {groupedJobs.Interview?.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </JobColumn>

      <JobColumn title='Rejected'>
        {groupedJobs.Rejected?.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </JobColumn>
    </main>
  );
}
