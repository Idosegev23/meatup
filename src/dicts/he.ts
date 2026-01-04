export const he = {
  // Meta
  lang: "he",
  dir: "rtl",
  
  // Navigation
  nav: {
    home: "בית",
    about: "אודות",
    menu: "תפריט",
    gallery: "גלריה",
    contact: "צור קשר",
    reserve: "הזמנת מקום"
  },
  
  // Hero
  hero: {
    title: "MEATUP",
    subtitle: "חוויית בשרים פרימיום בלב העיר",
    cta: {
      reserve: "הזמנת מקום",
      menu: "לתפריט"
    }
  },
  
  // About
  about: {
    title: "הסיפור שלנו",
    text1: "במיטאפ, התשוקה לבשר איכותי היא לא רק עיסוק - היא אומנות. אנחנו מתחילים כל יום בבחירה קפדנית של נתחי הבשר המשובחים ביותר, עובדים רק עם ספקים מובחרים ומקפידים על סטנדרטים גבוהים של טריות ואיכות.",
    text2: "הצלייה שלנו נעשית על אש פתוחה, בטמפרטורה מדויקת ובתזמון מושלם - כי אנחנו יודעים שההבדל בין סטייק טוב לסטייק מושלם נמצא בפרטים הקטנים. כל מנה מוגשת בעיצוב מוקפד, בסביבה נעימה ומזמינה.",
    text3: "הצוות שלנו מחויב לחוויה קולינרית בלתי נשכחת - משירות חם ומקצועי ועד לאווירה שגורמת לכם להרגיש בבית. בואו לגלות למה מיטאפ הפכה ליעד האהוב על חובבי הבשר בעיר.",
    gallery: "לגלריה"
  },
  
  // Menu
  menu: {
    title: "התפריט",
    kosher: "תפריט כשר בהשגחת הרבנות בני ברק",
    currency: "₪",
    categories: {
      starters: "פתיחים",
      mains: "עיקריות",
      steaks: "סטייקים",
      sides: "תוספות",
      desserts: "קינוחים",
      drinks: "משקאות"
    }
  },
  
  // Gallery
  gallery: {
    title: "גלריה",
    close: "סגור",
    prev: "הקודם",
    next: "הבא"
  },
  
  // Contact
  contact: {
    title: "צור קשר",
    phone: "טלפון",
    whatsapp: "וואטסאפ",
    address: "כתובת",
    hours: "שעות פתיחה",
    callNow: "התקשרו עכשיו",
    directions: "הוראות הגעה"
  },
  
  // Reserve Modal
  reserve: {
    title: "הזמנת מקום",
    subtitle: "נשמח לארח אתכם",
    continue: "להמשיך להזמנה",
    call: "התקשרו עכשיו",
    whatsapp: "וואטסאפ"
  },
  
  // Footer
  footer: {
    rights: "כל הזכויות שמורות",
    kosher: "כשר",
    accessibility: "הצהרת נגישות",
    privacyPolicy: "מדיניות פרטיות"
  },
  
  // Accessibility
  a11y: {
    menu: "תפריט ניווט",
    openMenu: "פתח תפריט",
    closeMenu: "סגור תפריט",
    switchLang: "החלף שפה",
    lightbox: "תמונה מוגדלת"
  }
} as const;

// Dictionary type - allows different string values for translations
export interface Dictionary {
  lang: string;
  dir: string;
  nav: {
    home: string;
    about: string;
    menu: string;
    gallery: string;
    contact: string;
    reserve: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: {
      reserve: string;
      menu: string;
    };
  };
  about: {
    title: string;
    text1: string;
    text2: string;
    text3: string;
    gallery: string;
  };
  menu: {
    title: string;
    kosher: string;
    currency: string;
    categories: {
      starters: string;
      mains: string;
      steaks: string;
      sides: string;
      desserts: string;
      drinks: string;
    };
  };
  gallery: {
    title: string;
    close: string;
    prev: string;
    next: string;
  };
  contact: {
    title: string;
    phone: string;
    whatsapp: string;
    address: string;
    hours: string;
    callNow: string;
    directions: string;
  };
  reserve: {
    title: string;
    subtitle: string;
    continue: string;
    call: string;
    whatsapp: string;
  };
  footer: {
    rights: string;
    kosher: string;
    accessibility?: string;
    privacyPolicy?: string;
  };
  a11y: {
    menu: string;
    openMenu: string;
    closeMenu: string;
    switchLang: string;
    lightbox: string;
  };
}

