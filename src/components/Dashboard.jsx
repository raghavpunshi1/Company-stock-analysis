import { useState } from "react";
import AnalysisMetadata from "./sections/AnalysisMetadata";
import CompanyIdentification from "./sections/CompanyIdentification";
import StockPrice from "./sections/StockPrice";
import FinancialMetrics from "./sections/FinancialMetrics";
import DebtAnalysis from "./sections/DebtAnalysis";
import Valuation from "./sections/Valuation";
import PeerComparison from "./sections/PeerComparison";
import TechnicalAnalysis from "./sections/TechnicalAnalysis";
import RecentDevelopments from "./sections/RecentDevelopments";
import AnalystConsensus from "./sections/AnalystConsensus";
import FairValue from "./sections/FairValue";
import InvestmentDecision from "./sections/InvestmentDecision";
import ActionPlan from "./sections/ActionPlan";
import ConfidenceMetrics from "./sections/ConfidenceMetrics";
import ExecutionChecklist from "./sections/ExecutionChecklist";
import Citations from "./sections/Citations";
import InfoDialog from "./common/InfoDialog";

function Dashboard({ data }) {
  const [activeSection, setActiveSection] = useState("company_identification");

  const sections = [
    {
      id: "company_identification",
      label: "Company Identification",
      component: CompanyIdentification,
      data: data,
    },
    {
      id: "stock_price",
      label: "Stock Price & Market Cap",
      component: StockPrice,
      data: {
        stock_price: data.stock_price,
        market_cap: data.market_cap,
        shares_outstanding: data.shares_outstanding,
      },
    },
    {
      id: "financial_metrics",
      label: "Financial Metrics",
      component: FinancialMetrics,
      data: data.financial_metrics,
    },
    {
      id: "valuation",
      label: "Valuation Multiples",
      component: Valuation,
      data: data.valuation,
    },
    {
      id: "competitor_comparison",
      label: "Competitor Comparison",
      component: PeerComparison,
      data: data.competitor_comparison,
    },
    {
      id: "technical_analysis",
      label: "Technical Analysis",
      component: TechnicalAnalysis,
      data: data.technical,
    },
    {
      id: "recent_developments",
      label: "Recent Developments",
      component: RecentDevelopments,
      data: data.recent_developments,
    },
    {
      id: "fair_value",
      label: "Fair Value & Scenarios",
      component: FairValue,
      data: { fairValueData: data.fair_value, scenariosData: data.scenarios },
    },
    {
      id: "investment_decision",
      label: "Investment Decision",
      component: AnalystConsensus,
      data: {
        analyst_consensus: data.analyst_consensus,
        investment_decision: data.investment_decision,
        action_plan: data.action_plan,
      },
    },
  ];

  const activeComponent = sections.find((s) => s.id === activeSection);
  const ActiveComponent = activeComponent.component;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Static Header */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Company Info */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {data.company_name}
              </h1>
              <p className="text-sm text-gray-600">
                {data.ticker} • {data.sector}
              </p>
            </div>

            {/* Right: Stock Price, Info Button, Date */}
            <div className="flex flex-col items-end">
              {/* Price and Info Button Row */}
              <div className="flex items-center gap-2 mb-1">
                <p className="text-3xl font-bold text-teal-600">
                  ₹{data.stock_price.value.toFixed(2)}
                </p>
                <InfoDialog label="Info" content={data.stock_price.note} />
              </div>
              {/* Date */}
              <p className="text-sm text-gray-600">
                {data.stock_price.date} (most recent known)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg min-h-screen sticky top-20">
          <div className="p-4">
            <h2 className="text-sm font-bold text-gray-500 mb-3 uppercase">
              Sections
            </h2>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`sidebar-item w-full text-left px-3 py-2 rounded text-sm ${
                    activeSection === section.id
                      ? "active"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          <div className="max-w-5xl mx-auto">
            <ActiveComponent data={activeComponent.data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
