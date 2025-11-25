import React from "react";
import {
  Tag, // Lucide icon import for the key field
  Info
} from "lucide-react";

// Helper for Title Casing keys
const titleCase = (str) =>
  str.replace(/_/g, " ")
     .replace(/\b\w/g, (l) => l.toUpperCase());

export default function KeyValueCard({
  label,  // The key (string)
  value,  // The value (string, number, etc.)
  icon = "Tag", // Name of the icon to use, default is 'Tag'
  accentColor = "blue",
  className = "",
}) {
  // Icon mapping for easy extendability
  const ICON_MAP = { Tag, Info };

  // Pick icon component by string (or default)
  const CardIcon = ICON_MAP[icon] || Tag;

  // Color theme palette
  const colorSchemes = {
    blue: {
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
      textColor: "text-blue-600",
    },
    emerald: {
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-300",
      textColor: "text-emerald-600",
    },
    amber: {
      bgColor: "bg-amber-50",
      borderColor: "border-amber-300",
      textColor: "text-amber-600",
    },
    purple: {
      bgColor: "bg-purple-50",
      borderColor: "border-purple-300",
      textColor: "text-purple-600",
    },
    rose: {
      bgColor: "bg-rose-50",
      borderColor: "border-rose-300",
      textColor: "text-rose-600",
    },
  };
  const { bgColor, borderColor, textColor } = colorSchemes[accentColor] || colorSchemes.blue;

  return (
    <div className={`bg-white rounded-2xl p-6 border-2 ${borderColor} shadow-sm flex items-center gap-6 max-w-xl ${className}`}>
      {/* Icon section */}
      <div className={`w-10 h-10 ${bgColor} rounded-xl flex items-center justify-center`}>
        <CardIcon className={`w-6 h-6 ${textColor}`} />
      </div>
      {/* Key-Value display */}
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
          {titleCase(label)}
        </span>
        <span className="text-base font-bold text-gray-900 break-words">
          {String(value)}
        </span>
      </div>
    </div>
  );
}
