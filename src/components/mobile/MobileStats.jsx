import React from 'react';

export default function MobileStats() {
  const stats = [
    {
      title: '2 Wooden Courts',
      desc: 'Well-maintained wooden courts',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4 6h16M4 10h16M4 14h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    },
    {
      title: '6 AM – 12 AM',
      desc: 'Daily open hours for bookings',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    },
    {
      title: 'Viewing Gallery',
      desc: 'Spacious gallery for friends',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    },
    {
      title: 'Washrooms',
      desc: 'Separate shower facilities',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white border-y border-gray-100 py-6 px-4">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-start gap-3 p-2 rounded-lg bg-gray-50/70 border border-gray-100">
            <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg shrink-0">
              {stat.icon}
            </div>
            <div>
              <h2 className="text-xs font-bold text-gray-900 leading-tight">{stat.title}</h2>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{stat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
