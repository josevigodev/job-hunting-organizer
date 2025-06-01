import styles from './JobForm.module.css';
import { Input } from '../common/Input';
import { useId } from 'react';
import { CloseIcon } from '../common/Icons';
import { Button } from '../common/Button';

export function JobForm() {
  const companyId = useId();
  const jobId = useId();
  const linkId = useId();
  const salaryId = useId();
  const dateId = useId();
  const descriptionId = useId();

  return (
    <dialog className={styles.dialog}>
      <form className={styles.form}>
        <div className={styles.close_button_container}>
          <Button>
            <CloseIcon />
          </Button>
        </div>
        <div className={styles.field}>
          <label htmlFor={companyId}>Company:</label>
          <Input
            placeholder='Google, Amazon...'
            id={companyId}
            required
            type='text'
          />
        </div>

        <div className={styles.field}>
          <label htmlFor={jobId}>Job:</label>
          <Input
            placeholder='Frontend Web Developer'
            id={jobId}
            required
            type='text'
          />
        </div>

        <div className={styles.field}>
          <label htmlFor={linkId}>Job's link:</label>
          <Input
            placeholder='https://linkedin.com/google-job'
            id={linkId}
            required
            type='text'
          />
        </div>

        <div className={styles.inline}>
          <div className={styles.field}>
            <label htmlFor={salaryId}>Salary ($ / month):</label>
            <Input id={salaryId} required type='number' />
          </div>

          <div className={styles.field}>
            <label htmlFor={dateId}>Date: </label>
            <Input id={dateId} required type='date' />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor={descriptionId}>Description:</label>
          <Input
            placeholder='Web developer job with great salary...'
            id={descriptionId}
            type='textarea'
          />
        </div>

        <Button type='add_form'>Add</Button>
      </form>
    </dialog>
  );
}
