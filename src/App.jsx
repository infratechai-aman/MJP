import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import About from './components/About';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import LocationContact from './components/LocationContact';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Modals & Notifications
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

  // Core Booking State
  const [selectedCourtId, setSelectedCourtId] = useState('court-1');
  const [selectedDate, setSelectedDate] = useState(getTodayISO());
  // 5:00 PM (17:00) default selected to mirror the original screenshot exactly!
  const [selectedSlotId, setSelectedSlotId] = useState('17-00');

  // Booked slots tracking in localStorage
  const [bookedSlots, setBookedSlots] = useState(() => {
    const saved = localStorage.getItem('mjp_booked_slots');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    // Seed sample realistic bookings for today
    const today = getTodayISO();
    return [
      `court-1_${today}_07-00`,
      `court-1_${today}_08-00`,
      `court-2_${today}_19-00`,
      `court-2_${today}_20-00`
    ];
  });

  // User Bookings History
  const [userBookings, setUserBookings] = useState(() => {
    const saved = localStorage.getItem('mjp_user_bookings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return [];
  });

  // Reviews List
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('mjp_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return INITIAL_TESTIMONIALS;
  });

  // Modal States
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeBookingDetails, setActiveBookingDetails] = useState(null);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [activeTicket, setActiveTicket] = useState(null);
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('mjp_booked_slots', JSON.stringify(bookedSlots));
  }, [bookedSlots]);

  useEffect(() => {
    localStorage.setItem('mjp_user_bookings', JSON.stringify(userBookings));
  }, [userBookings]);

  useEffect(() => {
    localStorage.setItem('mjp_reviews', JSON.stringify(reviews));
  }, [reviews]);

  // Toast Trigger Helper
  const showToast = (msg) => {
    setToastMessage(msg);
  };

  // Checkout Handlers
  const handleProceedToCheckout = (details) => {
    setActiveBookingDetails(details);
    setIsBookingModalOpen(true);
  };

  const handleConfirmBooking = (completedBooking) => {
    // 1. Add to user bookings
    const updatedBookings = [completedBooking, ...userBookings];
    setUserBookings(updatedBookings);

    // 2. Mark slot as booked
    const slotKey = `${completedBooking.courtId}_${completedBooking.date}_${completedBooking.slotId}`;
    setBookedSlots((prev) => [...prev, slotKey]);

    // 3. Close checkout modal and show ticket pass
    setIsBookingModalOpen(false);
    setActiveTicket(completedBooking);
    setIsTicketModalOpen(true);

    showToast(`Slot confirmed! Booking ID: ${completedBooking.bookingId}`);
  };

  const handleCancelBooking = (bookingId) => {
    const target = userBookings.find((b) => b.bookingId === bookingId);
    if (!target) return;

    // Free the slot
    const slotKey = `${target.courtId}_${target.date}_${target.slotId}`;
    setBookedSlots((prev) => prev.filter((k) => k !== slotKey));

    // Remove from bookings
    setUserBookings((prev) => prev.filter((b) => b.bookingId !== bookingId));
    showToast(`Booking ${bookingId} has been cancelled.`);
  };

  const handleViewTicketFromList = (booking) => {
    setActiveTicket(booking);
    setIsTicketModalOpen(true);
  };

  // Lightbox Handlers
  const handleOpenLightbox = (index = 0) => {
    setLightboxInitialIndex(index);
    setIsLightboxOpen(true);
  };

  // Add Review Handler
  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
    showToast('Thank you for sharing your review!');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Sticky Header */}
      <Header
        onOpenMyBookings={() => setIsMyBookingsOpen(true)}
        bookingCount={userBookings.length}
      />

      {/* Hero Section */}
      <Hero
        onOpenVideo={() => setIsVideoModalOpen(true)}
      />

      {/* Quick Stats Strip */}
      <QuickStats />

      {/* About Section */}
      <About
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Facilities Section */}
      <Facilities
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Moments from our court Gallery */}
      <Gallery
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Fully Functional Booking System */}
      <Booking
        selectedCourtId={selectedCourtId}
        setSelectedCourtId={setSelectedCourtId}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedSlotId={selectedSlotId}
        setSelectedSlotId={setSelectedSlotId}
        bookedSlots={bookedSlots}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Location & Contact Section */}
      <LocationContact
        onShowToast={showToast}
      />

      {/* Community Testimonials */}
      <Testimonials
        reviews={reviews}
        onOpenReviewModal={() => setIsReviewModalOpen(true)}
      />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Main Footer */}
      <Footer
        onOpenMyBookings={() => setIsMyBookingsOpen(true)}
      />

      {/* Modals & Dialogs */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        bookingDetails={activeBookingDetails}
        onConfirmBooking={handleConfirmBooking}
      />

      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
        ticket={activeTicket}
        onShowToast={showToast}
      />

      <MyBookingsModal
        isOpen={isMyBookingsOpen}
        onClose={() => setIsMyBookingsOpen(false)}
        bookings={userBookings}
        onCancelBooking={handleCancelBooking}
        onViewTicket={handleViewTicketFromList}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <LightboxModal
        isOpen={isLightboxOpen}
        initialIndex={lightboxInitialIndex}
        onClose={() => setIsLightboxOpen(false)}
      />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onAddReview={handleAddReview}
      />

      {/* Global Toast Alert */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}
