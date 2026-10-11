import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/courtData';

export default function LightboxModal({ isOpen, initialIndex = 0, onClose }) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  if (!isOpen) return null;

  const item = GALLERY_ITEMS[index] || GALLERY_ITEMS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/95 backdrop-blur-md animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-white/20 p-2 rounded-full z-10"
      >
        ✕
      </button>

      <div className="max-w-md w-full flex flex-col items-center">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black mb-3">
          <img src={item.src} alt={item.title} className="w-full h-full object-contain" />
          
          <button
            onClick={() => setIndex((index - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white"
          >
            ‹
          </button>
          <button
            onClick={() => setIndex((index + 1) % GALLERY_ITEMS.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white"
          >
            ›
          </button>
        </div>

        <div className="w-full flex items-center justify-between text-white text-xs px-1">
          <div>
            <h4 className="font-bold text-sm text-white">{item.title}</h4>
            <p className="text-[11px] text-gray-300">{item.desc}</p>
          </div>
          <span className="font-mono text-brand-mint text-xs">
            {index + 1} / {GALLERY_ITEMS.length}
          </span>
        </div>
      </div>
    </div>
  );
}
