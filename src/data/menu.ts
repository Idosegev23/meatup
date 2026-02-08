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
  {
    id: "starters",
    name: {
      he: "Meat your social",
      en: "Meat your social"
    },
    image: "/imgs/meatupimgs/firsts.webp",
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
        description: { he: "כנפיים חצויות (8 יחי') מטוגנות בזיגוג מייפל, שמן צ'ילי ושומשום, בצל ירוק", en: "Split wings (8 pcs) fried with maple glaze, chili oil, sesame and green onion" },
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
        description: { he: "שלישיית נקניקיות - צוריסוס פיקנטי, בקר מעושן ובקר-עוף מעושן - צרובות על הפלנצ'ה. לצידן כרוב ובצל חום צלויים, איולי חרדל ומלפפונים חמוצים ביתיים", en: "Three sausages - spicy chorizo, smoked beef and smoked beef-chicken - seared on the plancha. Served with roasted cabbage and brown onion, mustard aioli and homemade pickles" },
        price: 36 
      }
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
      { 
        id: "chicken-breast", 
        name: { he: "חזה עוף בפלנצ'ה", en: "Grilled Chicken Breast" }, 
        description: { he: "בסלסת פטרוזיליה, שום ולימון, עם תוספת לבחירה - סלט חסות ראנץ, סלט ירוק, צ'יפס, פוטטוס או שעועית ירוקה", en: "In parsley, garlic and lemon salsa, with choice of side - ranch lettuce salad, green salad, fries, potatoes or green beans" },
        price: 62 
      },
      { 
        id: "lettuce-salad", 
        name: { he: "סלט פרגית צלויה וחסות", en: "Grilled Chicken Thigh & Lettuce Salad" }, 
        description: { he: "רוטב ראנץ, בצל סגול, אבוקדו, צנונית, בצל ופרורי לחם קריספיים", en: "Ranch dressing, red onion, avocado, radish, onion and crispy breadcrumbs" },
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
      },
      { 
        id: "beef-soup", 
        name: { he: "מרק בשר בבישול ארוך", en: "Slow-Cooked Beef Soup" }, 
        description: { he: "בשר ראש ואונטריב בבישול ארוך עם עצמות מח, ציר בקר וירקות, מוגש לצד טוסטונים", en: "Slow-cooked head meat and oxtail with marrow bones, beef stock and vegetables, served with tostones" },
        price: 52 
      },
      { 
        id: "ribeye-select", 
        name: { he: "Ribeye Select", en: "Ribeye Select" }, 
        description: { he: "אנטריקוט בלאק אנגוס מיושן 300 גר', לצד מח עצם ותוספת לבחירה - פירה קרמי, שעועית ירוקה, צ'יפס או סלט ירוק", en: "Aged Black Angus ribeye 300g, with bone marrow and choice of side - creamy mash, green beans, fries or green salad" },
        price: 168 
      }
    ]
  },
  {
    id: "burgers",
    name: {
      he: "Meat your burger",
      en: "Meat your burger"
    },
    image: "/imgs/meatupimgs/burgers.webp",
    note: {
      he: "עד השעה 17:00 המנות מוגשות עם שתיה ותוספת לבחירה, בתוספת 16 ₪",
      en: "Until 5:00 PM, dishes are served with a drink and side of choice, for an additional 16 ₪"
    },
    items: [
      // בורגרים
      { 
        id: "meatup-burger", 
        name: { he: "מיטאפ בורגר", en: "Meatup Burger" }, 
        description: { he: "עשויה מבקר מובחר 230 גר' - איולי של מיט אפ, חסה לאליק, עגבניה, בצל סגול ומלפפון כבוש", en: "Made from premium beef 230g - Meatup aioli, lollo rosso lettuce, tomato, red onion and pickle" },
        price: 64 
      },
      { 
        id: "midtown-burger", 
        name: { he: "מידטאון בורגר", en: "Midtown Burger" }, 
        description: { he: "עשויה מבקר מובחר 230 גר' ומתובלת בפטרוזיליה ובצל - מיונז, צ'ימצ'ורי ובצל מקורמל", en: "Made from premium beef 230g seasoned with parsley and onion - mayo, chimichurri and caramelized onion" },
        price: 66 
      },
      { 
        id: "topup-300", 
        name: { he: "טופאפ 300", en: "TopUp 300" }, 
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
        description: { he: "חזה עוף בציפוי פריך - איולי ראנץ, חסות, בצל סגול וקרמבל בצל", en: "Crispy coated chicken breast - ranch aioli, lettuce, red onion and onion crumble" },
        price: 62 
      },
      // תוספות מעל
      { id: "subheader-toppings", name: { he: "Meat your toppings", en: "Meat your toppings" }, price: 0, isSubheader: true },
      { id: "chili-jam", name: { he: "ריבת צ'ילי", en: "Chili Jam" }, price: 8 },
      { id: "crispy-onion", name: { he: "בצל פריך", en: "Crispy Onion" }, price: 6 },
      { id: "caramelized-onion", name: { he: "בצל מקורמל", en: "Caramelized Onion" }, price: 6 },
      { id: "jalapeno", name: { he: "חלפניו על הפלנצ'ה", en: "Grilled Jalapeño" }, price: 6 },
      { id: "smash-patty-100", name: { he: "קציצת סמאש 100 גר'", en: "Smash Patty 100g" }, price: 22 },
      { id: "fried-egg", name: { he: "ביצת עין", en: "Fried Egg" }, price: 10 },
      // תוספות בצד
      { id: "subheader-sides", name: { he: "Meat your sides", en: "Meat your sides" }, price: 0, isSubheader: true },
      { id: "ranch-salad", name: { he: "סלט חסות ראנץ", en: "Ranch Lettuce Salad" }, price: 22 },
      { id: "green-salad", name: { he: "סלט ירוק", en: "Green Salad" }, price: 22 },
      { id: "fries", name: { he: "צ'יפס", en: "Fries" }, price: 20 },
      { id: "potatoes", name: { he: "פוטטוס", en: "Potatoes" }, price: 24 },
      { id: "green-beans", name: { he: "שעועית ירוקה", en: "Green Beans" }, price: 24 },
      // רטבים
      { id: "subheader-sauces", name: { he: "Meat your extra sauce", en: "Meat your extra sauce" }, price: 0, isSubheader: true },
      { 
        id: "sauce-cup", 
        name: { he: "קוקוט 80 מ\"ל", en: "Sauce Cup 80ml" }, 
        description: { he: "איולי כוסברה, איולי שום, איולי מיט אפ, איולי פלפלים שרופים, איולי ראנץ", en: "Coriander aioli, garlic aioli, Meatup aioli, roasted pepper aioli, ranch aioli" },
        price: 4 
      }
    ]
  },
  {
    id: "drinks",
    name: {
      he: "Meat your drinks",
      en: "Meat your drinks"
    },
    image: "/imgs/meatupimgs/bevreges.webp",
    items: [
      // משקאות קלים
      { id: "subheader-soft", name: { he: "משקאות קלים", en: "Soft Drinks" }, price: 0, isSubheader: true },
      { id: "coca-cola", name: { he: "קולה / קולה זירו", en: "Coca Cola / Cola Zero" }, price: 14 },
      { id: "sprite", name: { he: "ספרייט / ספרייט זירו", en: "Sprite / Sprite Zero" }, price: 14 },
      { id: "prigat-grapes", name: { he: "פריגת ענבים", en: "Prigat Grapes" }, price: 14 },
      { id: "prigat-orange", name: { he: "פריגת תפוזים", en: "Prigat Orange" }, price: 14 },
      { id: "prigat-grapefruit", name: { he: "פריגת אשכוליות", en: "Prigat Grapefruit" }, price: 14 },
      { id: "prigat-lemonade", name: { he: "פריגת לימונענע", en: "Prigat Lemonade" }, price: 14 },
      { id: "fuze-tea", name: { he: "פיוזטי אפרסק", en: "Fuze Tea Peach" }, price: 14 },
      { id: "neviot-peach", name: { he: "נביעות בטעמים אפרסק", en: "Neviot Peach" }, price: 14 },
      { id: "neviot-apple", name: { he: "נביעות בטעמים תפוח", en: "Neviot Apple" }, price: 14 },
      { id: "neviot-grapes", name: { he: "נביעות בטעמים ענבים", en: "Neviot Grapes" }, price: 14 },
      { id: "mineral-water", name: { he: "מים מינרליים", en: "Mineral Water" }, price: 12 },
      { id: "soda", name: { he: "סודה", en: "Soda" }, price: 12 }
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
    id: "bar",
    name: {
      he: "בר - בירות, יין ואלכוהול",
      en: "Bar - Beer, Wine & Spirits"
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
      // יינות
      { id: "subheader-wine", name: { he: "יינות - בקבוקים", en: "Wines - Bottles" }, price: 0, isSubheader: true },
      { 
        id: "barkan-platinum", 
        name: { he: "ברקן פלטינום, אדום", en: "Barkan Platinum, Red" }, 
        description: { he: "ק.ס. בציר 21", en: "C.S. Vintage 21" },
        price: 160 
      },
      { 
        id: "barkan-seven-hills", 
        name: { he: "ברקן סבן הילס, אדום", en: "Barkan Seven Hills, Red" }, 
        description: { he: "ק.ס. בציר 23", en: "C.S. Vintage 23" },
        price: 140 
      },
      { 
        id: "morelli-red", 
        name: { he: "מורלי, אדום", en: "Morelli, Red" }, 
        description: { he: "ק.ס.", en: "C.S." },
        price: 120 
      },
      { 
        id: "morelli-white", 
        name: { he: "מורלי, לבן", en: "Morelli, White" }, 
        description: { he: "שרדונה", en: "Chardonnay" },
        price: 120 
      },
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
      he: "Meat your sweets",
      en: "Meat your sweets"
    },
    image: "/imgs/meatupimgs/deserts.webp",
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
        description: { he: "משולש שכבות בצק עוגיות קוקיס שוקו צ'יפס שבינהם גנאש קינדר עשיר, מוגש עם גלידת פררו רושה", en: "Triple layer of chocolate chip cookie dough with rich Kinder ganache, served with Ferrero Rocher ice cream" },
        price: 42 
      },
      { 
        id: "pistachio-tart", 
        name: { he: "טארט פיסטוק לימון", en: "Pistachio Lemon Tart" }, 
        description: { he: "קריספי פייטה פיסטוק ושוקולד לבן קרמו לימון, קרם שנטילי וניל", en: "Crispy pistachio feuillantine and white chocolate, lemon cremeux, vanilla chantilly cream" },
        price: 42 
      },
      { 
        id: "panna-cotta", 
        name: { he: "קרם פנקוטה", en: "Panna Cotta" }, 
        description: { he: "רוטב פסיפלורה, טוויל פירות ורוטב פירות יער", en: "Passion fruit sauce, fruit tuile and berry sauce" },
        price: 46 
      }
    ]
  }
];

// Allergen notice
export const allergenNotice = {
  he: "המנות המוצעות עשויות להכיל אלרגני מסוגים שונים - ניתן להזמין את מנות ההמבורגר עם לחמניה ללא גלוטן, אך סביבת העבודה אינה נקיה מגלוטן ועל כן עשויה להכיל עקבות גלוטן.",
  en: "The dishes offered may contain various allergens - burger dishes can be ordered with gluten-free buns, but the work environment is not gluten-free and may contain traces of gluten."
};
