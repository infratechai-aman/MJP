import React, { useState } from 'react';

export default function MobileHeader({ onOpenMyBookings, bookingCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About Court', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Book a Slot', href: '#book-court' },
    { label: 'Location & Contact', href: '#location' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#051812]/95 backdrop-blur-md border-b border-brand-borderDark/60 px-4 py-3">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a aria-label="MJP Badminton Court Home" className="flex items-center gap-2" href="#home">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-brand-mint/30 flex items-center justify-center text-brand-mint">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M14.5 2.5a2.5 2.5 0 0 0-5 0c0 .48.14.93.38 1.31L4.35 9.34a1 1 0 0 0 .15 1.41l2.83 2.83a1 1 0 0 0 1.41-.15l5.53-5.53c.38.24.83.38 1.31.38a2.5 2.5 0 0 0 0-5zM8.5 15l-4 4 1.5 1.5 4-4L8.5 15zm4 4l-4 4 1.5 1.5 4-4-1.5-1.5zm6.5-6.5l-4-4-1.5 1.5 4 4 1.5-1.5z"></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-white text-base tracking-tight leading-none">MJP</span>
            <span className="text-[9px] font-semibold text-gray-400 tracking-wider uppercase mt-0.5">Badminton Court</span>
          </div>
        </a>

        {/* Quick Action: Book Slot Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <a
            className="bg-brand-mint hover:bg-brand-mintDark text-gray-950 font-bold text-xs px-3.5 py-2 rounded-full transition-all duration-200 shadow-sm flex items-center gap-1 active:scale-95"
            href="#book-court"
          >
            <span>Book a Slot</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
            </svg>
          </a>

          <button
            aria-label="Open Navigation Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-300 hover:text-white rounded-lg focus:outline-none"
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {menuOpen && (
        <nav className="max-w-md mx-auto pt-3 pb-2 border-t border-brand-borderDark/40 mt-3 flex flex-col gap-2 text-sm font-medium text-gray-300 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-2 py-1.5 hover:text-brand-mint transition-colors rounded-lg hover:bg-brand-cardDark"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              onOpenMyBookings();
            }}
            className="w-full mt-1 flex items-center justify-between text-brand-mint bg-brand-cardDark border border-brand-mint/30 px-3 py-2 rounded-lg text-xs font-bold"
          >
            <span className="flex items-center gap-1.5">
              🎟️ My Bookings Portal
            </span>
            {bookingCount > 0 && (
              <span className="bg-brand-mint text-black text-[10px] px-2 py-0.5 rounded-full font-black">
                {bookingCount} active
              </span>
            )}
          </button>
        </nav>
      )}
    </header>
  );
}
