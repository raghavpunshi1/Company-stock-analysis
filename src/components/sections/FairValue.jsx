import CommonCard from "../common/CommonCard";
import DataCardGrid from "../common/DataCardGrid";
import { TrendingUp, TrendingDown, Target, Scale } from "lucide-react";

// Utility mapping for colors and labels
const scenarioStyles = {
  bear: {
    card: "bg-gradient-to-br from-red-50 to-rose-50 border-l-4 border-red-500 shadow-sm hover:shadow-md transition-shadow",
    label: "font-bold text-red-700",
    price: "text-2xl font-bold text-red-600",
    icon: TrendingDown,
  },
  base: {
    card: "bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow",
    label: "font-bold text-blue-700",
    price: "text-2xl font-bold text-blue-600",
    icon: Target,
  },
  bull: {
    card: "bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow",
    label: "font-bold text-green-700",
    price: "text-2xl font-bold text-green-600",
    icon: TrendingUp,
  },
};

function getScenarioType(scenario = {}) {
  const name = scenario.case ? scenario.case.toLowerCase() : "";
  if (name.includes("bear")) return "bear";
  if (name.includes("bull")) return "bull";
  if (name.includes("base")) return "base";
  return ["bear", "base", "bull"][scenario.idx] || "base";
}

function FairValue({ data: { fairValueData, scenariosData } }) {
  // Safety check
  if (!Array.isArray(scenariosData) || scenariosData.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Fair Value & Scenarios
        </h2>
        <p className="text-gray-500 text-center py-8">
          No scenarios data available
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Fair Value Card */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
            <Target className="w-6 h-6 text-amber-600" />
          </div>
          Fair Value
        </h2>
        <CommonCard
          data={fairValueData}
          title="PE Based Valuation"
          icon="Target"
          accentColor="amber"
        />
      </div>

      {/* Scenarios Section */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
            <Scale className="w-6 h-6 text-amber-600" />
          </div>
          Scenarios
        </h2>
        <div className="space-y-5">
          {scenariosData.map((scenario, idx) => {
            const type = getScenarioType({ ...scenario, idx });
            const style = scenarioStyles[type] || scenarioStyles.base;
            const Icon = style.icon;

            return (
              <div key={type + idx} className={`p-6 rounded-xl ${style.card}`}>
                {/* Header with case label and probability */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 ${
                        type === "bear"
                          ? "bg-red-100"
                          : type === "bull"
                          ? "bg-green-100"
                          : "bg-blue-100"
                      } rounded-lg flex items-center justify-center`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          type === "bear"
                            ? "text-red-600"
                            : type === "bull"
                            ? "text-green-600"
                            : "text-blue-600"
                        }`}
                      />
                    </div>
                    <span className={`${style.label} text-xl`}>
                      {scenario.case ||
                        type.charAt(0).toUpperCase() + type.slice(1) + " Case"}
                    </span>
                  </div>
                  <span className="px-4 py-1 bg-white bg-opacity-70 rounded-full text-sm font-semibold text-gray-700">
                    {scenario.probability}% probability
                  </span>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white bg-opacity-60 p-4 rounded-lg">
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                      Target Price
                    </p>
                    <p className={style.price}>₹{scenario.target_price}</p>
                  </div>
                  <div className="bg-white bg-opacity-60 p-4 rounded-lg">
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                      EPS Estimate
                    </p>
                    <p className={style.price}>₹{scenario.eps_estimate}</p>
                  </div>
                  <div className="bg-white bg-opacity-60 p-4 rounded-lg">
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                      Return Potential
                    </p>
                    <p className={style.price}>
                      {scenario.downside || scenario.upside}
                    </p>
                  </div>
                </div>

                {/* Assumption */}
                <div className="bg-white bg-opacity-60 p-4 rounded-lg">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                    Key Assumptions
                  </p>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {scenario.assumption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FairValue;
