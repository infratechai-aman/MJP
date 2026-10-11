import React, { useEffect } from 'react';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in flex items-center gap-3 bg-[#061a12] text-white px-5 py-3.5 rounded-xl border border-emerald-500/50 shadow-2xl shadow-black/60 max-w-md">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
        type === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
      }`}>
        <i className={`ph-bold ${type === 'success' ? 'ph-check-circle' : 'ph-info'} text-lg`}></i>
      </div>
      <p className="text-sm font-semibold text-slate-100 flex-1">{message}</p>
      <button 
        onClick={onClose} 
        className="text-slate-400 hover:text-white transition-colors p-1"
        aria-label="Close notification"
      >
        <i className="ph-bold ph-x text-sm"></i>
      </button>
    </div>
  );
}
