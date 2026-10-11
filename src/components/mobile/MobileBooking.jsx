import React, { useState } from 'react';
import { COURTS, TIME_SLOTS } from '../../data/courtData';

export default function MobileBooking({
  selectedCourtId,
  setSelectedCourtId,
  selectedDate,
  setSelectedDate,
  selectedSlotId,
  setSelectedSlotId,
  bookedSlots,
  onProceedToCheckout
}) {
  const currentCourt = COURTS.find((c) => c.id === selectedCourtId) || COURTS[0];
  const currentSlot = TIME_SLOTS.find((s) => s.id === selectedSlotId);
  const slotPrice = currentSlot?.isPeak ? currentCourt.peakHourlyRate : currentCourt.hourlyRate;

  const isSlotBooked = (slotId) => {
    const key = `${selectedCourtId}_${selectedDate}_${slotId}`;
    return bookedSlots.includes(key);
  };

  const handleSlotClick = (slot) => {
    if (isSlotBooked(slot.id)) return;
    setSelectedSlotId(slot.id);
  };

  // Format date nicely (e.g. Thu, 16 Oct 2025)
  const formatDisplayDate = (iso) => {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return iso;
    }
  };

  return (
    <section className="bg-[#051812] text-white py-10 px-4 border-t border-brand-borderDark/60" id="book-court">
      <div className="max-w-md mx-auto">
        <span className="text-xs font-bold tracking-wider uppercase text-brand-mint block mb-1">
          Play Your Way
        </span>
        <h2 className="text-2xl font-extrabold text-white tracking-tight mb-1">
          Book a Court
        </h2>
        <p className="text-xs text-gray-300 mb-5 leading-relaxed">
          Check available slots and book your game in just a few clicks.
        </p>

        {/* Booking Card Widget */}
        <div className="bg-brand-cardDark border border-brand-borderDark rounded-2xl p-4 shadow-xl space-y-4">
          
          {/* Court Tabs */}
          <div>
            <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1.5">
              Select Court
            </label>
            <div className="grid grid-cols-2 gap-2">
              {COURTS.map((court) => {
                const isSelected = court.id === selectedCourtId;
                return (
                  <button
                    key={court.id}
                    type="button"
                    onClick={() => setSelectedCourtId(court.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-[#0f382a] border-brand-mint text-white ring-1 ring-brand-mint'
                        : 'bg-[#072018] border-emerald-900/80 text-gray-300'
                    }`}
                  >
                    <span className="text-xs font-bold block">{court.name.split(' ')[0]} {court.name.split(' ')[1]}</span>
                    <span className="text-[10px] text-brand-mint font-semibold">₹{court.hourlyRate}/hr</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Date Selector Input */}
          <div>
            <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1.5" htmlFor="booking-date">
              Select Date
            </label>
            <div className="relative">
              <input
                className="w-full bg-[#072018] border border-emerald-900/80 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-brand-mint"
                id="booking-date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-mint text-xs font-bold">
                📅
              </div>
            </div>
            <span className="text-[10px] text-gray-400 mt-1 block">
              Selected: <strong className="text-brand-mint">{formatDisplayDate(selectedDate)}</strong>
            </span>
          </div>

          {/* Available Slot Pills (3 columns for mobile grid) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider">
                Available Slots
              </span>
              <span className="text-[10px] text-brand-mint font-semibold">
                {selectedSlotId ? '1 Slot Selected' : 'Tap to select slot'}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 text-center text-xs">
              {TIME_SLOTS.map((slot) => {
                const booked = isSlotBooked(slot.id);
                const isSelected = selectedSlotId === slot.id;

                if (booked) {
                  return (
                    <button
                      key={slot.id}
                      disabled
                      type="button"
                      className="py-2 px-1 bg-[#04140e] text-gray-500 font-semibold rounded-lg border border-emerald-950/80 opacity-40 cursor-not-allowed text-[11px]"
                    >
                      <span className="line-through block">{slot.time}</span>
                      <span className="text-[8px] text-red-400 block font-bold">Booked</span>
                    </button>
                  );
                }

                if (isSelected) {
                  return (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => handleSlotClick(slot)}
                      className="py-2 px-1 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold rounded-lg shadow-md ring-2 ring-brand-mint text-[11px] active:scale-95 transition-transform"
                    >
                      <span>{slot.time}</span>
                      <span className="text-[9px] block text-black/80">₹{slotPrice}</span>
                    </button>
                  );
                }

                return (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => handleSlotClick(slot)}
                    className="py-2 px-1 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition border border-gray-200 text-[11px] active:scale-95"
                  >
                    <span>{slot.time}</span>
                    <span className="text-[9px] block text-gray-500">
                      ₹{slot.isPeak ? currentCourt.peakHourlyRate : currentCourt.hourlyRate}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Banner in Booking Card */}
          <div className="relative rounded-xl overflow-hidden border border-emerald-900/60">
            <img
              alt="Badminton racket and shuttlecock with court background"
              className="w-full h-24 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP2ji8R4fUEnk_phJyWG50EkTtQ7TDWubeV1C5Zkmt0_wGcSBtuRUkUIvfYt9nCFyu8hrm-tGAX1Fw1cbKTRQiIwROLzZm6qlOCQyLXaTJ3FXiUaT1QDaHI8raD76FSvor5dgn_xEX6tCF5GDYc4fZnwspj-ziWmwoz-fUa7AQa51SAzslY3h4dbQdlETKwI9swGqUrWI-cpsOCGwak9ISGycVPtNoRZNpxgxZJ0MBhq5NS9lKSIBz"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-2">
              <div className="bg-white/95 rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-sm">
                <svg className="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                <span className="text-[11px] font-bold text-gray-900">
                  Non-marking shoes are compulsory
                </span>
              </div>
            </div>
          </div>

          {/* Primary Booking CTA */}
          <button
            onClick={() => onProceedToCheckout({
              court: currentCourt,
              date: selectedDate,
              slot: currentSlot || TIME_SLOTS[11],
              totalPrice: slotPrice
            })}
            className="w-full py-3.5 bg-brand-mint hover:bg-brand-mintDark text-gray-950 font-extrabold rounded-xl text-center text-sm transition shadow-lg flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            type="button"
          >
            <span>Book Selected Slot</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}
