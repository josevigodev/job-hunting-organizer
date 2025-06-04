import { useState } from 'react';
import { FilterContext } from './FilterContext';

export function FilterContextProvider({ children }) {
  const [filter, setFilter] = useState({
    workplace: 'workplace',
    minSalary: '',
  });

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
