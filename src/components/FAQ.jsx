import React, { useState } from 'react';
import { FAQS } from '../data/courtData';
import { AnimatedSection } from '../hooks/useScrollReveal';

export default function FAQ() {
  const [showAll, setShowAll] = useState(false);
  const [openIds, setOpenIds] = useState([1]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (id) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedFaqs = showAll ? filteredFaqs : filteredFaqs.slice(0, 4);

  return (
    <section className="bg-[#03170e] py-14 sm:py-20 lg:py-24 text-white relative overflow-hidden" id="faq">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-400">FAQ</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-2">
                Frequently Asked <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">Questions</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 hover:text-emerald-400 border border-emerald-700/30 hover:border-emerald-500/40 px-5 py-2.5 rounded-xl transition-all cursor-pointer"
                type="button"
              >
                <span>{showAll ? 'Show Less' : 'View More'}</span>
                <i className={`ph-bold ${showAll ? 'ph-caret-up' : 'ph-arrow-right'}`}></i>
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayedFaqs.map((faq, idx) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <AnimatedSection key={faq.id} delay={idx * 100}>
                <div
                  className={`border rounded-xl p-5 transition-all duration-300 cursor-pointer group ${
                    isOpen
                      ? 'bg-emerald-900/20 border-emerald-500/30 shadow-lg shadow-emerald-500/5'
                      : 'bg-emerald-950/20 border-emerald-800/25 hover:border-emerald-600/30 hover:bg-emerald-900/10'
                  }`}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="flex items-center justify-between font-bold text-sm text-white">
                    <span className="pr-3">{faq.question}</span>
                    <span className={`transition-all duration-300 text-lg shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                      isOpen ? 'rotate-45 text-emerald-400 bg-emerald-500/15' : 'text-slate-500 bg-emerald-950/30'
                    }`}>
                      <i className="ph-bold ph-plus"></i>
                    </span>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-slate-300/70 leading-relaxed border-t border-emerald-800/20 pt-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
