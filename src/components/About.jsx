import React from 'react';
import { AnimatedSection } from '../hooks/useScrollReveal';

export default function About({ onOpenLightbox }) {
  return (
    <section className="bg-[#041a0f] py-20 lg:py-28 text-white relative overflow-hidden" id="about">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-400/3 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: About Details */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatedSection>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">ABOUT OUR COURT</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-2 leading-tight">
                MJP Badminton <br />
                <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">Court</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <p className="text-slate-300/80 leading-relaxed text-base">
                MJP Badminton Court, located in Kondhwa Khurd, Pune, is a well-maintained indoor facility with two wooden badminton courts. It's a great place for casual players, regular enthusiasts and groups looking for a quality playing experience.
              </p>
            </AnimatedSection>

            {/* Editorial Features Showcase (Clean, no AI slop boxes) */}
            <div className="space-y-3.5 pt-2">
              {[
                { title: 'BWF-Grade Shock Absorption', desc: 'Natural teak wooden flooring calibrated to minimize joint impact during intense rallies.' },
                { title: 'Glare-Free Vertical LED Lighting', desc: 'Even, shadow-free illumination across the court volume for crystal-clear shuttlecock visibility.' },
                { title: 'Elevated Viewing Gallery & Amenities', desc: 'Comfortable spectator seating, clean separate changing rooms, and showers.' },
                { title: 'Convenient Slot Booking & Parking', desc: 'Instant online slot reservation with dedicated two-wheeler and four-wheeler campus parking.' }
              ].map((feat, idx) => (
                <AnimatedSection key={idx} delay={200 + idx * 80}>
                  <div className="flex items-start gap-3.5 group">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-xs shrink-0 mt-0.5 group-hover:bg-emerald-400 group-hover:text-emerald-950 transition-all duration-300 shadow-sm shadow-emerald-500/10">
                      <i className="ph-bold ph-check"></i>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">{feat.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Buttons */}
            <AnimatedSection delay={500}>
              <div className="flex items-center gap-4 pt-3">
                <a
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-900/30 hover:-translate-y-0.5"
                  href="#booking"
                >
                  <i className="ph-bold ph-ticket"></i>
                  <span>Book a Slot</span>
                  <i className="ph-bold ph-arrow-right text-xs"></i>
                </a>

                <a
                  className="inline-flex items-center gap-2 border border-emerald-700/40 hover:border-emerald-500/60 text-emerald-300 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all hover:bg-emerald-900/20"
                  href="#facilities"
                >
                  <span>Learn More</span>
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Court Collage Grid */}
          <div className="lg:col-span-6">
            <AnimatedSection direction="right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {/* Big Upper Photo */}
                <div
                  onClick={() => onOpenLightbox && onOpenLightbox(5)}
                  className="col-span-2 relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer hover-lift"
                  title="Click to view full image"
                >
                  <img
                    alt="Main wooden court arena"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtH9zGUwla7JHxSSoUnU46Uvr1YkoUCIJh2DAiad4oyXgMKXdrAsIohrLNEhsMCFzbJ40JeldnqO2ImZSQF5JUuMGVHolNsyLaY1AavhYb7tgPFXpX0UXC_gW_TTfwwqWS2G3rrcHCsVTtvwxjYMgOaDUrQo5Lj2MuGIMa2egluIcZq4Fw6u1JLa-yKehOiwkKudLTW5xhc5pvzn2Cd7-3ubbJkRNxwZ3nL6vB_GPxrA1a4834MgIT"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020d08]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 backdrop-blur-xl rounded-xl py-2 px-4 shadow-xl flex items-center gap-2.5 border border-white/10" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <i className="ph-fill ph-trophy text-emerald-400 text-sm"></i>
                    <div>
                      <span className="text-xs font-bold text-white block leading-tight">Play. Improve. Enjoy.</span>
                      <span className="text-[10px] text-emerald-300/70">A great place for all levels.</span>
                    </div>
                  </div>
                </div>

                {/* Lower Photo 1 */}
                <div
                  onClick={() => onOpenLightbox && onOpenLightbox(1)}
                  className="rounded-xl overflow-hidden shadow-lg group h-36 cursor-pointer hover-lift"
                  title="Click to view full image"
                >
                  <img
                    alt="Polished court view"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8E-e6HVxZ-Md3c9IIOe7B9TeuurbdAee0Me2pPrbW9lPNIaG-4USRXMtiMjB23E2G8h-Gp1vepdCp0Z54PqpNrCSnOh2zHPESsUvXyBPte9HbM6LysgLkjzjRwMnIWFuXHRPMKU_VW89nTAyqmGj5FoIvMDVzyJ9GeGHwJbyJ7CyYxg1AJe-acKkty6pVrQ9jX9s3SIMLsHXXjkbLS7WQi7VILXQvN3bVGgyHpWm8WXUsVYPp1uLu"
                  />
                </div>

                {/* Lower Photo 2 */}
                <div
                  onClick={() => onOpenLightbox && onOpenLightbox(4)}
                  className="rounded-xl overflow-hidden shadow-lg group h-36 cursor-pointer hover-lift"
                  title="Click to view full image"
                >
                  <img
                    alt="Badminton equipment and court net"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtQ76EAO6rsYRFZlkvutbxkZ5oY0-ARJReORdvzd3yvm6wzMj03K5H3-rJKlKBrtXs-Z5OGbWLkR0_ZBIMq4TCZRLV0RSENPurKTeFv5CF1L59sABBSCZotAPiHoPpgrTdr63Fw64zCRQJl96RjKfnD__qfVH_pd1znJuoHJvi1arxSS6UIUUWPcsQogBVLlGS5fTrKlAsDMPBNDoIuCbN1ZOeNgUfUTJso413Diqd8Ps1jKB7Z3BE"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
