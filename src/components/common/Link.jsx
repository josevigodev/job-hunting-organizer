import styles from './Link.module.css';

export function Link({ state, children }) {
  return (
    <a
      className={`${styles.link} ${styles[state]}`}
      href=''
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
}
