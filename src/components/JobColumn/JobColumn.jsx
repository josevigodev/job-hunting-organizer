import { JobCard } from '../JobCard/JobCard';
import styles from './JobColumn.module.css';

export function JobColumn({ title }) {
  return (
    <section className={`${styles.job_column} ${styles[title]}`}>
      <h2 className={`${styles.title} ${styles[title]}`}>{title}</h2>
      <JobCard state={title} />
      <JobCard state={title} />
    </section>
  );
}
