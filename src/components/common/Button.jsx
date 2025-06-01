import styles from './Button.module.css';

export function Button({ children, type }) {
  return (
    <button aria-label={type} className={`${styles.button} ${styles[type]}`}>
      {children}
    </button>
  );
}
