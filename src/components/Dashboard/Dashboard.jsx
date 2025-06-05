import styles from './Dashboard.module.css';
import { JobColumn } from '../JobColumn/JobColumn';
import { useGroupedJobs } from '../../hooks/useGroupedJobs';
import { useState } from 'react';

export function Dashboard() {
  const groupedJobs = useGroupedJobs();
  const [isDraggingOver, setIsDraggingOver] = useState('');

  return (
    <main className={styles.dashboard}>
      {Object.entries(groupedJobs).map(([state, jobCards]) => (
        <JobColumn
          key={state}
          isDraggingOver={isDraggingOver}
          setIsDraggingOver={setIsDraggingOver}
          title={state}
          jobCards={jobCards}
        />
      ))}
    </main>
  );
}
