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
}

export const menuData: MenuCategory[] = [
  {
    id: "starters",
    name: {
      he: "מנות פתיחה",
      en: "Starters"
    },
    image: "/imgs/meatupimgs/firsts.webp",
    items: [
      { id: "bagel", name: { he: "בייגל ירושלמי", en: "Jerusalem Bagel" }, price: 38 },
      { id: "eggplant-steak", name: { he: "חציל STEAK", en: "Eggplant Steak" }, price: 42 },
      { id: "beef-cigar", name: { he: "סיגר בקר", en: "Beef Cigar" }, price: 46 },
      { id: "crispy-nuggets", name: { he: "קריספי נאגטס", en: "Crispy Nuggets" }, price: 38 }
    ]
  },
  {
    id: "mains",
    name: {
      he: "עיקריות מהמטבח",
      en: "Main Courses"
    },
    image: "/imgs/meatupimgs/meats.webp",
    items: [
      { id: "roasted-chicken-leg", name: { he: "כרע עוף צלוי", en: "Roasted Chicken Leg" }, price: 66 },
      { id: "chicken-breast", name: { he: "חזה עוף בפלנצ'ה", en: "Grilled Chicken Breast" }, price: 62 },
      { id: "lettuce-salad", name: { he: "סלט חסות ופרגית צלויה", en: "Lettuce Salad with Grilled Chicken" }, price: 66 },
      { id: "kebab-salad", name: { he: "סלט קבב אנטריקוט וירקות שדה", en: "Entrecote Kebab Salad with Field Vegetables" }, price: 66 },
      { id: "beef-soup", name: { he: "מרק בשר בבישול ארוך", en: "Slow-Cooked Beef Soup" }, price: 52 },
      { id: "ribeye-select", name: { he: "Ribeye Select (אנטריקוט 300 גר')", en: "Ribeye Select (Entrecote 300g)" }, price: 168 }
    ]
  },
  {
    id: "burgers",
    name: {
      he: "בורגרים",
      en: "Burgers"
    },
    image: "/imgs/meatupimgs/burgers.webp",
    items: [
      // בורגרים
      { id: "meatup-burger", name: { he: "מיטאפ בורגר", en: "Meatup Burger" }, price: 64 },
      { id: "midtown-burger", name: { he: "מידטאון בורגר", en: "Midtown Burger" }, price: 66 },
      { id: "topup-300", name: { he: "טופאפ 300", en: "TopUp 300" }, price: 82 },
      { id: "smash-and-eggs", name: { he: "סמאש אנד אגס", en: "Smash and Eggs" }, price: 66 },
      { id: "chicken-ranch", name: { he: "צ'יקן ראנצ'", en: "Chicken Ranch" }, price: 62 },
      // תוספות מעל
      { id: "subheader-toppings", name: { he: "תוספות מעל", en: "Toppings" }, price: 0, isSubheader: true },
      { id: "caramelized-onion", name: { he: "בצל מקורמל", en: "Caramelized Onion" }, price: 6 },
      { id: "jalapeno", name: { he: "חלפניו על הפלנצ'ה", en: "Grilled Jalapeño" }, price: 6 },
      { id: "smash-patty-100", name: { he: "קציצת סמאש 100 גרם", en: "Smash Patty 100g" }, price: 22 },
      { id: "patty-230", name: { he: "קציצה 230 גרם", en: "Patty 230g" }, price: 30 },
      { id: "fried-egg", name: { he: "ביצת עין", en: "Fried Egg" }, price: 10 },
      // תוספות בצד
      { id: "subheader-sides", name: { he: "תוספות בצד", en: "Sides" }, price: 0, isSubheader: true },
      { id: "ranch-salad", name: { he: "סלט חסות ראנץ", en: "Ranch Lettuce Salad" }, price: 22 },
      { id: "green-salad", name: { he: "סלט ירוק", en: "Green Salad" }, price: 22 },
      { id: "fries", name: { he: "צ'יפס", en: "Fries" }, price: 20 },
      { id: "potatoes", name: { he: "פוטטוס", en: "Potatoes" }, price: 24 },
      { id: "mashed", name: { he: "פירה", en: "Mashed Potatoes" }, price: 24 },
      { id: "green-beans", name: { he: "שעועית ירוקה", en: "Green Beans" }, price: 24 },
      // רטבים
      { id: "subheader-sauces", name: { he: "רטבים", en: "Sauces" }, price: 0, isSubheader: true },
      { id: "aioli-coriander", name: { he: "איולי כוסברה", en: "Coriander Aioli" }, price: 4 },
      { id: "aioli-garlic", name: { he: "איולי שום", en: "Garlic Aioli" }, price: 4 },
      { id: "aioli-meatup", name: { he: "איולי מיט אפ", en: "Meatup Aioli" }, price: 4 },
      { id: "aioli-peppers", name: { he: "איולי פלפלים שרופים", en: "Roasted Pepper Aioli" }, price: 4 },
      { id: "aioli-ranch", name: { he: "איולי ראנץ", en: "Ranch Aioli" }, price: 4 }
    ]
  },
  {
    id: "kids",
    name: {
      he: "מנות ילדים",
      en: "Kids Menu"
    },
    image: "/imgs/meatupimgs/img6_processed.webp",
    items: [
      { id: "kids-burger", name: { he: "בורגר ילדים", en: "Kids Burger" }, price: 58 },
      { id: "kids-schnitzel", name: { he: "שניצלוני חזה עוף", en: "Chicken Breast Schnitzel" }, price: 58 },
      { id: "kids-chicken", name: { he: "פרגית ילדים", en: "Kids Chicken" }, price: 58 }
    ]
  },
  {
    id: "drinks",
    name: {
      he: "משקאות",
      en: "Drinks"
    },
    image: "/imgs/meatupimgs/bevreges.webp",
    items: [
      { id: "coca-cola", name: { he: "קוקה קולה", en: "Coca Cola" }, price: 14 },
      { id: "cola-zero", name: { he: "קולה זירו", en: "Cola Zero" }, price: 14 },
      { id: "diet-cola", name: { he: "דיאט קולה", en: "Diet Cola" }, price: 14 },
      { id: "fanta", name: { he: "פאנטה", en: "Fanta" }, price: 14 },
      { id: "sprite", name: { he: "ספרייט", en: "Sprite" }, price: 14 },
      { id: "sprite-zero", name: { he: "ספרייט זירו", en: "Sprite Zero" }, price: 14 },
      { id: "prigat-grapes", name: { he: "פריגת ענבים", en: "Prigat Grapes" }, price: 14 },
      { id: "prigat-orange", name: { he: "פריגת תפוזים", en: "Prigat Orange" }, price: 14 },
      { id: "prigat-grapefruit", name: { he: "פריגת אשכוליות", en: "Prigat Grapefruit" }, price: 14 },
      { id: "prigat-lemonade", name: { he: "פריגת לימונענע", en: "Prigat Lemonade" }, price: 14 },
      { id: "prigat-apple", name: { he: "פריגת תפוחים", en: "Prigat Apple" }, price: 14 },
      { id: "fuze-tea", name: { he: "פיוז טי אפרסק", en: "Fuze Tea Peach" }, price: 14 },
      { id: "nesher-malt", name: { he: "נשר מאלט", en: "Nesher Malt" }, price: 14 },
      { id: "neviot-peach", name: { he: "נביעות בטעמים אפרסק", en: "Neviot Peach" }, price: 14 },
      { id: "neviot-apple", name: { he: "נביעות בטעמים תפוח", en: "Neviot Apple" }, price: 14 },
      { id: "neviot-grapes", name: { he: "נביעות בטעמים ענבים", en: "Neviot Grapes" }, price: 14 },
      { id: "soda", name: { he: "סודה", en: "Soda" }, price: 12 },
      { id: "mineral-water", name: { he: "מים מינרליים", en: "Mineral Water" }, price: 12 }
    ]
  },
  {
    id: "bar",
    name: {
      he: "בר - בירות, יין ואלכוהול",
      en: "Bar - Beer, Wine & Spirits"
    },
    image: "/imgs/meatupimgs/wine.webp",
    items: [
      // בירות מהחבית
      { id: "subheader-draft", name: { he: "בירות מהחבית", en: "Draft Beers" }, price: 0, isSubheader: true },
      { id: "tuborg-draft-small", name: { he: "טובורג מהחבית 1/3", en: "Tuborg Draft 1/3" }, price: 24 },
      { id: "tuborg-draft-large", name: { he: "טובורג מהחבית 1/2", en: "Tuborg Draft 1/2" }, price: 32 },
      { id: "carlsberg-draft-small", name: { he: "קרלסברג מהחבית 1/3", en: "Carlsberg Draft 1/3" }, price: 24 },
      { id: "carlsberg-draft-large", name: { he: "קרלסברג מהחבית 1/2", en: "Carlsberg Draft 1/2" }, price: 32 },
      { id: "weihenstephan-small", name: { he: "וויינשטפן 1/3", en: "Weihenstephan 1/3" }, price: 26 },
      { id: "weihenstephan-large", name: { he: "וויינשטפן 1/2", en: "Weihenstephan 1/2" }, price: 34 },
      // בירות בבקבוק
      { id: "subheader-bottle", name: { he: "בירות בבקבוק", en: "Bottled Beers" }, price: 0, isSubheader: true },
      { id: "tuborg-bottle", name: { he: "טובורג בקבוק", en: "Tuborg Bottle" }, price: 28 },
      { id: "stella-bottle", name: { he: "סטלה", en: "Stella" }, price: 28 },
      { id: "goldstar-bottle", name: { he: "גולדסטאר", en: "Goldstar" }, price: 28 },
      { id: "1664-bottle", name: { he: "1664 בירה חיטה צרפתית", en: "1664 French Wheat Beer" }, price: 28 },
      { id: "corona-bottle", name: { he: "קורונה", en: "Corona" }, price: 28 },
      { id: "malka-bottle", name: { he: "מלכה בהירה", en: "Malka Light" }, price: 28 },
      { id: "carlsberg-zero", name: { he: "קרלסברג 0% אלכוהול", en: "Carlsberg 0% Alcohol" }, price: 18 },
      // יינות
      { id: "subheader-wine", name: { he: "יינות", en: "Wines" }, price: 0, isSubheader: true },
      { id: "barkan-platinum", name: { he: "ברקן פלטינום בציר", en: "Barkan Platinum Vintage" }, price: 160 },
      { id: "barkan-seven-hills", name: { he: "ברקן סבן הילס בציר", en: "Barkan Seven Hills" }, price: 140 },
      { id: "morelli-cs", name: { he: "מורלי ק.ס.", en: "Morelli C.S." }, price: 120 },
      { id: "morelli-chardonnay", name: { he: "מורלי שרדונה", en: "Morelli Chardonnay" }, price: 120 },
      // אפריטיף
      { id: "subheader-aperitif", name: { he: "אפריטיף", en: "Aperitifs" }, price: 0, isSubheader: true },
      { id: "martini", name: { he: "מרטיני ביאנקו / רוסו", en: "Martini Bianco / Rosso" }, price: 26 },
      { id: "campari", name: { he: "קמפרי", en: "Campari" }, price: 28 },
      { id: "aperol", name: { he: "אפרול", en: "Aperol" }, price: 28 },
      // ערק ואוזו
      { id: "subheader-arak", name: { he: "ערק ואוזו", en: "Arak & Ouzo" }, price: 0, isSubheader: true },
      { id: "arak-ayalot", name: { he: "ערק איילות", en: "Arak Ayalot" }, price: 26 },
      { id: "arak-zafir", name: { he: "ערק זפייר", en: "Arak Zafir" }, price: 28 },
      { id: "ouzo-12", name: { he: "אוזו 12", en: "Ouzo 12" }, price: 28 },
      // וודקה
      { id: "subheader-vodka", name: { he: "וודקה", en: "Vodka" }, price: 0, isSubheader: true },
      { id: "smirnoff", name: { he: "סמירנוף", en: "Smirnoff" }, price: 28 },
      { id: "ketel-one", name: { he: "קטל ONE", en: "Ketel One" }, price: 36 },
      { id: "grey-goose", name: { he: "גרייגוס", en: "Grey Goose" }, price: 42 },
      { id: "beluga", name: { he: "בלוגה", en: "Beluga" }, price: 42 },
      // וויסקי
      { id: "subheader-whiskey", name: { he: "וויסקי", en: "Whiskey" }, price: 0, isSubheader: true },
      { id: "jw-red", name: { he: "ג'וני ווקר אדום", en: "Johnnie Walker Red" }, price: 32 },
      { id: "jw-black", name: { he: "ג'וני ווקר שחור", en: "Johnnie Walker Black" }, price: 42 },
      { id: "jw-gold", name: { he: "ג'וני ווקר גולד", en: "Johnnie Walker Gold" }, price: 55 },
      { id: "jw-blue", name: { he: "ג'וני ווקר בלו", en: "Johnnie Walker Blue" }, price: 80 },
      { id: "glenlivet", name: { he: "גלנליווט", en: "Glenlivet" }, price: 42 },
      { id: "glenfiddich-12", name: { he: "גלנפידיך 12", en: "Glenfiddich 12" }, price: 45 },
      { id: "macallan-12", name: { he: "מקאלן 12", en: "Macallan 12" }, price: 76 },
      { id: "bushmills", name: { he: "בושמילס", en: "Bushmills" }, price: 32 },
      { id: "jameson", name: { he: "ג'יימסון", en: "Jameson" }, price: 32 },
      { id: "black-bush", name: { he: "בלאק בוש", en: "Black Bush" }, price: 42 },
      { id: "jack-daniels", name: { he: "ג'ק דניאלס", en: "Jack Daniel's" }, price: 38 },
      { id: "gentleman-jack", name: { he: "ג'נטלמן ג'ק", en: "Gentleman Jack" }, price: 46 },
      // טקילה
      { id: "subheader-tequila", name: { he: "טקילה", en: "Tequila" }, price: 0, isSubheader: true },
      { id: "don-julio", name: { he: "דון חוליו רפוסדו", en: "Don Julio Reposado" }, price: 42 },
      { id: "cuervo", name: { he: "קווארבו", en: "Jose Cuervo" }, price: 34 },
      { id: "patron", name: { he: "פטרון", en: "Patron" }, price: 55 },
      // רום
      { id: "subheader-rum", name: { he: "רום", en: "Rum" }, price: 0, isSubheader: true },
      { id: "captain-morgan-spiced", name: { he: "קפטן מורגן SPICED", en: "Captain Morgan Spiced" }, price: 32 },
      { id: "captain-morgan-white", name: { he: "קפטן מורגן לבן", en: "Captain Morgan White" }, price: 24 },
      // ג'ין
      { id: "subheader-gin", name: { he: "ג'ין", en: "Gin" }, price: 0, isSubheader: true },
      { id: "gordons", name: { he: "גורדונס", en: "Gordon's" }, price: 36 },
      { id: "tanqueray", name: { he: "טנקרי", en: "Tanqueray" }, price: 36 },
      // דז'סטיף
      { id: "subheader-digestif", name: { he: "דז'סטיף", en: "Digestif" }, price: 0, isSubheader: true },
      { id: "fernet-branca", name: { he: "פרנה ברנקה", en: "Fernet Branca" }, price: 32 }
    ]
  },
  {
    id: "desserts",
    name: {
      he: "קינוחים",
      en: "Desserts"
    },
    image: "/imgs/meatupimgs/deserts.webp",
    items: [
      { id: "fondant", name: { he: "פונדנט שוקולד חם", en: "Hot Chocolate Fondant" }, price: 48 },
      { id: "kinder-cookies", name: { he: "קוקיס קינדר", en: "Kinder Cookies" }, price: 42 },
      { id: "pistachio-tart", name: { he: "טארט פיסטוק לימון", en: "Pistachio Lemon Tart" }, price: 42 },
      { id: "panna-cotta", name: { he: "קרם פנקוטה", en: "Panna Cotta" }, price: 46 },
      { id: "strawberries", name: { he: "תותים", en: "Strawberries" }, price: 44 }
    ]
  }
];
