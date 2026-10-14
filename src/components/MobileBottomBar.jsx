import React from 'react';

export default function MobileBottomBar({ onOpenMyBookings, bookingCount = 0 }) {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#09130e]/95 backdrop-blur-xl border-t border-emerald-900/40 px-4 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.7)]">
      <div className="flex items-center justify-between gap-3">
        {/* Left: Live Venue Status & Rate */}
        <div className="leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#21D6A0] animate-pulse"></span>
            <span className="text-[11px] font-bold text-white tracking-wide">
              Courts Available
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-0.5">
            From <span className="text-[#21D6A0] font-black text-xs">₹350</span>/hr • Wooden
          </p>
        </div>

        {/* Right: Quick Action Controls */}
        <div className="flex items-center gap-2">
          {/* Quick Call Icon Button */}
          <a
            href="tel:+918237887888"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-emerald-300 hover:text-white flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
            title="Call court reception"
            aria-label="Call court reception"
          >
            <i className="ph-bold ph-phone-call text-base"></i>
          </a>

          {/* Quick My Passes Button (if user has bookings) */}
          {bookingCount > 0 && (
            <button
              type="button"
              onClick={onOpenMyBookings}
              className="relative w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
              title="My Booked Passes"
              aria-label="My Booked Passes"
            >
              <i className="ph-bold ph-ticket text-base"></i>
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#21D6A0] text-black text-[9px] font-black flex items-center justify-center">
                {bookingCount}
              </span>
            </button>
          )}

          {/* High-Contrast 1-Tap Booking CTA Button */}
          <a
            href="#booking"
            className="inline-flex items-center gap-1.5 bg-[#21D6A0] hover:bg-[#1bc290] active:scale-95 text-[#051a11] px-4 py-2.5 rounded-xl text-xs font-black shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
          >
            <span>Book Slot</span>
            <i className="ph-bold ph-arrow-right text-xs"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
