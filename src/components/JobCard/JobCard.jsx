import { Link } from '../common/Link';
import {
  CalendarIcon,
  CoinIcon,
  DescriptionIcon,
  EditIcon,
  LinkIcon,
  TrashIcon,
} from '../common/Icons';
import styles from './JobCard.module.css';
import { Button } from '../common/Button';

export function JobCard({ state }) {
  return (
    <article className={`${styles.job_card} ${styles[state]}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>Google</h3>
      </div>
      <h4>Frontend Developer</h4>
      <div className={styles.info}>
        <span>
          <CoinIcon />
        </span>
        <span>$1200 / month</span>
      </div>

      <div className={styles.info}>
        <span>
          <CalendarIcon />
        </span>
        <span>12-6-2025</span>
      </div>

      <p className={styles.description}>
        The best job of all time with greate salary at Google Enterprise
      </p>

      <div className={styles.actions}>
        <Link state={state}>
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
