import React from 'react';
import { VENUE_INFO } from '../data/courtData';
import { AnimatedSection } from '../hooks/useScrollReveal';

export default function Footer({ onOpenMyBookings }) {
  return (
    <footer className="bg-[#051a12] text-slate-300 pt-16 pb-12 border-t border-emerald-500/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[300px] bg-emerald-500/3 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-emerald-800/20">
            {/* Col 1: Brand Info */}
            <div className="md:col-span-4 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/50 border border-emerald-700/20 flex items-center justify-center text-white text-lg">
                  <i className="ph-bold ph-tennis-ball"></i>
                </div>
                <div className="leading-none">
                  <span className="text-xl font-black tracking-wider text-white">MJP</span>
                  <span className="text-[9px] tracking-[0.2em] text-emerald-400 font-semibold uppercase block">Badminton Court</span>
                </div>
              </div>
              <p className="text-sm text-slate-400/70 max-w-sm leading-relaxed">
                Your local badminton spot.<br />Play. Improve. Enjoy.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em]">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a className="hover:text-emerald-400 transition-colors" href="#home">Home</a></li>
                <li><a className="hover:text-emerald-400 transition-colors" href="#about">About</a></li>
                <li><a className="hover:text-emerald-400 transition-colors" href="#facilities">Facilities</a></li>
                <li><a className="hover:text-emerald-400 transition-colors" href="#gallery">Gallery</a></li>
                <li><a className="hover:text-emerald-400 transition-colors" href="#location">Location</a></li>
              </ul>
            </div>

            {/* Col 3: Facilities */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em]">Facilities</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a className="hover:text-emerald-400 transition-colors" href="#facilities">Wooden Courts</a></li>
                <li><a className="hover:text-emerald-400 transition-colors" href="#facilities">Viewing Gallery</a></li>
                <li><a className="hover:text-emerald-400 transition-colors" href="#facilities">Showers</a></li>
                <li><a className="hover:text-emerald-400 transition-colors" href="#facilities">Washrooms</a></li>
              </ul>
            </div>

            {/* Col 4: Booking */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em]">Booking</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a className="hover:text-emerald-400 transition-colors" href="#booking">Book a Slot</a></li>
                <li><a className="hover:text-emerald-400 transition-colors" href="#booking">Check Availability</a></li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenMyBookings}
                    className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                  >
                    My Bookings
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 5: Get in Touch */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em]">Get in Touch</h4>
              <div className="flex items-start gap-2 text-sm text-slate-400/70">
                <i className="ph-bold ph-map-pin text-emerald-400 mt-0.5 shrink-0"></i>
                <span>{VENUE_INFO.locationBrief}, Pune 411048</span>
              </div>
              <a
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold border border-emerald-800/30 hover:border-emerald-500/30 px-4 py-2 rounded-xl transition-all"
                href={VENUE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ph-bold ph-navigation-arrow"></i>
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Copyright & Bottom Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500/60 gap-4">
          <p>© 2025 MJP Badminton Court. All rights reserved.</p>
          <div className="flex items-center gap-5 text-slate-500">
            <span className="text-[11px] tracking-wider">Play • Improve • Enjoy</span>
            <a className="hover:text-emerald-400 transition-colors text-lg" href="#" aria-label="Instagram">
              <i className="ph-bold ph-instagram-logo"></i>
            </a>
            <a className="hover:text-emerald-400 transition-colors text-lg" href="#" aria-label="Twitter">
              <i className="ph-bold ph-twitter-logo"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
