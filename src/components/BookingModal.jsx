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
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!phoneNumber.trim() || phoneNumber.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      try {
        confetti({
          particleCount: 120,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#34d399', '#10b981', '#059669', '#ffffff']
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
        paymentStatus: paymentMethod === 'venue' ? 'Pay at Venue' : 'Confirmed',
        bookedAt: new Date().toISOString()
      };

      setIsSubmitting(false);
      onConfirmBooking(completedBooking);
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Minimalist District-Style Container */}
      <div className="bg-[#101412] border border-white/10 rounded-2xl sm:rounded-3xl max-w-md w-full p-6 text-white relative shadow-2xl my-auto animate-fade-in">
        
        {/* Header - Minimal & Clean */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">Reserve Slot</h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              MJP Badminton Court &bull; Kondhwa Khurd
            </p>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <i className="ph-bold ph-x text-sm"></i>
          </button>
        </div>

        {/* Selected Slot Summary Card - District Style */}
        <div className="mt-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span>{court.name.split('(')[0].trim()}</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-semibold px-2 py-0.5 rounded-md">
                {duration} Hour
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              📅 {date} &nbsp;&bull;&nbsp; ⏰ {slot.time}
            </p>
          </div>
          <div className="text-right">
            <span className="text-lg font-black text-emerald-400">₹{totalPrice}</span>
            <span className="block text-[10px] text-zinc-500">Base court fee</span>
          </div>
        </div>

        {/* Minimalist Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {errorMessage && (
            <div className="p-2.5 bg-red-950/40 border border-red-500/40 text-red-200 text-xs rounded-xl flex items-center gap-2">
              <i className="ph-bold ph-warning-circle text-red-400"></i>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Player Inputs - Clean & Uncluttered */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Player Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter full name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400 focus:bg-white/[0.06] transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Mobile Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400 focus:bg-white/[0.06] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Email <span className="text-zinc-500 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  placeholder="For pass receipt"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-400 focus:bg-white/[0.06] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Add-ons - Minimal List with District Style Add Buttons */}
          <div className="pt-2 border-t border-white/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-zinc-300">Add Equipment / Gear</span>
              <span className="text-[10px] text-zinc-500">Optional</span>
            </div>

            <div className="space-y-1.5">
              {EQUIPMENT_ADDONS.slice(0, 3).map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                  >
                    <div>
                      <span className="text-xs font-medium text-zinc-200 block">{addon.name.split('(')[0].trim()}</span>
                      <span className="text-[11px] text-zinc-400 font-semibold">+₹{addon.price} {addon.unit}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-white/5 text-zinc-300 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {isSelected ? '✓ Added' : '+ Add'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Payment Method - District Style Segmented Bar */}
          <div className="pt-2 border-t border-white/5">
            <span className="block text-xs font-medium text-zinc-300 mb-2">Payment Option</span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'upi', label: 'UPI / GPay' },
                { id: 'card', label: 'Card' },
                { id: 'venue', label: 'At Venue' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setPaymentMethod(opt.id)}
                  className={`py-2 px-2 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                    paymentMethod === opt.id
                      ? 'bg-white text-black shadow-md font-bold'
                      : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/5'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Footer - Price & Confirm CTA Button */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-4">
            <div>
              <span className="text-[11px] text-zinc-400 block">Total Amount</span>
              <span className="text-2xl font-black text-white">₹{grandTotal}</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-black py-3 px-5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <i className="ph-bold ph-spinner animate-spin"></i>
                  <span>Confirming...</span>
                </>
              ) : (
                <>
                  <span>Confirm Booking</span>
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
