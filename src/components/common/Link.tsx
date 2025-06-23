import React, { ReactNode } from 'react';
import styles from './Link.module.css';
import { Job } from '../../types';

interface Props {
  children: ReactNode;
  state: Job['state'];
  to: string;
}

export const Link: React.FC<Props> = ({ children, state, to }) => {
  return (
    <a
      className={`${styles.link} ${styles[state ?? '']}`}
      href={to}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
};
