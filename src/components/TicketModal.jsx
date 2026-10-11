import React from 'react';
import { VENUE_INFO } from '../data/courtData';

export default function TicketModal({ isOpen, onClose, ticket, onShowToast }) {
  if (!isOpen || !ticket) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `🏸 MJP Badminton Court Booking Confirmed!\nBooking ID: ${ticket.bookingId}\nCourt: ${ticket.courtName}\nDate: ${ticket.date}\nTime: ${ticket.slotTime} (${ticket.duration} hr)\nPlayer: ${ticket.playerName}\nVenue: ${VENUE_INFO.fullAddress}\n*Non-marking shoes compulsory!*`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCalendarAdd = () => {
    // Generate Google Calendar Link
    const dateFormatted = ticket.date.replace(/-/g, '');
    const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `Badminton Game @ MJP - ${ticket.courtName}`
    )}&dates=${dateFormatted}T090000Z/${dateFormatted}T100000Z&details=${encodeURIComponent(
      `Booking ID: ${ticket.bookingId}\nCourt: ${ticket.courtName}\nTime: ${ticket.slotTime}\nRules: Non-marking shoes compulsory.`
    )}&location=${encodeURIComponent(VENUE_INFO.fullAddress)}`;
    window.open(calUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-[#061a12] border border-emerald-500/70 rounded-2xl max-w-lg w-full p-6 sm:p-8 text-white shadow-2xl relative my-8" id="printable-pass">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="no-print absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-emerald-900/50 transition-colors"
          aria-label="Close pass"
        >
          <i className="ph-bold ph-x text-lg"></i>
        </button>

        {/* Pass Header */}
        <div className="text-center pb-5 border-b border-dashed border-emerald-800">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center text-2xl mx-auto mb-2 shadow-inner">
            <i className="ph-bold ph-tennis-ball"></i>
          </div>
          <span className="text-[10px] tracking-widest text-emerald-400 font-extrabold uppercase">
            Official Entry Pass
          </span>
          <h3 className="text-xl font-black text-white">MJP Badminton Court</h3>
          <p className="text-xs text-slate-400">Kondhwa Khurd, Pune</p>
        </div>

        {/* Booking ID & Status */}
        <div className="py-4 flex items-center justify-between border-b border-emerald-900/60 text-xs">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Booking Reference</span>
            <span className="font-mono text-sm font-black text-emerald-400 tracking-wider">
              {ticket.bookingId}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Status</span>
            <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-bold text-[11px]">
              <i className="ph-bold ph-check text-xs"></i> Confirmed
            </span>
          </div>
        </div>

        {/* Court & Slot Details */}
        <div className="py-4 grid grid-cols-2 gap-4 border-b border-emerald-900/60 text-xs">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Court Allocated</span>
            <span className="font-extrabold text-white text-sm">{ticket.courtName}</span>
            <span className="text-[10px] text-emerald-300 block">{ticket.courtType}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Player Name</span>
            <span className="font-extrabold text-white text-sm">{ticket.playerName}</span>
            <span className="text-[10px] text-slate-400 block">{ticket.phoneNumber}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Date of Game</span>
            <span className="font-bold text-white">{ticket.date}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Reserved Slot</span>
            <span className="font-bold text-emerald-400">{ticket.slotTime} ({ticket.duration} Hour)</span>
          </div>
        </div>

        {/* QR Code and Rules */}
        <div className="py-4 flex items-center gap-4 border-b border-emerald-900/60">
          {/* Simulated QR Code */}
          <div className="w-20 h-20 bg-white p-1.5 rounded-lg shrink-0 flex items-center justify-center shadow">
            <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900" fill="currentColor">
              <path d="M10,10 h30 v30 h-30 z M15,15 v20 h20 v-20 z M22,22 h6 v6 h-6 z M60,10 h30 v30 h-30 z M65,15 v20 h20 v-20 z M72,22 h6 v6 h-6 z M10,60 h30 v30 h-30 z M15,65 v20 h20 v-20 z M22,72 h6 v6 h-6 z M50,10 h6 v15 h-6 z M50,35 h15 v6 h-15 z M60,50 h10 v10 h-10 z M75,50 h15 v6 h-15 z M50,60 h6 v30 h-6 z M65,70 h15 v6 h-15 z M85,75 h6 v15 h-6 z M65,85 h10 v6 h-10 z" />
            </svg>
          </div>

          <div className="text-[11px] text-slate-300 space-y-1">
            <p className="font-bold text-white flex items-center gap-1.5 text-xs text-amber-300">
              <i className="ph-bold ph-sneaker"></i>
              Non-marking shoes are strictly compulsory!
            </p>
            <p className="text-[10px] text-slate-400 leading-tight">
              Please present this pass at reception 10 minutes prior to your slot time.
            </p>
            <p className="text-[10px] text-emerald-400 font-semibold">
              Payment: {ticket.paymentStatus} • Total: ₹{ticket.grandTotal}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="no-print pt-5 space-y-2.5">
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={handlePrint}
              type="button"
              className="py-2.5 px-3 bg-[#0d3324] hover:bg-[#124230] text-emerald-200 border border-emerald-700/60 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <i className="ph-bold ph-printer text-base"></i>
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleWhatsAppShare}
              type="button"
              className="py-2.5 px-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/50 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <i className="ph-bold ph-whatsapp-logo text-base"></i>
              <span>Share Pass</span>
            </button>
          </div>

          <button
            onClick={handleCalendarAdd}
            type="button"
            className="w-full py-2 px-3 bg-emerald-950/70 hover:bg-emerald-900/60 text-slate-300 border border-emerald-800/60 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <i className="ph-bold ph-calendar-plus text-sm"></i>
            <span>Add Game to Google Calendar</span>
          </button>

          <button
            onClick={onClose}
            type="button"
            className="w-full py-2.5 px-4 bg-[#4ade80] hover:bg-[#22c55e] text-emerald-950 rounded-xl font-black text-xs transition-all cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
