import styles from './Input.module.css';

export function Input({ type, category, id, required, placeholder }) {
  return type === 'text' ? (
    <input
      placeholder={placeholder}
      id={id}
      required={required}
      className={`${styles[category]} ${styles.input}`}
      type='text'
      minLength={2}
    />
  ) : type === 'select' ? (
    <select className={styles.input} id={id} required={required}>
      <option value=''></option>
      <option value=''></option>
      <option value=''></option>
      <option value=''></option>
    </select>
  ) : type === 'date' ? (
    <input className={styles.input} id={id} required={required} type='date' />
  ) : type === 'number' ? (
    <input
      className={styles.input}
      id={id}
      required={required}
      type='number'
      min={1}
      max={30000}
      step={1}
    />
  ) : type === 'textarea' ? (
    <textarea
      placeholder={placeholder}
      className={styles.input}
      maxLength={120}
      id={id}
      required={required}
    ></textarea>
  ) : undefined;
}
