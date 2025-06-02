import { Link } from '../common/Link';
import {
  CalendarIcon,
  CoinIcon,
  EditIcon,
  LinkIcon,
  TrashIcon,
} from '../common/Icons';
import styles from './JobCard.module.css';
import { Button } from '../common/Button';

export function JobCard({
  state,
  company,
  job,
  link,
  salary,
  date,
  description,
}) {
  console.log(state);
  return (
    <article className={`${styles.job_card} ${styles[state]}`}>
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

      <p className={styles.description}>{description}</p>

      <div className={styles.actions}>
        <Link to={link} state={state}>
          <span>Go</span>
          <span>
            <LinkIcon />
          </span>
        </Link>
        <Button type='edit'>
          <EditIcon />
        </Button>
        <Button type='delete'>
          <TrashIcon />
        </Button>
      </div>
    </article>
  );
}
