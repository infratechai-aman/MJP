export const COURTS = [
  {
    id: 'court-1',
    name: 'Court 1 (Classic Timber)',
    type: 'Wooden Flooring - BWF Standard',
    description: 'Natural teak finish with high shock-absorption cushioning.',
    status: 'Operational',
    hourlyRate: 350,
    peakHourlyRate: 450,
  },
  {
    id: 'court-2',
    name: 'Court 2 (Pro Arena)',
    type: 'Tournament Grade Wooden Court',
    description: 'Glare-free LED lighting setup and tournament net tensioning.',
    status: 'Operational',
    hourlyRate: 350,
    peakHourlyRate: 450,
  }
];

export const TIME_SLOTS = [
  { id: '06-00', time: '6:00 AM', hour24: 6, isPeak: true },
  { id: '07-00', time: '7:00 AM', hour24: 7, isPeak: true },
  { id: '08-00', time: '8:00 AM', hour24: 8, isPeak: true },
  { id: '09-00', time: '9:00 AM', hour24: 9, isPeak: false },
  { id: '10-00', time: '10:00 AM', hour24: 10, isPeak: false },
  { id: '11-00', time: '11:00 AM', hour24: 11, isPeak: false },
  { id: '12-00', time: '12:00 PM', hour24: 12, isPeak: false },
  { id: '13-00', time: '1:00 PM', hour24: 13, isPeak: false },
  { id: '14-00', time: '2:00 PM', hour24: 14, isPeak: false },
  { id: '15-00', time: '3:00 PM', hour24: 15, isPeak: false },
  { id: '16-00', time: '4:00 PM', hour24: 16, isPeak: false },
  { id: '17-00', time: '5:00 PM', hour24: 17, isPeak: false },
  { id: '18-00', time: '6:00 PM', hour24: 18, isPeak: true },
  { id: '19-00', time: '7:00 PM', hour24: 19, isPeak: true },
  { id: '20-00', time: '8:00 PM', hour24: 20, isPeak: true },
  { id: '21-00', time: '9:00 PM', hour24: 21, isPeak: true },
  { id: '22-00', time: '10:00 PM', hour24: 22, isPeak: false },
  { id: '23-00', time: '11:00 PM', hour24: 23, isPeak: false },
];

export const EQUIPMENT_ADDONS = [
  {
    id: 'racket-rental',
    name: 'Yonex Graphite Racket (Rental)',
    price: 50,
    unit: 'per racket / hr',
    icon: 'ph-tennis-ball'
  },
  {
    id: 'nylon-shuttles',
    name: 'Yonex Mavis 350 Nylon Shuttles (Pack of 3)',
    price: 80,
    unit: 'purchase',
    icon: 'ph-lightning'
  },
  {
    id: 'feather-shuttles',
    name: 'Tournament Feather Shuttles (Pack of 3)',
    price: 150,
    unit: 'purchase',
    icon: 'ph-trophy'
  },
  {
    id: 'shoes-rental',
    name: 'Non-Marking Shoes Rental (Clean pair)',
    price: 60,
    unit: 'per player',
    icon: 'ph-sneaker'
  }
];

export const INITIAL_TESTIMONIALS = [
  {
    id: 1,
    name: 'Regular Player',
    tag: 'RP',
    source: 'via Playo',
    rating: 5,
    comment: 'Great courts with good lighting and well-maintained wooden flooring. Really enjoyable experience!'
  },
  {
    id: 2,
    name: 'Arjun S.',
    tag: 'AS',
    source: 'via Playo',
    rating: 4.5,
    comment: 'Spacious gallery and clean facilities. Perfect place to play with friends.'
  },
  {
    id: 3,
    name: 'Sneha K.',
    tag: 'SK',
    source: 'via Playo',
    rating: 5,
    comment: 'Easy booking and well-managed facility. One of the best in Kondhwa area.'
  },
  {
    id: 4,
    name: 'Vikram Mehta',
    tag: 'VM',
    source: 'via Google Reviews',
    rating: 5,
    comment: 'Excellent ventilation and good ceiling height. Love morning 6 AM games here before work!'
  }
];

export const FAQS = [
  {
    id: 1,
    question: 'How can I book a slot?',
    answer: 'You can book directly through our online slot booking selector above or through the Playo application. Just pick your preferred court, date and time, confirm details, and pay online or at the venue counter.'
  },
  {
    id: 2,
    question: 'What are the opening hours?',
    answer: 'We are open 7 days a week, 365 days a year from 6:00 AM early morning to 12:00 AM midnight.'
  },
  {
    id: 3,
    question: 'What facilities are available?',
    answer: 'We provide two wooden badminton courts, a spacious elevated viewing gallery, dedicated change rooms, showers, water dispenser, and clean separate washrooms.'
  },
  {
    id: 4,
    question: 'Is there a dress code or footwear requirement?',
    answer: 'Yes! Non-marking badminton shoes are mandatory to protect the polished wooden court surface. Regular running shoes or black-soled shoes are strictly not permitted on the wooden courts.'
  },
  {
    id: 5,
    question: 'Can I rent rackets and buy shuttlecocks at the venue?',
    answer: 'Yes! We have Yonex graphite rackets available for rent at ₹50/hr and provide authentic Yonex Mavis 350 nylon shuttles as well as tournament feather shuttles at venue counter rates.'
  },
  {
    id: 6,
    question: 'Is two-wheeler and four-wheeler parking available?',
    answer: 'Yes, ample dedicated parking is available right inside the Late Dattaji Gavhane Sports Arena campus near Brahma Avenue Society.'
  },
  {
    id: 7,
    question: 'What is the cancellation and rescheduling policy?',
    answer: 'Slots can be rescheduled or cancelled up to 2 hours before the scheduled time with zero cancellation fee via the "My Bookings" button or by contacting support.'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    title: 'Court 1 & Court 2 Arena',
    category: 'courts',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBllT1VUxkoH5PF7GVZJX3j0Z8GeCp9t0dUJHUUrm1W1pJmiINw3dDHfGkDsjXDRMmiMV_-safpglqWf05Z8YmIwRYta6hZn3jlg6e9MU8yqVHgZr_bEjqm-z9ZKA0dN-pOaHNp1euI6jE4NLzRFEjJWQSIYaA439k1b2W5sU-QU5CVkIwlSRlcRkedGWoAxWvjZxiTmD1FzcqTho7AGXPsB2f7eAsmgbQnOqba8gTwqCuWcOpH1ly7',
    desc: 'Dual wooden courts arena with high clearance ceiling and glare-free illumination.'
  },
  {
    id: 'g2',
    title: 'Clean Wooden Surface View',
    category: 'courts',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMEFD_eb9YdWtWMiOZCZ_t0rMP0sk0IW_yG74VOrPIr3PbRdyzcXJkQks3bwdhWg25xkLzcNnrMJBydQ_Aha2S0OwoKTeMn3wNPQYVRNPUS7-PJ9Tj72fiJ9f8A9DEF_t-V2JQFeMOFDZIuFPRh5Wfe0BMjZSKfiiOiRG1CNBN2Xloxb2cJKNCI5NPVjO2_xTPB3RE71hbBCnKm_teVqFCFJxAQGk2yLx0zGZoRZorCPMQMEqrY_dD',
    desc: 'Premium polished timber surface with shock absorption cushioning for joint safety.'
  },
  {
    id: 'g3',
    title: 'Dressing & Shower Area',
    category: 'facilities',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA738wlfxntGu4ckJnYHu_ZGHkwcpj3wwcpqgnB77sA0dapRCtVKnclSWK4yqoYFvF7DKSJvWTB8VpIuv_qe2aRoh0ldhyQqdXiWIHy52ffjo9ebhAkJCsDHuTc2W6mVk9kiTMjakDimXKh65QnnzllFBC7rRY2iWRP4UY3jYawr-VqxuQWzsbFBq5V8DmELBtcILQ9Id6hf8r3FSMUaZeATz9vk0E8HPTM0PfVQinRvTTohnMz8-Jj',
    desc: 'Clean, hygienic changing rooms and showers for post-match freshness.'
  },
  {
    id: 'g4',
    title: 'Viewing Stand Gallery',
    category: 'facilities',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsk8LtqbgUWI1ut_txYewxPgqRlkUW9W06yIo219Pk0u7paIO1JsnMPHBzVF_wGLcICyYdduOePZeMN72pamdCAGQsedQCs1uPxL0yDQi267k4xK7a70Y7rpRzHEzn3g2-BEdVfRw-PR5ItvQm-KQGCpudK_Jkqh_LqsL1o9zqa2YHt_IkZYCw-E0bRJL7Eh0qEG_B8iXZnES25y495qJlFprvciH47eVkeLmhxLvFsWOEjEMpmIUO',
    desc: 'Comfortable spectator seating for family, teammates, and tournament viewing.'
  },
  {
    id: 'g5',
    title: 'Match Action & Net Setup',
    category: 'match',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9hSddZT3FlhUi6qYfMN7EhUPgTl-1vd8x4PeaysBSa7XjuxX4ZJ-n5Jbyna3xAI6f_8b4tMC1WCQdDIaVmGxB1g0WmU6iSFQy55Yz2sKCf_3cV9gRqutYOe9iPJyBRRmQjQN_yAegYE1qvcyh2HYn28XsfBy0YEP397t_JvYmy5Pqa2UTbmmK4-aztaTDH_qvwABxMMuqnpgQcHjmDG7krYt09drMGXYUJ9noNtdwYaFzk1EyVi0F',
    desc: 'Regulation BWF height badminton nets and precision court line markings.'
  },
  {
    id: 'g6',
    title: 'Main Wooden Court Arena',
    category: 'courts',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtH9zGUwla7JHxSSoUnU46Uvr1YkoUCIJh2DAiad4oyXgMKXdrAsIohrLNEhsMCFzbJ40JeldnqO2ImZSQF5JUuMGVHolNsyLaY1AavhYb7tgPFXpX0UXC_gW_TTfwwqWS2G3rrcHCsVTtvwxjYMgOaDUrQo5Lj2MuGIMa2egluIcZq4Fw6u1JLa-yKehOiwkKudLTW5xhc5pvzn2Cd7-3ubbJkRNxwZ3nL6vB_GPxrA1a4834MgIT',
    desc: 'Spacious court periphery with non-slip boundaries.'
  }
];

export const VENUE_INFO = {
  name: 'Mahatma Jyotiba Phule Badminton Hall',
  shortName: 'MJP Badminton Court',
  locationBrief: 'Kondhwa Khurd, Pune',
  fullAddress: 'Mahatma Jyotiba Phule Badminton Hall, Late Dattaji Gavhane Sports Arena, near Brahma Avenue Society, Kondhwa Khurd, Pune 411048',
  phone: '+91 98220 12345',
  whatsapp: '919822012345',
  email: 'mjpbadmintoncourt@gmail.com',
  timing: '6:00 AM – 12:00 AM (Open All 7 Days)',
  googleMapsUrl: 'https://maps.google.com/?q=Mahatma+Jyotiba+Phule+Badminton+Hall+Kondhwa+Khurd+Pune'
};
