import React from 'react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-[#061a12] border border-emerald-700/80 rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-white shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-emerald-900/50 transition-colors"
          aria-label="Close modal"
        >
          <i className="ph-bold ph-x text-lg"></i>
        </button>

        {/* Modal Header */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-700/40 text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-2">
            <i className="ph-fill ph-video-camera"></i>
            <span>Virtual Arena Tour</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">Watch The Court</h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Take a 360° visual walkthrough of MJP Badminton Court in Kondhwa Khurd, Pune.
          </p>
        </div>

        {/* Video Player Display */}
        <div className="relative rounded-xl overflow-hidden border border-emerald-800 shadow-xl bg-black aspect-video mb-5 flex items-center justify-center group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBllT1VUxkoH5PF7GVZJX3j0Z8GeCp9t0dUJHUUrm1W1pJmiINw3dDHfGkDsjXDRMmiMV_-safpglqWf05Z8YmIwRYta6hZn3jlg6e9MU8yqVHgZr_bEjqm-z9ZKA0dN-pOaHNp1euI6jE4NLzRFEjJWQSIYaA439k1b2W5sU-QU5CVkIwlSRlcRkedGWoAxWvjZxiTmD1FzcqTho7AGXPsB2f7eAsmgbQnOqba8gTwqCuWcOpH1ly7"
            alt="Court Video Arena preview"
            className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* Interactive Play Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-emerald-950 flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/40 pulse-glow mb-3">
              <i className="ph-fill ph-play ml-1"></i>
            </div>
            <span className="text-xs font-bold text-white tracking-wide uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30">
              HD Court Walkthrough & Match Action
            </span>
          </div>

          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-slate-300">
            <span>Duration: 1m 45s</span>
            <span>1080p 60FPS</span>
          </div>
        </div>

        {/* Court Specifications Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-5">
          <div className="p-3 bg-[#0a2e20] border border-emerald-800/60 rounded-xl">
            <h5 className="font-bold text-emerald-400 mb-0.5">Teak Wood Floor</h5>
            <p className="text-[11px] text-slate-300">Shock-absorbing subfloor protects knees and ankles.</p>
          </div>
          <div className="p-3 bg-[#0a2e20] border border-emerald-800/60 rounded-xl">
            <h5 className="font-bold text-emerald-400 mb-0.5">Glare-Free Lighting</h5>
            <p className="text-[11px] text-slate-300">Symmetrical LED lighting prevents shuttlecock blinding.</p>
          </div>
          <div className="p-3 bg-[#0a2e20] border border-emerald-800/60 rounded-xl">
            <h5 className="font-bold text-emerald-400 mb-0.5">Elevated Stands</h5>
            <p className="text-[11px] text-slate-300">Comfortable viewing gallery for matches and friends.</p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-emerald-900/60">
          <a
            href="#booking"
            onClick={onClose}
            className="inline-flex items-center gap-2 bg-[#4ade80] hover:bg-[#22c55e] text-emerald-950 px-5 py-2.5 rounded-xl text-xs font-black transition-all"
          >
            <span>Book This Court Now</span>
            <i className="ph-bold ph-arrow-right"></i>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-slate-400 hover:text-white text-xs font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
