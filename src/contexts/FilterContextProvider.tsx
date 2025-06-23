import { ReactNode, useState } from 'react';
import { FilterContext } from './FilterContext';
import { Filter, FilterContextType } from '../types';

const initialFilter: Filter = {
  search: '',
  workplace: 'workplace',
  minSalary: '',
};

export const FilterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [filter, setFilter] = useState(initialFilter);

  const value: FilterContextType = {
    filter,
    setFilter,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
