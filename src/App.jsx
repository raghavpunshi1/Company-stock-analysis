import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

function App() {
  const [analysisData, setAnalysisData] = useState(null);

  return (
    <div>
      {!analysisData ? (
        <LandingPage onSearch={setAnalysisData} />
      ) : (
        <Dashboard data={analysisData} />
      )}
    </div>
  );
}

export default App;