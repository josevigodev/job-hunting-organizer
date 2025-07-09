import styles from './Header.module.css';
import React, { useContext, useEffect, useId } from 'react';
import { Button } from '../common/Button.tsx';
import { Input } from '../common/Input.tsx';
import { SearchIcon } from '../common/Icons.tsx';
import { FilterContext } from '../../contexts/FilterContext.ts';

interface Props {
  setActive: (value: boolean) => void;
}

export const Header: React.FC<Props> = ({ setActive }) => {
  const filterContext = useContext(FilterContext);
  if (!filterContext) return;
  const { filter, setFilter } = filterContext;

  const searchId = useId();
  const minSalaryId = useId();

  const handleChange = ({
    e,
    prop,
  }: {
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >;
    prop: string;
  }) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [prop]: e.target.value,
    }));
  };

  useEffect(() => {
    const containers = document.querySelectorAll(`.${styles.filter_wrapper}`);

    containers.forEach((container) => {
      const input =
        container.querySelector('input') || container.querySelector('select');
      if (!input) return;

      input.addEventListener('focus', () => {
        containers.forEach((other) => {
          if (other !== container) {
            other.classList.add(styles.dimmed);
          }
        });
      });

      input.addEventListener('blur', () => {
        containers.forEach((other) => other.classList.remove(styles.dimmed));
      });
    });
  }, []);

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.hero}>
          <h1>Job Hunt Organizer</h1>
          <Button
            dataTest='open-form'
            handleClick={() => setActive(true)}
            type='add'
          >
            Add job
          </Button>
        </div>
        <form className={styles.filter}>
          <div className={`${styles.filter_wrapper} ${styles.search}`}>
            <label aria-hidden aria-label='Search' htmlFor={searchId}>
              <SearchIcon />
            </label>
            <Input
              handleChange={(e) => handleChange({ e, prop: 'search' })}
              value={filter.search}
              placeholder='Search'
              id={searchId}
              type='text'
              category='search'
            />
          </div>
          <div className={styles.filter_options}>
            <div className={styles.filter_wrapper}>
              <Input
                handleChange={(e) => handleChange({ e, prop: 'minSalary' })}
                value={filter.minSalary}
                id={minSalaryId}
                placeholder='Min salary'
                type='number'
                category='minSalary'
              />
            </div>
            <div className={styles.filter_wrapper}>
              <Input
                handleChange={(e) => handleChange({ e, prop: 'workplace' })}
                value={filter.workplace}
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
};
