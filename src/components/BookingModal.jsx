import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { EQUIPMENT_ADDONS } from '../data/courtData';

export default function BookingModal({
  isOpen,
  onClose,
  bookingDetails,
  onConfirmBooking
}) {
  if (!isOpen || !bookingDetails) return null;

  const { court, date, slot, duration = 1, totalPrice = 350 } = bookingDetails;

  const [playerName, setPlayerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const item = EQUIPMENT_ADDONS.find((a) => a.id === addonId);
    return sum + (item ? item.price : 0);
  }, 0);

  const grandTotal = totalPrice + addonsTotal;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!playerName.trim()) {
      setErrorMessage('Please enter the primary player name.');
      return;
    }
    if (!phoneNumber.trim() || phoneNumber.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#4ade80', '#22c55e', '#10b981', '#34d399', '#ffffff', '#fbbf24']
        });
      } catch (err) {
        // ignore
      }

      const bookingId = `MJP-${Math.floor(100000 + Math.random() * 900000)}`;
      const completedBooking = {
        bookingId,
        courtId: court.id,
        courtName: court.name,
        courtType: court.type,
        date,
        slotId: slot.id,
        slotTime: slot.time,
        duration,
        playerName: playerName.trim(),
        phoneNumber: phoneNumber.trim(),
        email: email.trim(),
        addons: selectedAddons.map((id) => EQUIPMENT_ADDONS.find((a) => a.id === id)),
        grandTotal,
        paymentMethod,
        paymentStatus: paymentMethod === 'venue' ? 'Pay at Venue Counter' : 'Confirmed (Instant)',
        bookedAt: new Date().toISOString()
      };

      setIsSubmitting(false);
      onConfirmBooking(completedBooking);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 booking-modal-overlay overflow-y-auto">
      {/* Modal Container: Perfectly sized for desktop and mobile without excessive height */}
      <div className="booking-modal-content rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-7 text-white relative max-h-[92vh] flex flex-col shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <i className="ph-bold ph-x text-lg"></i>
        </button>

        {/* Modal Header - Compact */}
        <div className="mb-3.5 pr-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-400/40 text-emerald-300 text-[10px] font-bold uppercase tracking-wider mb-1 bg-emerald-950/70">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>COURT RESERVATION</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">Reserve Your Slot</h3>
          <p className="text-[11px] sm:text-xs text-slate-300/80">
            Enter player details to confirm your match booking.
          </p>
        </div>

        {/* Scrollable form body that fits neatly */}
        <form onSubmit={handleSubmit} className="overflow-y-auto pr-1 space-y-3.5 flex-1">
          {errorMessage && (
            <div className="p-2.5 bg-red-950/60 border border-red-500/50 text-red-200 text-xs rounded-lg flex items-center gap-2 animate-fade-in">
              <i className="ph-bold ph-warning-circle text-sm shrink-0 text-red-400"></i>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Selected Slot Summary Strip - Compact Single Row */}
          <div className="rounded-xl p-3 border border-emerald-500/30 bg-emerald-950/50 backdrop-blur-sm">
            <div className="grid grid-cols-4 gap-2 text-center text-xs divide-x divide-emerald-800/40">
              <div className="px-1">
                <span className="text-[9px] uppercase font-bold text-emerald-300/70 block">Court</span>
                <span className="font-extrabold text-white text-xs truncate block">{court.name.split('(')[0].trim()}</span>
              </div>
              <div className="px-1">
                <span className="text-[9px] uppercase font-bold text-emerald-300/70 block">Date</span>
                <span className="font-extrabold text-white text-xs block">{date}</span>
              </div>
              <div className="px-1">
                <span className="text-[9px] uppercase font-bold text-emerald-300/70 block">Time</span>
                <span className="font-black text-emerald-400 text-xs block">{slot.time}</span>
              </div>
              <div className="px-1">
                <span className="text-[9px] uppercase font-bold text-emerald-300/70 block">Duration</span>
                <span className="font-extrabold text-white text-xs block">{duration} Hr</span>
              </div>
            </div>
          </div>

          {/* Player Info Inputs - Compact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-emerald-300 uppercase tracking-wider mb-1">
                Player Name *
              </label>
              <div className="relative">
                <i className="ph-bold ph-user text-emerald-400/70 text-sm absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                <input
                  type="text"
                  required
                  placeholder="Rahul Sharma"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="input-premium w-full text-white rounded-lg pl-8 pr-3 py-2 text-xs sm:text-sm focus:outline-none placeholder:text-slate-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-emerald-300 uppercase tracking-wider mb-1">
                Mobile Number *
              </label>
              <div className="relative">
                <i className="ph-bold ph-phone text-emerald-400/70 text-sm absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                <input
                  type="tel"
                  required
                  placeholder="10-digit number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="input-premium w-full text-white rounded-lg pl-8 pr-3 py-2 text-xs sm:text-sm focus:outline-none placeholder:text-slate-500 transition-all"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-emerald-300 uppercase tracking-wider mb-1">
              Email Address <span className="text-slate-400 text-[10px] lowercase font-normal">(for pass receipt)</span>
            </label>
            <div className="relative">
              <i className="ph-bold ph-envelope-simple text-emerald-400/70 text-sm absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"></i>
              <input
                type="email"
                placeholder="rahul@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-premium w-full text-white rounded-lg pl-8 pr-3 py-2 text-xs sm:text-sm focus:outline-none placeholder:text-slate-500 transition-all"
              />
            </div>
          </div>

          {/* Equipment Add-ons - Compact 2x2 Grid */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-[11px] font-bold text-emerald-300 uppercase tracking-wider">
                Gear Add-ons <span className="text-slate-400 text-[10px] font-normal lowercase">(optional)</span>
              </label>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {EQUIPMENT_ADDONS.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-2 rounded-lg border text-left flex items-center justify-between text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-900/40 border-emerald-400/70 text-white shadow-sm'
                        : 'bg-emerald-950/40 border-emerald-800/40 text-slate-300 hover:border-emerald-600/50'
                    }`}
                  >
                    <div className="truncate pr-1">
                      <span className="font-semibold block truncate text-[11px] text-slate-200">{addon.name.split('(')[0]}</span>
                      <span className="text-[10px] text-emerald-300/80 font-bold">+₹{addon.price}</span>
                    </div>
                    <span className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${
                      isSelected ? 'bg-emerald-400 border-emerald-300 text-emerald-950' : 'border-emerald-700/60'
                    }`}>
                      {isSelected && <i className="ph-bold ph-check text-[10px] font-black"></i>}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Payment Method - Compact 3 Pills */}
          <div>
            <label className="block text-[11px] font-bold text-emerald-300 uppercase tracking-wider mb-1.5">
              Payment Mode
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { id: 'upi', label: 'UPI / GPay', icon: 'ph-qr-code' },
                { id: 'card', label: 'Card', icon: 'ph-credit-card' },
                { id: 'venue', label: 'At Venue', icon: 'ph-money' }
              ].map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id)}
                  className={`p-2 rounded-lg border text-center transition-all cursor-pointer ${
                    paymentMethod === method.id
                      ? 'bg-emerald-800/40 border-emerald-400/70 text-emerald-300 font-bold'
                      : 'bg-emerald-950/40 border-emerald-800/40 text-slate-400 hover:border-emerald-600/50'
                  }`}
                >
                  <i className={`ph-bold ${method.icon} text-base block mb-0.5 mx-auto ${paymentMethod === method.id ? 'text-emerald-400' : 'text-slate-500'}`}></i>
                  <span className="text-[10px] font-semibold leading-tight block">{method.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Total & Submit Button - Compact */}
          <div className="pt-2 border-t border-emerald-800/40">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-300">Total Payable:</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400">₹{grandTotal}</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-premium-cta w-full bg-gradient-to-r from-[#4ade80] to-[#22c55e] hover:from-[#22c55e] hover:to-[#16a34a] text-emerald-950 py-2.5 sm:py-3 px-4 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <i className="ph-bold ph-spinner animate-spin text-sm"></i>
                  <span>Confirming...</span>
                </>
              ) : (
                <>
                  <i className="ph-bold ph-check-circle text-sm"></i>
                  <span>Confirm & Generate Digital Pass</span>
                  <i className="ph-bold ph-arrow-right text-xs"></i>
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
