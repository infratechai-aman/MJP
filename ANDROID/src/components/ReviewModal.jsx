import React, { useState } from 'react';

export default function ReviewModal({ isOpen, onClose, onAddReview }) {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    onAddReview({
      id: Date.now(),
      name: name.trim(),
      tag: name.trim().slice(0, 2).toUpperCase(),
      source: 'via Playo',
      rating,
      comment: comment.trim()
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#051812] border border-brand-mint/40 rounded-2xl max-w-sm w-full p-5 text-white shadow-2xl relative">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"
        >
          ✕
        </button>

        <h3 className="text-lg font-bold text-white mb-1">Leave Feedback</h3>
        <p className="text-xs text-gray-400 mb-4">Rate your playing experience at MJP.</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-[11px] font-bold text-gray-300 uppercase mb-1">Rating</label>
            <div className="flex gap-1.5 text-2xl text-amber-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  {star <= rating ? '★' : '☆'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-300 uppercase mb-1">Your Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Vikram Joshi"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#072018] border border-emerald-900/80 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-brand-mint"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-300 uppercase mb-1">Comments *</label>
            <textarea
              required
              rows={3}
              placeholder="How was the wooden court and facilities?"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full bg-[#072018] border border-emerald-900/80 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-brand-mint resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-brand-mint text-gray-950 font-bold rounded-xl text-xs cursor-pointer"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
