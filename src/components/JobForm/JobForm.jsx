import styles from './JobForm.module.css';
import { Input } from '../common/Input';
import { useContext, useState } from 'react';
import { CloseIcon } from '../common/Icons';
import { Button } from '../common/Button';
import { JobsContext } from '../../contexts/JobsContext.';
import { useInputError } from '../../hooks/useInputError';
import { emptyForm, INPUT_FIELDS } from '../../consts';

export function JobForm({ active, setActive, edit, job }) {
  const [data, setData] = useState(edit ? job : emptyForm);
  const { error } = useInputError({ data });
  const { addJob, editJob } = useContext(JobsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.workplace === 'select') return;

    if (edit) {
      editJob({ id: job.id, newJob: data });
      setActive(false);
      return;
    }

    addJob({ newJob: data });
    setActive(false);
  };

  const handleChange = ({ e, prop }) => {
    setData((prevData) => ({
      ...prevData,
      [prop]: e.target.value,
    }));
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
          ([, { label, type, prop, placeholder, required, hasError }]) => (
            <div key={prop} className={styles.field}>
              <label htmlFor={prop}>{label}</label>
              <Input
                handleChange={(e) => handleChange({ e, prop })}
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
            <Button type='add_form' functionality='submit'>
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
          <Button type='add_form' functionality='submit'>
            Add
          </Button>
        )}
      </form>
    </dialog>
  );
}
