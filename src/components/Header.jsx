import React, { useState } from 'react';

export default function Header({ onOpenMyBookings, bookingCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header className="bg-[#082318] text-white border-b border-emerald-950/40 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a className="flex items-center gap-3 group" href="#home">
          <div className="w-10 h-10 rounded-lg bg-emerald-900/60 border border-emerald-700/40 flex items-center justify-center text-white text-xl shadow-inner group-hover:bg-emerald-800 transition-colors">
            <i className="ph-bold ph-tennis-ball"></i>
          </div>
          <div className="leading-none">
            <span className="text-xl font-extrabold tracking-wider block text-white font-sans">MJP</span>
            <span className="text-[9px] tracking-widest text-emerald-300 font-semibold uppercase block">Badminton Court</span>
            <span className="text-[7px] tracking-tight text-emerald-400/80 uppercase block">Kondhwa Khurd, Pune</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          {/* My Bookings Button */}
          <button
            onClick={onOpenMyBookings}
            type="button"
            className="hidden sm:inline-flex items-center gap-2 bg-[#0d3324] hover:bg-[#124230] text-emerald-200 border border-emerald-700/60 px-4 py-2 rounded-full text-xs font-bold transition-all"
            title="Check your booked court slots"
          >
            <i className="ph-bold ph-ticket"></i>
            <span>My Bookings</span>
            {bookingCount > 0 && (
              <span className="bg-emerald-400 text-emerald-950 text-[10px] font-black px-1.5 py-0.2 rounded-full">
                {bookingCount}
              </span>
            )}
          </button>

          {/* Book a Slot CTA */}
          <a
            className="inline-flex items-center gap-2 bg-[#4ade80] hover:bg-[#22c55e] text-emerald-950 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
            href="#booking"
          >
            <span>Book a Slot</span>
            <i className="ph-bold ph-arrow-right"></i>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-emerald-900/40 text-emerald-300 hover:text-white border border-emerald-800"
            aria-label="Toggle menu"
          >
            <i className={`ph-bold ${mobileMenuOpen ? 'ph-x' : 'ph-list'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#061a12] border-b border-emerald-900/60 px-4 py-5 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-emerald-400 text-sm font-semibold py-2 px-3 rounded-lg hover:bg-emerald-950/60"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenMyBookings();
            }}
            className="w-full flex items-center justify-between text-emerald-300 bg-emerald-950/80 border border-emerald-800/80 px-4 py-2.5 rounded-lg text-sm font-semibold"
          >
            <span className="flex items-center gap-2">
              <i className="ph-bold ph-ticket"></i>
              My Bookings
            </span>
            {bookingCount > 0 && (
              <span className="bg-emerald-400 text-emerald-950 text-xs font-bold px-2 py-0.5 rounded-full">
                {bookingCount}
              </span>
            )}
          </button>
        </div>
      )}
    </header>
  );
}
