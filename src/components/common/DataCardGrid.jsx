import React, { useState } from "react";
import {
  PieChart, TrendingUp, BarChart3, Calendar, Clock, 
  Calculator, Percent, Activity, TrendingDown, Eye, Target,
  FileText, Hash, Info, AlertCircle, IndianRupee, DollarSign,
  Zap, Layers, Award, BookOpen, Coins, Users, ChevronDown, ChevronUp
} from "lucide-react";

const DEFAULT_ICON = "IndianRupee";

const defaultKeyIcons = {
  value: IndianRupee,
  price: IndianRupee,
  eps: IndianRupee,
  revenue: IndianRupee,
  profit: IndianRupee,
  amount: IndianRupee,
  cost: IndianRupee,
  
  pe: TrendingUp,
  pe_ratio: TrendingUp,
  peg_ratio: Target,
  margin: Percent,
  percent: Percent,
  growth: TrendingUp,
  decline: TrendingDown,
  
  calculation: Calculator,
  formula: Calculator,
  analysis: Eye,
  assessment: Eye,
  note: Info,
  
  unit: Hash,
  units: Hash,
  
  date: Calendar,
  time: Clock,
  year: Calendar,
  
  debt: Activity,
  liabilities: Activity,
  
  ebitda: BarChart3,
  description: FileText,
  status: AlertCircle,
  
  default: PieChart,
};

const ICON_MAP = {
  IndianRupee,
  DollarSign,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Target,
  Calculator,
  Percent,
  Activity,
  Eye,
  Calendar,
  Clock,
  PieChart,
  Hash,
  Info,
  AlertCircle,
  FileText,
  Zap,
  Layers,
  Award,
  BookOpen,
  Coins,
  Users,
  ChevronDown,
  ChevronUp
};

const getIconForKey = (key, customIcons = {}) => {
  const iconMapLocal = { ...defaultKeyIcons, ...customIcons };
  return iconMapLocal[key.toLowerCase()] || iconMapLocal.default;
};

// Helper to safely render values
const renderValue = (value) => {
  if (value === null || value === undefined) return "N/A";
  
  if (typeof value === "object") {
    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return String(value);
    }
  }
  
  return String(value);
};

export default function DataCardGrid({
  data,
  title = "Metric Details",
  accentColor = "blue",
  icon = DEFAULT_ICON,
  customIcons = {},
  className = "",
  collapsible = false, // NEW PROP
}) {
  const [isCollapsed, setIsCollapsed] = useState(collapsible);
  
  const TitleIcon = ICON_MAP[icon] || ICON_MAP[DEFAULT_ICON];

  const colorSchemes = {
    blue: {
      gradient: "from-blue-500 to-indigo-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
    },
    emerald: {
      gradient: "from-emerald-500 to-teal-600",
      textColor: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-300",
    },
    amber: {
      gradient: "from-amber-500 to-orange-600",
      textColor: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-300",
    },
    purple: {
      gradient: "from-purple-500 to-pink-600",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-300",
    },
    rose: {
      gradient: "from-rose-500 to-pink-600",
      textColor: "text-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-300",
    },
  };

  const colorScheme = colorSchemes[accentColor] || colorSchemes.blue;

  if (!data || typeof data !== "object") {
    return (
      <div className="text-red-500 p-4 border border-red-300 rounded-lg">
        Invalid data provided
      </div>
    );
  }

  const { value, unit, ...restData } = data;
  
  return (
    <div className={`h-full ${className}`}>
      <div className="group relative h-full">
        <div
          className={`absolute -inset-0.5 bg-gradient-to-r ${colorScheme.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-300`}
        />

        <div
          className={`relative bg-white rounded-2xl p-8 border-2 ${colorScheme.borderColor} hover:shadow-xl transition-all duration-300 h-full flex flex-col`}
        >
          {/* Header with optional collapse button */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-200 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 ${colorScheme.bgColor} rounded-xl flex items-center justify-center`}>
                <TitleIcon className={`w-7 h-7 ${colorScheme.textColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            </div>
            
            {/* Collapse button (only if collapsible prop is true) */}
            {collapsible && (
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label={isCollapsed ? "Expand" : "Collapse"}
              >
                {isCollapsed ? (
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                ) : (
                  <ChevronUp className="w-6 h-6 text-gray-600" />
                )}
              </button>
            )}
          </div>

          {/* Collapsible content */}
          {(!collapsible || !isCollapsed) && (
            <dl className="space-y-4 flex-1">
              {/* Display value + unit together in first field */}
              {value !== undefined && (
                <div className="flex flex-col gap-2 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2">
                    <Coins className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <dt className="text-sm font-semibold text-gray-700 capitalize">
                      Value:
                    </dt>
                  </div>
                  <dd className="text-lg font-bold text-gray-900 pl-7">
                    {renderValue(value)}
                    {unit && <span className="text-sm font-normal text-gray-600 ml-2">{renderValue(unit)}</span>}
                  </dd>
                </div>
              )}

              {/* Display remaining fields */}
              {Object.entries(restData).map(([key, fieldValue]) => {
                const FieldIcon = getIconForKey(key, customIcons);
                
                return (
                  <div
                    key={key}
                    className="flex flex-col gap-2 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <FieldIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <dt className="text-sm font-semibold text-gray-700 capitalize">
                        {key.replace(/_/g, " ")}:
                      </dt>
                    </div>
                    
                    <dd className="text-base text-gray-900 pl-7 leading-relaxed break-words">
                      {renderValue(fieldValue)}
                    </dd>
                  </div>
                );
              })}
            </dl>
          )}
        </div>
      </div>
    </div>
  );
}
