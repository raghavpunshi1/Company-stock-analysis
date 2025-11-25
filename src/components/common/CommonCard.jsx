// 



import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronRight, Sparkles } from "lucide-react";

// ANIMATED CONTAINER
const AnimatedContainer = ({ open, children }) => (
  <div
    className={`
      overflow-hidden transition-all duration-300 ease-in-out
      ${open ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"}
    `}
  >
    {children}
  </div>
);

// RECURSIVE KEY-VALUE ROW (handles unlimited nesting depth)
const KeyValueRow = ({ label, value, depth = 0 }) => {
  const isObject = typeof value === "object" && value !== null && !Array.isArray(value);
  const isArray = Array.isArray(value);
  const [open, setOpen] = useState(false);

  // Calculate indentation based on depth
  const paddingLeft = depth > 0 ? `${depth * 16}px` : "0px";

  // Format primitive values
  const formatValue = (val) => {
    if (val === null) return "null";
    if (val === undefined) return "undefined";
    if (typeof val === "boolean") return val.toString();
    if (typeof val === "number") return val.toLocaleString();
    return String(val);
  };

  // Depth-based styling
  const depthColors = [
    "bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200",
    "bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200",
    "bg-gradient-to-br from-emerald-50 to-teal-100 border-emerald-200",
    "bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200",
  ];

  const colorClass = depthColors[depth % depthColors.length] || depthColors[0];

  return (
    <div 
      className={`p-3 rounded-xl border-2 shadow-sm hover:shadow-md transition-all duration-200 ${colorClass}`}
      style={{ marginLeft: paddingLeft }}
    >
      <div
        className="flex justify-between items-center cursor-pointer group"
        onClick={() => (isObject || isArray) && setOpen(!open)}
      >
        <span className="font-semibold text-gray-900 capitalize group-hover:text-blue-600 transition-colors">
          {label.replace(/_/g, " ")}
        </span>
        {(isObject || isArray) && (
          <div className="p-1 rounded-lg bg-white/50 group-hover:bg-white transition-colors">
            {open ? <ChevronDown size={18} className="text-blue-600" /> : <ChevronRight size={18} className="text-gray-600" />}
          </div>
        )}
      </div>

      {/* Render primitive values */}
      {!isObject && !isArray && (
        <div className="mt-2 pl-1 text-gray-800 font-medium bg-white/50 rounded-lg px-3 py-2">
          {formatValue(value)}
        </div>
      )}

      {/* Render OBJECT recursively */}
      {isObject && (
        <AnimatedContainer open={open}>
          <div className="mt-3 pl-4 border-l-4 border-blue-300 space-y-2">
            {Object.entries(value).map(([k, v]) => (
              <KeyValueRow 
                key={k} 
                label={k} 
                value={v} 
                depth={depth + 1} 
              />
            ))}
          </div>
        </AnimatedContainer>
      )}

      {/* Render ARRAY recursively */}
      {isArray && (
        <AnimatedContainer open={open}>
          <div className="mt-3 pl-4 border-l-4 border-purple-300 space-y-2">
            {value.map((item, index) => (
              <KeyValueRow 
                key={index} 
                label={`[${index}]`} 
                value={item} 
                depth={depth + 1} 
              />
            ))}
          </div>
        </AnimatedContainer>
      )}
    </div>
  );
};

// MAIN CARD
export default function CommonCard({ 
  title = "Details", 
  titleKey = null, 
  data = {},
  highlights = [], // Array of keys to highlight in collapsed view
  badgeKey = null,  // Optional: key for colored badge
  accentColor = "blue" // Default accent color: blue, purple, emerald, amber, rose
}) {
  const [open, setOpen] = useState(false);

  // Determine collapsed title from data
  const collapsedTitle = titleKey && data[titleKey] ? String(data[titleKey]) : title;

  // Extract highlight values from data
  const getHighlightValue = (key) => {
    if (!data[key]) return null;
    
    // Handle nested objects with "value" key
    if (typeof data[key] === "object" && data[key]?.value !== undefined) {
      return data[key].value;
    }
    
    return data[key];
  };

  // Color schemes
  const colorSchemes = {
    blue: {
      gradient: "from-blue-500 to-indigo-600",
      bg: "bg-gradient-to-br from-blue-50 to-indigo-100",
      border: "border-blue-300",
      text: "text-blue-700",
      badge: "bg-blue-600",
      hover: "hover:border-blue-400 hover:shadow-blue-200"
    },
    purple: {
      gradient: "from-purple-500 to-pink-600",
      bg: "bg-gradient-to-br from-purple-50 to-pink-100",
      border: "border-purple-300",
      text: "text-purple-700",
      badge: "bg-purple-600",
      hover: "hover:border-purple-400 hover:shadow-purple-200"
    },
    emerald: {
      gradient: "from-emerald-500 to-teal-600",
      bg: "bg-gradient-to-br from-emerald-50 to-teal-100",
      border: "border-emerald-300",
      text: "text-emerald-700",
      badge: "bg-emerald-600",
      hover: "hover:border-emerald-400 hover:shadow-emerald-200"
    },
    amber: {
      gradient: "from-amber-500 to-orange-600",
      bg: "bg-gradient-to-br from-amber-50 to-orange-100",
      border: "border-amber-300",
      text: "text-amber-700",
      badge: "bg-amber-600",
      hover: "hover:border-amber-400 hover:shadow-amber-200"
    },
    rose: {
      gradient: "from-rose-500 to-pink-600",
      bg: "bg-gradient-to-br from-rose-50 to-pink-100",
      border: "border-rose-300",
      text: "text-rose-700",
      badge: "bg-rose-600",
      hover: "hover:border-rose-400 hover:shadow-rose-200"
    }
  };

  const colors = colorSchemes[accentColor] || colorSchemes.blue;

  return (
    <Card className={`rounded-2xl shadow-lg ${colors.bg} border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-xl w-full group relative overflow-hidden`}>
      {/* Decorative gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient}`}></div>
      
      {/* Floating badge (optional) */}
      {badgeKey && data[badgeKey] && (
        <div className={`absolute top-4 right-4 ${colors.badge} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1`}>
          <Sparkles size={12} />
          {String(data[badgeKey])}
        </div>
      )}

      {/* Card Header */}
      <div
        className="flex justify-between items-center p-5 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex-1">
          <h2 className={`text-xl font-bold ${colors.text} flex items-center gap-2 mb-2`}>
            {open ? title : collapsedTitle}
          </h2>
          
          {/* Highlight Pills (only show when collapsed) */}
          {!open && highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {highlights.map((key) => {
                const value = getHighlightValue(key);
                if (!value) return null;
                
                return (
                  <div 
                    key={key}
                    className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-300 shadow-sm"
                  >
                    <span className="text-xs text-gray-600 font-medium uppercase">
                      {key.replace(/_/g, " ")}
                    </span>
                    <div className="text-sm font-bold text-gray-900">
                      {typeof value === "number" ? value.toLocaleString() : value}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        
        <div className={`ml-4 p-2 rounded-xl ${colors.bg} border-2 ${colors.border} group-hover:scale-110 transition-transform`}>
          {open ? (
            <ChevronDown size={24} className={colors.text} />
          ) : (
            <ChevronRight size={24} className={colors.text} />
          )}
        </div>
      </div>

      {/* Card Body */}
      <AnimatedContainer open={open}>
        <CardContent className="pt-0 pb-5 px-5">
          <div className="grid gap-3">
            {Object.entries(data).map(([key, value]) => (
              <KeyValueRow key={key} label={key} value={value} depth={0} />
            ))}
          </div>
        </CardContent>
      </AnimatedContainer>

      {/* Decorative corner glow */}
      <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${colors.gradient} opacity-10 blur-3xl pointer-events-none`}></div>
    </Card>
  );
}
