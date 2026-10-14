import React from 'react';
import { AnimatedSection } from '../hooks/useScrollReveal';

export default function Facilities({ onOpenLightbox }) {
  const facilityItems = [
    {
      id: 1,
      name: 'Wooden Courts',
      desc: '2 well-maintained wooden courts for a great playing experience.',
      icon: 'ph-squares-four',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3e6JQVjXvHOT56Wkbs9YtqljX_xVE_cnjcndyujrDKyflCwPYkH1CHZO8hSi5diR2uP54yb2jUFclgbRlz7YIqRHnHv3tGVALQE9tLbi_P0m_dUsf93Q09mJE37rOxPtKDRlDHW_AVjU0f6KrqEdC392uQLp-m1Cqj8ksf94g2rbPDrFs18t0_FoMoatlGuofBBGbyrW2GD7fMFbO6XJdFXdc-IrEkxmDGSUdomT_Gq9oraaCwnFz',
      lightboxIndex: 1
    },
    {
      id: 2,
      name: 'Viewing Gallery',
      desc: 'Spacious gallery to watch your games with friends and family.',
      icon: 'ph-users',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMQcJuc2xy-3tDiyvQ5xIt2f1ZCHazQaAa0mleXOlmGVxULTJcG5VCc4jxomq9n_3po5m0p_w4ygHjANBg_6XNbRHGy8pxgdZ14v3XA7WrpebFL-l4q_3WiZiRrGGVqBRXSGuFqH2f5WuzJP1CAyOMwNgC1lOrnhQqIZuE_QPFhn_fiAKC41AqVNKOp1QWYUwhASCEUXWHJCcqejdtpZIha5sOH2PQS2YKQ2pB_mzo-UruB5xCscKH',
      lightboxIndex: 3
    },
    {
      id: 3,
      name: 'Showers',
      desc: 'Shower facilities available for players.',
      icon: 'ph-shower',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEaj5VmwDzENEKBUwePfTzKf3fwI0P1P-1wWHQauHD1MmypxSp-uWKRKhU26dBmP8QEvRSc6UG0qQR09CCIMwfkq9TK4qj69zlHGCeEiAq0ZVV1ndKnpw-w8GfueqH4HyMj1F-0CjsX68qQrTx1WA_MGzAItMvyvC-sXVnPU1xo1QJVZvTw9SXC0ADxTCFCb0UTDSf5poJAd1J0OTwGM-HXYSSW0-Et7Pj6ai5-v15CcgosaRsOlTo',
      lightboxIndex: 2
    },
    {
      id: 4,
      name: 'Separate Washrooms',
      desc: 'Clean and separate washrooms for a comfortable experience.',
      icon: 'ph-gender-intersex',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgyHIfQxlt9jayLE3rVi8giDC3ftUdPg34Jgfl3DwfkxfLKg2XhZMpMYHbRF786ysv9uKGNviJt9WHF3vvraSzr9kVmF0oOCcWthCfWst_KUY4qec6WFbIOurbWVA8Yu9CZhLeFhGROLTkGAlcqweqLWhx7y2lRRrrpxtxm_jCWQsgTofCm8oN53PKQ5fihJA8yZJCk5dWIpFJpEtWpQ6Ntk8rGB1a57BUnGVKgnA614FgeO7uOKEx',
      lightboxIndex: 2
    }
  ];

  return (
    <section className="bg-[#0b3323] text-white py-14 sm:py-20 lg:py-24 relative overflow-hidden" id="facilities">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[180px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <AnimatedSection>
            <div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-400">OUR FACILITIES</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-2 text-white leading-tight">
                Everything you need <br />
                for a <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">great game.</span>
              </h2>
              <p className="text-emerald-100/80 text-sm max-w-lg mt-3 leading-relaxed">
                Well-maintained courts, modern amenities and a comfortable environment to make your playing experience better.
              </p>
            </div>
          </AnimatedSection>

          {/* Non-Marking Notice Badge */}
          <AnimatedSection direction="right" delay={200}>
            <div className="bg-emerald-950/70 border border-emerald-500/40 rounded-2xl p-4 flex items-center gap-3.5 shadow-xl max-w-xs shrink-0 hover-glow backdrop-blur-md">
              <div className="w-11 h-11 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center text-2xl shrink-0">
                <i className="ph-bold ph-sneaker"></i>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Shoe Policy</h4>
                <p className="text-xs text-emerald-300/90 font-semibold mt-0.5">Non-marking shoes are compulsory.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* 4 Facility Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilityItems.map((item, idx) => (
            <AnimatedSection key={item.id} delay={idx * 120}>
              <div
                className="bg-[#0e3d2b]/90 rounded-2xl overflow-hidden border border-emerald-500/30 shadow-xl flex flex-col group hover:border-emerald-400 transition-all duration-300 cursor-pointer hover-lift backdrop-blur-md"
                onClick={() => onOpenLightbox && onOpenLightbox(item.lightboxIndex)}
                title="Click to view full photo"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2f21] via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg mb-3 group-hover:bg-emerald-500 group-hover:text-emerald-950 transition-all duration-300">
                      <i className={`ph-bold ${item.icon}`}></i>
                    </div>
                    <h3 className="text-base font-bold text-white">{item.name}</h3>
                    <p className="text-xs text-slate-300/70 mt-1.5 leading-relaxed">{item.desc}</p>
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
