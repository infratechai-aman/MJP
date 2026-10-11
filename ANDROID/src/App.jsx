import React, { useState, useEffect } from 'react';
import MobileHeader from './components/MobileHeader';
import MobileHero from './components/MobileHero';
import MobileStats from './components/MobileStats';
import MobileAbout from './components/MobileAbout';
import MobileFacilities from './components/MobileFacilities';
import MobileGallery from './components/MobileGallery';
import MobileBooking from './components/MobileBooking';
import MobileLocation from './components/MobileLocation';
import MobileReviews from './components/MobileReviews';
import MobileFAQ from './components/MobileFAQ';
import MobileFooter from './components/MobileFooter';

// Modals
import BookingModal from './components/BookingModal';
import TicketModal from './components/TicketModal';
import MyBookingsModal from './components/MyBookingsModal';
import VideoModal from './components/VideoModal';
import LightboxModal from './components/LightboxModal';
import ReviewModal from './components/ReviewModal';
import Toast from './components/Toast';

import { INITIAL_TESTIMONIALS } from './data/courtData';

export default function App() {
  const getTodayISO = () => new Date().toISOString().split('T')[0];

  const [selectedCourtId, setSelectedCourtId] = useState('court-1');
  const [selectedDate, setSelectedDate] = useState(getTodayISO());
  // 5:00 PM (17-00) selected by default to mirror ANDROID/screen.png!
  const [selectedSlotId, setSelectedSlotId] = useState('17-00');

  // Booked slots tracking
  const [bookedSlots, setBookedSlots] = useState(() => {
    const saved = localStorage.getItem('mjp_android_booked_slots');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    const today = getTodayISO();
    return [
      `court-1_${today}_07-00`,
      `court-1_${today}_08-00`,
      `court-2_${today}_19-00`
    ];
  });

  // User Bookings
  const [userBookings, setUserBookings] = useState(() => {
    const saved = localStorage.getItem('mjp_android_user_bookings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return [];
  });

  // Reviews
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('mjp_android_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return INITIAL_TESTIMONIALS;
  });

  // Modals state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeBookingDetails, setActiveBookingDetails] = useState(null);
  const [isTicketOpen, setIsTicketOpen] = useState(false);
  const [activeTicket, setActiveTicket] = useState(null);
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  useEffect(() => {
    localStorage.setItem('mjp_android_booked_slots', JSON.stringify(bookedSlots));
  }, [bookedSlots]);

  useEffect(() => {
    localStorage.setItem('mjp_android_user_bookings', JSON.stringify(userBookings));
  }, [userBookings]);

  useEffect(() => {
    localStorage.setItem('mjp_android_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const showToast = (msg) => {
    setToastMsg(msg);
  };

  const handleProceedCheckout = (details) => {
    setActiveBookingDetails(details);
    setIsBookingOpen(true);
  };

  const handleConfirmBooking = (newBooking) => {
    setUserBookings([newBooking, ...userBookings]);
    const slotKey = `${newBooking.courtId}_${newBooking.date}_${newBooking.slotId}`;
    setBookedSlots((prev) => [...prev, slotKey]);

    setIsBookingOpen(false);
    setActiveTicket(newBooking);
    setIsTicketOpen(true);

    showToast(`Confirmed! Booking ID: ${newBooking.bookingId}`);
  };

  const handleCancelBooking = (bookingId) => {
    const target = userBookings.find((b) => b.bookingId === bookingId);
    if (!target) return;

    const slotKey = `${target.courtId}_${target.date}_${target.slotId}`;
    setBookedSlots((prev) => prev.filter((k) => k !== slotKey));
    setUserBookings((prev) => prev.filter((b) => b.bookingId !== bookingId));
    showToast(`Booking ${bookingId} cancelled.`);
  };

  const handleOpenLightbox = (idx = 0) => {
    setLightboxIndex(idx);
    setIsLightboxOpen(true);
  };

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
    showToast('Feedback submitted! Thank you.');
  };

  return (
    <div className="w-full min-h-screen bg-[#051812] text-gray-100 flex flex-col font-sans selection:bg-[#00e599] selection:text-black">
      {/* Mobile Top Header */}
      <MobileHeader
        onOpenMyBookings={() => setIsMyBookingsOpen(true)}
        bookingCount={userBookings.length}
      />

      <main className="w-full flex-1">
        {/* Mobile Hero */}
        <MobileHero
          onOpenVideo={() => setIsVideoOpen(true)}
        />

        {/* Quick Stats Strip */}
        <MobileStats />

        {/* About Section */}
        <MobileAbout
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Facilities Section */}
        <MobileFacilities
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Gallery Section */}
        <MobileGallery
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Interactive Booking Section */}
        <MobileBooking
          selectedCourtId={selectedCourtId}
          setSelectedCourtId={setSelectedCourtId}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedSlotId={selectedSlotId}
          setSelectedSlotId={setSelectedSlotId}
          bookedSlots={bookedSlots}
          onProceedToCheckout={handleProceedCheckout}
        />

        {/* Location & Contact Section */}
        <MobileLocation
          onShowToast={showToast}
        />

        {/* Reviews Section */}
        <MobileReviews
          reviews={reviews}
          onOpenReviewModal={() => setIsReviewOpen(true)}
        />

        {/* FAQ Section */}
        <MobileFAQ />
      </main>

      {/* Mobile Footer */}
      <MobileFooter
        onOpenMyBookings={() => setIsMyBookingsOpen(true)}
      />

      {/* Modals & Dialogs */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        bookingDetails={activeBookingDetails}
        onConfirmBooking={handleConfirmBooking}
      />

      <TicketModal
        isOpen={isTicketOpen}
        onClose={() => setIsTicketOpen(false)}
        ticket={activeTicket}
      />

      <MyBookingsModal
        isOpen={isMyBookingsOpen}
        onClose={() => setIsMyBookingsOpen(false)}
        bookings={userBookings}
        onCancelBooking={handleCancelBooking}
        onViewTicket={(b) => {
          setActiveTicket(b);
          setIsTicketOpen(true);
        }}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <LightboxModal
        isOpen={isLightboxOpen}
        initialIndex={lightboxIndex}
        onClose={() => setIsLightboxOpen(false)}
      />

      <ReviewModal
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        onAddReview={handleAddReview}
      />

      <Toast
        message={toastMsg}
        onClose={() => setToastMsg('')}
      />
    </div>
  );
}
