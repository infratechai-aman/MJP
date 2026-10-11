import React from 'react';
import { VENUE_INFO } from '../data/courtData';

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
    <section className="bg-white py-16 lg:py-24 text-slate-900 border-b border-slate-200" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Address & Action Links */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-700">FIND US HERE</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
                Location & Contact
              </h2>
            </div>

            <div className="flex items-start gap-3.5 text-slate-600">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl shrink-0 mt-0.5">
                <i className="ph-bold ph-map-pin"></i>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-base leading-snug">{VENUE_INFO.name},</p>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Late Dattaji Gavhane Sports Arena, near Brahma Avenue Society, Kondhwa Khurd, Pune 411048
                </p>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={`tel:${VENUE_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-50/60 hover:border-emerald-300 transition-all flex items-center gap-2.5"
              >
                <i className="ph-bold ph-phone-call text-emerald-700 text-lg"></i>
                <div className="overflow-hidden">
                  <span className="block text-[10px] text-slate-500 font-semibold uppercase">Call Venue</span>
                  <span className="text-xs font-bold text-slate-900 truncate block">{VENUE_INFO.phone}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${VENUE_INFO.whatsapp}?text=Hi%20MJP%20Badminton%20Court,%20I%20would%20like%20to%20inquire%20about%20court%20booking.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-50/60 hover:border-emerald-300 transition-all flex items-center gap-2.5"
              >
                <i className="ph-bold ph-whatsapp-logo text-emerald-700 text-lg"></i>
                <div className="overflow-hidden">
                  <span className="block text-[10px] text-slate-500 font-semibold uppercase">WhatsApp</span>
                  <span className="text-xs font-bold text-slate-900 block">Instant Chat</span>
                </div>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                className="inline-flex items-center gap-2 bg-[#0d3324] hover:bg-[#124230] text-white px-5 py-3 rounded-lg text-sm font-bold shadow-md transition-all hover:-translate-y-0.5"
                href={VENUE_INFO.googleMapsUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="ph-bold ph-navigation-arrow"></i>
                <span>Get Directions</span>
                <i className="ph-bold ph-arrow-right text-xs"></i>
              </a>

              <button
                className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 px-5 py-3 rounded-lg text-sm font-semibold transition-all bg-white cursor-pointer hover:bg-slate-50"
                onClick={handleCopyAddress}
                type="button"
              >
                <i className="ph-bold ph-copy"></i>
                <span>Copy Address</span>
              </button>
            </div>
          </div>

          {/* Interactive Map Preview Graphic */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-md bg-emerald-50/40 relative">
              {/* Stylized Map graphic background */}
              <div className="h-80 w-full relative bg-[#e2f3e9] flex items-center justify-center overflow-hidden">
                {/* Map Grid SVG Graphic */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-40 text-emerald-600 pointer-events-none"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 600 300"
                >
                  <path d="M0 50 Q150 70 300 40 T600 60" stroke="currentColor" strokeWidth="4"></path>
                  <path d="M0 180 Q200 140 400 210 T600 170" stroke="currentColor" strokeWidth="3"></path>
                  <path d="M120 0 L150 300" stroke="currentColor" strokeWidth="2"></path>
                  <path d="M380 0 L410 300" stroke="currentColor" strokeWidth="2"></path>
                  <path d="M480 0 L520 300" stroke="currentColor" strokeWidth="1.5"></path>
                </svg>

                {/* Stylized Pin Card */}
                <a
                  href={VENUE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 bg-white rounded-xl shadow-xl p-4 border border-slate-200/80 max-w-sm flex items-center gap-3 hover:scale-105 transition-transform"
                >
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xl shrink-0 shadow-inner">
                    <i className="ph-fill ph-map-pin"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">MJP Badminton Court</h4>
                    <p className="text-xs text-slate-500">Kondhwa Khurd, Pune</p>
                    <span className="text-[10px] text-emerald-600 font-semibold mt-0.5 block">
                      📍 Click to open in Navigation
                    </span>
                  </div>
                </a>

                {/* View in Google Maps Button Pill */}
                <a
                  className="absolute bottom-4 right-4 bg-white/95 hover:bg-white text-slate-800 text-xs font-bold py-2 px-3.5 rounded-lg border border-slate-200 shadow-md flex items-center gap-1.5 transition-all"
                  href={VENUE_INFO.googleMapsUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="ph-bold ph-arrow-square-out text-emerald-700"></i>
                  <span>View in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
