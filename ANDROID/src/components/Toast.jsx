import React, { useEffect } from 'react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-fade-in max-w-md mx-auto">
      <div className="bg-[#0b261e] text-white px-4 py-3 rounded-xl border border-brand-mint/40 shadow-2xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-6 h-6 rounded-full bg-brand-mint/20 text-brand-mint flex items-center justify-center shrink-0">
            ✓
          </span>
          <span className="text-xs font-semibold text-gray-100">{message}</span>
        </div>
        <button
          onClick={onClose}
          type="button"
          className="text-gray-400 hover:text-white p-1"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
