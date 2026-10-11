# MJP Badminton Court - Fully Functional Web & Android Applications

A premier badminton court booking platform for **Mahatma Jyotiba Phule (MJP) Badminton Court**, Kondhwa Khurd, Pune. 

Features two complete, high-fidelity React implementations:
1. **Desktop / Full Web App** (root directory): Optimized for desktop and tablet screens with high-impact hero, collage grids, and extensive modals.
2. **Android Mobile Web App** (`ANDROID/` directory): Designed specifically for mobile viewports (`max-w-md`) with 3-column slots grid, touch-optimized checkout, and native Android packaging support.

---

## 🏸 Key Features

- **Live Slot Booking**: Real-time court toggling (Court 1 Classic Timber vs Court 2 Pro Arena) with dynamic slot calculation and peak hours pricing.
- **Checkout & Digital Entry Pass**: Instant booking with player details, gear rentals (Yonex rackets, feather & nylon shuttles, non-marking shoes), and celebratory confetti.
- **Digital Ticket Pass**: Includes simulated QR code, booking ID, print/PDF download, WhatsApp pass sharing, and Google Calendar event integration.
- **Player Portal ("My Bookings")**: Instant lookup by mobile number to review reservations, reprint entry passes, or cancel bookings.
- **Interactive Photo Gallery**: Category-filtered lightbox modal for courts, facilities, and match action.
- **Virtual Arena Tour**: "Watch the Court" walkthrough modal highlighting wooden flooring, lighting, and spectator seating.
- **Location & Directions**: Instant Google Maps navigation to Mahatma Jyotiba Phule Badminton Hall, Kondhwa Khurd, Pune, with clipboard address copy.
- **Community Ratings & FAQs**: 4.4/5 Playo ratings with user feedback submission and expandable FAQ accordion.

---

## 🚀 Getting Started

### 1. Running the Main / Desktop App

```bash
# In the root directory
npm install
npm run dev
```
Open **http://localhost:5173/** in your browser.

### 2. Running the Android Mobile App

```bash
# Navigate to the ANDROID directory
cd ANDROID
npm install
npm run dev
```
Open **http://localhost:5174/** (or visit `http://<your-ip>:5174/` on your Android mobile device over Wi-Fi).

---

## 📱 Building Native Android APK (Capacitor)

To package the `ANDROID/` application into a native Android `.apk` file:

```bash
cd ANDROID
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init "MJP Badminton" "com.mjp.badminton" --web-dir dist
npm run build
npx cap add android
npx cap open android
```

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS + Custom CSS Design System
- **Typography**: Plus Jakarta Sans
- **Icons**: Phosphor Vector Icons + SVG
- **Animations**: canvas-confetti, custom CSS keyframes

---

© 2025 MJP Badminton Court. All rights reserved.
