import { createContext } from 'react';
import { JobsContextType } from '../types';

export const JobsContext = createContext<JobsContextType | undefined>(
  undefined
);
