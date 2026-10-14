import React, { useState } from 'react';
import { COURTS, TIME_SLOTS } from '../data/courtData';
import { AnimatedSection } from '../hooks/useScrollReveal';

export default function Booking({
  selectedCourtId,
  setSelectedCourtId,
  selectedDate,
  setSelectedDate,
  selectedSlotId,
  setSelectedSlotId,
  bookedSlots,
  onProceedToCheckout
}) {
  const [selectedDuration, setSelectedDuration] = useState(1);
  const [timeFilter, setTimeFilter] = useState('all'); // 'all', 'morning', 'afternoon', 'evening'

  // Quick Date Helpers
  const getTodayISO = () => new Date().toISOString().split('T')[0];
  const getTomorrowISO = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const currentCourt = COURTS.find((c) => c.id === selectedCourtId) || COURTS[0];
  const currentSlot = TIME_SLOTS.find((s) => s.id === selectedSlotId);
  const slotPrice = currentSlot?.isPeak ? currentCourt.peakHourlyRate : currentCourt.hourlyRate;
  const totalPrice = slotPrice * selectedDuration;

  const isSlotBooked = (slotId) => {
    const key = `${selectedCourtId}_${selectedDate}_${slotId}`;
    return bookedSlots.includes(key);
  };

  const handleSlotClick = (slot) => {
    if (isSlotBooked(slot.id)) return;
    setSelectedSlotId(slot.id);
  };

  // Filter slots for mobile ease of selection
  const filteredSlots = TIME_SLOTS.filter((slot) => {
    if (timeFilter === 'morning') return slot.hour24 >= 6 && slot.hour24 < 12;
    if (timeFilter === 'afternoon') return slot.hour24 >= 12 && slot.hour24 < 17;
    if (timeFilter === 'evening') return slot.hour24 >= 17;
    return true;
  });

  return (
    <section className="bg-[#051f14] text-white py-12 sm:py-20 lg:py-24 relative overflow-hidden" id="booking">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-400/8 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile Compact */}
        <AnimatedSection>
          <div className="mb-6 sm:mb-10">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-emerald-400">PLAY YOUR WAY</span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-1 text-white">
              Book a <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">Court</span>
            </h2>
            <p className="text-emerald-100/75 text-xs sm:text-sm mt-1">Check real-time slots and reserve your game in seconds.</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Slot Selector Column */}
          <AnimatedSection delay={100} className="lg:col-span-7">
            <div className="bg-[#0e3a29]/90 p-4 sm:p-7 rounded-2xl border border-emerald-500/30 shadow-2xl space-y-4 sm:space-y-6 backdrop-blur-md">
              
              {/* Court Selection Tabs */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
                  Select Court
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {COURTS.map((court) => {
                    const isSelected = court.id === selectedCourtId;
                    return (
                      <button
                        key={court.id}
                        type="button"
                        onClick={() => setSelectedCourtId(court.id)}
                        className={`p-3 sm:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-800/50 border-emerald-400 text-white shadow-md shadow-emerald-500/15'
                            : 'bg-emerald-950/50 border-emerald-800/40 text-slate-300 hover:border-emerald-600/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-extrabold tracking-wide">{court.name.split('(')[0]}</span>
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-400 shadow-sm shadow-emerald-400' : 'bg-slate-600'}`}></span>
                        </div>
                        <p className="text-[10px] text-emerald-300/80 mt-0.5 truncate">{court.type.split('-')[0]}</p>
                        <div className="mt-1 text-[11px] font-bold text-emerald-400">
                          ₹{court.hourlyRate}/hr <span className="text-[9px] text-slate-400 font-normal">(Peak: ₹{court.peakHourlyRate})</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date Selector with Quick Chips */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[11px] sm:text-xs font-bold text-emerald-300 uppercase tracking-wider">
                    Select Date
                  </label>
                  <div className="flex gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={() => setSelectedDate(getTodayISO())}
                      className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer ${
                        selectedDate === getTodayISO()
                          ? 'bg-emerald-400 text-emerald-950 shadow-sm'
                          : 'bg-emerald-900/40 text-emerald-300 hover:bg-emerald-800/50'
                      }`}
                    >
                      Today
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDate(getTomorrowISO())}
                      className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer ${
                        selectedDate === getTomorrowISO()
                          ? 'bg-emerald-400 text-emerald-950 shadow-sm'
                          : 'bg-emerald-900/40 text-emerald-300 hover:bg-emerald-800/50'
                      }`}
                    >
                      Tomorrow
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <input
                    aria-label="Booking date"
                    className="w-full bg-emerald-950/60 border border-emerald-600/30 text-white rounded-xl px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-all"
                    type="date"
                    min={getTodayISO()}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>

              {/* Time Slots with Quick Time-of-Day Filter Pills to eliminate mobile scroll fatigue */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                  <label className="block text-[11px] sm:text-xs font-bold text-emerald-300 uppercase tracking-wider">
                    Available Slots
                  </label>
                  
                  {/* Filter Pills */}
                  <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                    {[
                      { id: 'all', label: 'All' },
                      { id: 'morning', label: 'Morning' },
                      { id: 'afternoon', label: 'Afternoon' },
                      { id: 'evening', label: 'Evening' },
                    ].map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setTimeFilter(f.id)}
                        className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                          timeFilter === f.id
                            ? 'bg-emerald-500 text-emerald-950'
                            : 'bg-emerald-950/60 text-slate-400 hover:text-white'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Compact Slots Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2" id="slot-container">
                  {filteredSlots.map((slot) => {
                    const booked = isSlotBooked(slot.id);
                    const isSelected = selectedSlotId === slot.id;

                    if (booked) {
                      return (
                        <button
                          key={slot.id}
                          disabled
                          type="button"
                          className="py-2 px-1.5 bg-emerald-950/30 border border-emerald-900/30 text-emerald-700/40 font-semibold rounded-lg text-xs text-center cursor-not-allowed flex flex-col items-center justify-center opacity-40"
                          title="Slot already booked"
                        >
                          <span className="line-through text-[11px]">{slot.time}</span>
                          <span className="text-[8px] font-bold text-red-400/80">Booked</span>
                        </button>
                      );
                    }

                    if (isSelected) {
                      return (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => handleSlotClick(slot)}
                          className="py-2 px-1.5 bg-gradient-to-r from-emerald-400 to-emerald-500 text-emerald-950 font-black rounded-lg text-xs text-center shadow-lg shadow-emerald-500/20 transform scale-[1.03] transition-all flex flex-col items-center justify-center cursor-pointer border border-white/30"
                        >
                          <span className="text-[11px]">{slot.time}</span>
                          <span className="text-[8px] font-bold text-emerald-950/90">Selected</span>
                        </button>
                      );
                    }

                    return (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => handleSlotClick(slot)}
                        className="py-2 px-1.5 bg-white text-slate-800 hover:bg-emerald-50 hover:text-emerald-950 font-bold rounded-lg text-xs text-center border border-emerald-200/60 shadow-sm transition-all flex flex-col items-center justify-center group cursor-pointer hover:border-emerald-400"
                      >
                        <span className="text-[11px] group-hover:scale-105 transition-transform">{slot.time}</span>
                        <span className="text-[8px] text-slate-500 font-semibold">
                          ₹{slot.isPeak ? currentCourt.peakHourlyRate : currentCourt.hourlyRate}
                          {slot.isPeak && <span className="text-amber-600 font-black ml-0.5">•</span>}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Duration Selector */}
              <div className="pt-2.5 border-t border-emerald-800/40 flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Duration
                </span>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3].map((hours) => (
                    <button
                      key={hours}
                      type="button"
                      onClick={() => setSelectedDuration(hours)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        selectedDuration === hours
                          ? 'bg-emerald-400 text-emerald-950 shadow-sm'
                          : 'bg-emerald-950/60 text-slate-300 border border-emerald-800/40 hover:bg-emerald-900/40'
                      }`}
                    >
                      {hours} {hours === 1 ? 'Hr' : 'Hrs'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side: Booking Summary Card */}
          <AnimatedSection direction="right" delay={200} className="lg:col-span-5">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-emerald-500/25 shadow-xl group hidden sm:block">
                <img
                  alt="Badminton court action"
                  className="w-full h-52 lg:h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwa6qo98oKm8kceVdFp1x6gf870KPpJZRQCKHV3uV8ZEdnQ0nx8GDExzwp7gKQJRG1umKz8ronDlHggbSSzyWr9PR5qc_igTCWL1T5PedroEbYBQZ6XrQYIvWTImi6kG42M_W5SCmdUeLawGH7Fvyr6pdsnjUSw-nYpT4c-i_3ITtKKGsKpMKRqIBKI0bK0FgrZx3dV_HebtLfjW0j5NcR4a3yLeMiQA45gKvV5FPFRZ7i_y6UXZsB"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092b1e] via-transparent to-black/20"></div>
                <div className="absolute bottom-3 left-3 right-3 backdrop-blur-md rounded-xl p-2.5 flex items-center gap-2.5 shadow-lg border border-white/10 bg-black/40">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400/20 text-emerald-400 flex items-center justify-center font-bold text-base shrink-0">
                    <i className="ph-bold ph-sneaker"></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">Non-marking shoes compulsory</p>
                    <p className="text-[10px] text-emerald-300/80">Rentals available at reception (₹60)</p>
                  </div>
                </div>
              </div>

              {/* Selected Slot Information */}
              {selectedSlotId && currentSlot && (
                <div className="bg-[#0e3a29]/95 border border-emerald-500/35 rounded-xl p-4 shadow-xl backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs text-emerald-300 font-bold mb-2">
                    <span>Selected Reservation</span>
                    <span className="bg-emerald-400 text-emerald-950 font-black px-2 py-0.5 rounded text-[10px]">
                      READY
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-extrabold text-white">{currentCourt.name}</h4>
                      <p className="text-xs text-emerald-100/70 mt-0.5">
                        {selectedDate} &nbsp;•&nbsp; {currentSlot.time} ({selectedDuration} hr)
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black text-emerald-400">₹{totalPrice}</span>
                      <span className="block text-[9px] text-emerald-300/60">Zero convenience fee</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Direct Desktop CTA */}
              <button
                onClick={() => onProceedToCheckout({
                  court: currentCourt,
                  date: selectedDate,
                  slot: currentSlot,
                  duration: selectedDuration,
                  totalPrice
                })}
                className="btn-premium-cta w-full py-3.5 px-6 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-xl bg-gradient-to-r from-[#4ade80] to-[#22c55e] hover:from-[#22c55e] hover:to-[#16a34a] text-emerald-950 shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                type="button"
              >
                <i className="ph-bold ph-ticket text-base"></i>
                <span>{selectedSlotId ? `Book ${currentSlot?.time || ''} Slot` : 'Book a Slot'}</span>
                <i className="ph-bold ph-arrow-right text-xs"></i>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* MOBILE STICKY FLOATING ACTION BAR: Instantly books without requiring users to scroll down on phone */}
      {selectedSlotId && currentSlot && (
        <div className="lg:hidden fixed bottom-3 left-3 right-3 z-40 bg-[#092b1e]/95 backdrop-blur-2xl border border-emerald-400/50 rounded-2xl p-3 shadow-2xl flex items-center justify-between animate-slide-up">
          <div>
            <div className="text-xs font-black text-white flex items-center gap-1.5">
              <span>{currentCourt.name.split('(')[0]}</span>
              <span className="text-emerald-400">• {currentSlot.time}</span>
            </div>
            <div className="text-[10px] text-emerald-300/80">
              {selectedDate} &bull; <span className="font-bold text-white">₹{totalPrice}</span>
            </div>
          </div>
          <button
            onClick={() => onProceedToCheckout({
              court: currentCourt,
              date: selectedDate,
              slot: currentSlot,
              duration: selectedDuration,
              totalPrice
            })}
            type="button"
            className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-emerald-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/30 cursor-pointer"
          >
            <span>Proceed</span>
            <i className="ph-bold ph-arrow-right text-xs"></i>
          </button>
        </div>
      )}
    </section>
  );
}
