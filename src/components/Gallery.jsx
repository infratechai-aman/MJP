import React from 'react';
import { GALLERY_ITEMS } from '../data/courtData';
import { AnimatedSection } from '../hooks/useScrollReveal';

export default function Gallery({ onOpenLightbox }) {
  return (
    <section className="bg-[#08261b] py-14 sm:py-20 lg:py-24 text-white relative overflow-hidden" id="gallery">
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <AnimatedSection>
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-400">GALLERY</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-2">
                Moments from <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">our court</span>
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onOpenLightbox && onOpenLightbox(0)}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-emerald-300 hover:text-emerald-400 border border-emerald-700/40 hover:border-emerald-500/60 px-5 py-2.5 rounded-xl transition-all cursor-pointer hover:bg-emerald-900/20"
            >
              <span>View Full Gallery</span>
              <i className="ph-bold ph-arrow-right"></i>
            </button>
          </div>
        </AnimatedSection>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Large Court Shot */}
          <AnimatedSection delay={100} className="md:col-span-6">
            <div
              onClick={() => onOpenLightbox && onOpenLightbox(0)}
              className="rounded-2xl overflow-hidden shadow-2xl group relative h-80 md:h-[420px] cursor-pointer hover-lift"
              title="Click to view full image"
            >
              <img
                alt="Courts and green banner view"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={GALLERY_ITEMS[0]?.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020d08]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 backdrop-blur-xl px-4 py-2 rounded-xl text-xs font-semibold text-white flex items-center gap-2 border border-white/10" style={{ background: 'rgba(6,50,32,0.6)' }}>
                <i className="ph-fill ph-camera text-emerald-400"></i>
                <span>{GALLERY_ITEMS[0]?.title}</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side: 4 Mosaic Photos */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((idx) => (
              <AnimatedSection key={idx} delay={150 + idx * 100}>
                <div
                  onClick={() => onOpenLightbox && onOpenLightbox(idx)}
                  className={`rounded-xl overflow-hidden shadow-lg group cursor-pointer relative hover-lift ${idx <= 2 ? 'h-44 md:h-[200px]' : 'h-44 md:h-[204px]'}`}
                  title="Click to view full image"
                >
                  <img
                    alt={GALLERY_ITEMS[idx]?.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={GALLERY_ITEMS[idx]?.src}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020d08]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 backdrop-blur-sm text-[10px] text-white px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10" style={{ background: 'rgba(0,0,0,0.5)' }}>
                    {GALLERY_ITEMS[idx]?.title}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile View All */}
        <div className="sm:hidden mt-6 text-center">
          <button
            type="button"
            onClick={() => onOpenLightbox && onOpenLightbox(0)}
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 border border-emerald-700/40 px-5 py-2.5 rounded-xl transition-all cursor-pointer"
          >
            <span>View Full Gallery</span>
            <i className="ph-bold ph-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
