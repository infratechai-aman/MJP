import React from 'react';
import { VENUE_INFO } from '../data/courtData';

export default function Footer({ onOpenMyBookings }) {
  return (
    <footer className="bg-[#04150e] text-slate-400 pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/40">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-900/80 border border-emerald-700/40 flex items-center justify-center text-white text-lg">
                <i className="ph-bold ph-tennis-ball"></i>
              </div>
              <div className="leading-none">
                <span className="text-lg font-extrabold tracking-wider text-white">MJP</span>
                <span className="text-[8px] tracking-widest text-emerald-400 font-semibold uppercase block">Badminton Court</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Your local badminton spot.<br />Play. Improve. Enjoy.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a className="hover:text-emerald-400 transition-colors" href="#home">Home</a></li>
              <li><a className="hover:text-emerald-400 transition-colors" href="#about">About</a></li>
              <li><a className="hover:text-emerald-400 transition-colors" href="#facilities">Facilities</a></li>
              <li><a className="hover:text-emerald-400 transition-colors" href="#gallery">Gallery</a></li>
              <li><a className="hover:text-emerald-400 transition-colors" href="#location">Location</a></li>
            </ul>
          </div>

          {/* Col 3: Facilities */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Facilities</h4>
            <ul className="space-y-2 text-xs">
              <li><a className="hover:text-emerald-400 transition-colors" href="#facilities">Wooden Courts</a></li>
              <li><a className="hover:text-emerald-400 transition-colors" href="#facilities">Viewing Gallery</a></li>
              <li><a className="hover:text-emerald-400 transition-colors" href="#facilities">Showers</a></li>
              <li><a className="hover:text-emerald-400 transition-colors" href="#facilities">Washrooms</a></li>
            </ul>
          </div>

          {/* Col 4: Booking */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Booking</h4>
            <ul className="space-y-2 text-xs">
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
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Get in Touch</h4>
            <div className="flex items-start gap-2 text-xs text-slate-400">
              <i className="ph-bold ph-map-pin text-emerald-400 mt-0.5 shrink-0"></i>
              <span>{VENUE_INFO.locationBrief}, Pune 411048</span>
            </div>
            <a
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold border border-emerald-800/60 px-3 py-1.5 rounded-lg"
              href={VENUE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ph-bold ph-navigation-arrow"></i>
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Copyright & Bottom Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© 2025 MJP Badminton Court. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Play • Improve • Enjoy</span>
            <a className="hover:text-white transition-colors text-base" href="#" aria-label="Instagram">
              <i className="ph-bold ph-instagram-logo"></i>
            </a>
            <a className="hover:text-white transition-colors text-base" href="#" aria-label="Twitter">
              <i className="ph-bold ph-twitter-logo"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
