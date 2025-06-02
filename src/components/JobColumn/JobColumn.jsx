import styles from './JobColumn.module.css';

export function JobColumn({ title, children }) {
  return (
    <section className={`${styles.job_column} ${styles[title]}`}>
      <h2 className={`${styles.title} ${styles[title]}`}>{title}</h2>
      {children}
    </section>
  );
}
