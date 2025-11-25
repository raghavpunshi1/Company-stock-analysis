import React from "react";
import { 
  TrendingUp, DollarSign, BarChart3, Target, 
  Activity, PieChart, Percent, Calculator,
  TrendingDown, Eye, Clock, Calendar
} from "lucide-react";

// Generic Metric Card Component
const MetricCard = ({ 
  icon: Icon, 
  label, 
  value, 
  unit, 
  subtitle, 
  accentColor = "blue",
  trend = null // "up", "down", or null
}) => {
  const colors = {
    blue: "from-blue-500 to-indigo-600 text-blue-600 bg-blue-50 border-blue-300",
    emerald: "from-emerald-500 to-teal-600 text-emerald-600 bg-emerald-50 border-emerald-300",
    purple: "from-purple-500 to-pink-600 text-purple-600 bg-purple-50 border-purple-300",
    amber: "from-amber-500 to-orange-600 text-amber-600 bg-amber-50 border-amber-300",
    rose: "from-rose-500 to-pink-600 text-rose-600 bg-rose-50 border-rose-300",
    slate: "from-slate-500 to-gray-600 text-slate-600 bg-slate-50 border-slate-300"
  };

  const colorScheme = colors[accentColor] || colors.blue;
  const [gradient, textColor, bgColor, borderColor] = colorScheme.split(" ");

  return (
    <div className="group relative">
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-300`}></div>
      
      <div className={`relative bg-white rounded-2xl p-6 border-2 ${borderColor} hover:shadow-xl transition-all duration-300`}>
        {/* Icon */}
        <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center mb-4`}>
          <Icon className={`w-6 h-6 ${textColor}`} />
        </div>

        {/* Label */}
        <p className="text-sm text-gray-600 font-medium uppercase tracking-wide mb-2">
          {label}
        </p>

        {/* Value */}
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl font-bold text-gray-900">
            {typeof value === "number" ? value.toLocaleString() : value || "N/A"}
          </span>
          {unit && (
            <span className="text-lg text-gray-500 font-medium">{unit}</span>
          )}
          {trend && (
            <span className={`ml-auto text-sm ${trend === "up" ? "text-emerald-600" : "text-rose-600"}`}>
              {trend === "up" ? "↑" : "↓"}
            </span>
          )}
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs text-gray-500 mt-2 line-clamp-2">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

// GENERIC METRIC CARDS GRID COMPONENT
export default function MetricCardsGrid({ 
  title = "Metrics",
  data = {},
  metrics = [], // Array of metric configs
  bannerKey = null, // Optional: Key for bottom banner text
  bannerTitle = "Overall Assessment",
  columns = 4, // Grid columns (1, 2, 3, 4)
  titleIcon: TitleIcon = BarChart3
}) {
  // Default icon mapping for common metric types
  const defaultIcons = {
    eps: DollarSign,
    pe_ratio: TrendingUp,
    price_to_book: BarChart3,
    peg_ratio: Target,
    revenue: DollarSign,
    profit: TrendingUp,
    margin: Percent,
    debt: Activity,
    ebitda: Calculator,
    growth: TrendingUp,
    decline: TrendingDown,
    analysis: Eye,
    time: Clock,
    date: Calendar,
    default: PieChart
  };

  // Get icon for a metric
  const getIcon = (iconName) => {
    if (typeof iconName === "function") return iconName; // Already a component
    return defaultIcons[iconName] || defaultIcons.default;
  };

  // Grid column classes
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-xl">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <TitleIcon className="w-8 h-8 text-blue-600" />
        {title}
      </h2>

      {/* Grid of Metric Cards */}
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {metrics.map((metric, idx) => {
          const {
            key,           // Data key (e.g., "eps")
            label,         // Display label (e.g., "Earnings Per Share")
            icon,          // Icon name or component
            valueKey = "value",      // Key for value (default: "value")
            unitKey = "unit",        // Key for unit (default: "unit")
            subtitleKey = null,      // Key for subtitle
            accentColor = "blue",    // Color theme
            trend = null,            // "up" or "down"
            formatter = null         // Custom value formatter
          } = metric;

          // Extract data
          const metricData = data[key];
          if (!metricData) return null;

          // Get value
          let value = typeof metricData === "object" ? metricData[valueKey] : metricData;
          if (formatter) value = formatter(value);

          // Get unit
          const unit = typeof metricData === "object" ? metricData[unitKey] : null;

          // Get subtitle (calculation, assessment, note, etc.)
          let subtitle = null;
          if (subtitleKey && metricData[subtitleKey]) {
            subtitle = metricData[subtitleKey];
          } else if (typeof metricData === "object") {
            subtitle = metricData.calculation || metricData.assessment || metricData.note;
          }

          return (
            <MetricCard
              key={key}
              icon={getIcon(icon)}
              label={label}
              value={value}
              unit={unit}
              subtitle={subtitle}
              accentColor={accentColor}
              trend={trend}
            />
          );
        })}
      </div>

      {/* Optional Banner */}
      {bannerKey && data[bannerKey] && (
        <div className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <Target className="w-5 h-5" />
            {bannerTitle}
          </h3>
          <p className="text-blue-50 leading-relaxed">
            {data[bannerKey]}
          </p>
        </div>
      )}
    </div>
  );
}
