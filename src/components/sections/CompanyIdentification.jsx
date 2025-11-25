import { TrendingUp, Building2 } from "lucide-react";

function CompanyIdentification({ data }) {
  return (
    <div>
      <div className="max-w-7xl mx-auto mb-8">
        <div className="relative">
          {/* Gradient Background Blob */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-3xl opacity-10"></div>

          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Building2 className="w-8 h-8 text-indigo-600" />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Company Identification
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">Company Name</p>
            <p className="text-lg font-semibold text-teal-600">{data.company_name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Ticker Symbol</p>
            <p className="text-lg font-semibold text-teal-600">{data.ticker}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Sector</p>
            <p className="text-lg font-semibold">{data.sector}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Market Position</p>
            <p className="text-base text-gray-700">{data.company_position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyIdentification;
