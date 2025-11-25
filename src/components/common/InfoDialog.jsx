import { useState } from "react";
import { Info, X } from "lucide-react";

function InfoDialog({ label, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Info Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 hover:text-slate-800 transition-all hover:shadow-md"
        aria-label={`More info about ${label}`}
      >
        <Info className="w-4 h-4" />
      </button>

      {/* Dialog Overlay & Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Dialog Box */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full mx-4 animate-scale-in">
            {/* Close Button (Top Right) */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 transition-all"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Label/Title */}
            <h3 className="text-2xl font-bold text-gray-800 mb-4 pr-8">
              {label}
            </h3>

            {/* Content */}
            <div className="text-gray-700 leading-relaxed mb-6">
              {content}
            </div>

            {/* Close Button (Bottom) */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-full px-6 py-3 bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </>
  );
}

export default InfoDialog;
