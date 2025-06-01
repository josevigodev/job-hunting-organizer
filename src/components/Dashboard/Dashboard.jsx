import { JobCard } from '../JobCard/JobCard';
import { JobColumn } from '../JobColumn/JobColumn';
import styles from './Dashboard.module.css';

export function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <JobColumn title='Offer' />
      <JobColumn title='Applied' />
      <JobColumn title='Interview' />
      <JobColumn title='Rejected' />
    </main>
  );
}
