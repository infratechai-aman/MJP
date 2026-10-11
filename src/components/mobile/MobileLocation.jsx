import React from 'react';
import { VENUE_INFO } from '../../data/courtData';

export default function MobileLocation({ onShowToast }) {
  const handleCopy = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(VENUE_INFO.fullAddress);
    }
    onShowToast('Address copied to clipboard!');
  };

  return (
    <section className="bg-white py-10 px-4 text-gray-900" id="location">
      <div className="max-w-md mx-auto">
        <span className="text-xs font-bold tracking-wider uppercase text-emerald-600 block mb-1">
          Find Us Here
        </span>
        <h2 className="text-2xl font-extrabold text-gray-950 tracking-tight mb-4">
          Location &amp; Contact
        </h2>

        {/* Venue Address Box */}
        <div className="flex items-start gap-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl mb-4">
          <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg shrink-0 mt-0.5">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-950">{VENUE_INFO.name}</h3>
            <p className="text-[11px] text-gray-600 leading-relaxed mt-0.5">
              Late Dattaji Gavhane Sports Arena, near Brahma Avenue Society, Kondhwa Khurd, Pune 411048
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5 mb-5">
          <a
            className="py-2.5 px-3 bg-[#051812] hover:bg-emerald-950 text-white rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition active:scale-95"
            href={VENUE_INFO.googleMapsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg className="w-3.5 h-3.5 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span>Get Directions</span>
          </a>

          <button
            onClick={handleCopy}
            className="py-2.5 px-3 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-800 rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition cursor-pointer active:scale-95"
            type="button"
          >
            <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span>Copy Address</span>
          </button>
        </div>

        {/* Styled Map Card Preview */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-emerald-50">
          <div className="h-44 w-full bg-[#e8f3ee] relative flex items-center justify-center overflow-hidden">
            {/* Subtle Grid Lines */}
            <svg className="absolute inset-0 w-full h-full stroke-emerald-200/80" fill="none">
              <path d="M-20 30 Q 150 70 420 30" strokeWidth="6"></path>
              <path d="M50 -20 Q 90 120 70 240" strokeWidth="4"></path>
              <path d="M220 -20 Q 200 100 240 240" strokeWidth="5"></path>
              <path d="M-20 120 Q 200 130 420 160" strokeWidth="4"></path>
              <path d="M120 40 L 320 180" strokeWidth="3"></path>
            </svg>

            {/* Pin at Center */}
            <a
              href={VENUE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex flex-col items-center cursor-pointer"
            >
              <div className="bg-white px-3 py-1.5 rounded-xl shadow-md border border-gray-200 flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                <span className="text-xs font-bold text-gray-900 leading-none">MJP Badminton Court</span>
              </div>
              <div className="w-3.5 h-3.5 bg-red-500 rotate-45 -mt-2"></div>
              <span className="text-[10px] text-gray-500 font-semibold bg-white/80 px-2 rounded-full mt-1">
                Kondhwa Khurd, Pune
              </span>
            </a>
          </div>

          <div className="p-2.5 bg-white border-t border-gray-200 flex items-center justify-end">
            <a
              className="text-[11px] font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
              href={VENUE_INFO.googleMapsUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>View in Google Maps</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
