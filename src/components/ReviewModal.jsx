import React, { useState } from 'react';

export default function ReviewModal({ isOpen, onClose, onAddReview }) {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [source, setSource] = useState('via Playo');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      tag: name.trim().slice(0, 2).toUpperCase(),
      source,
      rating,
      comment: comment.trim()
    };

    onAddReview(newReview);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#082318] border border-emerald-700/80 rounded-2xl max-w-md w-full p-6 text-white shadow-2xl relative">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
          aria-label="Close modal"
        >
          <i className="ph-bold ph-x text-base"></i>
        </button>

        <h3 className="text-xl font-bold text-white mb-1">Leave Player Feedback</h3>
        <p className="text-xs text-slate-300 mb-5">
          Help the badminton community by rating your experience at MJP court.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-emerald-300 uppercase mb-2">Rating</label>
            <div className="flex gap-2 text-2xl text-amber-400 cursor-pointer">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <i className={`ph-fill ph-star ${star <= rating ? 'text-amber-400' : 'text-slate-600'}`}></i>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-emerald-300 uppercase mb-1">Your Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Sameer Kulkarni"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#051c14] border border-emerald-700/60 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-emerald-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-emerald-300 uppercase mb-1">Source / Platform</label>
            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full bg-[#051c14] border border-emerald-700/60 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-emerald-400"
            >
              <option value="via Playo">Playo Community</option>
              <option value="via Google Reviews">Google Reviews</option>
              <option value="Direct Player">Direct Walk-in Player</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-emerald-300 uppercase mb-1">Review Comments *</label>
            <textarea
              required
              rows={3}
              placeholder="How was the wooden court surface, lighting, and amenities?"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full bg-[#051c14] border border-emerald-700/60 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-emerald-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4ade80] hover:bg-[#22c55e] text-emerald-950 py-3 rounded-xl font-bold text-xs transition-all cursor-pointer"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
