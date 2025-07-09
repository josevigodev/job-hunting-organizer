import React, { ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
  children: ReactNode;
  type: string;
  handleClick?: () => void;
  dataTest?: string;
  functionality?: 'button' | 'submit' | 'reset' | undefined;
}

export const Button: React.FC<Props> = ({
  children,
  type,
  handleClick,
  functionality,
  dataTest,
}) => {
  return (
    <button
      data-test={dataTest}
      type={functionality ?? 'button'}
      onClick={handleClick}
      aria-label={type}
      className={`${styles.button} ${styles[type]}`}
    >
      {children}
    </button>
  );
};
