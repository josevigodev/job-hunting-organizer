import { useId } from 'react';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import styles from './Header.module.css';

export function Header() {
  const searchId = useId();
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.hero}>
          <h1>Job Hunt Organizer</h1>
          <Button type='add'>Add job</Button>
        </div>
        <form className={styles.filter}>
          <div className={styles.search}>
            <label aria-hidden aria-label='search' htmlFor={searchId}>
              @
            </label>
            <Input id={searchId} type='text' category='search' />
          </div>
          <div className={styles.filter_options}>
            <button>Category</button>
            <button>Date</button>
            <button>Min salary</button>
          </div>
        </form>
      </div>
    </header>
  );
}
