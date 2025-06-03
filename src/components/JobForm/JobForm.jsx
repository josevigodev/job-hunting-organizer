import styles from './JobForm.module.css';
import { Input } from '../common/Input';
import { useContext, useId, useState } from 'react';
import { CloseIcon } from '../common/Icons';
import { Button } from '../common/Button';
import { JobsContext } from '../../contexts/JobsContext.';

const emptyForm = {
  company: '',
  job: '',
  link: '',
  salary: 0,
  date: '',
  workplace: 'workplace',
  description: '',
};

export function JobForm({ active, setActive, edit, job }) {
  const [data, setData] = useState(edit ? job : emptyForm);
  const { addJob, editJob } = useContext(JobsContext);

  const companyId = useId();
  const jobId = useId();
  const linkId = useId();
  const salaryId = useId();
  const dateId = useId();
  const workplaceId = useId();
  const descriptionId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      editJob({ id: job.id, newJob: data });
      setActive('');
      return;
    }

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
          <Button
            handleClick={() => {
              setActive('');
              setData(edit ? job : emptyForm);
            }}
          >
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

          <div className={styles.field}>
            <label htmlFor={workplaceId}>Date: </label>
            <Input
              handleChange={(e) => handleChange({ e, prop: 'workplace' })}
              value={data.workplace}
              id={workplaceId}
              required
              type='select'
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

        {edit ? (
          <div className={styles.buttons_wrapper}>
            <Button type='add_form' functionality='submit'>
              Save
            </Button>
            <Button
              type='add_form'
              handleClick={() => {
                setActive('');
                setData(edit ? job : emptyForm);
              }}
            >
              Discard
            </Button>
          </div>
        ) : (
          <Button type='add_form' functionality='submit'>
            Add
          </Button>
        )}
      </form>
    </dialog>
  );
}
