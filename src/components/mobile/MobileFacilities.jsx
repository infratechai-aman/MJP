import React from 'react';

export default function MobileFacilities({ onOpenLightbox }) {
  const facilityItems = [
    {
      title: 'Wooden Courts',
      desc: '2 well-maintained wooden courts for a great playing experience.',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArfsRP6sYz59BWsLiMdOn5Mkduk8lSaUN4TXHMHU-nXvayelsdrpilLy8bQVWiLcqqBYQnzIFcmHixL-WBBIus-YcHOtII6bmEMz-aqq3Q6dZMNJFSyMZsAW8CfIP0Kultcg0tRq0VgPIJq0wl6BXKRmAcRnfKTTucuf9syL5yZmWwO8XKYfYERM4tqIg879Sf0jqhsbBIL1o8tOsoNjoGSOMzq5_5NqKHEiM716GNCJKRFuyrJxNF',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    },
    {
      title: 'Viewing Gallery',
      desc: 'Spacious gallery to watch your games with friends and family.',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwQ7Fth4m_t3W5qun2WMB23ghGmvccObK1YSGdKMQlWMNl9DCO5hPQq5IBXAjuXKIPbg0Bx4RJrZdhIUQ2HyKznrCSEH6oGX-VCIAeobJpsxAcOL-jDM86UBRBNsg2DEY53WdBYqwaa6tRjmyFp8mAHTtiOABOFUB1sImIxhf1A7JejkZlblfIZGMFpSVp0jUA9Qs2-rqCxLODJkNTTLftwDUPEY5jyKWMhM3gh6ASayuDKbAhxLs5',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    },
    {
      title: 'Showers',
      desc: 'Shower facilities available for players to refresh after rallies.',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuOWU-uYgBgmqjZbhmn-cpO_I8vYmrMocfn6rudmAbDDMUPLQ6WpBiKZqNEOUUb8k-tshUjPaaG4bVAXf9RXgiZVtfpPsZgW8gOgClo96R0eSjajwVOql6mtJeqhvOZXNHQ5JWDaWV2DA3Wg0v8M9oB9SO1PFv_b45HF--wWGkVkKS8gAGBegRwbwI6A8fBiS-MfQqPtcKJxyFv1k8-8iF2d0FLYC6r4Th_8Y0keF7uukpEPXyBrEW',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    },
    {
      title: 'Separate Washrooms',
      desc: 'Clean and separate washrooms for a comfortable experience.',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdoyq160i0X_YCbHbRSIoUXJhC2Q9CCcSmIFBZQlj06ioVuYthLKAGb6EdijEEpGkA1c6czciWejosi3rp-dgHbFDADJw2dLEU5mDkNSp-0cJEltz81stDAhWdm48kCnHnfEYRKhz775QCRf-xgjXj9c2LUdCjH7lZ7cyR5mAPub7IZ6muRenS2l5ieP5XU39phuGG4F9Fy5yIUHlC4V2ysr0WdmfI8kRTJ8dptDmbISx_mNHydvLY',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#051812] text-white py-10 px-4 border-t border-brand-borderDark/50" id="facilities">
      <div className="max-w-md mx-auto">
        <span className="text-xs font-bold tracking-wider uppercase text-emerald-400 block mb-1">
          Our Facilities
        </span>
        <h2 className="text-2xl font-extrabold text-white tracking-tight leading-tight mb-2">
          Everything you need <br />
          for a <span className="text-brand-mint">great game.</span>
        </h2>
        <p className="text-gray-300 text-xs leading-relaxed mb-5">
          Well-maintained courts, modern amenities and a comfortable environment to make your playing experience better.
        </p>

        {/* Shoe Policy Notice Banner */}
        <div className="bg-gradient-to-r from-[#0b2d22] to-[#0d382b] border border-emerald-500/30 rounded-xl p-3 flex items-center gap-3 mb-6 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-brand-mint flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
          <div>
            <div className="text-xs font-bold text-white tracking-wide">SHOE POLICY MANDATORY</div>
            <div className="text-[11px] text-emerald-200 font-medium">Non-marking shoes are strictly compulsory on wooden courts.</div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {facilityItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenLightbox && onOpenLightbox(idx)}
              className="bg-brand-cardDark border border-brand-borderDark rounded-xl p-3.5 flex flex-col justify-between cursor-pointer"
            >
              <img
                alt={item.title}
                className="w-full h-32 object-cover rounded-lg mb-3 border border-emerald-900/60"
                src={item.src}
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-brand-mint">{item.icon}</span>
                  <h3 className="font-bold text-sm text-white">{item.title}</h3>
                </div>
                <p className="text-[11px] text-gray-300 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
