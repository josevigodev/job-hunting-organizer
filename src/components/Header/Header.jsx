import { useId } from 'react';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import styles from './Header.module.css';
import { SearchIcon } from '../common/Icons';

export function Header({ setActive }) {
  const searchId = useId();
  const minSalaryId = useId();

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.hero}>
          <h1>Job Hunt Organizer</h1>
          <Button handleClick={() => setActive('form')} type='add'>
            Add job
          </Button>
        </div>
        <form className={styles.filter}>
          <div className={styles.search}>
            <label aria-hidden aria-label='Search' htmlFor={searchId}>
              <SearchIcon />
            </label>
            <Input
              placeholder='Search'
              id={searchId}
              type='text'
              category='search'
            />
          </div>
          <div className={styles.filter_options}>
            <div className={styles.filter_wrapper}>
              <Input id={minSalaryId} type='number' category='minSalary' />
              <label htmlFor={minSalaryId}>Min salary</label>
            </div>
            <div className={styles.filter_wrapper}>
              <Input
                label='Filter by workplace'
                type='select'
                category='workplace'
              />
            </div>
          </div>
        </form>
      </div>
    </header>
  );
}
