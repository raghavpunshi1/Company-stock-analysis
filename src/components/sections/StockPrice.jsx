import { ChartCandlestick } from "lucide-react";

function StockPrice({ data: { stock_price, market_cap, shares_outstanding } }) {
  return (
    <div>
      <div className="max-w-7xl mx-auto mb-8">
        <div className="relative">
          {/* Gradient Background Blob */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-3xl opacity-10"></div>

          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white">
            <div className="flex items-center justify-center gap-3 mb-2">
              <ChartCandlestick className="w-8 h-8 text-indigo-600" />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Stock Price & Marketcap
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Stock Price & Market Cap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-teal-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Current Price</p>
            <p className="text-3xl font-bold text-teal-600">
              ₹{stock_price.value.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              As of {stock_price.date}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Source: {stock_price.source}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Model Confidence: {stock_price.confidence * 100}%
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Market Cap</p>
            <p className="text-3xl font-bold text-blue-600">
              ₹{(market_cap.value / 100000).toFixed(2)}L Cr
            </p>
            <p className="text-xs text-gray-500 mt-1">{market_cap.unit}</p>
            <p className="text-xs text-gray-500 mt-1">
              Source: {market_cap.source}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Model Confidence: {market_cap.confidence * 100}%
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Shares Outstanding</p>
            <p className="text-3xl font-bold text-blue-600">
              {(shares_outstanding.value / 100000).toFixed(2)}L
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {shares_outstanding.unit}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Source: {shares_outstanding.source}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Model Confidence: {shares_outstanding.confidence * 100}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockPrice;
