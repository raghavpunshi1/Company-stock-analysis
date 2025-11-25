import { useState } from 'react';
import { analyzeStock } from '../services/api';

function LandingPage({ onSearch }) {
  const [companyName, setCompanyName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!companyName.trim()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const analysisData = await analyzeStock(companyName);
      onSearch(analysisData);
    } catch (err) {
      setError(err.message || 'Failed to analyze stock. Please try again.');
      console.error('Analysis error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Stock Analysis
          </h1>
          <p className="text-gray-300 text-lg">
            Get comprehensive AI-powered Company Equity analysis
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit}>
            <label className="block text-gray-700 font-semibold mb-3 text-lg">
              Enter Company Name
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="e.g., Reliance Industries"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none text-lg mb-6"
              disabled={loading}
            />
            
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !companyName.trim()}
              className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </span>
              ) : (
                'Analyze Stock'
              )}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Made by Raghav • Stock Market Analysis - LLM powered</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
