import React, { useState } from 'react';

export default function MyBookingsModal({
  isOpen,
  onClose,
  bookings = [],
  onCancelBooking,
  onViewTicket
}) {
  const [searchPhone, setSearchPhone] = useState('');

  if (!isOpen) return null;

  const filteredBookings = searchPhone.trim()
    ? bookings.filter((b) => b.phoneNumber.includes(searchPhone.trim()))
    : bookings;

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
            <i className="ph-bold ph-ticket"></i>
            <span>Player Portal</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">My Active Bookings</h3>
          <p className="text-xs text-slate-300 mt-1">
            View, download digital passes, or manage your reserved court slots.
          </p>
        </div>

        {/* Search by phone number */}
        <div className="mb-5">
          <div className="relative">
            <i className="ph-bold ph-magnifying-glass absolute left-3.5 top-3.5 text-slate-400 text-sm"></i>
            <input
              type="text"
              placeholder="Search by registered mobile number..."
              value={searchPhone}
              onChange={(e) => setSearchPhone(e.target.value)}
              className="w-full bg-[#051c14] border border-emerald-700/60 text-white rounded-lg pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-emerald-400"
            />
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
          {filteredBookings.length === 0 ? (
            <div className="text-center py-10 bg-[#051c14] border border-emerald-900/60 rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-emerald-900/40 text-emerald-400 flex items-center justify-center text-xl mx-auto mb-2">
                <i className="ph-bold ph-calendar-x"></i>
              </div>
              <h4 className="text-sm font-bold text-white">No Bookings Found</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                {searchPhone ? 'No active reservation matches this mobile number.' : 'You have not made any slot bookings yet.'}
              </p>
            </div>
          ) : (
            filteredBookings.map((b) => (
              <div
                key={b.bookingId}
                className="bg-[#051c14] border border-emerald-800/80 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-emerald-600 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-emerald-400">{b.bookingId}</span>
                    <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Confirmed
                    </span>
                  </div>
                  <h4 className="text-sm font-extrabold text-white mt-1">{b.courtName}</h4>
                  <p className="text-xs text-slate-300">
                    📅 {b.date} &nbsp;•&nbsp; ⏰ {b.slotTime} ({b.duration} hr)
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Player: <strong className="text-white">{b.playerName}</strong> ({b.phoneNumber})
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-emerald-900/60">
                  <button
                    type="button"
                    onClick={() => onViewTicket(b)}
                    className="px-3 py-1.5 bg-emerald-900/80 hover:bg-emerald-800 text-emerald-300 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <i className="ph-bold ph-ticket"></i>
                    <span>Pass</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to cancel booking ${b.bookingId}?`)) {
                        onCancelBooking(b.bookingId);
                      }
                    }}
                    className="px-3 py-1.5 bg-red-950/60 hover:bg-red-900/70 border border-red-800/60 text-red-300 text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
                  >
                    <i className="ph-bold ph-trash"></i>
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-6 border-t border-emerald-900/60 mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs rounded-xl transition-all"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
