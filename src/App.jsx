import { useState } from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header/Header';
import { JobForm } from './components/JobForm/JobForm';
import { JobsContextProvider } from './contexts/JobsContextProvider';
import { FilterContextProvider } from './contexts/FilterContextProvider';

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className='layout-container'>
      <FilterContextProvider>
        <Header setActive={setActive} />
        <JobsContextProvider>
          {active && <JobForm active={active} setActive={setActive} />}
          <Dashboard />
        </JobsContextProvider>
      </FilterContextProvider>
    </div>
  );
}

export default App;
