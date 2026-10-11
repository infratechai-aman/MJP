import React, { useState } from 'react';
import { COURTS, TIME_SLOTS } from '../data/courtData';

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
  const getDayAfterTomorrowISO = () => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
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
    <section className="bg-[#072218] text-white py-16 lg:py-24 relative" id="booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">PLAY YOUR WAY</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-white">Book a Court</h2>
          <p className="text-slate-300 text-sm mt-1">Check available slots and book your game in just a few clicks.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Slot Selector Column */}
          <div className="lg:col-span-7 bg-[#0a2e20] p-6 sm:p-8 rounded-2xl border border-emerald-800/80 shadow-2xl space-y-6">
            
            {/* Court Selection Tabs */}
            <div>
              <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2">
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
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-[#124230] border-emerald-400 text-white ring-1 ring-emerald-400 shadow-md'
                          : 'bg-[#051c14] border-emerald-700/60 text-slate-300 hover:border-emerald-600'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold tracking-wide">{court.name}</span>
                        <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-400' : 'bg-slate-500'}`}></span>
                      </div>
                      <p className="text-[10px] text-emerald-300/80 mt-1">{court.type}</p>
                      <div className="mt-2 text-[11px] font-semibold text-emerald-400">
                        ₹{court.hourlyRate}/hr <span className="text-[9px] text-slate-400 font-normal">(Peak: ₹{court.peakHourlyRate})</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date selector with quick tabs */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                  Select Date
                </label>
                <div className="flex gap-1.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedDate(getTodayISO())}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-bold transition-colors ${
                      selectedDate === getTodayISO()
                        ? 'bg-emerald-500 text-emerald-950'
                        : 'bg-emerald-900/60 text-emerald-300 hover:bg-emerald-800'
                    }`}
                  >
                    Today
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDate(getTomorrowISO())}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-bold transition-colors ${
                      selectedDate === getTomorrowISO()
                        ? 'bg-emerald-500 text-emerald-950'
                        : 'bg-emerald-900/60 text-emerald-300 hover:bg-emerald-800'
                    }`}
                  >
                    Tomorrow
                  </button>
                </div>
              </div>
              <div className="relative">
                <input
                  aria-label="Booking date"
                  className="w-full bg-[#051c14] border border-emerald-700/60 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
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
                <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                  Available Slots
                </label>
                <div className="flex items-center gap-3 text-[11px] text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-white"></span> Available
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-[#22c55e]"></span> Selected
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-emerald-950 border border-emerald-800"></span> Booked
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
                        className="slot-btn py-2.5 px-2 bg-emerald-950/60 border border-emerald-900/50 text-emerald-700/60 font-semibold rounded-lg text-xs text-center cursor-not-allowed flex flex-col items-center justify-center relative opacity-50"
                        title="This slot is already booked"
                      >
                        <span className="line-through">{slot.time}</span>
                        <span className="text-[9px] font-bold text-red-400/80">Booked</span>
                      </button>
                    );
                  }

                  if (isSelected) {
                    return (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => handleSlotClick(slot)}
                        className="slot-btn py-2.5 px-2 bg-[#22c55e] text-slate-950 font-extrabold rounded-lg text-xs shadow-md ring-2 ring-emerald-300 text-center transition-all flex flex-col items-center justify-center"
                      >
                        <span>{slot.time}</span>
                        <span className="text-[9px] text-emerald-950/80 font-bold">
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
                      className="slot-btn py-2.5 px-2 bg-white text-emerald-950 font-bold rounded-lg text-xs hover:bg-emerald-400 text-center transition-all flex flex-col items-center justify-center group"
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
            <div className="pt-2 border-t border-emerald-900/60 flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                Booking Duration
              </span>
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((hours) => (
                  <button
                    key={hours}
                    type="button"
                    onClick={() => setSelectedDuration(hours)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      selectedDuration === hours
                        ? 'bg-emerald-400 text-emerald-950'
                        : 'bg-[#051c14] text-slate-300 border border-emerald-700/60 hover:bg-emerald-900/40'
                    }`}
                  >
                    {hours} {hours === 1 ? 'Hour' : 'Hours'}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Booking Hero Preview Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-800 shadow-xl group">
              <img
                alt="Badminton racket and shuttle on court"
                className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwa6qo98oKm8kceVdFp1x6gf870KPpJZRQCKHV3uV8ZEdnQ0nx8GDExzwp7gKQJRG1umKz8ronDlHggbSSzyWr9PR5qc_igTCWL1T5PedroEbYBQZ6XrQYIvWTImi6kG42M_W5SCmdUeLawGH7Fvyr6pdsnjUSw-nYpT4c-i_3ITtKKGsKpMKRqIBKI0bK0FgrZx3dV_HebtLfjW0j5NcR4a3yLeMiQA45gKvV5FPFRZ7i_y6UXZsB"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#072218] via-transparent to-black/30"></div>

              {/* Non-marking pill in card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-base shrink-0">
                  <i className="ph-bold ph-sneaker"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Non-marking shoes are compulsory.</p>
                  <p className="text-[10px] text-slate-500">Rentals available at reception for ₹60</p>
                </div>
              </div>
            </div>

            {/* Selected Slot Information summary box */}
            {selectedSlotId && currentSlot && (
              <div className="bg-[#0a2e20] border border-emerald-700/60 rounded-xl p-4 animate-fade-in shadow-lg">
                <div className="flex items-center justify-between text-xs text-emerald-300 font-semibold mb-2">
                  <span>Selected Details</span>
                  <span className="bg-emerald-400 text-emerald-950 font-black px-2 py-0.5 rounded text-[10px]">
                    READY TO BOOK
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold text-white">{currentCourt.name}</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      📅 {selectedDate} &nbsp;|&nbsp; ⏰ {currentSlot.time} ({selectedDuration} hr{selectedDuration > 1 ? 's' : ''})
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-[#22c55e]">₹{totalPrice}</span>
                    <span className="block text-[10px] text-slate-400">+ no convenience fee</span>
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
              className={`w-full py-3.5 px-6 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer ${
                selectedSlotId
                  ? 'bg-[#4ade80] hover:bg-[#22c55e] text-emerald-950 ring-2 ring-emerald-300/40'
                  : 'bg-emerald-600 text-emerald-950 hover:bg-emerald-500'
              }`}
              type="button"
            >
              <i className="ph-bold ph-ticket text-base"></i>
              <span>{selectedSlotId ? `Book ${currentSlot?.time || ''} Slot` : 'Book a Slot'}</span>
              <i className="ph-bold ph-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
