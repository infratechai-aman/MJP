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

  const { court, date, slot, totalPrice = 350 } = bookingDetails;

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
      setErrorMessage('Please enter the player name.');
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
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {
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
        duration: 1,
        playerName: playerName.trim(),
        phoneNumber: phoneNumber.trim(),
        email: email.trim(),
        addons: selectedAddons.map((id) => EQUIPMENT_ADDONS.find((a) => a.id === id)),
        grandTotal,
        paymentMethod,
        paymentStatus: paymentMethod === 'venue' ? 'Pay at Venue' : 'Paid Online (UPI)',
        bookedAt: new Date().toISOString()
      };

      setIsSubmitting(false);
      onConfirmBooking(completedBooking);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-[#051812] border-t sm:border border-brand-mint/40 rounded-t-3xl sm:rounded-2xl max-w-md w-full p-5 sm:p-6 text-white shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Mobile Drag Pill */}
        <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-3 sm:hidden"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-lg"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="mb-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-mint bg-brand-mint/10 border border-brand-mint/30 px-2 py-0.5 rounded">
            Slot Confirmation
          </span>
          <h3 className="text-xl font-extrabold text-white mt-1">Book Your Court</h3>
        </div>

        {/* Summary Card */}
        <div className="bg-[#0b261e] border border-brand-borderDark rounded-xl p-3 mb-4 text-xs">
          <div className="grid grid-cols-3 gap-2">
            <div>
              <span className="text-[9px] uppercase text-gray-400 block font-bold">Court</span>
              <span className="font-bold text-white truncate block">{court.name.split(' ')[0]} {court.name.split(' ')[1]}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase text-gray-400 block font-bold">Date</span>
              <span className="font-bold text-white block">{date}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase text-gray-400 block font-bold">Slot</span>
              <span className="font-bold text-brand-mint block">{slot.time}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {errorMessage && (
            <div className="p-2.5 bg-red-950/80 border border-red-700 text-red-200 text-xs rounded-lg">
              {errorMessage}
            </div>
          )}

          <div>
            <label className="block text-[11px] font-bold text-gray-300 uppercase mb-1">
              Player Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full bg-[#072018] border border-emerald-900/80 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-brand-mint"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-300 uppercase mb-1">
              Mobile Number (+91) *
            </label>
            <input
              type="tel"
              required
              placeholder="10-digit mobile number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full bg-[#072018] border border-emerald-900/80 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-brand-mint"
            />
          </div>

          {/* Add-ons */}
          <div>
            <label className="block text-[11px] font-bold text-gray-300 uppercase mb-1.5">
              Equipment &amp; Add-ons (Optional)
            </label>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              {EQUIPMENT_ADDONS.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-2 rounded-lg border text-left flex items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-[#0f382a] border-brand-mint text-white'
                        : 'bg-[#072018] border-emerald-900/60 text-gray-300'
                    }`}
                  >
                    <div className="truncate pr-1">
                      <span className="block font-semibold truncate">{addon.name.split('(')[0]}</span>
                      <span className="text-[10px] text-brand-mint">+₹{addon.price}</span>
                    </div>
                    <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center text-[10px] shrink-0 ${
                      isSelected ? 'bg-brand-mint text-black border-brand-mint font-bold' : 'border-gray-600'
                    }`}>
                      {isSelected ? '✓' : ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-[11px] font-bold text-gray-300 uppercase mb-1.5">
              Payment Mode
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`p-2 rounded-lg border text-center transition-all ${
                  paymentMethod === 'upi'
                    ? 'bg-brand-mint/10 border-brand-mint text-brand-mint font-bold ring-1 ring-brand-mint'
                    : 'bg-[#072018] border-emerald-900/60 text-gray-400'
                }`}
              >
                📱 UPI / GPay / PhonePe
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('venue')}
                className={`p-2 rounded-lg border text-center transition-all ${
                  paymentMethod === 'venue'
                    ? 'bg-brand-mint/10 border-brand-mint text-brand-mint font-bold ring-1 ring-brand-mint'
                    : 'bg-[#072018] border-emerald-900/60 text-gray-400'
                }`}
              >
                💵 Pay at Venue Counter
              </button>
            </div>
          </div>

          {/* Price & Submit */}
          <div className="pt-3 border-t border-brand-borderDark/60 space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-300">
              <span>Court + Add-ons</span>
              <span>₹{grandTotal}</span>
            </div>
            <div className="flex items-center justify-between text-sm font-extrabold text-white">
              <span>Total Payable</span>
              <span className="text-brand-mint text-base font-black">₹{grandTotal}</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-brand-mint hover:bg-brand-mintDark text-gray-950 font-black rounded-xl text-center text-xs transition shadow-lg active:scale-95 disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? 'Generating Digital Pass...' : 'Confirm & Generate Digital Pass'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
