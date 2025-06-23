import { createContext } from 'react';
import { FilterContextType } from '../types';

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);
