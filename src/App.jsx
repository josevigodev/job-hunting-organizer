import { useState } from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header/Header';
import { JobForm } from './components/JobForm/JobForm';
import { JobsContextProvider } from './contexts/JobsContextProvider';

function App() {
  const [active, setActive] = useState('');

  return (
    <div className='layout-container'>
      <Header setActive={setActive} />
      <JobsContextProvider>
        {active === 'form' && <JobForm active={active} setActive={setActive} />}
        <Dashboard />
      </JobsContextProvider>
      <footer>
        <div className='footer-info-container'>
          <p>
            © 2025 Job Hunting Organizer | Built with React by
            <a
              href='https://github.com/josevigodev/'
              target='_blank'
              rel='noopener norreferer'
            >
              Jose Vigo
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
