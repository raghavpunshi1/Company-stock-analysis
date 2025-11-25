function ConfidenceMetrics({ data }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Confidence Metrics</h2>
      <div className="space-y-3">
        {Object.entries(data).map(([key, value], idx) => (
          <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded">
            <span className="text-gray-700 capitalize">{key.replace('_', ' ')}</span>
            <span className={`px-3 py-1 rounded-full font-semibold ${
              value === 'High' ? 'bg-green-100 text-green-700' :
              value === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConfidenceMetrics;