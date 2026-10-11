import React from 'react';
import { VENUE_INFO } from '../data/courtData';

export default function TicketModal({ isOpen, onClose, ticket }) {
  if (!isOpen || !ticket) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `🏸 MJP Badminton Court Booking Confirmed!\nBooking ID: ${ticket.bookingId}\nCourt: ${ticket.courtName}\nDate: ${ticket.date}\nTime: ${ticket.slotTime}\nPlayer: ${ticket.playerName}\nVenue: ${VENUE_INFO.fullAddress}\n*Non-marking shoes compulsory!*`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCalendar = () => {
    const dateFormatted = ticket.date.replace(/-/g, '');
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `Badminton Game @ MJP - ${ticket.courtName}`
    )}&dates=${dateFormatted}T090000Z/${dateFormatted}T100000Z&details=${encodeURIComponent(
      `Booking ID: ${ticket.bookingId}\nCourt: ${ticket.courtName}\nTime: ${ticket.slotTime}\nRules: Non-marking shoes compulsory.`
    )}&location=${encodeURIComponent(VENUE_INFO.fullAddress)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-[#051812] border border-brand-mint/50 rounded-2xl max-w-sm w-full p-5 text-white shadow-2xl relative" id="printable-pass">
        
        <button
          onClick={onClose}
          type="button"
          className="no-print absolute top-4 right-4 text-gray-400 hover:text-white p-1"
        >
          ✕
        </button>

        {/* Pass Header */}
        <div className="text-center pb-4 border-b border-dashed border-emerald-800">
          <div className="w-10 h-10 rounded-xl bg-brand-mint/10 border border-brand-mint/30 text-brand-mint flex items-center justify-center text-lg mx-auto mb-1.5">
            🏸
          </div>
          <span className="text-[9px] tracking-widest text-brand-mint font-extrabold uppercase">
            Official Entry Pass
          </span>
          <h3 className="text-lg font-black text-white">MJP Badminton Court</h3>
          <p className="text-[11px] text-gray-400">Kondhwa Khurd, Pune</p>
        </div>

        {/* Reference & Status */}
        <div className="py-3 flex items-center justify-between border-b border-brand-borderDark/60 text-xs">
          <div>
            <span className="text-[9px] uppercase text-gray-400 block font-bold">Booking ID</span>
            <span className="font-mono text-xs font-black text-brand-mint">{ticket.bookingId}</span>
          </div>
          <span className="bg-emerald-500/20 text-brand-mint border border-emerald-500/40 px-2 py-0.5 rounded-full text-[10px] font-bold">
            ✓ Confirmed
          </span>
        </div>

        {/* Details Grid */}
        <div className="py-3 grid grid-cols-2 gap-2 text-xs border-b border-brand-borderDark/60">
          <div>
            <span className="text-[9px] uppercase text-gray-400 block font-bold">Court</span>
            <span className="font-bold text-white text-xs block">{ticket.courtName}</span>
          </div>
          <div>
            <span className="text-[9px] uppercase text-gray-400 block font-bold">Player</span>
            <span className="font-bold text-white text-xs block">{ticket.playerName}</span>
          </div>
          <div>
            <span className="text-[9px] uppercase text-gray-400 block font-bold">Date</span>
            <span className="font-semibold text-white text-xs block">{ticket.date}</span>
          </div>
          <div>
            <span className="text-[9px] uppercase text-gray-400 block font-bold">Time Slot</span>
            <span className="font-bold text-brand-mint text-xs block">{ticket.slotTime}</span>
          </div>
        </div>

        {/* QR & Shoe Rule */}
        <div className="py-3 flex items-center gap-3 border-b border-brand-borderDark/60">
          <div className="w-16 h-16 bg-white p-1 rounded-lg shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900" fill="currentColor">
              <path d="M10,10 h30 v30 h-30 z M15,15 v20 h20 v-20 z M22,22 h6 v6 h-6 z M60,10 h30 v30 h-30 z M65,15 v20 h20 v-20 z M72,22 h6 v6 h-6 z M10,60 h30 v30 h-30 z M15,65 v20 h20 v-20 z M22,72 h6 v6 h-6 z M50,10 h6 v15 h-6 z M50,35 h15 v6 h-15 z M60,50 h10 v10 h-10 z M75,50 h15 v6 h-15 z M50,60 h6 v30 h-6 z M65,70 h15 v6 h-15 z M85,75 h6 v15 h-6 z" />
            </svg>
          </div>
          <div className="text-[10px] text-gray-300 space-y-0.5">
            <p className="font-bold text-amber-300">
              👟 Non-marking shoes compulsory!
            </p>
            <p className="text-gray-400 leading-tight">
              Arrive 10 mins prior to slot at reception.
            </p>
            <p className="text-brand-mint font-semibold">
              Status: {ticket.paymentStatus} (₹{ticket.grandTotal})
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="no-print pt-4 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="py-2 px-2 bg-[#0b261e] hover:bg-emerald-950 text-brand-mint border border-brand-mint/30 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer"
            >
              📄 Print / PDF
            </button>
            <button
              onClick={handleWhatsAppShare}
              type="button"
              className="py-2 px-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer"
            >
              💬 WhatsApp
            </button>
          </div>

          <button
            onClick={handleCalendar}
            type="button"
            className="w-full py-2 bg-[#072018] text-gray-300 rounded-xl text-[11px] font-semibold border border-emerald-900/60"
          >
            📅 Add to Google Calendar
          </button>

          <button
            onClick={onClose}
            type="button"
            className="w-full py-2.5 bg-brand-mint hover:bg-brand-mintDark text-gray-950 rounded-xl text-xs font-black cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
