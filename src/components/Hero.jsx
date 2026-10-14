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
      className="relative text-white overflow-hidden min-h-screen flex items-center justify-center pt-24 pb-16"
      id="home"
      style={{ minHeight: '100vh' }}
    >
      {/* Full-Bleed Background Video & Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated dynamic image fallback with Ken Burns zoom */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-hero-zoom opacity-40 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtH9zGUwla7JHxSSoUnU46Uvr1YkoUCIJh2DAiad4oyXgMKXdrAsIohrLNEhsMCFzbJ40JeldnqO2ImZSQF5JUuMGVHolNsyLaY1AavhYb7tgPFXpX0UXC_gW_TTfwwqWS2G3rrcHCsVTtvwxjYMgOaDUrQo5Lj2MuGIMa2egluIcZq4Fw6u1JLa-yKehOiwkKudLTW5xhc5pvzn2Cd7-3ubbJkRNxwZ3nL6vB_GPxrA1a4834MgIT')`
          }}
        ></div>

        {/* Looping HTML5 Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 opacity-60 mix-blend-screen"
          poster="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1920&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/4761446/4761446-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Multi-layer Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020d08] via-[#020d08]/90 to-[#020d08]/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020d08] via-transparent to-[#020d08]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020d08]/60 via-transparent to-[#020d08]"></div>

        {/* Subtle Badminton Court Line Overlay Patterns */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#34d399_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>

        {/* Dynamic Stadium Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-400/8 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8">
        <div className="max-w-3xl space-y-7">
          {/* Tag Badge */}
          <div
            className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ background: 'rgba(6, 78, 47, 0.35)', transitionDelay: '0.2s' }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>BADMINTON • KONDHWA KHURD, PUNE</span>
          </div>

          {/* Main Title - Staggered reveal */}
          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black tracking-tight leading-[1.03]">
            <span
              className={`block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              Your next
            </span>
            <span
              className={`block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.6s' }}
            >
              game{' '}
              <span className="bg-gradient-to-r from-[#4ade80] via-[#22c55e] to-[#10b981] bg-clip-text text-transparent">
                starts here.
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-slate-300/90 font-normal max-w-2xl leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.8s' }}
          >
            Two tournament-grade wooden courts. Glare-free arena lighting. Pune's premier indoor badminton destination in Kondhwa Khurd.
          </p>

          {/* Quick Stats Specs (Clean text, no AI slop boxes) */}
          <div
            className={`flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-emerald-400/80 font-medium transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.9s' }}
          >
            <span className="flex items-center gap-1.5 text-slate-200">
              <i className="ph-bold ph-check text-emerald-400"></i>
              2 BWF Standard Courts
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <i className="ph-bold ph-check text-emerald-400"></i>
              Natural Teak Wood
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <i className="ph-bold ph-check text-emerald-400"></i>
              6:00 AM – 12:00 AM Daily
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <i className="ph-bold ph-check text-emerald-400"></i>
              Ample Campus Parking
            </span>
          </div>

          {/* Ratings Bar */}
          <div
            className={`flex items-center gap-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '1s' }}
          >
            <div className="flex text-amber-400 text-base gap-0.5">
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star-half"></i>
            </div>
            <div className="text-sm font-semibold text-slate-200">
              <span className="text-white font-bold">4.4 / 5</span>
              <span className="text-slate-400 font-normal ml-1.5">• 22 ratings on Playo & Google</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap items-center gap-4 pt-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '1.2s' }}
          >
            <a
              className="hero-cta-primary inline-flex items-center gap-2.5 bg-gradient-to-r from-[#4ade80] to-[#22c55e] hover:from-[#22c55e] hover:to-[#16a34a] text-emerald-950 px-8 py-4 rounded-xl text-sm font-extrabold shadow-2xl shadow-emerald-500/30 transition-all transform hover:-translate-y-1 hover:shadow-emerald-500/40 cursor-pointer relative overflow-hidden"
              href="#booking"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/25 to-transparent opacity-0 hover:opacity-100 transition-opacity"></span>
              <i className="ph-bold ph-calendar-check text-base"></i>
              <span>Check Available Slots</span>
              <i className="ph-bold ph-arrow-right text-xs"></i>
            </a>

            <a
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-emerald-500/40 px-6 py-4 rounded-xl text-sm font-semibold backdrop-blur-xl transition-all hover:-translate-y-0.5"
              href="#location"
            >
              <i className="ph-bold ph-map-pin"></i>
              <span>Get Directions</span>
            </a>

            <button
              type="button"
              onClick={onOpenVideo}
              className="inline-flex items-center gap-2.5 text-slate-200 hover:text-white px-4 py-4 text-sm font-medium transition-all group cursor-pointer"
            >
              <span className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-emerald-500/30 flex items-center justify-center text-emerald-400 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/20">
                <i className="ph-fill ph-play text-sm"></i>
              </span>
              <span>Watch Arena Tour</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '1.8s' }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-400/60 font-semibold">Scroll to explore</span>
        <div className="w-6 h-9 rounded-full border-2 border-emerald-400/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-emerald-400/70 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
