import { memo, useContext } from 'react';
import styles from './JobColumn.module.css';
import { JobsContext } from '../../contexts/JobsContext.';
import { JobCard } from '../JobCard/JobCard';

export const JobColumn = memo(function ({
  title,
  jobCards,
  isDraggingOver,
  setIsDraggingOver,
}) {
  const { jobs } = useContext(JobsContext);
  const { changeState } = useContext(JobsContext);

  const handleDrop = (e) => {
    setIsDraggingOver('');
    const { dataTransfer } = e;
    const id = dataTransfer.getData('text/plain');

    const job = jobs.find((job) => job.id === +id);

    if (job.state === title) return;
    changeState(+id, title);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggingOver(title);
  };

  const handleDragLeave = () => {
    setIsDraggingOver('');
  };

  return (
    <section
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`${styles.job_column} ${styles[title]} ${
        isDraggingOver === title ? styles.drag_over : ''
      }`}
    >
      <h2 className={`${styles.title} ${styles[title]}`}>{title}</h2>
      {jobCards.map((job) => (
        <JobCard
          setIsDraggingOver={setIsDraggingOver}
          key={job.id}
          {...job}
          jobData={job}
        />
      ))}
    </section>
  );
});
