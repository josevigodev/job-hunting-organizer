import { useState } from 'react';
import { Dashboard } from './components/Dashboard/Dashboard.tsx';
import { Header } from './components/Header/Header.tsx';
import { JobForm } from './components/JobForm/JobForm.tsx';
import { JobsContextProvider } from './contexts/JobsContextProvider.tsx';
import { FilterContextProvider } from './contexts/FilterContextProvider.tsx';

const jobMock = {
  company: 'string',
  date: `2011-01-01`,
  id: 'string',
  job: 'string',
  link: 'string',
  salary: 'string',
  state: 'Interview',
  workplace: 'Onsite',
  description: 'string',
} as const;

const App = () => {
  const [active, setActive] = useState(false);

  return (
    <div className='layout-container'>
      <FilterContextProvider>
        <Header setActive={setActive} />
        <JobsContextProvider>
          {active && (
            <JobForm
              edit={false}
              job={jobMock}
              active={active}
              setActive={setActive}
            />
          )}
          <Dashboard />
        </JobsContextProvider>
      </FilterContextProvider>
    </div>
  );
};

export default App;
