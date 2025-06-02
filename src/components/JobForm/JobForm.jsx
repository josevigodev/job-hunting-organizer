import styles from './JobForm.module.css';
import { Input } from '../common/Input';
import { useContext, useId, useState } from 'react';
import { CloseIcon } from '../common/Icons';
import { Button } from '../common/Button';
import { JobsContext } from '../../contexts/JobsContext.';

export function JobForm({ active, setActive }) {
  const [data, setData] = useState({
    company: '',
    job: '',
    link: '',
    salary: 0,
    date: '',
    description: '',
  });
  const { addJob } = useContext(JobsContext);

  const companyId = useId();
  const jobId = useId();
  const linkId = useId();
  const salaryId = useId();
  const dateId = useId();
  const descriptionId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob({ newJob: data });
    setActive('');
  };

  const handleChange = ({ e, prop }) => {
    setData((prevData) => ({
      ...prevData,
      [prop]: e.target.value,
    }));
  };

  return (
    <dialog open={active === 'form'} className={styles.dialog}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.close_button_container}>
          <Button handleClick={() => setActive('')}>
            <CloseIcon />
          </Button>
        </div>
        <div className={styles.field}>
          <label htmlFor={companyId}>Company:</label>
          <Input
            handleChange={(e) => handleChange({ e, prop: 'company' })}
            value={data.company}
            placeholder='Google, Amazon...'
            id={companyId}
            required
            type='text'
          />
        </div>

        <div className={styles.field}>
          <label htmlFor={jobId}>Job:</label>
          <Input
            handleChange={(e) => handleChange({ e, prop: 'job' })}
            value={data.job}
            placeholder='Frontend Web Developer'
            id={jobId}
            required
            type='text'
          />
        </div>

        <div className={styles.field}>
          <label htmlFor={linkId}>Job's link:</label>
          <Input
            handleChange={(e) => handleChange({ e, prop: 'link' })}
            value={data.link}
            placeholder='https://linkedin.com/google-job'
            id={linkId}
            required
            type='text'
          />
        </div>

        <div className={styles.inline}>
          <div className={styles.field}>
            <label htmlFor={salaryId}>Salary ($ / month):</label>
            <Input
              handleChange={(e) => handleChange({ e, prop: 'salary' })}
              value={data.salary}
              id={salaryId}
              required
              type='number'
            />
          </div>

          <div className={styles.field}>
            <label htmlFor={dateId}>Date: </label>
            <Input
              handleChange={(e) => handleChange({ e, prop: 'date' })}
              value={data.date}
              id={dateId}
              required
              type='date'
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor={descriptionId}>Description:</label>
          <Input
            handleChange={(e) => handleChange({ e, prop: 'description' })}
            value={data.description}
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
