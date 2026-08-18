export interface GalleryImage {
  id: string;
  src: string;
  alt: {
    he: string;
    en: string;
  };
  menuItemId?: string; // Links to a specific menu item - shows dish details below the image
}

const jpegBase = "/imgs/dishes";

export const galleryImages: GalleryImage[] = [
  { id: "img3", src: "/imgs/dishes/img3.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "meatup-burger", src: `${jpegBase}/Meat-up-burger.webp`, alt: { he: "מיטאפ בורגר", en: "Meatup Burger" }, menuItemId: "meatup-burger" },
  { id: "img20", src: "/imgs/dishes/img20_processed.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "ribeye-steak", src: `${jpegBase}/Ribeye-steak-antricot.webp`, alt: { he: "אנטריקוט ריביי", en: "Ribeye Steak" }, menuItemId: "ribeye-select" },
  { id: "img7", src: "/imgs/dishes/img7_processed.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "crispy-wings", src: `${jpegBase}/Crispy-wings.webp`, alt: { he: "כנפיים קריספי", en: "Crispy Wings" }, menuItemId: "meatup-wings" },
  { id: "img10", src: "/imgs/dishes/img10_processed.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "grilled-salad", src: `${jpegBase}/Grilled-chicken-thighs-and-avocado-salad.webp`, alt: { he: "סלט פרגית ואבוקדו", en: "Grilled Chicken & Avocado Salad" }, menuItemId: "lettuce-salad" },
  { id: "new2", src: "/imgs/dishes/new2.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "double-smash", src: `${jpegBase}/Double-smash-burger.webp`, alt: { he: "דאבל סמאש בורגר", en: "Double Smash Burger" }, menuItemId: "smash-and-eggs" },
  { id: "img5", src: "/imgs/dishes/img5_processed.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "eggplant-steak", src: `${jpegBase}/Eggplant-steak.webp`, alt: { he: "חציל סטייק", en: "Eggplant Steak" }, menuItemId: "eggplant-steak" },
  { id: "img11", src: "/imgs/dishes/img11_processed.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "beef-cigars", src: `${jpegBase}/Beef-and-lamb-cigars.webp`, alt: { he: "סיגרי בקר וטלה", en: "Beef & Lamb Cigars" }, menuItemId: "beef-cigar" },
  { id: "new3", src: "/imgs/dishes/new3.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "warm-fondant", src: `${jpegBase}/Warm-chocolate-fondant.webp`, alt: { he: "פונדנט שוקולד חם", en: "Warm Chocolate Fondant" }, menuItemId: "fondant" },
  { id: "img6", src: "/imgs/dishes/img6_processed.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "midtown-burger", src: `${jpegBase}/Midtown-burger.webp`, alt: { he: "מידטאון בורגר", en: "Midtown Burger" }, menuItemId: "midtown-burger" },
  { id: "img12", src: "/imgs/dishes/img12_processed.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "topup300", src: `${jpegBase}/Topup300-burger.webp`, alt: { he: "טופאפ 300", en: "Topap 300" }, menuItemId: "topap-300" },
  { id: "new4", src: "/imgs/dishes/new4.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "plancha-chicken", src: `${jpegBase}/Plancha-chicken-breast.webp`, alt: { he: "חזה עוף בפלאנצ'ה", en: "Plancha Chicken Breast" }, menuItemId: "chicken-breast" },
  { id: "img4", src: "/imgs/dishes/img4.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "jerusalem-bagel", src: `${jpegBase}/Jerusalem-bagel.webp`, alt: { he: "לחם פרנה", en: "Frena Bread" }, menuItemId: "frena-bread" },
  { id: "img8", src: "/imgs/dishes/img8_processed.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "cookies-kinder", src: `${jpegBase}/Cookies-kinder-cake.webp`, alt: { he: "קוקיס קינדר", en: "Kinder Cookies" }, menuItemId: "kinder-cookies" },
  { id: "new5", src: "/imgs/dishes/new5.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "kebab-salad", src: `${jpegBase}/Ribeye-kebab-salad.webp`, alt: { he: "סלט קבב אנטריקוט", en: "Ribeye Kebab Salad" }, menuItemId: "kebab-salad" },
  { id: "img9", src: "/imgs/dishes/img9_processed.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "pistachio-tart", src: `${jpegBase}/Pistachio-lemon-tart.webp`, alt: { he: "טארט פיסטוק לימון", en: "Pistachio Lemon Tart" }, menuItemId: "pistachio-tart" },
  { id: "img13", src: "/imgs/dishes/img13_processed.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "panna-cotta", src: `${jpegBase}/Vanilla-panna-cotta-and-berries.webp`, alt: { he: "פנקוטה וניל ופירות יער", en: "Vanilla Panna Cotta & Berries" }, menuItemId: "panna-cotta" },
  { id: "new6", src: "/imgs/dishes/new6.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "french-fries", src: `${jpegBase}/French-fries.webp`, alt: { he: "צ'יפס", en: "French Fries" }, menuItemId: "fries" },
  { id: "img15", src: "/imgs/dishes/img15_processed.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "green-beans", src: `${jpegBase}/Green-beans.webp`, alt: { he: "שעועית ירוקה", en: "Green Beans" }, menuItemId: "green-beans" },
  { id: "img17", src: "/imgs/dishes/img17_processed.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "crispy-chicken-burger", src: `${jpegBase}/Crispy-chicken-burger.webp`, alt: { he: "צ'יקן ראנצ' בורגר", en: "Crispy Chicken Burger" }, menuItemId: "chicken-ranch" },
  { id: "img18", src: "/imgs/dishes/img18_processed.webp", alt: { he: "מנה מהמסעדה", en: "Restaurant dish" } },
  { id: "araisi-shuk", src: `${jpegBase}/Beef-soup.webp`, alt: { he: "עראייס שוק", en: "Araisi Shuk" }, menuItemId: "araisi-shuk" },
  { id: "green-salad", src: `${jpegBase}/Green-market-salad.webp`, alt: { he: "סלט ירוק", en: "Green Market Salad" }, menuItemId: "green-salad" },
  { id: "ranch-salad", src: `${jpegBase}/Ranch-lettuce-salad.webp`, alt: { he: "סלט חסות ראנץ'", en: "Ranch Lettuce Salad" }, menuItemId: "ranch-salad" },
  { id: "chicken-nuggets", src: `${jpegBase}/Chicken-breast-nuggets.webp`, alt: { he: "נאגטס עוף", en: "Chicken Nuggets" }, menuItemId: "crispy-nuggets" },
  { id: "schnitzel-bites", src: `${jpegBase}/Chicken-breast-schnitzel-bites.webp`, alt: { he: "שניצלוני עוף", en: "Chicken Schnitzel Bites" }, menuItemId: "kids-schnitzel" },
  { id: "potatos", src: `${jpegBase}/Potatos.webp`, alt: { he: "פוטטוס", en: "Potatoes" }, menuItemId: "potatoes" },
  { id: "roasted-chicken", src: `${jpegBase}/Roasted-chicken-leg.webp`, alt: { he: "פרגית צלויה", en: "Roasted Chicken Leg" } },
  { id: "junior-burger", src: `${jpegBase}/Junior-burger.webp`, alt: { he: "בורגר ג'וניור", en: "Junior Burger" }, menuItemId: "kids-burger" },
  { id: "junior-chicken", src: `${jpegBase}/Junior-chicken-thigh-steak.webp`, alt: { he: "פרגית ג'וניור", en: "Junior Chicken Thigh" }, menuItemId: "kids-chicken-thigh" },
];
