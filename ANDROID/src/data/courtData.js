export const COURTS = [
  {
    id: 'court-1',
    name: 'Court 1 (Classic Timber)',
    type: 'Wooden Flooring - BWF Standard',
    description: 'Natural teak finish with high shock-absorption cushioning.',
    hourlyRate: 350,
    peakHourlyRate: 450,
  },
  {
    id: 'court-2',
    name: 'Court 2 (Pro Arena)',
    type: 'Tournament Grade Wooden Court',
    description: 'Glare-free LED lighting setup and tournament net tensioning.',
    hourlyRate: 350,
    peakHourlyRate: 450,
  }
];

export const TIME_SLOTS = [
  { id: '06-00', time: '6:00 AM', isPeak: true },
  { id: '07-00', time: '7:00 AM', isPeak: true },
  { id: '08-00', time: '8:00 AM', isPeak: true },
  { id: '09-00', time: '9:00 AM', isPeak: false },
  { id: '10-00', time: '10:00 AM', isPeak: false },
  { id: '11-00', time: '11:00 AM', isPeak: false },
  { id: '12-00', time: '12:00 PM', isPeak: false },
  { id: '13-00', time: '1:00 PM', isPeak: false },
  { id: '14-00', time: '2:00 PM', isPeak: false },
  { id: '15-00', time: '3:00 PM', isPeak: false },
  { id: '16-00', time: '4:00 PM', isPeak: false },
  { id: '17-00', time: '5:00 PM', isPeak: false },
  { id: '18-00', time: '6:00 PM', isPeak: true },
  { id: '19-00', time: '7:00 PM', isPeak: true },
  { id: '20-00', time: '8:00 PM', isPeak: true },
  { id: '21-00', time: '9:00 PM', isPeak: true },
  { id: '22-00', time: '10:00 PM', isPeak: false },
  { id: '23-00', time: '11:00 PM', isPeak: false },
];

export const EQUIPMENT_ADDONS = [
  {
    id: 'racket-rental',
    name: 'Yonex Graphite Racket (Rental)',
    price: 50,
    unit: 'per racket / hr',
    icon: 'racket'
  },
  {
    id: 'nylon-shuttles',
    name: 'Yonex Mavis 350 Nylon Shuttles (Pack of 3)',
    price: 80,
    unit: 'purchase',
    icon: 'lightning'
  },
  {
    id: 'feather-shuttles',
    name: 'Tournament Feather Shuttles (Pack of 3)',
    price: 150,
    unit: 'purchase',
    icon: 'trophy'
  },
  {
    id: 'shoes-rental',
    name: 'Non-Marking Shoes Rental (Clean pair)',
    price: 60,
    unit: 'per player',
    icon: 'shoes'
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
  }
];

export const FAQS = [
  {
    id: 1,
    question: 'How can I book a slot?',
    answer: 'You can book directly using the online slot booking tool above or via the Playo app by choosing your preferred date and time.'
  },
  {
    id: 2,
    question: 'What are the opening hours?',
    answer: 'MJP Badminton Court is open every day from 6:00 AM in the morning to 12:00 AM midnight.'
  },
  {
    id: 3,
    question: 'What facilities are available?',
    answer: 'We provide two wooden courts, spacious spectator viewing gallery, separate washrooms, and shower rooms.'
  },
  {
    id: 4,
    question: 'Is there a dress code or footwear requirement?',
    answer: 'Yes, non-marking badminton shoes are mandatory to safeguard the high quality wooden flooring. Standard sports attire is required.'
  },
  {
    id: 5,
    question: 'Can I rent rackets at the venue?',
    answer: 'Yes, Yonex graphite rackets and shuttlecocks are available for rent/purchase at the front counter.'
  },
  {
    id: 6,
    question: 'Is parking available at the arena?',
    answer: 'Yes, dedicated two-wheeler and four-wheeler parking is available on-site at Late Dattaji Gavhane Sports Arena.'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    title: 'Court 1 & Court 2 Arena',
    category: 'courts',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAye5_10BFYRpifFWahOf4yMdCxHvLav06ypU7B2RjClqE_VPYQhGXb2iko0HIinQa-nCClmvzbMBTz0mlE6hguZtjQ-1CZjfTjVAJngBcbnWAKqAL567ralWEYuUVFHGsMydJoFdjrltUM1L7X6k0fb-MOId3MDwxhOFnWURfzX9j8sJjl3I-vLM1rZnMp0dCJTWxfvBfruzaRCa6sz27-sFD7_B_1UECBtdCMK6WVMGTA6pjOOLUo',
    desc: 'Main illuminated wooden court view'
  },
  {
    id: 'g2',
    title: 'Court Lines & Surface',
    category: 'courts',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOEM3YovLhSBSawVy2ZSIHezY38oKSgyYHyO4qifN085Z96TtuFf1DfieyRG8DDEWSKISB2EclvdgmzLB-0HDChfk2UrOFAnwdWRkm13TRlUsydVd0LMA72KCYNJZRoHdin_s9HzAeLBILGLqSOOIJ6PlsY-GHn0Avtuf1GywF80NGPoTUvCFXuACMcrq4u4RPAE320TCTxn4TpDXRpzCOsyuzYDgG6X10mEWw9EA7PW7t5JC94khV',
    desc: 'High angle view of wooden court lines'
  },
  {
    id: 'g3',
    title: 'Spectator Seating',
    category: 'facilities',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzxLCVQWl4BrYSyfcvvBjPBKEFANVmGQVAktpj1vHuBjUca9PUsRv_kgFQTH5h5g5SPROMhvnYUw3pUmhtAJPOJO6chNOCGlSOYxDOCNfx2LpFBtdWhfdwRXonrRo2EX_3mL2cgg843AgXKSasT3oBPo2HG_ZcAhf5In5tPzDFSidMHFsqMQzkwsEA_zFJrKu9okvYPfe6Mgwh4K-9fI8CIZuGoalNdwZbxWGq0IBLmhh7tGXMmcjN',
    desc: 'Spectator seating in gallery'
  },
  {
    id: 'g4',
    title: 'Lockers & Showers',
    category: 'facilities',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuwHM93EzIu2hGxaugr7MvSdlBwiiLr7oToMtmnZE-3QKNNQRCrj2hhRHGBW6led0Z16Q4FPasyJ_WQf1vRDru3_ECNJAUq39xmcEgmp9N_12vbLpPfNyAT1ADhOBuAMJ9xunSJThPlLy5CkZnckLCHa6FRDcG0fmCdy72NlH9v05br__mjmZCXXXosj9rYEgAlQPvAkE9ii4SVvz19y0skox_XWsGn-1GiAFfXEmKGkxJYJMydTKg',
    desc: 'Clean locker room and showers'
  },
  {
    id: 'g5',
    title: 'Match Action & Shuttlecock',
    category: 'match',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8qxX717qMm8Doix27RRW0qku3ZU0bhIzxybXV_AUzyiu5hsRsy2-Zgv3dgPz-txUjnWo5uw4oq4nldXkBeuhRCWS_p8nqgQUZGnbuQ7bflPLrEVLMLnKKJspCzZ2A291mlCntDgMP13sIsqrhoERiJ5X5gx6L2dCbPrIpXryIQtnxYpbQzTcg3M_8dpHc4z7-HuNH7zwpSqqA7GyuKjrxDblHadTSgdlBu2tOncBucXZ1GWlVy8sz',
    desc: 'Shuttlecock resting at net tape'
  }
];

export const VENUE_INFO = {
  name: 'Mahatma Jyotiba Phule Badminton Hall',
  shortName: 'MJP Badminton Court',
  locationBrief: 'Kondhwa Khurd, Pune',
  fullAddress: 'Mahatma Jyotiba Phule Badminton Hall, Late Dattaji Gavhane Sports Arena, near Brahma Avenue Society, Kondhwa Khurd, Pune 411048',
  phone: '+91 98220 12345',
  whatsapp: '919822012345',
  timing: '6:00 AM – 12:00 AM (Daily)',
  googleMapsUrl: 'https://maps.google.com/?q=Mahatma+Jyotiba+Phule+Badminton+Hall+Kondhwa+Khurd+Pune'
};
