import styles from './Button.module.css';

export function Button({ children, type, handleClick, functionality }) {
  return (
    <button
      type={functionality ?? 'button'}
      onClick={handleClick}
      aria-label={type}
      className={`${styles.button} ${styles[type]}`}
    >
      {children}
    </button>
  );
}
