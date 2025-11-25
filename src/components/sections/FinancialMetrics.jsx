import CommonCard from "../common/CommonCard";
import { TrendingUp } from "lucide-react";

function FinancialMetrics({ data }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="relative">
          {/* Gradient Background Blob */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-3xl opacity-10"></div>

          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white">
            <div className="flex items-center justify-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8 text-indigo-600" />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Financial Metrics
              </h2>
            </div>
            <p className="text-center text-gray-600 text-lg">
              3-Year Performance Overview
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-6">
          <div className="space-y-2">
            {data.years_data.map((item, idx) => (
              <div>
                {/* <CommonCard data={item} titleKey="fy" title=""></CommonCard> */}
                <CommonCard
                  data={item}
                  titleKey="fy"
                  title="Financial Year"
                  highlights={["revenue"]}
                  badgeKey="fiscal_year_end"
                  accentColor="blue"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialMetrics;
