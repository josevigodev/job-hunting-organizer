import styles from './Dashboard.module.css';
import { JobColumn } from '../JobColumn/JobColumn.tsx';
import { useGroupedJobs } from '../../hooks/useGroupedJobs.ts';
import { useState } from 'react';

export const Dashboard = () => {
  const groupedJobs = useGroupedJobs();
  if (!groupedJobs) return;
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
};
