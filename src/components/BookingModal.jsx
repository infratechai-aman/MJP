import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const EQUIPMENT_OPTIONS = [
  {
    id: 'racket-rental',
    name: 'Yonex Graphite Racket',
    price: 50,
    unit: 'per racket / hr',
    type: 'racket'
  },
  {
    id: 'nylon-shuttles',
    name: 'Yonex Mavis 350 Nylon Shuttles',
    price: 80,
    unit: 'purchase',
    type: 'nylon'
  },
  {
    id: 'feather-shuttles',
    name: 'Tournament Feather Shuttles',
    price: 150,
    unit: 'purchase',
    type: 'feather'
  }
];

function formatBookingDate(dateVal) {
  if (!dateVal) return 'Wed, 14 Oct 2026';
  try {
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return dateVal;
    return d.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  } catch {
    return dateVal;
  }
}

function calculateEndTime(startTimeStr, durationHours = 1) {
  if (!startTimeStr) return '5:00 PM';
  const match = startTimeStr.match(/(\d+):?(\d*)\s*(AM|PM)/i);
  if (!match) return startTimeStr;
  let [_, h, m, meridiem] = match;
  let hour = parseInt(h, 10);
  const minutes = m ? m : '00';
  if (meridiem.toUpperCase() === 'PM' && hour !== 12) hour += 12;
  if (meridiem.toUpperCase() === 'AM' && hour === 12) hour = 0;

  hour = (hour + durationHours) % 24;
  const newMeridiem = hour >= 12 ? 'PM' : 'AM';
  let displayHour = hour % 12;
  if (displayHour === 0) displayHour = 12;
  return `${displayHour}:${minutes} ${newMeridiem}`;
}

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
  const [equipmentQuantities, setEquipmentQuantities] = useState({
    'racket-rental': 0,
    'nylon-shuttles': 0,
    'feather-shuttles': 0
  });
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddEquipment = (id) => {
    setEquipmentQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleDecrementEquipment = (id) => {
    setEquipmentQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) - 1)
    }));
  };

  const handleIncrementEquipment = (id) => {
    setEquipmentQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  // Calculate equipment line items & totals
  const selectedEquipmentItems = EQUIPMENT_OPTIONS.filter(
    (item) => (equipmentQuantities[item.id] || 0) > 0
  ).map((item) => ({
    ...item,
    quantity: equipmentQuantities[item.id],
    lineTotal: item.price * equipmentQuantities[item.id]
  }));

  const equipmentTotal = selectedEquipmentItems.reduce(
    (acc, curr) => acc + curr.lineTotal,
    0
  );

  const grandTotal = totalPrice + equipmentTotal;

  const formattedDate = formatBookingDate(date);
  const endTime = calculateEndTime(slot.time, duration);

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
          colors: ['#21D6A0', '#10b981', '#34d399', '#ffffff']
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
        addons: selectedEquipmentItems.map((item) => ({
          id: item.id,
          name: `${item.name} (${item.quantity}x)`,
          price: item.lineTotal,
          quantity: item.quantity
        })),
        grandTotal,
        paymentMethod,
        paymentStatus: paymentMethod === 'venue' ? 'Pay at Venue' : 'Confirmed',
        bookedAt: new Date().toISOString()
      };

      setIsSubmitting(false);
      onConfirmBooking(completedBooking);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-hidden">
      {/* Blurred Court Backdrop Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md scale-105 opacity-25"
        style={{ backgroundImage: `url('/hero-court-shuttle.png')` }}
      ></div>

      {/* Dark Charcoal Tint Overlay */}
      <div
        className="absolute inset-0 bg-[#040806]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container:
          Phone: occupies ~65-72% of screen height (max-h-[72vh]), leaving background visible as requested!
          Desktop: centered, max-w-[480px], max-h-[88vh].
      */}
      <div
        className="relative z-10 w-[92%] sm:w-full max-w-[480px] max-h-[72vh] sm:max-h-[88vh] bg-[#0c120f] border border-emerald-900/40 rounded-[28px] text-white flex flex-col shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden animate-fade-in"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Header */}
        <div className="relative px-5 pt-5 pb-3 sm:px-6 sm:pt-6 sm:pb-4 border-b border-white/5 flex-shrink-0">
          {/* Subtle badminton court artwork on right corner */}
          <div
            className="absolute top-0 right-0 w-36 h-28 bg-cover bg-right-top opacity-20 pointer-events-none rounded-tr-[28px]"
            style={{
              backgroundImage: `url('/hero-court-shuttle.png')`,
              maskImage: 'radial-gradient(circle at top right, black 30%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at top right, black 30%, transparent 80%)'
            }}
          ></div>

          <div className="relative z-10 flex items-start justify-between">
            <div>
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                RESERVE YOUR COURT
              </span>
              <h2 className="text-2xl sm:text-[1.65rem] font-serif font-bold text-white tracking-tight leading-none">
                MJP Badminton <span className="font-normal italic text-slate-200">Court</span>
              </h2>
              <div className="flex items-center gap-1.5 mt-1.5 text-xs text-zinc-300">
                <i className="ph-fill ph-map-pin text-[#21D6A0] text-sm"></i>
                <span>Kondhwa Khurd, Pune</span>
              </div>
            </div>

            {/* Minimal circular close button */}
            <button
              onClick={onClose}
              type="button"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 ml-3"
              aria-label="Close modal"
            >
              <i className="ph-bold ph-x text-sm"></i>
            </button>
          </div>
        </div>

        {/* Scrollable Form Body */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto px-5 py-3.5 sm:px-6 sm:py-4 space-y-4 custom-modal-scroll"
        >
          {errorMessage && (
            <div className="p-2.5 bg-red-950/40 border border-red-500/40 text-red-200 text-xs rounded-xl flex items-center gap-2">
              <i className="ph-bold ph-warning-circle text-red-400"></i>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* 1. Court Summary Panel */}
          <div className="bg-[#0b1b14] border border-emerald-900/40 rounded-2xl p-3 sm:p-4 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base sm:text-lg font-bold text-white tracking-tight font-serif">
                  {court.name.split('(')[0].trim()}
                </span>
                <span className="text-[10px] font-bold text-[#21D6A0] bg-[#21D6A0]/10 border border-[#21D6A0]/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {duration * 60} MIN
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400 font-medium">
                <span className="inline-flex items-center gap-1">
                  <i className="ph ph-calendar text-[#21D6A0] text-xs"></i>
                  <span>{formattedDate}</span>
                </span>
                <span className="text-zinc-600">|</span>
                <span className="inline-flex items-center gap-1">
                  <i className="ph ph-clock text-[#21D6A0] text-xs"></i>
                  <span>
                    {slot.time} – {endTime}
                  </span>
                </span>
              </div>
            </div>
            <div className="text-right pl-3 flex-shrink-0">
              <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-medium">
                Base court fee
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#21D6A0]">
                ₹{totalPrice}
              </span>
            </div>
          </div>

          {/* 2. Player Details */}
          <div>
            <div className="mb-2">
              <h3 className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                Player Details
              </h3>
              <p className="text-[11px] text-zinc-400">
                Enter your details for the booking
              </p>
            </div>

            <div className="space-y-2">
              {/* Full Name */}
              <div className="bg-[#131b16] border border-white/10 rounded-xl px-3.5 py-2 focus-within:border-[#21D6A0]/70 transition-colors">
                <label className="block text-[10px] font-medium text-zinc-400">
                  Full name <span className="text-red-400">*</span>
                </label>
                <div className="flex items-center gap-2.5 mt-0.5">
                  <i className="ph ph-user text-zinc-500 text-sm"></i>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                  />
                </div>
              </div>

              {/* Mobile & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="bg-[#131b16] border border-white/10 rounded-xl px-3.5 py-2 focus-within:border-[#21D6A0]/70 transition-colors">
                  <label className="block text-[10px] font-medium text-zinc-400">
                    Mobile number <span className="text-red-400">*</span>
                  </label>
                  <div className="flex items-center gap-2 mt-0.5">
                    <i className="ph ph-phone text-zinc-500 text-sm"></i>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="bg-[#131b16] border border-white/10 rounded-xl px-3.5 py-2 focus-within:border-[#21D6A0]/70 transition-colors">
                  <label className="block text-[10px] font-medium text-zinc-400">
                    Email <span className="text-zinc-500 font-normal">(Optional)</span>
                  </label>
                  <div className="flex items-center gap-2 mt-0.5">
                    <i className="ph ph-envelope-simple text-zinc-500 text-sm"></i>
                    <input
                      type="email"
                      placeholder="For pass receipt"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Add Equipment / Gear */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                  Add Equipment / Gear
                </h3>
                <p className="text-[11px] text-zinc-400">
                  Rent rackets or shuttles at the venue
                </p>
              </div>
              <span className="text-[10px] text-zinc-500 font-medium">Optional</span>
            </div>

            <div className="space-y-1.5">
              {EQUIPMENT_OPTIONS.map((item) => {
                const qty = equipmentQuantities[item.id] || 0;
                const isSelected = qty > 0;

                return (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between p-2.5 rounded-xl transition-all ${
                      isSelected
                        ? 'border border-[#21D6A0]/50 bg-[#12241b]'
                        : 'border border-white/5 bg-[#131b16] hover:bg-[#16201a]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Equipment Icon */}
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-[#21D6A0]">
                        {item.type === 'racket' ? (
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="10" cy="10" r="7" />
                            <path d="m15 15 6 6" />
                            <path d="M7 10h6" />
                            <path d="M10 7v6" />
                          </svg>
                        ) : (
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M8.5 14.5A3.5 3.5 0 0 0 12 18a3.5 3.5 0 0 0 3.5-3.5c0-.6-.2-1.2-.5-1.7L12 6l-3 6.8c-.3.5-.5 1.1-.5 1.7z" />
                            <path d="M7 11h10" />
                          </svg>
                        )}
                      </div>

                      <div>
                        <span className="text-xs font-semibold text-white block">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-zinc-400">
                          ₹{item.price} {item.unit}
                        </span>
                      </div>
                    </div>

                    {/* Add or Quantity Controls */}
                    {isSelected ? (
                      <div className="flex items-center bg-[#0c1611] border border-[#21D6A0]/40 rounded-lg p-0.5">
                        <button
                          type="button"
                          onClick={() => handleDecrementEquipment(item.id)}
                          className="w-6 h-6 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/5 rounded text-xs transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <i className="ph-bold ph-minus text-[10px]"></i>
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#21D6A0]">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleIncrementEquipment(item.id)}
                          className="w-6 h-6 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/5 rounded text-xs transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <i className="ph-bold ph-plus text-[10px]"></i>
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleAddEquipment(item.id)}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#16201a] text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer flex items-center gap-1"
                      >
                        <i className="ph-bold ph-plus text-[10px]"></i>
                        <span>Add</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Payment Option */}
          <div>
            <div className="mb-2">
              <h3 className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                Payment Option
              </h3>
              <p className="text-[11px] text-zinc-400">
                Choose how you want to pay
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  id: 'upi',
                  label: 'UPI / GPay',
                  icon: (
                    <svg
                      className="w-3.5 h-3.5 text-[#21D6A0]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L2 22h20L12 2zm0 5.5l5.5 11h-11L12 7.5z" />
                    </svg>
                  )
                },
                {
                  id: 'card',
                  label: 'Card',
                  icon: <i className="ph ph-credit-card text-sm"></i>
                },
                {
                  id: 'venue',
                  label: 'At Venue',
                  icon: <i className="ph ph-storefront text-sm"></i>
                }
              ].map((opt) => {
                const isChosen = paymentMethod === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPaymentMethod(opt.id)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      isChosen
                        ? 'border border-[#21D6A0] bg-[#12241b] text-white shadow-[0_0_12px_rgba(33,214,160,0.12)]'
                        : 'border border-white/10 bg-[#131b16] text-zinc-400 hover:text-zinc-200 hover:border-white/20'
                    }`}
                  >
                    {opt.icon}
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5. Price Details */}
          <div className="pt-2 border-t border-white/5 space-y-1.5">
            <span className="text-xs font-semibold text-zinc-300 block mb-1">
              Price Details
            </span>

            <div className="flex justify-between text-xs text-zinc-400">
              <span>Court Fee ({duration} hour)</span>
              <span className="text-zinc-200 font-medium">₹{totalPrice}</span>
            </div>

            {selectedEquipmentItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-xs text-zinc-400"
              >
                <span>
                  {item.name} ({item.quantity})
                </span>
                <span className="text-zinc-200 font-medium">₹{item.lineTotal}</span>
              </div>
            ))}

            <div className="border-t border-white/10 pt-2 mt-2 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-semibold text-zinc-200">
                Total Amount
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#21D6A0]">
                ₹{grandTotal}
              </span>
            </div>
          </div>

          {/* Hidden button to allow form submit on Enter key */}
          <button type="submit" className="hidden" aria-hidden="true" />
        </form>

        {/* 6. Primary Action CTA Button (Sticky at Bottom) */}
        <div className="p-4 sm:p-5 pt-3 border-t border-white/5 bg-[#0c120f]/95 flex-shrink-0">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-[#21D6A0] hover:bg-[#1bc290] active:scale-[0.99] text-[#051a11] font-extrabold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm shadow-[0_4px_20px_rgba(33,214,160,0.3)] transition-all cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <i className="ph-bold ph-spinner animate-spin text-base"></i>
                <span>Confirming Booking...</span>
              </>
            ) : (
              <>
                <span>Confirm Booking</span>
                <i className="ph-bold ph-arrow-right text-sm"></i>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
