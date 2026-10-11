import React from 'react';
import { VENUE_INFO } from '../../data/courtData';

export default function MobileFooter({ onOpenMyBookings }) {
  return (
    <footer className="bg-brand-deepFooter text-gray-400 py-10 px-4 border-t border-brand-borderDark/40">
      <div className="max-w-md mx-auto space-y-6">
        {/* Footer Logo & Tagline */}
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-brand-mint/30 flex items-center justify-center text-brand-mint">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M14.5 2.5a2.5 2.5 0 0 0-5 0c0 .48.14.93.38 1.31L4.35 9.34a1 1 0 0 0 .15 1.41l2.83 2.83a1 1 0 0 0 1.41-.15l5.53-5.53c.38.24.83.38 1.31.38a2.5 2.5 0 0 0 0-5zM8.5 15l-4 4 1.5 1.5 4-4L8.5 15zm4 4l-4 4 1.5 1.5 4-4-1.5-1.5zm6.5-6.5l-4-4-1.5 1.5 4 4 1.5-1.5z"></path>
              </svg>
            </div>
            <div>
              <span className="font-extrabold text-white text-base tracking-tight leading-none block">
                MJP BADMINTON COURT
              </span>
              <span className="text-[9px] text-gray-500 uppercase tracking-widest">
                Kondhwa Khurd, Pune
              </span>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Your local badminton spot. <br />
            <span className="text-brand-mint">Play. Improve. Enjoy.</span>
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-6 text-xs border-y border-brand-borderDark/40 py-6">
          <div>
            <h4 className="font-bold text-white uppercase text-[10px] tracking-wider mb-2.5">
              Quick Links
            </h4>
            <ul className="space-y-1.5">
              <li><a className="hover:text-brand-mint transition" href="#home">Home</a></li>
              <li><a className="hover:text-brand-mint transition" href="#about">About</a></li>
              <li><a className="hover:text-brand-mint transition" href="#facilities">Facilities</a></li>
              <li><a className="hover:text-brand-mint transition" href="#gallery">Gallery</a></li>
              <li><a className="hover:text-brand-mint transition" href="#location">Location</a></li>
              <li>
                <button
                  type="button"
                  onClick={onOpenMyBookings}
                  className="hover:text-brand-mint transition text-left cursor-pointer"
                >
                  My Bookings
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white uppercase text-[10px] tracking-wider mb-2.5">
              Facilities
            </h4>
            <ul className="space-y-1.5">
              <li><span className="text-gray-300">Wooden Courts</span></li>
              <li><span className="text-gray-300">Viewing Gallery</span></li>
              <li><span className="text-gray-300">Showers</span></li>
              <li><span className="text-gray-300">Washrooms</span></li>
            </ul>
          </div>
        </div>

        {/* Contact Mini Box */}
        <div className="bg-[#071f17] border border-brand-borderDark rounded-xl p-3.5 space-y-2">
          <div className="text-xs font-bold text-white flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span>Get In Touch</span>
          </div>
          <p className="text-[11px] text-gray-300 leading-snug">
            {VENUE_INFO.locationBrief}, Pune 411048
          </p>
          <a
            className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-mint hover:underline"
            href={VENUE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Get Directions</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </a>
        </div>

        {/* Bottom Bar with Copyright & Socials */}
        <div className="flex flex-col items-center gap-3 pt-2 text-[11px] text-gray-500 text-center">
          <div className="flex items-center gap-4 text-gray-400">
            <span className="hover:text-brand-mint">Play • Improve • Enjoy</span>
            <span className="flex items-center gap-3 ml-2">
              <a aria-label="Instagram" className="hover:text-brand-mint" href="#">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a aria-label="Twitter" className="hover:text-brand-mint" href="#">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
            </span>
          </div>
          <p>© 2025 MJP Badminton Court. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
