import React from 'react';

export default function About({ onOpenLightbox }) {
  return (
    <section className="bg-white py-16 lg:py-24 text-slate-800" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: About Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">ABOUT OUR COURT</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                MJP Badminton Court
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              MJP Badminton Court, located in Kondhwa Khurd, Pune, is a well-maintained indoor facility with two wooden badminton courts. It's a great place for casual players, regular enthusiasts and groups looking for a quality playing experience.
            </p>

            {/* 3 Highlights Pill List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all">
                <div className="text-emerald-700 text-lg mb-1"><i className="ph-bold ph-map-pin"></i></div>
                <h4 className="text-xs font-bold text-slate-900">Convenient Location</h4>
                <p className="text-[11px] text-slate-500">Kondhwa Khurd, Pune</p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all">
                <div className="text-emerald-700 text-lg mb-1"><i className="ph-bold ph-calendar-plus"></i></div>
                <h4 className="text-xs font-bold text-slate-900">Easy Booking</h4>
                <p className="text-[11px] text-slate-500">Online slot booking</p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all">
                <div className="text-emerald-700 text-lg mb-1"><i className="ph-bold ph-lightbulb"></i></div>
                <h4 className="text-xs font-bold text-slate-900">Great Playing Env.</h4>
                <p className="text-[11px] text-slate-500">Well-lit indoor courts</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                className="inline-flex items-center gap-2 bg-[#0d3324] hover:bg-[#124230] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-emerald-950/20"
                href="#booking"
              >
                <i className="ph-bold ph-ticket"></i>
                <span>Book a Slot</span>
                <i className="ph-bold ph-arrow-right text-xs"></i>
              </a>

              <a
                className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:bg-slate-50"
                href="#facilities"
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>

          {/* Right: Court Collage Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Big Upper Photo */}
              <div
                onClick={() => onOpenLightbox && onOpenLightbox(5)}
                className="col-span-2 relative rounded-2xl overflow-hidden shadow-md group cursor-pointer"
                title="Click to view full image"
              >
                <img
                  alt="Main wooden court arena"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtH9zGUwla7JHxSSoUnU46Uvr1YkoUCIJh2DAiad4oyXgMKXdrAsIohrLNEhsMCFzbJ40JeldnqO2ImZSQF5JUuMGVHolNsyLaY1AavhYb7tgPFXpX0UXC_gW_TTfwwqWS2G3rrcHCsVTtvwxjYMgOaDUrQo5Lj2MuGIMa2egluIcZq4Fw6u1JLa-yKehOiwkKudLTW5xhc5pvzn2Cd7-3ubbJkRNxwZ3nL6vB_GPxrA1a4834MgIT"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg py-1.5 px-3 shadow-md flex items-center gap-2">
                  <i className="ph-fill ph-trophy text-emerald-600 text-sm"></i>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">Play. Improve. Enjoy.</span>
                    <span className="text-[10px] text-slate-500">A great place for all levels.</span>
                  </div>
                </div>
              </div>

              {/* Lower Photo 1 */}
              <div
                onClick={() => onOpenLightbox && onOpenLightbox(1)}
                className="rounded-xl overflow-hidden shadow group h-32 cursor-pointer"
                title="Click to view full image"
              >
                <img
                  alt="Polished court view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8E-e6HVxZ-Md3c9IIOe7B9TeuurbdAee0Me2pPrbW9lPNIaG-4USRXMtiMjB23E2G8h-Gp1vepdCp0Z54PqpNrCSnOh2zHPESsUvXyBPte9HbM6LysgLkjzjRwMnIWFuXHRPMKU_VW89nTAyqmGj5FoIvMDVzyJ9GeGHwJbyJ7CyYxg1AJe-acKkty6pVrQ9jX9s3SIMLsHXXjkbLS7WQi7VILXQvN3bVGgyHpWm8WXUsVYPp1uLu"
                />
              </div>

              {/* Lower Photo 2: Shuttlecock Detail */}
              <div
                onClick={() => onOpenLightbox && onOpenLightbox(4)}
                className="rounded-xl overflow-hidden shadow group h-32 cursor-pointer"
                title="Click to view full image"
              >
                <img
                  alt="Badminton equipment and court net"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtQ76EAO6rsYRFZlkvutbxkZ5oY0-ARJReORdvzd3yvm6wzMj03K5H3-rJKlKBrtXs-Z5OGbWLkR0_ZBIMq4TCZRLV0RSENPurKTeFv5CF1L59sABBSCZotAPiHoPpgrTdr63Fw64zCRQJl96RjKfnD__qfVH_pd1znJuoHJvi1arxSS6UIUUWPcsQogBVLlGS5fTrKlAsDMPBNDoIuCbN1ZOeNgUfUTJso413Diqd8Ps1jKB7Z3BE"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
