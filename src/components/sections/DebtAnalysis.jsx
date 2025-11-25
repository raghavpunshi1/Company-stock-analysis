function DebtAnalysis({ data }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Debt Analysis</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
          <span className="text-gray-700">Total Debt</span>
          <span className="font-bold text-lg">
            ₹{data.total_debt.toLocaleString()} Cr
          </span>
        </div>
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
          <span className="text-gray-700">Cash & Equivalents</span>
          <span className="font-bold text-lg text-green-600">
            ₹{data.cash_and_equivalents.toLocaleString()} Cr
          </span>
        </div>
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
          <span className="text-gray-700">Net Debt</span>
          <span className="font-bold text-lg">
            ₹{data.net_debt.toLocaleString()} Cr
          </span>
        </div>
        <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800">
              Net Debt / EBITDA
            </span>
            <span className="text-2xl font-bold text-teal-600">
              {data.net_debt_to_ebitda}x
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Rating:{" "}
            <span className="font-semibold text-green-600">
              {data.credit_rating}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DebtAnalysis;
