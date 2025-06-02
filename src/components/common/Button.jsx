import styles from './Button.module.css';

export function Button({ children, type, handleClick }) {
  return (
    <button
      onClick={handleClick}
      aria-label={type}
      className={`${styles.button} ${styles[type]}`}
    >
      {children}
    </button>
  );
}
