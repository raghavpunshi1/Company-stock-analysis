function Citations({ data }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Citations & Sources</h2>
      <ol className="space-y-2">
        {data.map((citation, idx) => (
          <li key={idx} className="flex">
            <span className="font-bold text-teal-600 mr-3">[{idx + 1}]</span>
            <span className="text-gray-700">{citation}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Citations;