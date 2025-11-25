import MetricCardsGrid from "../common/MetricCardsGrid";
import DataCardGrid from "../common/DataCardGrid";
import { BadgeIndianRupee} from "lucide-react";

function ValuationMultiples({ data }) {
  return (
    <div>
      <div className="max-w-7xl mx-auto mb-8">
        <div className="relative">
          {/* Gradient Background Blob */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-3xl opacity-10"></div>

          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white">
            <div className="flex items-center justify-center gap-3 mb-2">
              <BadgeIndianRupee className="w-8 h-8 text-indigo-600" />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Valuation Metrics
              </h2>
            </div>
            <p className="text-gray-600 text-center text-lg">Key financial metrics and ratios</p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">         

          {/* Cards Grid - 2 per row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <DataCardGrid
              data={data.eps}
              title="Earnings Per Share"
              icon="IndianRupee"
              accentColor="blue"
              collapsible={true}
            />

            <DataCardGrid
              data={data.pe_ratio}
              title="PE Ratio"
              icon="TrendingUp"
              accentColor="emerald"
              collapsible={true}
            />

            <DataCardGrid
              data={data.peg_ratio}
              title="PEG Ratio"
              icon="Target"
              accentColor="amber"
              collapsible={true}
            />

            <DataCardGrid
              data={data.price_to_book}
              title="Price to Book"
              icon="BarChart3"
              accentColor="purple"
              collapsible={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValuationMultiples;
