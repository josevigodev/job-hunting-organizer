import React from 'react';
import styles from './Input.module.css';

interface Props {
  type: 'text' | 'select' | 'date' | 'number' | 'textarea';
  category?: string;
  id?: string;
  required?: boolean;
  placeholder?: string;
  label?: string;
  value: string | number | undefined;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

export const Input: React.FC<Props> = ({
  type,
  category,
  id,
  required,
  placeholder,
  label,
  value,
  handleChange,
}) => {
  return type === 'text' ? (
    <input
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
      id={id}
      required={required}
      className={`${styles[category ?? '']} ${styles.input}`}
      type='text'
      minLength={2}
    />
  ) : type === 'select' ? (
    <select
      value={value}
      onChange={(e) => handleChange(e)}
      className={`${styles[category ?? '']} ${styles.input}`}
      id={id}
      required={required}
      aria-label={label}
    >
      <option value='workplace'>Workplace</option>
      <option value='Onsite'>Onsite</option>
      <option value='Remote'>Remote</option>
      <option value='Hybrid'>Hybrid</option>
    </select>
  ) : type === 'date' ? (
    <input
      onChange={handleChange}
      value={value}
      className={styles.input}
      id={id}
      required={required}
      type='date'
    />
  ) : type === 'number' ? (
    <input
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
      className={`${styles.input} ${styles[category ?? '']}`}
      id={id}
      required={required}
      type='number'
      min={1}
      max={30000}
      step={1}
    />
  ) : type === 'textarea' ? (
    <textarea
      onChange={(e) => handleChange(e)}
      value={value}
      placeholder={placeholder}
      className={styles.input}
      maxLength={120}
      id={id}
      required={required}
    ></textarea>
  ) : undefined;
};
