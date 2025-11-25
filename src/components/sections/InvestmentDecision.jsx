function InvestmentDecision({ data }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Investment Decision</h2>
      <div className="mb-6 text-center p-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg text-white">
        <p className="text-lg mb-2">Final Verdict</p>
        <p className="text-5xl font-bold mb-2">{data.final_verdict}</p>
        <p className="text-xl">Conviction: {data.conviction}%</p>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between p-3 bg-gray-50 rounded">
          <span className="text-gray-700">Company Quality</span>
          <span className="font-bold">{data.company_quality}</span>
        </div>
        <div className="flex justify-between p-3 bg-gray-50 rounded">
          <span className="text-gray-700">Valuation</span>
          <span className="font-bold">{data.valuation}</span>
        </div>
        <div className="flex justify-between p-3 bg-gray-50 rounded">
          <span className="text-gray-700">Technical View</span>
          <span className="font-bold">{data.technical_view}</span>
        </div>
        <div className="flex justify-between p-3 bg-gray-50 rounded">
          <span className="text-gray-700">Sentiment</span>
          <span className="font-bold">{data.sentiment}</span>
        </div>
      </div>
    </div>
  );
}

export default InvestmentDecision;