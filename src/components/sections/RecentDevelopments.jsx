import { Newspaper } from "lucide-react";
import { BookUp2 } from "lucide-react";

function RecentDevelopments({ data }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
              <div className="max-w-7xl mx-auto mb-8">
          <div className="relative">
            {/* Gradient Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-3xl opacity-10"></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white">
              <div className="flex items-center justify-center gap-3 mb-2">
                <BookUp2 className="w-8 h-8 text-indigo-600" />
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Recent Development
                </h2>
              </div>
            </div>
          </div>
        </div>
      <div className="space-y-4">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Top row: Date, Source, Sentiment */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-gray-600">{item.date}</span>
                <span className="text-xs text-gray-500">source: {item.source}</span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  item.sentiment === 'Positive' ? 'bg-green-100 text-green-700' :
                  item.sentiment === 'Negative' ? 'bg-red-100 text-red-700' :
                  'bg-gray-100 text-gray-700'
                }`}
              >
                {item.sentiment}
              </span>
            </div>

            {/* News body with inline icon and text */}
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Newspaper className="w-5 h-5 text-amber-600" />
              </div>
              
              {/* News content */}
              <div className="flex-1">
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide block mb-1">
                  News
                </span>
                <p className="text-gray-900 font-semibold text-base leading-relaxed">
                  {item.news}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentDevelopments;
