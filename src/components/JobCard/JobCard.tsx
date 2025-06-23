import { Link } from '../common/Link.tsx';
import {
  CalendarIcon,
  CoinIcon,
  EditIcon,
  LinkIcon,
  MonitorIcon,
  TrashIcon,
} from '../common/Icons.tsx';
import styles from './JobCard.module.css';
import { Button } from '../common/Button.jsx';
import React, { useContext, useState } from 'react';
import { JobsContext } from '../../contexts/JobsContext.ts';
import { JobForm } from '../JobForm/JobForm.tsx';
import { JobState, type Job } from '../../types.ts';

interface Props extends Job {
  jobData: Job;
  setIsDraggingOver: (value: JobState | '') => void;
}

export const JobCard: React.FC<Props> = ({
  state,
  company,
  job,
  link,
  salary,
  date,
  description,
  workplace,
  id,
  jobData,
  setIsDraggingOver,
}) => {
  const [active, setActive] = useState(false);
  const [dragged, setDragged] = useState(false);

  const jobsContext = useContext(JobsContext);
  if (!jobsContext) return;
  const { deleteJob } = jobsContext;

  const handleDragStart = (e: React.DragEvent) => {
    const { dataTransfer } = e;
    if (!id) return;
    dataTransfer.setData('text/plain', id);
    setDragged(true);
  };

  const handleDragEnd = () => {
    setIsDraggingOver('');
    setDragged(false);
  };

  return (
    <>
      {active && (
        <JobForm edit job={jobData} active={active} setActive={setActive} />
      )}
      <article
        draggable='true'
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className={`${styles.job_card} ${styles[state ?? '']} ${
          dragged ? styles.dragged : ''
        }`}
      >
        <div className={styles.header}>
          <h3 className={styles.title}>{company}</h3>
        </div>
        <h4>{job}</h4>
        <div className={styles.info}>
          <span>
            <CoinIcon />
          </span>
          <span>${salary} / month</span>
        </div>

        <div className={styles.info}>
          <span>
            <CalendarIcon />
          </span>
          <span>{date}</span>
        </div>
        <div className={styles.info}>
          <span>
            <MonitorIcon />
          </span>
          <span>{workplace}</span>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <Link to={link} state={state}>
            <span>Job Offer</span>
            <span>
              <LinkIcon />
            </span>
          </Link>
          <Button handleClick={() => setActive(true)} type='edit'>
            <EditIcon />
          </Button>
          <Button handleClick={() => deleteJob(id)} type='delete'>
            <TrashIcon />
          </Button>
        </div>
      </article>
    </>
  );
};
