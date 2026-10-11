import React, { useState } from 'react';
import { FAQS } from '../data/courtData';

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
    <section className="bg-white py-16 lg:py-24 text-slate-900" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-700">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-1">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-emerald-700 border border-slate-300 px-4 py-2 rounded-lg transition-colors cursor-pointer hover:border-emerald-500"
              type="button"
            >
              <span>{showAll ? 'Show Less' : 'View More'}</span>
              <i className={`ph-bold ${showAll ? 'ph-caret-up' : 'ph-arrow-right'}`}></i>
            </button>
          </div>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayedFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all cursor-pointer hover:border-emerald-300/80"
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="flex items-center justify-between font-bold text-sm text-slate-900">
                  <span className="pr-2">{faq.question}</span>
                  <span className={`text-slate-400 transition-transform text-lg shrink-0 ${isOpen ? 'rotate-45 text-emerald-600' : ''}`}>
                    <i className="ph-bold ph-plus"></i>
                  </span>
                </div>
                {isOpen && (
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed animate-fade-in border-t border-slate-200/60 pt-2.5">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
