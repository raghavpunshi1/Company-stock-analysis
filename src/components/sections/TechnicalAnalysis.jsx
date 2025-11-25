import KeyValueCard from "../common/KeyValueCard";
import CommonCard from "../common/CommonCard";
import { ChartSpline } from "lucide-react";

function TechnicalAnalysis({ data }) {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="relative">
            {/* Gradient Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-3xl opacity-10"></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white">
              <div className="flex items-center justify-center gap-3 mb-2">
                <ChartSpline className="w-8 h-8 text-indigo-600" />
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Technical Analysis
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid - 2 per row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <KeyValueCard
            label="Trend"
            value={data.trend}
            icon="Tag"
            accentColor="amber"
          />
          <KeyValueCard
            label="Technical Rating"
            value={data.technical_rating}
            icon="Tag"
            accentColor="amber"
          />
          <KeyValueCard
            label="Current price in range"
            value={data.current_price_in_range}
            icon="Tag"
            accentColor="amber"
          />
          <CommonCard
            data={data.high_52week}
            title="52 weeks high"
            accentColor="blue"
          />
          <CommonCard
            data={data.low_52week}
            title="52 weeks low"
            accentColor="blue"
          />
          <CommonCard
            data={data.moving_averages}
            title="Moving Averages"
            accentColor="blue"
          />
        </div>
      </div>
    </div>
  );
}

export default TechnicalAnalysis;
