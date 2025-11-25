import CommonCard from "../common/CommonCard";
import {
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Target,
  BarChart3,
  MessageCircle,
  IndianRupee,
  Eye,
  DollarSign,
  ShieldAlert,
} from "lucide-react";

function InvestmentConsensus({
  data: { analyst_consensus, investment_decision, action_plan },
}) {
  // Helper for verdict color
  const getVerdictColor = (verdict) => {
    const v = verdict?.toUpperCase();
    if (v === "BUY")
      return "from-green-100 to-emerald-100 border-green-400 text-green-700";
    if (v === "SELL")
      return "from-red-100 to-rose-100 border-red-400 text-red-700";
    if (v === "HOLD")
      return "from-blue-100 to-indigo-100 border-blue-400 text-blue-700";
    return "from-gray-100 to-slate-100 border-gray-400 text-gray-700";
  };

  const verdictColor = getVerdictColor(investment_decision.final_verdict);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
      {/* ===== HEADER ===== */}
      <div className="flex items-center gap-3 pb-6 border-b border-gray-200">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
          <Target className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-gray-800">
          Investment Decision & Action Plan
        </h2>
      </div>

      {/* ===== FINAL VERDICT (Prominent Hero) ===== */}
      <div
        className={`p-8 text-center bg-gradient-to-br ${verdictColor} rounded-2xl border-2 shadow-xl`}
      >
        <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-3">
          Final Verdict
        </p>
        <p className="text-7xl font-extrabold mb-5">{action_plan.verdict}</p>
        <div className="inline-flex items-center gap-3 bg-white bg-opacity-50 px-6 py-2 rounded-full">
          <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
          <p className="text-sm font-bold">
            Conviction:{" "}
            <span className="text-lg">
              {investment_decision.conviction_level}
              {investment_decision.conviction_scale}
            </span>
          </p>
          <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
        </div>
      </div>

      {/* ===== INVESTMENT THESIS ===== */}
      <div className="p-6 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl border-l-4 border-slate-500 shadow-sm">
        <p className="text-xs font-bold text-slate-700 mb-3 uppercase tracking-wide flex items-center gap-2">
          <MessageCircle className="w-4 h-4" />
          Investment Thesis
        </p>
        <p className="text-gray-800 leading-relaxed text-base">
          {investment_decision.reasoning}
        </p>
      </div>

      {/* ===== ACTION PLAN PRICE LEVELS (4 cards with reasons) ===== */}
      <div>
        <h3 className="text-lg font-bold text-gray-700 mb-4 uppercase tracking-wide">
          Action Plan - Detailed Price Levels
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Entry Price */}
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl border-2 border-green-300 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <IndianRupee className="w-5 h-5 text-green-600" />
              <p className="text-xs font-bold text-green-700 uppercase tracking-wide">
                Entry Price
              </p>
            </div>
            <p className="text-4xl font-bold text-green-700 mb-2">
              ₹{action_plan.entry_price.primary}
            </p>
            <p className="text-xs text-green-600 leading-snug">
              {action_plan.entry_price.reason}
            </p>
          </div>

          {/* Profit Target */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border-2 border-blue-300 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-blue-600" />
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                Profit Target
              </p>
            </div>
            <p className="text-4xl font-bold text-blue-700 mb-2">
              ₹{action_plan.profit_target.price}
            </p>
            <p className="text-xs text-blue-600 leading-snug">
              {action_plan.profit_target.reason}
            </p>
          </div>

          {/* Stop Loss */}
          <div className="p-6 bg-gradient-to-br from-red-50 to-rose-100 rounded-xl border-2 border-red-300 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="w-5 h-5 text-red-600" />
              <p className="text-xs font-bold text-red-700 uppercase tracking-wide">
                Stop Loss
              </p>
            </div>
            <p className="text-4xl font-bold text-red-700 mb-2">
              ₹{action_plan.stop_loss.price}
            </p>
            <p className="text-xs text-red-600 leading-snug">
              {action_plan.stop_loss.reason}
            </p>
          </div>

          {/* Position Size */}
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl border-2 border-purple-300 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              <p className="text-xs font-bold text-purple-700 uppercase tracking-wide">
                Position Size
              </p>
            </div>
            <p className="text-3xl font-bold text-purple-700 mb-2">
              {action_plan.position_size}
            </p>
            <p className="text-xs text-purple-600 leading-snug">
              Recommended allocation
            </p>
          </div>
        </div>
      </div>

      {/* ===== DECISION FACTORS (4 cards - Quality, Valuation, Technical, Sentiment) ===== */}
      <div>
        <h3 className="text-lg font-bold text-gray-700 mb-4 uppercase tracking-wide">
          Decision Factors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Company Quality */}
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-sm font-bold text-gray-700">Company Quality</p>
            </div>
            <p className="text-base font-semibold text-green-800 leading-relaxed">
              {investment_decision.company_quality}
            </p>
          </div>

          {/* Valuation Assessment */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm font-bold text-gray-700">Valuation</p>
            </div>
            <p className="text-base font-semibold text-blue-800 leading-relaxed">
              {investment_decision.valuation_assessment}
            </p>
          </div>

          {/* Technical Outlook */}
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-sm font-bold text-gray-700">
                Technical Outlook
              </p>
            </div>
            <p className="text-base font-semibold text-purple-800 leading-relaxed">
              {investment_decision.technical_outlook}
            </p>
          </div>

          {/* Market Sentiment */}
          <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-amber-600" />
              </div>
              <p className="text-sm font-bold text-gray-700">
                Market Sentiment
              </p>
            </div>
            <p className="text-base font-semibold text-amber-800 leading-relaxed">
              {investment_decision.sentiment}
            </p>
          </div>
        </div>
      </div>

      {/* ===== ANALYST CONSENSUS (3 cards) ===== */}
      <div>
        <h3 className="text-lg font-bold text-gray-700 mb-4 uppercase tracking-wide">
          Analyst Consensus
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Avg Target Price */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <IndianRupee className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm font-bold text-gray-700">
                Avg Target Price
              </p>
            </div>
            <p className="text-4xl font-bold text-blue-600">
              ₹{analyst_consensus.average_target_price}
            </p>
          </div>

          {/* Target vs Current */}
          <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border-2 border-emerald-200 shadow-sm hover:shadow-lg transition-all">
            <p className="text-sm font-bold text-gray-700 mb-3">
              Target vs Current
            </p>
            <p className="text-3xl font-bold text-emerald-600 mb-2">
              {analyst_consensus.target_vs_current}
            </p>
            <p className="text-xs text-gray-600">
              {analyst_consensus.recent_changes}
            </p>
          </div>

          {/* Rating Split */}
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 shadow-sm hover:shadow-lg transition-all">
            <p className="text-sm font-bold text-gray-700 mb-3">Rating Split</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-700 font-semibold">Buy:</span>
                <span className="font-bold text-green-600">
                  {analyst_consensus.rating_distribution?.buy_percent}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-700 font-semibold">Hold:</span>
                <span className="font-bold text-blue-600">
                  {analyst_consensus.rating_distribution?.hold_percent}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-700 font-semibold">Sell:</span>
                <span className="font-bold text-red-600">
                  {analyst_consensus.rating_distribution?.sell_percent}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MONITORING CHECKLIST ===== */}
      {action_plan.monitoring && Array.isArray(action_plan.monitoring) && (
        <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-l-4 border-amber-400 shadow-sm">
          <p className="text-sm font-bold text-amber-700 mb-3 flex items-center gap-2 uppercase tracking-wide">
            <Eye className="w-5 h-5" />
            Key Monitoring Points
          </p>
          <ul className="space-y-2">
            {action_plan.monitoring.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-amber-600 font-bold mt-1">✓</span>
                <span className="text-gray-800 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ===== KEY RISKS (always at bottom) ===== */}
      {investment_decision.key_risks && (
        <div className="p-6 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border-l-4 border-red-500 shadow-md">
          <p className="text-sm font-bold text-red-700 mb-3 flex items-center gap-2 uppercase tracking-wide">
            <AlertCircle className="w-5 h-5" />
            Key Risks
          </p>
          {Array.isArray(investment_decision.key_risks) ? (
            <ul className="space-y-2">
              {investment_decision.key_risks.map((risk, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1 text-lg">•</span>
                  <span className="text-gray-800 leading-relaxed">{risk}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-800 leading-relaxed">
              {investment_decision.key_risks}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default InvestmentConsensus;
