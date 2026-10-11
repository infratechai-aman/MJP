import React from 'react';

export default function Testimonials({ reviews, onOpenReviewModal }) {
  return (
    <section className="bg-[#072218] text-white py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">WHAT PLAYERS SAY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-white">
              Loved by the community
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex text-amber-400 text-base">
                <i className="ph-fill ph-star"></i>
                <i className="ph-fill ph-star"></i>
                <i className="ph-fill ph-star"></i>
                <i className="ph-fill ph-star"></i>
                <i className="ph-fill ph-star-half"></i>
              </div>
              <div className="text-sm font-semibold text-slate-200">
                <span className="text-white font-bold">4.4 / 5</span>
                <span className="text-slate-400 font-normal ml-1.5">• 22+ ratings on Playo</span>
              </div>
            </div>

            <button
              onClick={onOpenReviewModal}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#0d3324] hover:bg-[#124230] text-emerald-200 border border-emerald-700/60 px-3.5 py-2 rounded-lg transition-all"
            >
              <i className="ph-bold ph-pencil-simple"></i>
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-[#0a2f21] border border-emerald-800/80 rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl text-emerald-400 font-serif leading-none">“</span>
                  <div className="flex text-amber-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`ph-fill ${i < Math.floor(review.rating) ? 'ph-star' : 'ph-star-half'}`}></i>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed -mt-2">
                  {review.comment}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-emerald-800/50 mt-6">
                <div className="w-10 h-10 rounded-full bg-emerald-700/60 border border-emerald-500/40 flex items-center justify-center font-bold text-sm text-white shrink-0">
                  {review.tag || review.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{review.name}</h4>
                  <p className="text-[11px] text-emerald-300">{review.source || 'Verified Player'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
