import React from 'react';
import { AnimatedSection } from '../hooks/useScrollReveal';

export default function Testimonials({ reviews, onOpenReviewModal }) {
  return (
    <section className="bg-[#051f14] text-white py-14 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Header */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-400">WHAT PLAYERS SAY</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-2 text-white leading-tight">
                Loved by the <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">community</span>
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400 text-base gap-0.5">
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
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-950/50 hover:bg-emerald-900/30 text-emerald-300 border border-emerald-700/30 hover:border-emerald-500/40 px-4 py-2.5 rounded-xl transition-all"
              >
                <i className="ph-bold ph-pencil-simple"></i>
                <span>Write a Review</span>
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, idx) => (
            <AnimatedSection key={review.id} delay={idx * 150}>
              <div className="bg-[#0a2f21]/60 border border-emerald-800/30 rounded-2xl p-7 shadow-xl flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 hover-lift backdrop-blur-sm relative overflow-hidden group">
                {/* Subtle shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(52,211,153,0.03), transparent)' }}></div>
                
                <div className="space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl text-emerald-400/30 font-serif leading-none">"</span>
                    <div className="flex text-amber-400 text-xs gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`ph-fill ${i < Math.floor(review.rating) ? 'ph-star' : 'ph-star-half'}`}></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-200/80 leading-relaxed -mt-1">
                    {review.comment}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-emerald-800/30 mt-6 relative">
                  <div className="w-11 h-11 rounded-full bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center font-bold text-sm text-emerald-300 shrink-0">
                    {review.tag || review.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{review.name}</h4>
                    <p className="text-[11px] text-emerald-400/60">{review.source || 'Verified Player'}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
