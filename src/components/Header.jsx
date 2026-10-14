import React, { useState, useEffect } from 'react';

export default function Header({ onOpenMyBookings, bookingCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header className={`text-white sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[#020d08]/95 backdrop-blur-2xl border-b border-emerald-900/30 shadow-2xl shadow-black/30'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a className="flex items-center gap-3 group" href="#home">
          <div className="w-10 h-10 rounded-xl bg-emerald-900/40 border border-emerald-700/20 flex items-center justify-center text-white text-xl shadow-inner group-hover:bg-emerald-800/50 transition-all">
            <i className="ph-bold ph-tennis-ball"></i>
          </div>
          <div className="leading-none">
            <span className="text-xl font-black tracking-wider block text-white">MJP</span>
            <span className="text-[9px] tracking-[0.2em] text-emerald-400 font-semibold uppercase block">Badminton Court</span>
            <span className="text-[7px] tracking-tight text-emerald-400/50 uppercase block">Kondhwa Khurd, Pune</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="hover:text-emerald-400 transition-colors cursor-pointer relative group py-1"
              href={link.href}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          {/* My Bookings Button */}
          <button
            onClick={onOpenMyBookings}
            type="button"
            className="hidden sm:inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-emerald-200 border border-emerald-700/20 hover:border-emerald-500/30 px-4 py-2 rounded-full text-xs font-bold transition-all backdrop-blur-sm"
            title="Check your booked court slots"
          >
            <i className="ph-bold ph-ticket"></i>
            <span>My Bookings</span>
            {bookingCount > 0 && (
              <span className="bg-emerald-400 text-emerald-950 text-[10px] font-black px-1.5 py-0.5 rounded-full">
                {bookingCount}
              </span>
            )}
          </button>

          {/* Book a Slot CTA */}
          <a
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4ade80] to-[#22c55e] hover:from-[#22c55e] hover:to-[#16a34a] text-emerald-950 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
            href="#booking"
          >
            <span>Book a Slot</span>
            <i className="ph-bold ph-arrow-right"></i>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 text-emerald-300 hover:text-white border border-emerald-800/20"
            aria-label="Toggle menu"
          >
            <i className={`ph-bold ${mobileMenuOpen ? 'ph-x' : 'ph-list'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#020d08]/98 backdrop-blur-2xl border-b border-emerald-800/20 px-4 py-5 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-emerald-400 text-sm font-semibold py-2.5 px-4 rounded-xl hover:bg-emerald-900/20 transition-all"
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
            className="w-full flex items-center justify-between text-emerald-300 bg-emerald-950/30 border border-emerald-800/20 px-4 py-3 rounded-xl text-sm font-semibold"
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
