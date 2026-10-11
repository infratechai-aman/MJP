import React from 'react';

export default function MobileReviews({ reviews, onOpenReviewModal }) {
  return (
    <section className="bg-[#051812] text-white py-10 px-4 border-t border-brand-borderDark/60">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold tracking-wider uppercase text-brand-mint">
            What Players Say
          </span>
          <div className="flex items-center gap-1.5 text-xs text-amber-400">
            <span>★★★★★</span>
            <span className="font-bold text-white text-[11px]">4.4 / 5</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight mb-0.5">
              Loved by the community
            </h2>
            <p className="text-xs text-gray-400">22 verified player ratings on Playo</p>
          </div>
          <button
            onClick={onOpenReviewModal}
            className="text-[11px] font-bold text-brand-mint border border-brand-mint/40 bg-brand-mint/10 px-2.5 py-1 rounded-lg"
          >
            + Add Review
          </button>
        </div>

        {/* Testimonial Cards Carousel / Stack */}
        <div className="space-y-3.5">
          {reviews.slice(0, 3).map((r) => (
            <div key={r.id} className="bg-brand-cardDark border border-brand-borderDark rounded-xl p-4 relative">
              <span className="text-brand-mint text-2xl font-serif leading-none block mb-1">“</span>
              <p className="text-xs text-gray-200 leading-relaxed mb-3">
                {r.comment}
              </p>
              <div className="flex items-center gap-2.5 pt-2 border-t border-brand-borderDark/60">
                <div className="w-7 h-7 rounded-full bg-emerald-800 text-brand-mint font-bold text-xs flex items-center justify-center">
                  {r.tag || r.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{r.name}</div>
                  <div className="text-[10px] text-gray-400">{r.source || 'via Playo'}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
