import React from 'react';
import { GALLERY_ITEMS } from '../data/courtData';

export default function Gallery({ onOpenLightbox }) {
  return (
    <section className="bg-white py-16 lg:py-24 text-slate-900" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-700">GALLERY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Moments from our court
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onOpenLightbox && onOpenLightbox(0)}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-emerald-700 border border-slate-300 px-4 py-2 rounded-lg transition-colors cursor-pointer hover:border-emerald-500"
          >
            <span>View Full Gallery</span>
            <i className="ph-bold ph-arrow-right"></i>
          </button>
        </div>

        {/* Gallery Grid Layout matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Large Court Shot (Left side, spanning 6 cols) */}
          <div
            onClick={() => onOpenLightbox && onOpenLightbox(0)}
            className="md:col-span-6 rounded-2xl overflow-hidden shadow-md group relative h-80 md:h-[420px] cursor-pointer"
            title="Click to view full image"
          >
            <img
              alt="Courts and green banner view"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={GALLERY_ITEMS[0]?.src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            <div className="absolute bottom-4 left-4 bg-emerald-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white flex items-center gap-2">
              <i className="ph-fill ph-camera text-emerald-400"></i>
              <span>{GALLERY_ITEMS[0]?.title}</span>
            </div>
          </div>

          {/* Right Side: 4 Mosaic Photos (spanning 6 cols) */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            {/* Top Left */}
            <div
              onClick={() => onOpenLightbox && onOpenLightbox(1)}
              className="rounded-xl overflow-hidden shadow-sm group h-44 md:h-[200px] cursor-pointer relative"
              title="Click to view full image"
            >
              <img
                alt="Clean wooden surface view"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src={GALLERY_ITEMS[1]?.src}
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-[10px] text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Wooden Surface
              </div>
            </div>

            {/* Top Right */}
            <div
              onClick={() => onOpenLightbox && onOpenLightbox(2)}
              className="rounded-xl overflow-hidden shadow-sm group h-44 md:h-[200px] cursor-pointer relative"
              title="Click to view full image"
            >
              <img
                alt="Dressing and shower area"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src={GALLERY_ITEMS[2]?.src}
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-[10px] text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Dressing & Shower
              </div>
            </div>

            {/* Bottom Left */}
            <div
              onClick={() => onOpenLightbox && onOpenLightbox(3)}
              className="rounded-xl overflow-hidden shadow-sm group h-44 md:h-[204px] cursor-pointer relative"
              title="Click to view full image"
            >
              <img
                alt="Viewing stand gallery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src={GALLERY_ITEMS[3]?.src}
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-[10px] text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Viewing Gallery
              </div>
            </div>

            {/* Bottom Right: Shuttlecock close up */}
            <div
              onClick={() => onOpenLightbox && onOpenLightbox(4)}
              className="rounded-xl overflow-hidden shadow-sm group h-44 md:h-[204px] cursor-pointer relative"
              title="Click to view full image"
            >
              <img
                alt="Shuttlecock on green net edge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src={GALLERY_ITEMS[4]?.src}
              />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-[10px] text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Match Equipment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
