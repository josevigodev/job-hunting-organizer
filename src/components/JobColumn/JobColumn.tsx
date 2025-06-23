import React, { useContext } from 'react';
import styles from './JobColumn.module.css';
import { JobsContext } from '../../contexts/JobsContext.ts';
import { JobCard } from '../JobCard/JobCard.tsx';
import { Jobs } from '../../types';

interface Props {
  title: string;
  jobCards: Jobs;
  isDraggingOver: string;
  setIsDraggingOver: (value: string) => void;
}

export const JobColumn: React.FC<Props> = ({
  title,
  jobCards,
  isDraggingOver,
  setIsDraggingOver,
}) => {
  const jobsContext = useContext(JobsContext);
  if (!jobsContext) return;
  const { jobs, changeState } = jobsContext;

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    setIsDraggingOver('');
    const { dataTransfer } = e;
    const id = dataTransfer.getData('text/plain');
    const job = jobs.find((job) => job.id === id);

    if (job?.state === title) return;
    changeState(id, title);
  };

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
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
      className={`${styles.job_column} ${styles[title ?? '']} ${
        isDraggingOver === title ? styles.drag_over : ''
      }`}
    >
      <h2 className={`${styles.title} ${styles[title ?? '']}`}>{title}</h2>
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
};
