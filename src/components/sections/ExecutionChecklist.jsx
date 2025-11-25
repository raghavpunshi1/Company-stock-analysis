function ExecutionChecklist({ data }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Execution Checklist</h2>
      <div className="space-y-2">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-start p-3 bg-gray-50 rounded">
            <span className="text-green-500 mr-3 text-xl">✓</span>
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExecutionChecklist;