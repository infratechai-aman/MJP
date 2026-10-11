import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/courtData';

export default function LightboxModal({ isOpen, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  if (!isOpen) return null;

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const safeIndex = Math.min(Math.max(0, currentIndex), GALLERY_ITEMS.length - 1);
  const currentItem = GALLERY_ITEMS[safeIndex] || GALLERY_ITEMS[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/80 hover:text-white bg-black/50 p-2.5 rounded-full z-10 transition-colors"
        aria-label="Close lightbox"
      >
        <i className="ph-bold ph-x text-xl"></i>
      </button>

      <div className="max-w-4xl w-full flex flex-col items-center">
        {/* Category Filter Pills */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-1 max-w-full">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'courts', label: 'Wooden Courts' },
            { id: 'facilities', label: 'Facilities & Showers' },
            { id: 'match', label: 'Match Action' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveFilter(cat.id);
                const found = GALLERY_ITEMS.findIndex((item) => cat.id === 'all' || item.category === cat.id);
                if (found !== -1) setCurrentIndex(found);
              }}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                activeFilter === cat.id
                  ? 'bg-emerald-500 text-emerald-950 font-bold'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Container with Nav Arrows */}
        <div className="relative w-full aspect-video max-h-[70vh] bg-black rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center group">
          <img
            src={currentItem.src}
            alt={currentItem.title}
            className="w-full h-full object-contain"
          />

          {/* Left arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all"
            aria-label="Previous photo"
          >
            <i className="ph-bold ph-caret-left text-xl"></i>
          </button>

          {/* Right arrow */}
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all"
            aria-label="Next photo"
          >
            <i className="ph-bold ph-caret-right text-xl"></i>
          </button>
        </div>

        {/* Caption & Counter */}
        <div className="w-full mt-4 flex items-center justify-between text-white px-2">
          <div>
            <h4 className="text-base font-bold text-white">{currentItem.title}</h4>
            <p className="text-xs text-slate-300 mt-0.5">{currentItem.desc}</p>
          </div>
          <span className="text-xs font-mono bg-white/10 px-2.5 py-1 rounded-lg text-emerald-400">
            {safeIndex + 1} / {GALLERY_ITEMS.length}
          </span>
        </div>

      </div>
    </div>
  );
}
