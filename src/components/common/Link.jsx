import styles from './Link.module.css';

export function Link({ state, children, to }) {
  return (
    <a
      className={`${styles.link} ${styles[state]}`}
      href={to}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
}
