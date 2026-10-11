import React from 'react';

export default function QuickStats() {
  const stats = [
    {
      icon: 'ph-squares-four',
      title: '2 Wooden Courts',
      desc: 'Well-maintained wooden courts for a great experience',
      paddingClass: 'pt-4 md:pt-0'
    },
    {
      icon: 'ph-clock',
      title: '6 AM – 12 AM',
      desc: 'Daily open hours',
      paddingClass: 'pt-4 md:pt-0 md:pl-6'
    },
    {
      icon: 'ph-users-three',
      title: 'Viewing Gallery',
      desc: 'Spacious gallery for friends and family',
      paddingClass: 'pt-4 md:pt-0 md:pl-6'
    },
    {
      icon: 'ph-shower',
      title: 'Showers & Washrooms',
      desc: 'Separate washrooms and shower facilities',
      paddingClass: 'pt-4 md:pt-0 md:pl-6'
    }
  ];

  return (
    <section className="bg-white border-b border-slate-200 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex items-center gap-4 ${stat.paddingClass} group`}>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition-colors flex items-center justify-center text-2xl shrink-0">
                <i className={`ph-bold ${stat.icon}`}></i>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-tight">{stat.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
