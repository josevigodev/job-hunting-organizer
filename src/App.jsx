import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header/Header';
import { JobForm } from './components/JobForm/JobForm';

function App() {
  return (
    <div className='layout-container'>
      <Header />
      <JobForm />
      <Dashboard />
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
