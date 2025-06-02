import styles from './Input.module.css';

export function Input({ type, category, id, required, placeholder, label }) {
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
    <select
      className={`${styles[category]} ${styles.input}`}
      id={id}
      required={required}
      aria-label={label}
    >
      <option value='worplace'>Workplace</option>
      <option value='Onsite'>Onsite</option>
      <option value='Remote'>Remote</option>
      <option value='Hybrid'>Hybrid</option>
    </select>
  ) : type === 'date' ? (
    <input className={styles.input} id={id} required={required} type='date' />
  ) : type === 'number' ? (
    <input
      className={`${styles.input} ${styles[category]}`}
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
