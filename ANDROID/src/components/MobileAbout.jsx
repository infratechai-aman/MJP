import React from 'react';

export default function MobileAbout({ onOpenLightbox }) {
  return (
    <section className="bg-white py-10 px-4 text-gray-900" id="about">
      <div className="max-w-md mx-auto">
        <span className="text-xs font-bold tracking-wider uppercase text-emerald-600 block mb-1">
          About Our Court
        </span>
        <h2 className="text-2xl font-extrabold text-gray-950 mb-3 tracking-tight">
          MJP Badminton Court
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          MJP Badminton Court, located in Kondhwa Khurd, Pune, is a well-maintained indoor facility with two wooden badminton courts. It's a great place for casual players, regular enthusiasts and groups looking for a quality playing experience.
        </p>

        {/* Badges Stack */}
        <div className="flex flex-col gap-2.5 mb-6">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </span>
            <div>
              <div className="text-xs font-bold text-gray-900">Convenient Location</div>
              <div className="text-[11px] text-gray-500">Kondhwa Khurd, Pune</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </span>
            <div>
              <div className="text-xs font-bold text-gray-900">Easy Booking</div>
              <div className="text-[11px] text-gray-500">Online slot booking</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </span>
            <div>
              <div className="text-xs font-bold text-gray-900">Great Playing Environment</div>
              <div className="text-[11px] text-gray-500">Well-lit indoor courts</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a
            className="py-3 px-4 bg-[#051812] hover:bg-emerald-950 text-brand-mint text-xs font-bold rounded-xl text-center transition flex items-center justify-center gap-1.5"
            href="#book-court"
          >
            <span>Book a Slot</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </a>
          <a
            className="py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold rounded-xl text-center transition border border-gray-200"
            href="#facilities"
          >
            Learn More
          </a>
        </div>

        {/* Court Photography Collage */}
        <div className="space-y-2">
          <div
            onClick={() => onOpenLightbox && onOpenLightbox(0)}
            className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
          >
            <img
              alt="Main view of MJP Badminton Court indoor green walls and wooden courts"
              className="w-full h-48 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYVvur2gZdZEJLL5kcalA8CriboKBMn1hB-24E0B5KRM9wA07m6ynk2E-gAO6wIrVfYEjdH3PP7_LPkRoNwZp1mXNrwXyUjN3wsGh7fQFKfIGypGSPinsfpcwutoW8IMpV-AQOK0Am5_35YqJU2nhpI5gNaQchk-bX9w8fNCc_w0-A6n0laf__IAd0GVoLavdj5rNQ8i9AYasR-swLYZFfRfVszAzp0luG51d5Urzic4lKtWlQ__xo"
            />
            <div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg px-2.5 py-1 text-[11px] shadow-sm">
              <span className="font-bold text-gray-900 block">Play. Improve. Enjoy.</span>
              <span className="text-gray-500 block text-[10px]">A great place for all levels</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <img
              onClick={() => onOpenLightbox && onOpenLightbox(1)}
              alt="Badminton court wooden flooring close-up"
              className="w-full h-20 object-cover rounded-xl border border-gray-200 cursor-pointer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHTDxyzLP3d8lIYtkflamcPvSBuOJDG33R4vqkQmOC_iqkqyruSTqGBLjCrrduNVoU775h6aPmtLsZc4iJx6rn8WiBVb35c06qB-FAQPdB1zl2oThguy_MAk5OyGOoKgJMpJvwiFx0VfVASanKvASQEbFBe6Wm9s6PUFqRDj1PGGBA2nKjmTT64m37dGdT2rbYNR0FtZXEWOW90cXPvAPz_P01GkhcTqE2Nk32I2_mkeXMmgvBGF2v"
            />
            <img
              onClick={() => onOpenLightbox && onOpenLightbox(4)}
              alt="Badminton shuttlecock on court net"
              className="w-full h-20 object-cover rounded-xl border border-gray-200 cursor-pointer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU4iM60IqYlRoL5XDUpzL3uFksglbyG0CuUAfFPgZz9264gaKZquX8BDal9FvMej9TEKoFVyLkxU83VqZCEbMi58_bpc8pH_EQgzuf-awDX0SEKD28G31ocrWXTscB8VcqiLu_4asXW2QTeldeOVeogY9BCkC6IrqHisH3kk8YlLLEihKu7QVQUrzURtXiyLZJWmUkWwZlRCsCRQszMJphgJbsaCDzdEj1g0L5yfZZCWf9tPmMmp-o"
            />
            <img
              onClick={() => onOpenLightbox && onOpenLightbox(3)}
              alt="Shower and washroom facilities at MJP"
              className="w-full h-20 object-cover rounded-xl border border-gray-200 cursor-pointer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBQgAw_uTS6jupXUfBWOu6J5hgVFVLCg6mliBqVG6a44hgJ99HRA6DPZSc6Bep0z2jCyWWKrGYYsC5jb2gQqYGWDUJyXmov2V29jvp75LvqrwjM2BzM5jwSieqoVwmti-y8_lRBrVCM-58jCocq95oQjJY-kkW15vYMpXTSRGmuc3Dj45JjC9Dkbm1zINUldrBroMpjWAIS-nXtkOYjnrv6VfNm81yW6hpASE1WGrZhECnJevJY70i"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
