import DataCardGrid from "../common/DataCardGrid";
import { ContactRound } from "lucide-react";

function PeerComparison({ data }) {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto mb-8">
          <div className="relative">
            {/* Gradient Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-3xl opacity-10"></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white">
              <div className="flex items-center justify-center gap-3 mb-2">
                <ContactRound className="w-8 h-8 text-indigo-600" />
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Stock Price & Marketcap
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid - 2 per row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.map((item, idx) => (
            <div key={item.company || idx}>
              <DataCardGrid
                data={item}
                title={item.company || `Item ${idx + 1}`}
                icon="Users"
                accentColor="amber"
                collapsible={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PeerComparison;
