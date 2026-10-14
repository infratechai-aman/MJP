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
      className="relative text-white overflow-hidden min-h-[88vh] sm:min-h-screen flex items-center justify-center pt-20 pb-12 sm:pt-24 sm:pb-16"
      id="home"
    >
      {/* Cinematic Badminton Arena Atmosphere (10% lighter, zero 403 errors) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated real court arena background with Ken Burns motion */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-hero-zoom opacity-50 scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtH9zGUwla7JHxSSoUnU46Uvr1YkoUCIJh2DAiad4oyXgMKXdrAsIohrLNEhsMCFzbJ40JeldnqO2ImZSQF5JUuMGVHolNsyLaY1AavhYb7tgPFXpX0UXC_gW_TTfwwqWS2G3rrcHCsVTtvwxjYMgOaDUrQo5Lj2MuGIMa2egluIcZq4Fw6u1JLa-yKehOiwkKudLTW5xhc5pvzn2Cd7-3ubbJkRNxwZ3nL6vB_GPxrA1a4834MgIT')`
          }}
        ></div>

        {/* Multi-layer Cinematic Overlays (10% lighter rich emerald palette) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061f15] via-[#092b1e]/90 to-[#061f15]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#061f15] via-transparent to-[#061f15]/75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#061f15]/50 via-transparent to-[#061f15]"></div>

        {/* Stadium Court Matrix Pattern */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#34d399_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>

        {/* Dynamic Stadium Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[130px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          {/* Tag Badge */}
          <div
            className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-emerald-400/40 text-emerald-300 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] backdrop-blur-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ background: 'rgba(10, 50, 32, 0.65)' }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>BADMINTON • KONDHWA KHURD, PUNE</span>
          </div>

          {/* Main Title - Mobile Optimized & Punchy */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] sm:leading-[1.05]">
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

          {/* Subtitle - Mobile Compact */}
          <p
            className={`text-sm sm:text-lg text-emerald-100/85 font-normal max-w-xl leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.45s' }}
          >
            Two tournament-grade wooden courts. Glare-free arena lighting. Pune's premier indoor badminton destination in Kondhwa Khurd.
          </p>

          {/* Quick Specs Pills */}
          <div
            className={`flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-emerald-200/90 font-medium transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.55s' }}
          >
            <span className="inline-flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
              <i className="ph-bold ph-check text-emerald-400"></i>
              2 BWF Wooden Courts
            </span>
            <span className="inline-flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
              <i className="ph-bold ph-check text-emerald-400"></i>
              6:00 AM – 12:00 AM
            </span>
            <span className="inline-flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
              <i className="ph-bold ph-check text-emerald-400"></i>
              Free Parking
            </span>
          </div>

          {/* Ratings Bar */}
          <div
            className={`flex items-center gap-2.5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.65s' }}
          >
            <div className="flex text-amber-400 text-sm gap-0.5">
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star-half"></i>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">
              <span className="text-white font-bold">4.4 / 5</span>
              <span className="text-emerald-300/70 font-normal ml-1">• 22 ratings on Playo & Google</span>
            </div>
          </div>

          {/* CTA Buttons - Compact & Mobile Friendly */}
          <div
            className={`flex flex-wrap items-center gap-3 pt-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.75s' }}
          >
            <a
              className="hero-cta-primary inline-flex items-center gap-2 bg-gradient-to-r from-[#4ade80] to-[#22c55e] hover:from-[#22c55e] hover:to-[#16a34a] text-emerald-950 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-extrabold shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer relative overflow-hidden"
              href="#booking"
            >
              <i className="ph-bold ph-calendar-check text-sm sm:text-base"></i>
              <span>Book a Slot</span>
              <i className="ph-bold ph-arrow-right text-xs"></i>
            </a>

            <a
              className="inline-flex items-center gap-2 bg-emerald-900/40 hover:bg-emerald-800/50 text-white border border-emerald-500/30 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold backdrop-blur-xl transition-all hover:-translate-y-0.5"
              href="#location"
            >
              <i className="ph-bold ph-map-pin text-emerald-400"></i>
              <span>Directions</span>
            </a>

            <button
              type="button"
              onClick={onOpenVideo}
              className="inline-flex items-center gap-2 text-slate-200 hover:text-white px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium transition-all group cursor-pointer"
            >
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500/30 flex items-center justify-center text-emerald-400 transition-all group-hover:scale-110">
                <i className="ph-fill ph-play text-xs sm:text-sm"></i>
              </span>
              <span>Watch Tour</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '1.2s' }}
      >
        <span className="text-[9px] uppercase tracking-[0.25em] text-emerald-400/70 font-bold">Explore</span>
        <div className="w-5 h-8 rounded-full border border-emerald-400/40 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-emerald-400/80 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
