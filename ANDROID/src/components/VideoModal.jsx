import React from 'react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#051812] border border-brand-mint/40 rounded-2xl max-w-sm w-full p-4 text-white shadow-2xl relative">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 text-gray-400 hover:text-white p-1"
        >
          ✕
        </button>

        <h3 className="text-base font-extrabold text-white mb-0.5">Watch The Court</h3>
        <p className="text-[11px] text-gray-400 mb-3">360° Virtual arena tour of MJP Badminton Court.</p>

        <div className="relative rounded-xl overflow-hidden aspect-video bg-black mb-3">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAye5_10BFYRpifFWahOf4yMdCxHvLav06ypU7B2RjClqE_VPYQhGXb2iko0HIinQa-nCClmvzbMBTz0mlE6hguZtjQ-1CZjfTjVAJngBcbnWAKqAL567ralWEYuUVFHGsMydJoFdjrltUM1L7X6k0fb-MOId3MDwxhOFnWURfzX9j8sJjl3I-vLM1rZnMp0dCJTWxfvBfruzaRCa6sz27-sFD7_B_1UECBtdCMK6WVMGTA6pjOOLUo"
            alt="Court Video Preview"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
            <div className="w-12 h-12 rounded-full bg-brand-mint text-black flex items-center justify-center text-xl mb-1 shadow-lg">
              ▶
            </div>
            <span className="text-[10px] font-bold bg-black/70 px-2 py-0.5 rounded text-white">
              HD Court Walkthrough
            </span>
          </div>
        </div>

        <div className="p-2.5 bg-[#0b261e] rounded-xl text-[11px] text-gray-300 space-y-1 mb-3">
          <p className="font-bold text-brand-mint">✓ Shock-absorbing Teak Flooring</p>
          <p className="text-gray-400">Glare-free tournament lighting &amp; elevated spectator gallery.</p>
        </div>

        <button
          onClick={onClose}
          type="button"
          className="w-full py-2 bg-brand-mint text-black rounded-xl text-xs font-black"
        >
          Close Video
        </button>
      </div>
    </div>
  );
}
