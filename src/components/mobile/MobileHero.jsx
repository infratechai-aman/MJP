import React from 'react';

export default function MobileHero({ onOpenVideo }) {
  return (
    <section className="relative bg-[#072218] text-white overflow-hidden pt-8 pb-10 px-4" id="home">
      {/* Full-Bleed Action Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          alt="Badminton match action on wooden court"
          className="w-full h-full object-cover object-[center_20%] opacity-75"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPSiRoa1r9yCGfUIB7cUozgOz9UadCu0jqDdiypCJ1jJ7vvXKt9xnJ6zxtutIhHwNOaMZ4dBKJI-Gw-CWB8KZPhKx1UizAUICFvYFc2ILXLWd7LFW-jmXvWphhg_kKBQvXfLOe1cRG-1PSS-H5Urgo4DN31qrUklejSf01ZlRl5hnSgi_W0yFzZR-yq472OpX_XmNARH9AnEyAPvRUkdqGC-ov3AssHyTv3WhLjP1vbhN7x-2t0D6g"
        />
        {/* Multi-layered dark emerald gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04150e]/95 via-[#072218]/70 to-[#072218]"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-md mx-auto relative z-10 flex flex-col items-start">
        {/* Location Chip with glowing dot */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md mb-4 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-mint animate-pulse"></span>
          BADMINTON • KONDHWA KHURD, PUNE
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15] text-white mb-2.5">
          Your next game <br />
          <span className="text-brand-mint drop-shadow-[0_2px_12px_rgba(0,229,153,0.35)]">starts here.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 text-sm leading-relaxed mb-4 max-w-sm drop-shadow">
          Two wooden courts. Great rallies. Your local badminton spot.
        </p>

        {/* Rating Pill Glassmorphic */}
        <div className="inline-flex items-center gap-2 mb-6 bg-black/40 backdrop-blur-md border border-emerald-500/30 rounded-full px-3.5 py-1.5 shadow-md">
          <div className="flex text-amber-400 text-xs tracking-tight">
            ★★★★★
          </div>
          <span className="text-xs font-bold text-white">4.4 / 5</span>
          <span className="text-gray-300 text-[11px]">• 22 ratings on Playo</span>
        </div>

        {/* Action Buttons Stack */}
        <div className="w-full flex flex-col gap-2.5 mb-6">
          {/* Primary CTA button with mint glow */}
          <a
            className="w-full py-3.5 bg-brand-mint hover:bg-brand-mintDark text-gray-950 font-extrabold rounded-xl text-center text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 active:scale-[0.99]"
            href="#book-court"
          >
            <span>Check Available Slots</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
            </svg>
          </a>

          {/* Secondary Action Row */}
          <div className="grid grid-cols-2 gap-2.5 w-full">
            <a
              className="py-3 px-3 bg-white/10 hover:bg-white/15 border border-emerald-700/40 text-gray-100 rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-1.5 backdrop-blur-md transition-colors"
              href="#location"
            >
              <svg className="w-4 h-4 text-brand-mint shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              <span>Get Directions</span>
            </a>

            <button
              type="button"
              onClick={onOpenVideo}
              className="py-3 px-3 bg-white/10 hover:bg-white/15 border border-emerald-700/40 text-gray-100 rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-1.5 backdrop-blur-md transition-colors"
            >
              <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-brand-mint flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                </svg>
              </span>
              <span>Watch the Court</span>
            </button>
          </div>
        </div>

        {/* Professional Court Finish Badge overlay */}
        <div className="w-full bg-[#0b2d22]/90 backdrop-blur-md border border-emerald-700/50 rounded-xl p-3 flex items-center justify-between gap-3 shadow-xl">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-brand-mint flex items-center justify-center shrink-0 font-bold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-white tracking-wide uppercase">Professional Court Finish</h4>
              <p className="text-[10px] text-emerald-200/80">Shock-absorbing premium timber flooring</p>
            </div>
          </div>
          <span className="text-[10px] font-bold bg-brand-mint text-gray-950 px-2.5 py-1 rounded-md shrink-0 shadow-sm">2 Courts</span>
        </div>
      </div>
    </section>
  );
}
