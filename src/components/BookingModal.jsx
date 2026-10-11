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
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
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
        paymentStatus: paymentMethod === 'venue' ? 'Pay at Venue' : 'Paid (Simulated)',
        bookedAt: new Date().toISOString()
      };

      setIsSubmitting(false);
      onConfirmBooking(completedBooking);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-[#082318] border border-emerald-700/80 rounded-2xl max-w-xl w-full p-6 sm:p-8 text-white shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-emerald-900/50 transition-colors"
          aria-label="Close modal"
        >
          <i className="ph-bold ph-x text-lg"></i>
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-700/40 text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Booking Confirmation
          </div>
          <h3 className="text-2xl font-extrabold text-white">Reserve Your Slot</h3>
          <p className="text-xs text-slate-300 mt-1">
            Complete your player details to confirm court reservation.
          </p>
        </div>

        {/* Selected Slot Summary Strip */}
        <div className="bg-[#051c14] border border-emerald-800/80 rounded-xl p-4 mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Court</span>
              <span className="font-bold text-white">{court.name.split(' ')[0]} {court.name.split(' ')[1]}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Date</span>
              <span className="font-bold text-white">{date}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Time Slot</span>
              <span className="font-bold text-emerald-400">{slot.time}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Duration</span>
              <span className="font-bold text-white">{duration} Hour{duration > 1 ? 's' : ''}</span>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {errorMessage && (
            <div className="p-3 bg-red-950/60 border border-red-700 text-red-200 text-xs rounded-lg flex items-center gap-2">
              <i className="ph-bold ph-warning-circle text-base shrink-0"></i>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Player Info Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1.5">
                Primary Player Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="w-full bg-[#051c14] border border-emerald-700/60 text-white rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1.5">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full bg-[#051c14] border border-emerald-700/60 text-white rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-slate-400 text-[10px] lowercase">(for digital receipt pass)</span>
            </label>
            <input
              type="email"
              placeholder="rahul@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#051c14] border border-emerald-700/60 text-white rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
            />
          </div>

          {/* Equipment Add-ons */}
          <div>
            <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2">
              Equipment & Gear Add-ons <span className="text-slate-400 text-[10px] lowercase">(optional)</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {EQUIPMENT_ADDONS.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-2.5 rounded-lg border text-left flex items-center justify-between text-xs transition-all ${
                      isSelected
                        ? 'bg-emerald-950/90 border-emerald-400 text-white'
                        : 'bg-[#051c14] border-emerald-800/60 text-slate-300 hover:border-emerald-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <i className={`ph-bold ${addon.icon} text-emerald-400 text-sm shrink-0`}></i>
                      <div className="truncate">
                        <span className="font-semibold block truncate">{addon.name}</span>
                        <span className="text-[10px] text-slate-400">+₹{addon.price} {addon.unit}</span>
                      </div>
                    </div>
                    <span className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ml-2 ${
                      isSelected ? 'bg-emerald-500 border-emerald-400 text-emerald-950' : 'border-slate-600'
                    }`}>
                      {isSelected && <i className="ph-bold ph-check text-[10px]"></i>}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2">
              Payment Mode
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { id: 'upi', label: 'UPI / GPay / PhonePe', icon: 'ph-qr-code' },
                { id: 'card', label: 'Debit / Credit Card', icon: 'ph-credit-card' },
                { id: 'venue', label: 'Pay at Venue Counter', icon: 'ph-money' }
              ].map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id)}
                  className={`p-2.5 rounded-lg border text-center transition-all ${
                    paymentMethod === method.id
                      ? 'bg-emerald-950 border-emerald-400 text-emerald-300 font-bold ring-1 ring-emerald-400'
                      : 'bg-[#051c14] border-emerald-800/60 text-slate-400 hover:border-emerald-700'
                  }`}
                >
                  <i className={`ph-bold ${method.icon} text-base block mb-1 mx-auto`}></i>
                  <span className="text-[11px] leading-tight block">{method.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Breakdown & Submit */}
          <div className="pt-3 border-t border-emerald-900/60 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>Court Rental ({duration} hr)</span>
              <span>₹{totalPrice}</span>
            </div>
            {addonsTotal > 0 && (
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Equipment & Add-ons</span>
                <span>₹{addonsTotal}</span>
              </div>
            )}
            <div className="flex items-center justify-between text-xs text-emerald-400">
              <span>Convenience Fee</span>
              <span className="font-bold">FREE (₹0)</span>
            </div>
            <div className="flex items-center justify-between text-base font-extrabold text-white border-t border-emerald-900/60 pt-2">
              <span>Total Payable</span>
              <span className="text-xl text-[#22c55e]">₹{grandTotal}</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#4ade80] hover:bg-[#22c55e] text-emerald-950 py-3.5 px-6 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <i className="ph-bold ph-spinner animate-spin text-base"></i>
                  <span>Generating Booking Pass...</span>
                </>
              ) : (
                <>
                  <i className="ph-bold ph-check-circle text-base"></i>
                  <span>Confirm & Generate Digital Pass</span>
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
