const API_BASE_URL = 'http://localhost:8080/api';

export const analyzeStock = async (companyName) => {
  try {
    const response = await fetch(`${API_BASE_URL}/stockMarketAI/analyseCompany`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ companyName: companyName }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Optional: Get analysis by ID if your API supports it
export const getAnalysisById = async (analysisId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/analysis/${analysisId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
