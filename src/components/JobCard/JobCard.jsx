import { Link } from '../common/Link';
import {
  CalendarIcon,
  CoinIcon,
  EditIcon,
  LinkIcon,
  MonitorIcon,
  TrashIcon,
} from '../common/Icons';
import styles from './JobCard.module.css';
import { Button } from '../common/Button';
import { useContext, useState } from 'react';
import { JobsContext } from '../../contexts/JobsContext.';
import { JobForm } from '../JobForm/JobForm';

export function JobCard({
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
}) {
  const [active, setActive] = useState('');
  const [dragged, setDragged] = useState(false);
  const { deleteJob } = useContext(JobsContext);

  const handleDragStart = (e) => {
    const { dataTransfer } = e;
    dataTransfer.setData('text/plain', id);
    setDragged(true);
  };

  const handleDragEnd = () => {
    setIsDraggingOver('');
    setDragged(false);
  };

  return (
    <>
      {active === 'form' && (
        <JobForm edit job={jobData} active={active} setActive={setActive} />
      )}
      <article
        draggable='true'
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className={`${styles.job_card} ${styles[state]} ${
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
          <Button handleClick={() => setActive('form')} type='edit'>
            <EditIcon />
          </Button>
          <Button handleClick={() => deleteJob(id)} type='delete'>
            <TrashIcon />
          </Button>
        </div>
      </article>
    </>
  );
}
