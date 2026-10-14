import React from 'react';
import { VENUE_INFO } from '../data/courtData';
import { AnimatedSection } from '../hooks/useScrollReveal';

export default function LocationContact({ onShowToast }) {
  const handleCopyAddress = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(VENUE_INFO.fullAddress);
      onShowToast('Address copied to clipboard!');
    } else {
      onShowToast('Address copied: ' + VENUE_INFO.fullAddress);
    }
  };

  return (
    <section className="bg-[#0b3323] py-14 sm:py-20 lg:py-24 text-white relative overflow-hidden" id="location">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Address & Action Links */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedSection>
              <div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-400">FIND US HERE</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-2 leading-tight">
                  Location & <br />
                  <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">Contact</span>
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-xl shrink-0 mt-0.5">
                  <i className="ph-bold ph-map-pin"></i>
                </div>
                <div>
                  <p className="font-bold text-white text-base leading-snug">{VENUE_INFO.name},</p>
                  <p className="text-sm text-slate-300/70 mt-1 leading-relaxed">
                    Late Dattaji Gavhane Sports Arena, near Brahma Avenue Society, Kondhwa Khurd, Pune 411048
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Quick Contact Info */}
            <AnimatedSection delay={250}>
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={`tel:${VENUE_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="p-4 rounded-xl border border-emerald-800/30 bg-emerald-950/30 hover:bg-emerald-900/30 hover:border-emerald-500/30 transition-all duration-300 flex items-center gap-2.5 hover-glow"
                >
                  <i className="ph-bold ph-phone-call text-emerald-400 text-lg"></i>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Call Venue</span>
                    <span className="text-xs font-bold text-white truncate block">{VENUE_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${VENUE_INFO.whatsapp}?text=Hi%20MJP%20Badminton%20Court,%20I%20would%20like%20to%20inquire%20about%20court%20booking.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-emerald-800/30 bg-emerald-950/30 hover:bg-emerald-900/30 hover:border-emerald-500/30 transition-all duration-300 flex items-center gap-2.5 hover-glow"
                >
                  <i className="ph-bold ph-whatsapp-logo text-emerald-400 text-lg"></i>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] text-slate-400 font-semibold uppercase tracking-wider">WhatsApp</span>
                    <span className="text-xs font-bold text-white block">Instant Chat</span>
                  </div>
                </a>
              </div>
            </AnimatedSection>

            {/* Action Buttons */}
            <AnimatedSection delay={350}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-emerald-900/30 transition-all hover:-translate-y-0.5"
                  href={VENUE_INFO.googleMapsUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="ph-bold ph-navigation-arrow"></i>
                  <span>Get Directions</span>
                  <i className="ph-bold ph-arrow-right text-xs"></i>
                </a>

                <button
                  className="inline-flex items-center gap-2 border border-emerald-700/30 hover:border-emerald-500/40 text-emerald-300 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all cursor-pointer hover:bg-emerald-900/20"
                  onClick={handleCopyAddress}
                  type="button"
                >
                  <i className="ph-bold ph-copy"></i>
                  <span>Copy Address</span>
                </button>
              </div>
            </AnimatedSection>
          </div>

          {/* Map Preview */}
          <AnimatedSection direction="right" delay={200} className="lg:col-span-7">
            <div className="rounded-2xl border border-emerald-800/30 overflow-hidden shadow-2xl relative">
              <div className="h-80 w-full relative flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a2f21 0%, #072218 50%, #051c14 100%)' }}>
                {/* Animated grid pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:30px_30px]"></div>
                
                {/* Map Grid SVG */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20 text-emerald-600 pointer-events-none"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 600 300"
                >
                  <path d="M0 50 Q150 70 300 40 T600 60" stroke="currentColor" strokeWidth="2"></path>
                  <path d="M0 180 Q200 140 400 210 T600 170" stroke="currentColor" strokeWidth="1.5"></path>
                  <path d="M120 0 L150 300" stroke="currentColor" strokeWidth="1"></path>
                  <path d="M380 0 L410 300" stroke="currentColor" strokeWidth="1"></path>
                  <path d="M480 0 L520 300" stroke="currentColor" strokeWidth="0.8"></path>
                </svg>

                {/* Pulsing ring around pin */}
                <div className="absolute w-32 h-32 rounded-full border border-emerald-400/10 animate-ping pointer-events-none" style={{ animationDuration: '3s' }}></div>
                <div className="absolute w-48 h-48 rounded-full border border-emerald-400/5 animate-ping pointer-events-none" style={{ animationDuration: '4s' }}></div>

                {/* Pin Card */}
                <a
                  href={VENUE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 backdrop-blur-xl rounded-2xl shadow-2xl p-5 border border-emerald-500/20 max-w-sm flex items-center gap-4 hover:scale-105 transition-transform animate-float"
                  style={{ background: 'rgba(10,47,33,0.8)' }}
                >
                  <div className="w-12 h-12 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center text-2xl shrink-0">
                    <i className="ph-fill ph-map-pin"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">MJP Badminton Court</h4>
                    <p className="text-xs text-slate-300/60 mt-0.5">Kondhwa Khurd, Pune</p>
                    <span className="text-[10px] text-emerald-400 font-semibold mt-1 block">
                      📍 Click to open in Navigation
                    </span>
                  </div>
                </a>

                {/* View in Google Maps Pill */}
                <a
                  className="absolute bottom-4 right-4 backdrop-blur-xl text-white text-xs font-bold py-2.5 px-4 rounded-xl border border-emerald-500/20 shadow-xl flex items-center gap-1.5 transition-all hover:border-emerald-400/40"
                  style={{ background: 'rgba(10,47,33,0.7)' }}
                  href={VENUE_INFO.googleMapsUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="ph-bold ph-arrow-square-out text-emerald-400"></i>
                  <span>View in Google Maps</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
