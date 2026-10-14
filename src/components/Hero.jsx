import React, { useEffect, useRef, useState } from 'react';

export default function Hero({ onOpenVideo }) {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative text-white overflow-hidden min-h-[88vh] lg:min-h-screen flex items-center pt-20 pb-12 sm:pt-24 sm:pb-16"
      id="home"
    >
      {/* Cinematic Dark Badminton Arena Atmosphere (Restored Deep Dark Theme) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated real court arena shuttlecock background with slight blur as requested */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-[center_35%] animate-hero-zoom opacity-50 scale-105 filter blur-[2px] sm:blur-[3px]"
          style={{
            backgroundImage: `url('/hero-court-shuttle.png')`
          }}
        ></div>

        {/* Multi-layer Deep Dark Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020d08] via-[#041a0f]/90 to-[#041a0f]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020d08] via-transparent to-[#020d08]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020d08]"></div>

        {/* Subtle Matrix Pattern */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#34d399_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>

        {/* Dynamic Stadium Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl lg:max-w-4xl space-y-4 sm:space-y-7">
          {/* Authentic Venue Location Badge (Replaced generic AI pill) */}
          <div
            className={`inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-lg bg-[#0e1612]/80 border border-white/10 text-zinc-300 text-xs font-medium backdrop-blur-md shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="flex items-center gap-1.5 text-[#21D6A0] font-semibold text-xs tracking-wide">
              <i className="ph-fill ph-map-pin text-sm text-[#21D6A0]"></i>
              Kondhwa Khurd, Pune
            </span>
            <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
            <span className="text-[11px] text-zinc-400 font-normal">2 BWF Wooden Courts</span>
          </div>

          {/* Main Title - Responsive: Compact on mobile, Grand & Sweeping on Desktop */}
          <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-black tracking-tight leading-[1.05]">
            <span
              className={`block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '0.15s' }}
            >
              Your next
            </span>
            <span
              className={`block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '0.3s' }}
            >
              game{' '}
              <span className="bg-gradient-to-r from-[#4ade80] via-[#22c55e] to-[#10b981] bg-clip-text text-transparent">
                starts here.
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-sm sm:text-xl text-slate-300/90 font-normal max-w-2xl leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.45s' }}
          >
            Two tournament-grade wooden courts. Glare-free arena lighting. Pune's premier indoor badminton destination in Kondhwa Khurd.
          </p>

          {/* Quick Specs Pills */}
          <div
            className={`flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-emerald-300/90 font-medium transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.55s' }}
          >
            <span className="inline-flex items-center gap-1.5 text-slate-200">
              <i className="ph-bold ph-check text-emerald-400"></i>
              2 BWF Wooden Courts
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-200">
              <i className="ph-bold ph-check text-emerald-400"></i>
              6:00 AM – 12:00 AM
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-200">
              <i className="ph-bold ph-check text-emerald-400"></i>
              Free Campus Parking
            </span>
          </div>

          {/* Ratings Bar */}
          <div
            className={`flex items-center gap-2.5 sm:gap-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.65s' }}
          >
            <div className="flex text-amber-400 text-sm sm:text-base gap-0.5">
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star-half"></i>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">
              <span className="text-white font-bold">4.4 / 5</span>
              <span className="text-slate-400 font-normal ml-1.5">• 22 ratings on Playo & Google</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap items-center gap-3 sm:gap-4 pt-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.75s' }}
          >
            <a
              className="hero-cta-primary inline-flex items-center gap-2.5 bg-gradient-to-r from-[#4ade80] to-[#22c55e] hover:from-[#22c55e] hover:to-[#16a34a] text-emerald-950 px-5 sm:px-8 py-3 sm:py-4 rounded-xl text-xs sm:text-sm font-extrabold shadow-2xl shadow-emerald-500/30 transition-all transform hover:-translate-y-1 hover:shadow-emerald-500/40 cursor-pointer relative overflow-hidden"
              href="#booking"
            >
              <i className="ph-bold ph-calendar-check text-sm sm:text-base"></i>
              <span>Check Available Slots</span>
              <i className="ph-bold ph-arrow-right text-xs"></i>
            </a>

            <a
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-emerald-500/40 px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-xs sm:text-sm font-semibold backdrop-blur-xl transition-all hover:-translate-y-0.5"
              href="#location"
            >
              <i className="ph-bold ph-map-pin"></i>
              <span>Get Directions</span>
            </a>

            <button
              type="button"
              onClick={onOpenVideo}
              className="inline-flex items-center gap-2.5 text-slate-200 hover:text-white px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-all group cursor-pointer"
            >
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 group-hover:bg-emerald-500/30 flex items-center justify-center text-emerald-400 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/20">
                <i className="ph-fill ph-play text-xs sm:text-sm"></i>
              </span>
              <span>Watch Arena Tour</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className={`absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '1.2s' }}
      >
        <span className="text-[9px] uppercase tracking-[0.25em] text-emerald-400/60 font-semibold">Scroll to explore</span>
        <div className="w-5 sm:w-6 h-8 sm:h-9 rounded-full border border-emerald-400/30 flex items-start justify-center p-1 sm:p-1.5">
          <div className="w-1 h-1.5 sm:h-2 rounded-full bg-emerald-400/60 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
