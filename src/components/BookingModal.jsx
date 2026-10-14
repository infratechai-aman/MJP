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
      // Fire celebration confetti!
      try {
        confetti({
          particleCount: 140,
          spread: 90,
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
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 booking-modal-overlay overflow-y-auto">
      <div className="booking-modal-content rounded-3xl max-w-xl w-full p-6 sm:p-9 text-white relative my-8">
        
        {/* Ambient glow orbs behind modal */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-all duration-200 z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <i className="ph-bold ph-x text-xl"></i>
        </button>

        {/* Modal Header */}
        <div className="mb-6 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-400 text-[11px] font-bold uppercase tracking-[0.15em] mb-2.5 bg-emerald-950/60 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>OFFICIAL COURT RESERVATION</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Reserve Your Slot</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Complete player details to generate your digital match pass.
          </p>
        </div>

        {/* Selected Slot Summary Strip (Digital Ticket Header) */}
        <div className="rounded-2xl p-4 sm:p-5 mb-6 border border-emerald-500/20 relative overflow-hidden bg-gradient-to-br from-emerald-950/40 via-[#041a0f]/80 to-[#020d08] shadow-inner">
          <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-40"></div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs relative z-10">
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-400/70 block mb-1 tracking-wider">Court</span>
              <span className="font-extrabold text-white text-sm block leading-tight">{court.name.split('(')[0].trim()}</span>
              <span className="text-[10px] text-emerald-300/60 font-medium">BWF Timber</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-400/70 block mb-1 tracking-wider">Date</span>
              <span className="font-extrabold text-white text-sm block leading-tight">{date}</span>
              <span className="text-[10px] text-slate-400 font-medium">Confirmed Day</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-400/70 block mb-1 tracking-wider">Time Slot</span>
              <span className="font-black text-emerald-400 text-sm block leading-tight">{slot.time}</span>
              <span className="text-[10px] text-emerald-300/60 font-medium">{slot.isPeak ? 'Peak Hour' : 'Standard'}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-400/70 block mb-1 tracking-wider">Duration</span>
              <span className="font-extrabold text-white text-sm block leading-tight">{duration} Hour{duration > 1 ? 's' : ''}</span>
              <span className="text-[10px] text-slate-400 font-medium">₹{totalPrice} Base</span>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {errorMessage && (
            <div className="p-3 bg-red-950/50 border border-red-700/60 text-red-200 text-xs rounded-xl flex items-center gap-2.5 animate-fade-in backdrop-blur-sm">
              <i className="ph-bold ph-warning-circle text-base shrink-0 text-red-400"></i>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Player Info Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                Primary Player Name *
              </label>
              <div className="relative">
                <i className="ph-bold ph-user text-emerald-400/60 text-base absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="input-premium w-full text-white rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none placeholder:text-slate-600 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                Mobile Number *
              </label>
              <div className="relative">
                <i className="ph-bold ph-phone text-emerald-400/60 text-base absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="input-premium w-full text-white rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none placeholder:text-slate-600 transition-all"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              Email Address <span className="text-slate-500 text-[10px] lowercase normal-case">(for digital match receipt)</span>
            </label>
            <div className="relative">
              <i className="ph-bold ph-envelope-simple text-emerald-400/60 text-base absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"></i>
              <input
                type="email"
                placeholder="rahul@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-premium w-full text-white rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none placeholder:text-slate-600 transition-all"
              />
            </div>
          </div>

          {/* Equipment Add-ons */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="block text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Equipment & Gear Add-ons
              </label>
              <span className="text-slate-500 text-[11px]">Optional</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {EQUIPMENT_ADDONS.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`addon-card p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'selected bg-emerald-900/35 border-emerald-400/60 text-white shadow-lg shadow-emerald-500/15'
                        : 'bg-[#03150d]/80 border-emerald-800/30 text-slate-300 hover:border-emerald-600/40 hover:bg-emerald-950/30'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${isSelected ? 'bg-emerald-400/20 text-emerald-400' : 'bg-emerald-950 text-emerald-500/60'}`}>
                        <i className={`ph-bold ${addon.icon} text-base`}></i>
                      </div>
                      <div className="truncate">
                        <span className="font-bold block truncate text-slate-200">{addon.name}</span>
                        <span className="text-[10px] text-emerald-400/80 font-semibold">+₹{addon.price} {addon.unit}</span>
                      </div>
                    </div>
                    <span className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 ml-2 transition-all ${
                      isSelected ? 'bg-emerald-500 border-emerald-400 text-emerald-950 shadow-md shadow-emerald-500/30' : 'border-slate-700 bg-slate-900/50'
                    }`}>
                      {isSelected && <i className="ph-bold ph-check text-xs font-black"></i>}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2.5">
              Payment Mode
            </label>
            <div className="grid grid-cols-3 gap-2.5 text-xs">
              {[
                { id: 'upi', label: 'UPI / GPay / PhonePe', icon: 'ph-qr-code' },
                { id: 'card', label: 'Debit / Credit Card', icon: 'ph-credit-card' },
                { id: 'venue', label: 'Pay at Venue Counter', icon: 'ph-money' }
              ].map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id)}
                  className={`payment-card p-3 rounded-xl border text-center transition-all duration-300 cursor-pointer ${
                    paymentMethod === method.id
                      ? 'selected bg-emerald-900/40 border-emerald-400/60 text-emerald-300 font-bold shadow-lg shadow-emerald-500/15'
                      : 'bg-[#03150d]/80 border-emerald-800/30 text-slate-400 hover:border-emerald-600/40'
                  }`}
                >
                  <i className={`ph-bold ${method.icon} text-lg block mb-1 mx-auto ${paymentMethod === method.id ? 'text-emerald-400' : 'text-slate-500'}`}></i>
                  <span className="text-[11px] leading-tight block">{method.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Breakdown & Submit */}
          <div className="pt-4 border-t border-emerald-800/30 space-y-2.5">
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-300">
              <span>Court Rental ({duration} hr)</span>
              <span className="font-semibold text-white">₹{totalPrice}</span>
            </div>
            {addonsTotal > 0 && (
              <div className="flex items-center justify-between text-xs sm:text-sm text-slate-300">
                <span>Equipment & Add-ons</span>
                <span className="font-semibold text-white">₹{addonsTotal}</span>
              </div>
            )}
            <div className="flex items-center justify-between text-xs sm:text-sm text-emerald-400 font-semibold">
              <span>Convenience Fee</span>
              <span className="font-bold">FREE (₹0)</span>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-emerald-800/30">
              <div>
                <span className="text-base sm:text-lg font-black text-white block">Total Payable</span>
                <span className="text-[10px] text-slate-400">All taxes included</span>
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">₹{grandTotal}</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-premium-cta w-full bg-gradient-to-r from-[#4ade80] to-[#22c55e] hover:from-[#22c55e] hover:to-[#16a34a] text-emerald-950 py-4 px-6 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-2xl shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:hover:translate-y-0 mt-3"
            >
              {isSubmitting ? (
                <>
                  <i className="ph-bold ph-spinner animate-spin text-base"></i>
                  <span>Generating Digital Match Pass...</span>
                </>
              ) : (
                <>
                  <i className="ph-bold ph-check-circle text-base"></i>
                  <span>Confirm & Generate Digital Match Pass</span>
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
