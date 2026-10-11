import React, { useState } from 'react';

export default function MyBookingsModal({
  isOpen,
  onClose,
  bookings = [],
  onCancelBooking,
  onViewTicket
}) {
  const [phoneSearch, setPhoneSearch] = useState('');

  if (!isOpen) return null;

  const filtered = phoneSearch.trim()
    ? bookings.filter((b) => b.phoneNumber.includes(phoneSearch.trim()))
    : bookings;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-[#051812] border border-brand-mint/40 rounded-2xl max-w-sm w-full p-5 text-white shadow-2xl relative">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"
        >
          ✕
        </button>

        <h3 className="text-lg font-bold text-white mb-0.5">My Court Bookings</h3>
        <p className="text-[11px] text-gray-400 mb-3">View active passes or manage slots.</p>

        <input
          type="tel"
          placeholder="Search by registered phone number..."
          value={phoneSearch}
          onChange={(e) => setPhoneSearch(e.target.value)}
          className="w-full bg-[#072018] border border-emerald-900/80 rounded-xl px-3 py-2 text-xs text-white mb-3 focus:outline-none focus:border-brand-mint"
        />

        <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
          {filtered.length === 0 ? (
            <div className="text-center py-8 bg-[#0b261e] rounded-xl p-4">
              <p className="text-xs text-gray-300 font-semibold">No Bookings Found</p>
              <p className="text-[10px] text-gray-400 mt-1">No reservations found for this search.</p>
            </div>
          ) : (
            filtered.map((b) => (
              <div
                key={b.bookingId}
                className="bg-[#0b261e] border border-brand-borderDark rounded-xl p-3 text-xs space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-brand-mint">{b.bookingId}</span>
                  <span className="text-[10px] bg-emerald-500/20 text-brand-mint px-2 py-0.5 rounded-full font-bold">
                    Confirmed
                  </span>
                </div>
                <div className="font-bold text-white">{b.courtName}</div>
                <div className="text-gray-300 text-[11px]">
                  📅 {b.date} &nbsp;•&nbsp; ⏰ {b.slotTime}
                </div>
                <div className="text-gray-400 text-[10px]">
                  Player: {b.playerName} ({b.phoneNumber})
                </div>
                <div className="flex gap-2 pt-1 border-t border-brand-borderDark/60">
                  <button
                    onClick={() => onViewTicket(b)}
                    className="flex-1 py-1.5 bg-brand-mint/20 text-brand-mint rounded-lg text-[11px] font-bold"
                  >
                    View Pass
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm('Cancel this booking?')) {
                        onCancelBooking(b.bookingId);
                      }
                    }}
                    className="py-1.5 px-3 bg-red-950/70 text-red-300 rounded-lg text-[11px] font-bold"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <button
          onClick={onClose}
          type="button"
          className="w-full mt-4 py-2 bg-brand-mint text-gray-950 rounded-xl text-xs font-black cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
}
