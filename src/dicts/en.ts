import { Dictionary } from './he';

export const en: Dictionary = {
  // Meta
  lang: "en",
  dir: "ltr",
  
  // Navigation
  nav: {
    home: "Home",
    about: "About",
    menu: "Menu",
    gallery: "Gallery",
    contact: "Contact",
    reserve: "Reserve"
  },
  
  // Hero
  hero: {
    title: "MEATUP",
    subtitle: "Premium Meat Experience in the Heart of the City",
    cta: {
      reserve: "Reserve a Table",
      menu: "View Menu"
    }
  },
  
  // About
  about: {
    title: "Our Story",
    text1: "At MEATUP, our passion for quality meat is not just a profession - it's an art form. We start each day with a meticulous selection of the finest cuts, working only with premium suppliers and maintaining the highest standards of freshness and quality.",
    text2: "Our grilling is done over an open flame, at precise temperatures and with perfect timing - because we know that the difference between good steak and perfect steak lies in the small details. Each dish is served with careful presentation, in a pleasant and inviting atmosphere.",
    text3: "Our team is committed to an unforgettable culinary experience - from warm and professional service to an atmosphere that makes you feel at home. Come discover why MEATUP has become the favorite destination for meat lovers in the city.",
    gallery: "View Gallery"
  },
  
  // Menu
  menu: {
    title: "The Menu",
    kosher: "Kosher menu under Bnei Brak Rabbinate supervision",
    currency: "₪",
    categories: {
      starters: "Starters",
      mains: "Mains",
      steaks: "Steaks",
      sides: "Sides",
      desserts: "Desserts",
      drinks: "Drinks"
    }
  },
  
  // Gallery
  gallery: {
    title: "Gallery",
    close: "Close",
    prev: "Previous",
    next: "Next"
  },
  
  // Contact
  contact: {
    title: "Contact",
    phone: "Phone",
    whatsapp: "WhatsApp",
    address: "Address",
    hours: "Opening Hours",
    callNow: "Call Now",
    directions: "Get Directions"
  },
  
  // Reserve Modal
  reserve: {
    title: "Reserve a Table",
    subtitle: "We'd love to host you",
    continue: "Continue to Reservation",
    call: "Call Now",
    whatsapp: "WhatsApp"
  },
  
  // Footer
  footer: {
    rights: "All Rights Reserved",
    kosher: "Kosher",
    accessibility: "Accessibility Statement",
    privacyPolicy: "Privacy Policy"
  },
  
  // Accessibility
  a11y: {
    menu: "Navigation menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLang: "Switch language",
    lightbox: "Enlarged image"
  }
} as const;

