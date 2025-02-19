import './App.css';
import { PageLayout } from './layout';
import { Routes } from './routes';

function App() {
  return (
    <div className="App">
      <PageLayout>
        <Routes />
      </PageLayout>
    </div>
  );
}

export default App;
