import React, { useState, useEffect } from 'react';

// Desktop Components
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

// Mobile / Android Components
import MobileHeader from './components/mobile/MobileHeader';
import MobileHero from './components/mobile/MobileHero';
import MobileStats from './components/mobile/MobileStats';
import MobileAbout from './components/mobile/MobileAbout';
import MobileFacilities from './components/mobile/MobileFacilities';
import MobileGallery from './components/mobile/MobileGallery';
import MobileBooking from './components/mobile/MobileBooking';
import MobileLocation from './components/mobile/MobileLocation';
import MobileReviews from './components/mobile/MobileReviews';
import MobileFAQ from './components/mobile/MobileFAQ';
import MobileFooter from './components/mobile/MobileFooter';

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

  // View state: automatically adapts to mobile/tablet/desktop or URL param / toggle
  const [isMobileView, setIsMobileView] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('view') === 'mobile' || urlParams.get('view') === 'android') return true;
      if (urlParams.get('view') === 'desktop') return false;
      return window.innerWidth < 768;
    }
    return false;
  });

  // Track window resize unless manually toggled
  const [userToggled, setUserToggled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (!userToggled) {
        setIsMobileView(window.innerWidth < 768);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [userToggled]);

  // Core Booking State
  const [selectedCourtId, setSelectedCourtId] = useState('court-1');
  const [selectedDate, setSelectedDate] = useState(getTodayISO());
  // 5:00 PM (17:00) default selected to mirror the original screenshot!
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
    const updatedBookings = [completedBooking, ...userBookings];
    setUserBookings(updatedBookings);

    const slotKey = `${completedBooking.courtId}_${completedBooking.date}_${completedBooking.slotId}`;
    setBookedSlots((prev) => [...prev, slotKey]);

    setIsBookingModalOpen(false);
    setActiveTicket(completedBooking);
    setIsTicketModalOpen(true);

    showToast(`Slot confirmed! Booking ID: ${completedBooking.bookingId}`);
  };

  const handleCancelBooking = (bookingId) => {
    const target = userBookings.find((b) => b.bookingId === bookingId);
    if (!target) return;

    const slotKey = `${target.courtId}_${target.date}_${target.slotId}`;
    setBookedSlots((prev) => prev.filter((k) => k !== slotKey));
    setUserBookings((prev) => prev.filter((b) => b.bookingId !== bookingId));
    showToast(`Booking ${bookingId} has been cancelled.`);
  };

  const handleViewTicketFromList = (booking) => {
    setActiveTicket(booking);
    setIsTicketModalOpen(true);
  };

  const handleOpenLightbox = (index = 0) => {
    setLightboxInitialIndex(index);
    setIsLightboxOpen(true);
  };

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
    showToast('Thank you for sharing your review!');
  };

  const toggleViewMode = () => {
    setUserToggled(true);
    setIsMobileView((prev) => !prev);
  };

  return (
    <div className={`min-h-screen ${isMobileView ? 'bg-[#051812]' : 'bg-[#f8fafc]'} text-slate-800 flex flex-col font-sans selection:bg-emerald-500 selection:text-white relative`}>
      
      {/* Floating Device View Switcher for Client / Tester */}
      <aside aria-label="View mode switcher" className="fixed bottom-4 left-4 z-40 bg-[#061a12]/90 backdrop-blur-md border border-emerald-500/40 text-white rounded-full px-3 py-1.5 shadow-2xl flex items-center gap-2 text-xs">
        <span className="text-[11px] text-emerald-400 font-bold hidden sm:inline">View Mode:</span>
        <button
          type="button"
          onClick={toggleViewMode}
          className="flex items-center gap-1.5 font-bold hover:text-emerald-300 transition-colors cursor-pointer"
          title="Click to toggle between Android Mobile and Desktop layout"
        >
          {isMobileView ? (
            <>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>📱 Android Mobile</span>
              <span className="text-slate-400 font-normal text-[10px] ml-1">(Switch to 💻 Desktop)</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>💻 Desktop Web</span>
              <span className="text-slate-400 font-normal text-[10px] ml-1">(Switch to 📱 Android)</span>
            </>
          )}
        </button>
      </aside>

      {/* RENDER CONDITIONAL VIEW BASED ON VIEWPORT / TOGGLE */}
      {isMobileView ? (
        /* ================= ANDROID MOBILE LAYOUT (from ANDROID/screen.png) ================= */
        <div className="w-full flex flex-col">
          <MobileHeader
            onOpenMyBookings={() => setIsMyBookingsOpen(true)}
            bookingCount={userBookings.length}
          />
          <main className="w-full flex-1">
            <MobileHero
              onOpenVideo={() => setIsVideoModalOpen(true)}
            />
            <MobileStats />
            <MobileAbout
              onOpenLightbox={handleOpenLightbox}
            />
            <MobileFacilities
              onOpenLightbox={handleOpenLightbox}
            />
            <MobileGallery
              onOpenLightbox={handleOpenLightbox}
            />
            <MobileBooking
              selectedCourtId={selectedCourtId}
              setSelectedCourtId={setSelectedCourtId}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedSlotId={selectedSlotId}
              setSelectedSlotId={setSelectedSlotId}
              bookedSlots={bookedSlots}
              onProceedToCheckout={handleProceedToCheckout}
            />
            <MobileLocation
              onShowToast={showToast}
            />
            <MobileReviews
              reviews={reviews}
              onOpenReviewModal={() => setIsReviewModalOpen(true)}
            />
            <MobileFAQ />
          </main>
          <MobileFooter
            onOpenMyBookings={() => setIsMyBookingsOpen(true)}
          />
        </div>
      ) : (
        /* ================= DESKTOP / TABLET LAYOUT (from screen.png) ================= */
        <div className="w-full flex flex-col">
          <Header
            onOpenMyBookings={() => setIsMyBookingsOpen(true)}
            bookingCount={userBookings.length}
          />
          <Hero
            onOpenVideo={() => setIsVideoModalOpen(true)}
          />
          <QuickStats />
          <About
            onOpenLightbox={handleOpenLightbox}
          />
          <Facilities
            onOpenLightbox={handleOpenLightbox}
          />
          <Gallery
            onOpenLightbox={handleOpenLightbox}
          />
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
          <LocationContact
            onShowToast={showToast}
          />
          <Testimonials
            reviews={reviews}
            onOpenReviewModal={() => setIsReviewModalOpen(true)}
          />
          <FAQ />
          <Footer
            onOpenMyBookings={() => setIsMyBookingsOpen(true)}
          />
        </div>
      )}

      {/* Shared Modals */}
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

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}
