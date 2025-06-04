import { JobCard } from '../JobCard/JobCard';
import { JobColumn } from '../JobColumn/JobColumn';
import styles from './Dashboard.module.css';
import { useGroupedJobs } from '../../hooks/useGroupedJobs';
import { useFilterJobs } from '../../hooks/useFilterJobs';
import { useState } from 'react';

export function Dashboard() {
  const { jobs } = useFilterJobs();
  const groupedJobs = useGroupedJobs({ jobs });
  const [isDraggingOver, setIsDraggingOver] = useState('');

  return (
    <main className={styles.dashboard}>
      <JobColumn
        isDraggingOver={isDraggingOver}
        setIsDraggingOver={setIsDraggingOver}
        title='Offer'
      >
        {groupedJobs.Offer?.map((job) => (
          <JobCard
            setIsDraggingOver={setIsDraggingOver}
            key={job.id}
            {...job}
            jobData={job}
          />
        ))}
      </JobColumn>

      <JobColumn
        isDraggingOver={isDraggingOver}
        setIsDraggingOver={setIsDraggingOver}
        title='Applied'
      >
        {groupedJobs.Applied?.map((job) => (
          <JobCard
            setIsDraggingOver={setIsDraggingOver}
            key={job.id}
            {...job}
            jobData={job}
          />
        ))}
      </JobColumn>

      <JobColumn
        isDraggingOver={isDraggingOver}
        setIsDraggingOver={setIsDraggingOver}
        title='Interview'
      >
        {groupedJobs.Interview?.map((job) => (
          <JobCard
            setIsDraggingOver={setIsDraggingOver}
            key={job.id}
            {...job}
            jobData={job}
          />
        ))}
      </JobColumn>

      <JobColumn
        isDraggingOver={isDraggingOver}
        setIsDraggingOver={setIsDraggingOver}
        title='Rejected'
      >
        {groupedJobs.Rejected?.map((job) => (
          <JobCard
            setIsDraggingOver={setIsDraggingOver}
            key={job.id}
            {...job}
            jobData={job}
          />
        ))}
      </JobColumn>
    </main>
  );
}
