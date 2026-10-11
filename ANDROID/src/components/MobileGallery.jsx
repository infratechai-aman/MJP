import React from 'react';
import { GALLERY_ITEMS } from '../data/courtData';

export default function MobileGallery({ onOpenLightbox }) {
  return (
    <section className="bg-white py-10 px-4 text-gray-900" id="gallery">
      <div className="max-w-md mx-auto">
        <div className="flex items-end justify-between mb-4">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-emerald-600 block mb-1">
              Gallery
            </span>
            <h2 className="text-2xl font-extrabold text-gray-950 tracking-tight leading-none">
              Moments from our court
            </h2>
          </div>
          <button
            onClick={() => onOpenLightbox && onOpenLightbox(0)}
            type="button"
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 border border-emerald-200 bg-emerald-50 px-2.5 py-1 rounded-full cursor-pointer"
          >
            <span>View All</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>

        {/* Gallery Grid Structure */}
        <div className="grid grid-cols-2 gap-2">
          {/* Big Featured Shot */}
          <div
            onClick={() => onOpenLightbox && onOpenLightbox(0)}
            className="col-span-2 relative rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
          >
            <img
              alt="MJP Badminton Court main illuminated wooden court view"
              className="w-full h-48 object-cover"
              src={GALLERY_ITEMS[0]?.src}
            />
            <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white font-medium">
              Court 1 & Court 2 Arena
            </div>
          </div>

          {/* 2 Side-by-side Images */}
          <div
            onClick={() => onOpenLightbox && onOpenLightbox(1)}
            className="rounded-xl overflow-hidden border border-gray-200 cursor-pointer"
          >
            <img
              alt="High angle view of wooden court lines"
              className="w-full h-28 object-cover"
              src={GALLERY_ITEMS[1]?.src}
            />
          </div>
          <div
            onClick={() => onOpenLightbox && onOpenLightbox(2)}
            className="rounded-xl overflow-hidden border border-gray-200 cursor-pointer"
          >
            <img
              alt="Spectator seating in gallery"
              className="w-full h-28 object-cover"
              src={GALLERY_ITEMS[2]?.src}
            />
          </div>

          {/* 2 Lower Images */}
          <div
            onClick={() => onOpenLightbox && onOpenLightbox(3)}
            className="rounded-xl overflow-hidden border border-gray-200 cursor-pointer"
          >
            <img
              alt="Clean locker room and showers"
              className="w-full h-28 object-cover"
              src={GALLERY_ITEMS[3]?.src}
            />
          </div>
          <div
            onClick={() => onOpenLightbox && onOpenLightbox(4)}
            className="rounded-xl overflow-hidden border border-gray-200 cursor-pointer"
          >
            <img
              alt="Shuttlecock resting at net tape"
              className="w-full h-28 object-cover"
              src={GALLERY_ITEMS[4]?.src}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
