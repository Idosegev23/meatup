export interface MenuItem {
  id: string;
  name: {
    he: string;
    en: string;
  };
  description?: {
    he: string;
    en: string;
  };
  price: number;
  priceAlt?: number; // For items with two price options (e.g., beer sizes)
  isSubheader?: boolean; // For section dividers within a category
}

export interface MenuCategory {
  id: string;
  name: {
    he: string;
    en: string;
  };
  image: string;
  items: MenuItem[];
  note?: {
    he: string;
    en: string;
  };
}

export const menuData: MenuCategory[] = [
  // Row 1: ראשונות | המבורגר
  {
    id: "starters",
    name: {
      he: "ראשונות",
      en: "Starters"
    },
    image: "/imgs/meatupimgs/Meat-up/meatuplight/JPEG/Jerusalem-bagel.jpg",
    items: [
      {
        id: "bagel",
        name: { he: "בייגל ירושלמי", en: "Jerusalem Bagel" },
        description: { he: "חריפים, בלסמי, טחינה, שום קונפי וזיתים", en: "Spicy, balsamic, tahini, confit garlic and olives" },
        price: 38
      },
      {
        id: "eggplant-steak",
        name: { he: "חציל Steak", en: "Eggplant Steak" },
        description: { he: "טחינה הר ברכה, צנונית, סלסה עגבניות חריפות וצנוברים", en: "Har Bracha tahini, radish, spicy tomato salsa and pine nuts" },
        price: 42
      },
      {
        id: "beef-cigar",
        name: { he: "סיגר בקר", en: "Beef Cigar" },
        description: { he: "בקר וטלה טחון מתובל, חסה לאליק, פטרוזיליה, נענע, לימון, צנוברים, טחינה וסלסה חריפה", en: "Seasoned ground beef and lamb, lollo rosso lettuce, parsley, mint, lemon, pine nuts, tahini and spicy salsa" },
        price: 46
      },
      {
        id: "meatup-wings",
        name: { he: "מיטאפ ווינגס", en: "Meatup Wings" },
        description: { he: "כנפיים חצויות (8 יח') מטוגנות בזיגוג מייפל, שמן צ'ילי ושומשום, בצל ירוק", en: "Split wings (8 pcs) fried with maple glaze, chili oil, sesame and green onion" },
        price: 42
      },
      {
        id: "crispy-nuggets",
        name: { he: "קריספי נאגטס", en: "Crispy Nuggets" },
        description: { he: "נגיסי עוף בציפוי פריך לצד איולי פלפלים שרופים", en: "Crispy chicken nuggets with roasted pepper aioli" },
        price: 38
      },
      {
        id: "trio-sausages",
        name: { he: "טריו נקניקיות הבית", en: "House Sausage Trio" },
        description: { he: "שלישיית נקניקיות - צ'וריסוס פיקנטי, בקר מעושן ובקר-עוף מעושן צ'רבות על הפלאנצ'ה, לצידן כרוב ובצל חום צלויים, איולי חרדל ומלפפונים חמוצים ביתיים", en: "Three sausages - spicy chorizo, smoked beef and smoked beef-chicken - seared on the plancha. Served with roasted cabbage and brown onion, mustard aioli and homemade pickles" },
        price: 36
      }
    ]
  },
  {
    id: "burgers",
    name: {
      he: "Meat your burger",
      en: "Meat your burger"
    },
    image: "/imgs/meatupimgs/Meat-up/meatuplight/JPEG/Meat-up-burger.jpg",
    note: {
      he: "עד השעה 17:00 המנות מוגשות עם שתיה ותוספת לבחירה, בתוספת 16 ₪",
      en: "Until 5:00 PM, dishes are served with a drink and side of choice, for an additional 16 ₪"
    },
    items: [
      {
        id: "meatup-burger",
        name: { he: "מיטאפ בורגר", en: "Meatup Burger" },
        description: { he: "עשויה מבקר מובחר 230 גר' - איולי של מיט אפ, חסה לאליק, עגבניה, בצל סגול ומלפפון כבוש", en: "Made from premium beef 230g - Meatup aioli, lollo rosso lettuce, tomato, red onion and pickle" },
        price: 64
      },
      {
        id: "midtown-burger",
        name: { he: "מידטאון בורגר", en: "Midtown Burger" },
        description: { he: "עשויה מבקר מובחר 230 גר' ומתובלת בפטרוזיליה ובצל - מיונז צ'ימיצ'ורי ובצל מקורמל", en: "Made from premium beef 230g seasoned with parsley and onion - mayo, chimichurri and caramelized onion" },
        price: 66
      },
      {
        id: "topas",
        name: { he: "טופאס", en: "Topas" },
        description: { he: "עשויה מבקר מובחר 300 גר' - איולי פלפלים שרופים, חסה לאליק וטבעות בצל דקיקות", en: "Made from premium beef 300g - roasted pepper aioli, lollo rosso lettuce and thin onion rings" },
        price: 82
      },
      {
        id: "smash-and-eggs",
        name: { he: "סמאש אנד אגס", en: "Smash and Eggs" },
        description: { he: "סמאש בורגר 200 גר' - סלט ביצים עם בצל ירוק, חסה לאליק ומלפפון כבוש", en: "Smash burger 200g - egg salad with green onion, lollo rosso lettuce and pickle" },
        price: 66
      },
      {
        id: "chicken-ranch",
        name: { he: "צ'יקן ראנצ'", en: "Chicken Ranch" },
        description: { he: "חזה עוף בציפוי פריך - איולי ראנץ', חסות, בצל סגול וקרמבל בצל", en: "Crispy coated chicken breast - ranch aioli, lettuce, red onion and onion crumble" },
        price: 62
      },
      // תוספות מעל
      { id: "subheader-toppings", name: { he: "Meat your toppings", en: "Meat your toppings" }, price: 0, isSubheader: true },
      { id: "chili-jam", name: { he: "ריבת צ'ילי", en: "Chili Jam" }, price: 8 },
      { id: "crispy-onion", name: { he: "בצל פריך", en: "Crispy Onion" }, price: 6 },
      { id: "caramelized-onion", name: { he: "בצל מקורמל", en: "Caramelized Onion" }, price: 6 },
      { id: "jalapeno", name: { he: "חלפיניו על הפלאנצ'ה", en: "Grilled Jalapeño" }, price: 6 },
      { id: "smash-patty-100", name: { he: "קציצת סמאש 100 גר'", en: "Smash Patty 100g" }, price: 22 },
      { id: "fried-egg", name: { he: "ביצת עין", en: "Fried Egg" }, price: 10 },
      // תוספות בצד
      { id: "subheader-sides", name: { he: "Meat your sides", en: "Meat your sides" }, price: 0, isSubheader: true },
      { id: "ranch-salad", name: { he: "סלט חסות ראנץ'", en: "Ranch Lettuce Salad" }, price: 22 },
      { id: "green-salad", name: { he: "סלט ירוק", en: "Green Salad" }, price: 22 },
      { id: "fries", name: { he: "צ'יפס", en: "Fries" }, price: 20 },
      { id: "potatoes", name: { he: "פוטטוס", en: "Potatoes" }, price: 24 },
      { id: "green-beans", name: { he: "שעועית ירוקה", en: "Green Beans" }, price: 24 },
      // רטבים
      { id: "subheader-sauces", name: { he: "Meat your extra sauce", en: "Meat your extra sauce" }, price: 0, isSubheader: true },
      {
        id: "sauce-cup",
        name: { he: "קוקוס 80 מ\"ל", en: "Sauce Cup 80ml" },
        description: { he: "איולי כוסברה, איולי שום, איולי מיט אפ, איולי פלפלים שרופים, איולי ראנץ'", en: "Coriander aioli, garlic aioli, Meatup aioli, roasted pepper aioli, ranch aioli" },
        price: 4
      }
    ]
  },
  // Row 2: סלטים | עיקריות
  {
    id: "salads",
    name: {
      he: "סלטים",
      en: "Salads"
    },
    image: "/imgs/meatupimgs/Meat-up/meatuplight/JPEG/Grilled-chicken-thighs-and-avocado-salad.jpg",
    items: [
      {
        id: "lettuce-salad",
        name: { he: "סלט פרגית צלויה וחסות", en: "Grilled Chicken Thigh & Lettuce Salad" },
        description: { he: "רוטב ראנץ', בצל סגול צלוי, שרי, אבוקדו, צנונית, פרורי לחם קריספיים עם שברי בצל", en: "Ranch dressing, roasted red onion, cherry tomatoes, avocado, radish, crispy breadcrumbs with onion bits" },
        price: 66
      },
      {
        id: "extra-chicken-thigh",
        name: { he: "תוספת מנת פרגית", en: "Extra Chicken Thigh Portion" },
        price: 26
      },
      {
        id: "kebab-salad",
        name: { he: "סלט קבב אנטריקוט וירקות שדה", en: "Entrecote Kebab Salad with Field Vegetables" },
        description: { he: "פטרוזיליה, נענע, בצל סגול, עגבניות מגי, מלפפון בייבי, לימון וטחינה", en: "Parsley, mint, red onion, maggi tomatoes, baby cucumber, lemon and tahini" },
        price: 66
      },
      {
        id: "extra-kebab",
        name: { he: "תוספת קבב אנטריקוט", en: "Extra Entrecote Kebab" },
        price: 26
      },
      {
        id: "soy-caramel-salad",
        name: { he: "סלט חזה עוף סויה וקרמל", en: "Soy & Caramel Chicken Breast Salad" },
        description: { he: "ויניגרט עשבי תיבול, חסה לאליק, מיקס פלפלים קלויים, שעועית ירוקה צלויה, שרי, בצל סגול, וקוביות אבוקדו טרי", en: "Herb vinaigrette, lollo rosso lettuce, roasted pepper mix, grilled green beans, cherry tomatoes, red onion and fresh avocado cubes" },
        price: 62
      },
      {
        id: "extra-chicken-breast",
        name: { he: "תוספת מנת חזה עוף", en: "Extra Chicken Breast Portion" },
        price: 24
      }
    ]
  },
  {
    id: "mains",
    name: {
      he: "עיקריות",
      en: "Main Courses"
    },
    image: "/imgs/meatupimgs/Meat-up/meatuplight/JPEG/Ribeye-steak-antricot.jpg",
    items: [
      {
        id: "chicken-breast",
        name: { he: "חזה עוף בפלאנצ'ה", en: "Grilled Chicken Breast" },
        description: { he: "בסלסת פטרוזיליה, שום ולימון. עם תוספת לבחירה - סלט חסות ראנץ', סלט ירוק, צ'יפס, פוטטוס או שעועית ירוקה", en: "In parsley, garlic and lemon salsa, with choice of side - ranch lettuce salad, green salad, fries, potatoes or green beans" },
        price: 62
      },
      {
        id: "beef-soup",
        name: { he: "מרק בשר בבישול ארוך", en: "Slow-Cooked Beef Soup" },
        description: { he: "בשר ראש ואנטרב בבישול ארוך עם עצמות מח, ציר בקר וירקות, מוגש לצד טוסטונס", en: "Slow-cooked head meat and entrecote in long cook with marrow bones, beef stock and vegetables, served with tostones" },
        price: 52
      },
      {
        id: "ribeye-select",
        name: { he: "Ribeye Select", en: "Ribeye Select" },
        description: { he: "אנטריקוט בלאק אנגוס מיושן 300 גר', לצד פח עצם ותוספת לבחירה - פירה קרמי, שעועית ירוקה, צ'יפס או סלט ירוק", en: "Aged Black Angus ribeye 300g, with bone marrow and choice of side - creamy mash, green beans, fries or green salad" },
        price: 168
      }
    ]
  },
  // Row 3: קינוחים | אלכוהול
  {
    id: "desserts",
    name: {
      he: "קינוחים",
      en: "Desserts"
    },
    image: "/imgs/meatupimgs/Meat-up/meatuplight/JPEG/Warm-chocolate-fondant.jpg",
    items: [
      {
        id: "fondant",
        name: { he: "פונדנט שוקולד חם", en: "Hot Chocolate Fondant" },
        description: { he: "עוגת שוקולד חמה ונימוחה, העשויה ללא קמח ומוגשת עם גלידת קרם וניל", en: "Hot and melting chocolate cake, made without flour, served with vanilla cream ice cream" },
        price: 48
      },
      {
        id: "kinder-cookies",
        name: { he: "קוקיס קינדר", en: "Kinder Cookies" },
        description: { he: "משולש שכבות בצק עוגיות קוקיס שוקו צ'יפס שביניהם גנאש קינדר עשיר, מוגש עם גלידת פררו רושה", en: "Triple layer of chocolate chip cookie dough with rich Kinder ganache, served with Ferrero Rocher ice cream" },
        price: 42
      },
      {
        id: "pistachio-tart",
        name: { he: "טארט פיסטוק לימון", en: "Pistachio Lemon Tart" },
        description: { he: "קריספי פייט פיסטוק ושוקולד לבן קרמו לימון, קרם שנטילי וניל", en: "Crispy pistachio feuillantine and white chocolate, lemon cremeux, vanilla chantilly cream" },
        price: 42
      },
      {
        id: "panna-cotta",
        name: { he: "קרם פנקוטה", en: "Panna Cotta" },
        description: { he: "רוטב פסיפלורה, טוויל פריחת וקוליס פירות יער", en: "Passion fruit sauce, fruit tuile and berry coulis" },
        price: 46
      }
    ]
  },
  {
    id: "alcohol",
    name: {
      he: "אלכוהול",
      en: "Alcohol"
    },
    image: "/imgs/meatupimgs/wine.webp",
    items: [
      // בירות בחבית
      { id: "subheader-draft", name: { he: "בירות בחבית", en: "Draft Beers" }, price: 0, isSubheader: true },
      {
        id: "carlsberg-draft",
        name: { he: "קרלסברג", en: "Carlsberg" },
        description: { he: "1/3 - 24 ₪  |  1/2 - 32 ₪", en: "1/3 - 24₪  |  1/2 - 32₪" },
        price: 24,
        priceAlt: 32
      },
      {
        id: "weihenstephan",
        name: { he: "ויינשטפן", en: "Weihenstephan" },
        description: { he: "1/3 - 26 ₪  |  1/2 - 34 ₪", en: "1/3 - 26₪  |  1/2 - 34₪" },
        price: 26,
        priceAlt: 34
      },
      // בירות בבקבוק
      { id: "subheader-bottle", name: { he: "בירות בבקבוק", en: "Bottled Beers" }, price: 0, isSubheader: true },
      { id: "tuborg-bottle", name: { he: "טובורג", en: "Tuborg" }, price: 26 },
      { id: "carlsberg-bottle", name: { he: "קרלסברג", en: "Carlsberg" }, price: 28 },
      { id: "nesher-malt", name: { he: "נשר מאלט", en: "Nesher Malt" }, price: 14 },
      // יינות - בקבוקים
      { id: "subheader-wine", name: { he: "יינות - בקבוקים", en: "Wines - Bottles" }, price: 0, isSubheader: true },
      {
        id: "ramat-hagolan",
        name: { he: "רמת הגולן, בלנד אדום", en: "Ramat HaGolan, Red Blend" },
        price: 145
      },
      {
        id: "barkan-seven-hills",
        name: { he: "ברקן סגן הילס, אדום", en: "Barkan Seven Hills, Red" },
        description: { he: "ק.ס.", en: "C.S." },
        price: 120
      },
      {
        id: "morelli-red",
        name: { he: "מורלי, בלנד אדום", en: "Morelli, Red Blend" },
        description: { he: "ק.ס.", en: "C.S." },
        price: 96
      },
      {
        id: "morelli-white",
        name: { he: "מורלי, לבן", en: "Morelli, White" },
        description: { he: "שרדונה", en: "Chardonnay" },
        price: 96
      },
      // יינות - כוסות
      { id: "subheader-wine-glass", name: { he: "יינות - כוסות", en: "Wines - By the Glass" }, price: 0, isSubheader: true },
      {
        id: "carmi-shai",
        name: { he: "כרמי שי, פריים", en: "Carmi Shai, Prime" },
        description: { he: "ק.ס.", en: "C.S." },
        price: 22
      },
      {
        id: "kumbia-white",
        name: { he: "קומביה, שרדונה, לבן", en: "Kumbia, Chardonnay, White" },
        price: 22
      }
    ]
  },
  // Row 4: ילדים | שתיה קלה
  {
    id: "kids",
    name: {
      he: "מנות ילדים",
      en: "Kids Menu"
    },
    image: "/imgs/meatupimgs/Meat-up/meatuplight/JPEG/Junior-burger.jpg",
    items: [
      { id: "kids-burger", name: { he: "בורגר ילדים", en: "Kids Burger" }, price: 58 },
      { id: "kids-schnitzel", name: { he: "שניצלוני חזה עוף", en: "Chicken Breast Schnitzel" }, price: 58 },
      { id: "kids-chicken", name: { he: "פרגית ילדים", en: "Kids Chicken" }, price: 58 }
    ]
  },
  {
    id: "soft-drinks",
    name: {
      he: "שתיה קלה",
      en: "Soft Drinks"
    },
    image: "/imgs/meatupimgs/bevreges.webp",
    items: [
      { id: "coca-cola", name: { he: "קולה / קולה זירו / ספרייט / ספרייט זירו", en: "Cola / Cola Zero / Sprite / Sprite Zero" }, price: 14 },
      { id: "prigat", name: { he: "פריגת ענבים / תפוזים / אשכוליות / לימונענע", en: "Prigat Grapes / Orange / Grapefruit / Lemonade" }, price: 14 },
      { id: "fuze-tea", name: { he: "פיוזטי אפרסק", en: "Fuze Tea Peach" }, price: 14 },
      { id: "neviot", name: { he: "נביעות בטעמים אפרסק / תפוח / ענבים", en: "Neviot Peach / Apple / Grapes" }, price: 14 },
      { id: "mineral-water", name: { he: "מים מינרלים", en: "Mineral Water" }, price: 12 },
      { id: "soda", name: { he: "סודה", en: "Soda" }, price: 12 }
    ]
  }
];

// Allergen notice
export const allergenNotice = {
  he: "המנות המוצעות עשויות להכיל אלרגני מסוגים שונים - ניתן להזמין את מנת ההמבורגר עם לחמניה ללא גלוטן, אך סביבת העבודה אינה נקיה מגלוטן ועל כן עשויה להכיל עקבות גלוטן.",
  en: "The dishes offered may contain various allergens - burger dishes can be ordered with gluten-free buns, but the work environment is not gluten-free and may contain traces of gluten."
};
