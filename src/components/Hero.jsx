import React from 'react';

export default function Hero({ onOpenVideo }) {
  return (
    <section className="relative bg-[#072218] text-white overflow-hidden py-16 lg:py-24" id="home">
      {/* Full-Bleed Background Action Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Badminton match action on wooden court"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPSiRoa1r9yCGfUIB7cUozgOz9UadCu0jqDdiypCJ1jJ7vvXKt9xnJ6zxtutIhHwNOaMZ4dBKJI-Gw-CWB8KZPhKx1UizAUICFvYFc2ILXLWd7LFW-jmXvWphhg_kKBQvXfLOe1cRG-1PSS-H5Urgo4DN31qrUklejSf01ZlRl5hnSgi_W0yFzZR-yq472OpX_XmNARH9AnEyAPvRUkdqGC-ov3AssHyTv3WhLjP1vbhN7x-2t0D6g"
        />
        {/* Gradient overlays for readability and dramatic atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04150e] via-[#072218]/90 to-[#072218]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#04150e] via-transparent to-[#04150e]/60"></div>
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[480px]">
          {/* Hero Left Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>BADMINTON • KONDHWA KHURD, PUNE</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Your next <br />
              game <span className="text-[#22c55e]">starts here.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-200 font-normal max-w-xl leading-relaxed drop-shadow">
              Two wooden courts. Great rallies.<br />Your local badminton spot.
            </p>

            {/* Ratings Bar */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex text-amber-400 text-base">
                <i className="ph-fill ph-star"></i>
                <i className="ph-fill ph-star"></i>
                <i className="ph-fill ph-star"></i>
                <i className="ph-fill ph-star"></i>
                <i className="ph-fill ph-star-half"></i>
              </div>
              <div className="text-sm font-semibold text-slate-200">
                <span className="text-white font-bold">4.4 / 5</span>
                <span className="text-slate-300 font-normal ml-1.5">• 22 ratings on Playo</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                className="inline-flex items-center gap-2.5 bg-[#4ade80] hover:bg-[#22c55e] text-emerald-950 px-6 py-3.5 rounded-lg text-sm font-bold shadow-xl shadow-emerald-950/50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                href="#booking"
              >
                <i className="ph-bold ph-calendar-check text-base"></i>
                <span>Check Available Slots</span>
                <i className="ph-bold ph-arrow-right text-xs"></i>
              </a>

              <a
                className="inline-flex items-center gap-2 bg-[#0d3324]/90 hover:bg-[#124230] text-emerald-100 border border-emerald-700/60 px-5 py-3.5 rounded-lg text-sm font-semibold backdrop-blur-md transition-colors"
                href="#location"
              >
                <i className="ph-bold ph-map-pin"></i>
                <span>Get Directions</span>
              </a>

              <button
                type="button"
                onClick={onOpenVideo}
                className="inline-flex items-center gap-2.5 text-slate-200 hover:text-white px-4 py-3.5 text-sm font-medium transition-colors group cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-emerald-500/30 flex items-center justify-center text-emerald-400 backdrop-blur-sm transition-colors">
                  <i className="ph-fill ph-play text-xs group-hover:scale-110 transition-transform"></i>
                </span>
                <span>Watch the Court</span>
              </button>
            </div>
          </div>

          {/* Bottom Right Highlight Badge Overlay */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end self-end pt-4 lg:pt-0">
            <div className="bg-emerald-950/85 backdrop-blur-md p-4 rounded-xl border border-emerald-700/50 flex items-center justify-between gap-4 shadow-2xl max-w-sm w-full">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <i className="ph-bold ph-trophy text-lg"></i>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide uppercase">Professional Court Finish</h4>
                  <p className="text-[11px] text-emerald-300/80">Shock-absorbing premium timber flooring</p>
                </div>
              </div>
              <span className="text-xs font-bold bg-emerald-500 text-emerald-950 px-2.5 py-1 rounded shrink-0">2 Courts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
