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

  return (
    <section className="bg-[#051c14] text-white py-20 lg:py-28 relative overflow-hidden" id="booking">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-400/3 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="mb-10">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-400">PLAY YOUR WAY</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-2 text-white">
              Book a <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">Court</span>
            </h2>
            <p className="text-slate-300/70 text-sm mt-2">Check available slots and book your game in just a few clicks.</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Slot Selector Column */}
          <AnimatedSection delay={100} className="lg:col-span-7">
            <div className="bg-[#0a2e20]/80 p-6 sm:p-8 rounded-2xl border border-emerald-800/40 shadow-2xl space-y-6 backdrop-blur-sm">
              
              {/* Court Selection Tabs */}
              <div>
                <label className="block text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2.5">
                  Select Court
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {COURTS.map((court) => {
                    const isSelected = court.id === selectedCourtId;
                    return (
                      <button
                        key={court.id}
                        type="button"
                        onClick={() => setSelectedCourtId(court.id)}
                        className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                          isSelected
                            ? 'bg-emerald-900/40 border-emerald-400/60 text-white shadow-lg shadow-emerald-500/10'
                            : 'bg-[#051c14]/60 border-emerald-800/30 text-slate-300 hover:border-emerald-600/40 hover:bg-emerald-950/30'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold tracking-wide">{court.name}</span>
                          <span className={`w-2.5 h-2.5 rounded-full transition-colors ${isSelected ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50' : 'bg-slate-600'}`}></span>
                        </div>
                        <p className="text-[10px] text-emerald-300/60 mt-1">{court.type}</p>
                        <div className="mt-2.5 text-[11px] font-semibold text-emerald-400">
                          ₹{court.hourlyRate}/hr <span className="text-[9px] text-slate-500 font-normal">(Peak: ₹{court.peakHourlyRate})</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date selector */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="block text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    Select Date
                  </label>
                  <div className="flex gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={() => setSelectedDate(getTodayISO())}
                      className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                        selectedDate === getTodayISO()
                          ? 'bg-emerald-500 text-emerald-950 shadow-md shadow-emerald-500/20'
                          : 'bg-emerald-900/40 text-emerald-300 hover:bg-emerald-800/50'
                      }`}
                    >
                      Today
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDate(getTomorrowISO())}
                      className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                        selectedDate === getTomorrowISO()
                          ? 'bg-emerald-500 text-emerald-950 shadow-md shadow-emerald-500/20'
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
                    className="w-full bg-[#051c14]/80 border border-emerald-700/30 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                    type="date"
                    min={getTodayISO()}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>

              {/* Time Slots Grid */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    Available Slots
                  </label>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded bg-white/90"></span> Available
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded bg-[#22c55e]"></span> Selected
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded bg-emerald-950/80 border border-emerald-800/50"></span> Booked
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5" id="slot-container">
                  {TIME_SLOTS.map((slot) => {
                    const booked = isSlotBooked(slot.id);
                    const isSelected = selectedSlotId === slot.id;

                    if (booked) {
                      return (
                        <button
                          key={slot.id}
                          disabled
                          type="button"
                          className="slot-btn py-2.5 px-2 bg-emerald-950/40 border border-emerald-900/30 text-emerald-700/50 font-semibold rounded-xl text-xs text-center cursor-not-allowed flex flex-col items-center justify-center relative opacity-40"
                          title="This slot is already booked"
                        >
                          <span className="line-through">{slot.time}</span>
                          <span className="text-[9px] font-bold text-red-400/70">Booked</span>
                        </button>
                      );
                    }

                    if (isSelected) {
                      return (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => handleSlotClick(slot)}
                          className="slot-btn py-2.5 px-2 bg-gradient-to-br from-[#22c55e] to-[#16a34a] text-slate-950 font-extrabold rounded-xl text-xs shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-300/50 text-center transition-all flex flex-col items-center justify-center"
                        >
                          <span>{slot.time}</span>
                          <span className="text-[9px] text-emerald-950/70 font-bold">
                            ₹{slot.isPeak ? currentCourt.peakHourlyRate : currentCourt.hourlyRate}
                          </span>
                        </button>
                      );
                    }

                    return (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => handleSlotClick(slot)}
                        className="slot-btn py-2.5 px-2 bg-white/90 text-emerald-950 font-bold rounded-xl text-xs hover:bg-emerald-400 text-center transition-all duration-200 flex flex-col items-center justify-center group hover:shadow-md hover:shadow-emerald-500/10"
                      >
                        <span className="group-hover:scale-105 transition-transform">{slot.time}</span>
                        <span className="text-[9px] text-slate-500 group-hover:text-emerald-950 font-semibold">
                          ₹{slot.isPeak ? currentCourt.peakHourlyRate : currentCourt.hourlyRate}
                          {slot.isPeak && <span className="text-amber-600 font-black ml-0.5" title="Peak Hour Rate">•</span>}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Duration Selector */}
              <div className="pt-3 border-t border-emerald-800/30 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Booking Duration
                </span>
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((hours) => (
                    <button
                      key={hours}
                      type="button"
                      onClick={() => setSelectedDuration(hours)}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedDuration === hours
                          ? 'bg-emerald-400 text-emerald-950 shadow-md shadow-emerald-500/20'
                          : 'bg-[#051c14]/60 text-slate-300 border border-emerald-800/30 hover:bg-emerald-900/30'
                      }`}
                    >
                      {hours} {hours === 1 ? 'Hour' : 'Hours'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side: Booking Preview Card */}
          <AnimatedSection direction="right" delay={200} className="lg:col-span-5">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-emerald-800/30 shadow-2xl group">
                <img
                  alt="Badminton racket and shuttle on court"
                  className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwa6qo98oKm8kceVdFp1x6gf870KPpJZRQCKHV3uV8ZEdnQ0nx8GDExzwp7gKQJRG1umKz8ronDlHggbSSzyWr9PR5qc_igTCWL1T5PedroEbYBQZ6XrQYIvWTImi6kG42M_W5SCmdUeLawGH7Fvyr6pdsnjUSw-nYpT4c-i_3ITtKKGsKpMKRqIBKI0bK0FgrZx3dV_HebtLfjW0j5NcR4a3yLeMiQA45gKvV5FPFRZ7i_y6UXZsB"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051c14] via-transparent to-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-xl rounded-xl p-3.5 flex items-center gap-3 shadow-xl border border-white/10" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <div className="w-9 h-9 rounded-lg bg-emerald-400/20 text-emerald-400 flex items-center justify-center font-bold text-lg shrink-0">
                    <i className="ph-bold ph-sneaker"></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Non-marking shoes are compulsory.</p>
                    <p className="text-[10px] text-emerald-300/60">Rentals available at reception for ₹60</p>
                  </div>
                </div>
              </div>

              {/* Selected Slot Information */}
              {selectedSlotId && currentSlot && (
                <div className="bg-[#0a2e20]/80 border border-emerald-700/30 rounded-xl p-5 animate-fade-in shadow-xl backdrop-blur-sm">
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold mb-3">
                    <span>Selected Details</span>
                    <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-emerald-950 font-black px-3 py-1 rounded-lg text-[10px] shadow-md shadow-emerald-500/20">
                      READY TO BOOK
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-extrabold text-white">{currentCourt.name}</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        📅 {selectedDate} &nbsp;|&nbsp; ⏰ {currentSlot.time} ({selectedDuration} hr{selectedDuration > 1 ? 's' : ''})
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">₹{totalPrice}</span>
                      <span className="block text-[10px] text-slate-500">+ no convenience fee</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Direct CTA */}
              <button
                onClick={() => onProceedToCheckout({
                  court: currentCourt,
                  date: selectedDate,
                  slot: currentSlot,
                  duration: selectedDuration,
                  totalPrice
                })}
                className={`btn-premium-cta w-full py-4 px-6 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer ${
                  selectedSlotId
                    ? 'bg-gradient-to-r from-[#4ade80] to-[#22c55e] hover:from-[#22c55e] hover:to-[#16a34a] text-emerald-950 shadow-emerald-500/25'
                    : 'bg-emerald-600 text-emerald-950 hover:bg-emerald-500'
                }`}
                type="button"
              >
                <i className="ph-bold ph-ticket text-base"></i>
                <span>{selectedSlotId ? `Book ${currentSlot?.time || ''} Slot` : 'Book a Slot'}</span>
                <i className="ph-bold ph-arrow-right"></i>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
