import React, { useState } from 'react';
import { FAQS } from '../../data/courtData';

export default function MobileFAQ() {
  const [openIds, setOpenIds] = useState([1]);
  const [showAll, setShowAll] = useState(false);

  const toggle = (id) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((x) => x !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const displayedFaqs = showAll ? FAQS : FAQS.slice(0, 4);

  return (
    <section className="bg-white py-10 px-4 text-gray-900" id="faq">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-emerald-600 block mb-1">
              FAQ
            </span>
            <h2 className="text-2xl font-extrabold text-gray-950 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-2.5">
          {displayedFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer"
                onClick={() => toggle(faq.id)}
              >
                <div className="p-3.5 flex items-center justify-between text-xs font-bold text-gray-900 select-none">
                  <span>{faq.question}</span>
                  <span className={`text-gray-500 text-lg leading-none font-medium transition-transform duration-200 ${isOpen ? 'rotate-45 text-emerald-600' : ''}`}>
                    +
                  </span>
                </div>
                {isOpen && (
                  <div className="px-3.5 pb-3.5 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-2 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            type="button"
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 cursor-pointer"
          >
            <span>{showAll ? 'Show Fewer Questions' : 'View More Questions'}</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
