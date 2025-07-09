import styles from './JobForm.module.css';
import { Input } from '../common/Input.tsx';
import React, { useContext, useState } from 'react';
import { CloseIcon } from '../common/Icons.tsx';
import { Button } from '../common/Button.tsx';
import { JobsContext } from '../../contexts/JobsContext.ts';
import { useInputError } from '../../hooks/useInputError.ts';
import { emptyForm, INPUT_FIELDS } from '../../consts.ts';
import { Job } from '../../types';

interface Props {
  active: boolean;
  setActive: (value: boolean) => void;
  edit: boolean;
  job: Job;
}

export const JobForm: React.FC<Props> = ({ active, setActive, edit, job }) => {
  const [data, setData] = useState(edit ? job : emptyForm);
  const { error } = useInputError({ data: data.link });
  const jobsContext = useContext(JobsContext);
  if (!jobsContext) return;
  const { addJob, editJob } = jobsContext;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.workplace === 'select') return;

    if (edit && job) {
      editJob({ id: job.id, newJob: data as Job });
      setActive(false);
      return;
    }

    addJob({ newJob: data as Job });
    setActive(false);
  };

  return (
    <dialog open={active} className={styles.dialog}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.close_button_container}>
          <Button
            type='close'
            handleClick={() => {
              setActive(false);
              setData(edit ? job : emptyForm);
            }}
          >
            <CloseIcon />
          </Button>
        </div>

        {Object.entries(INPUT_FIELDS).map(
          ([
            ,
            { label, type, prop, placeholder, required, hasError, dataTest },
          ]) => (
            <div key={prop} className={styles.field}>
              <label htmlFor={prop}>{label}</label>
              <Input
                handleChange={(e) => {
                  setData((prevData) => ({
                    ...prevData,
                    [prop]: e.target.value,
                  }));
                }}
                dataTest={dataTest}
                value={data[prop]}
                placeholder={placeholder}
                id={prop}
                type={type}
                required={required}
              />
              {hasError && <span className={styles.link_error}>{error}</span>}
            </div>
          )
        )}

        {edit ? (
          <div className={styles.buttons_wrapper}>
            <Button
              dataTest='save-edited'
              type='add_form'
              functionality='submit'
            >
              Save
            </Button>
            <Button
              type='add_form'
              handleClick={() => {
                setActive(false);
                setData(edit ? job : emptyForm);
              }}
            >
              Discard
            </Button>
          </div>
        ) : (
          <Button dataTest='add-job' type='add_form' functionality='submit'>
            Add
          </Button>
        )}
      </form>
    </dialog>
  );
};
