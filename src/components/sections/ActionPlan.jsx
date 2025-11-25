function ActionPlan({ data }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Action Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-blue-50 rounded-lg text-center">
          <p className="text-sm text-gray-600">Entry Price</p>
          <p className="text-2xl font-bold text-blue-600">₹{data.entry_price}</p>
        </div>
        <div className="p-4 bg-red-50 rounded-lg text-center">
          <p className="text-sm text-gray-600">Stop Loss</p>
          <p className="text-2xl font-bold text-red-600">₹{data.stop_loss}</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg text-center">
          <p className="text-sm text-gray-600">Profit Target</p>
          <p className="text-2xl font-bold text-green-600">₹{data.profit_target}</p>
        </div>
      </div>
      <div className="p-4 bg-gray-50 rounded-lg mb-4">
        <p className="text-sm text-gray-600">Position Size</p>
        <p className="text-lg font-bold">{data.position_size}</p>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Monitoring Checklist</h3>
        <ul className="space-y-2">
          {data.monitoring_items.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-teal-500 mr-2">✓</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ActionPlan;