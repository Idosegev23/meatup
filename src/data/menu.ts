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
  // Row 1: Meatup Social | Meat your Burger
  {
    id: "starters",
    name: {
      he: "Meatup Social",
      en: "Meatup Social"
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
        id: "merguez-sausages",
        name: { he: "נקניקיות מרגז", en: "Merguez Sausages" },
        description: { he: "עשויות ביצור ביתי מנתחי בקר מובחרים", en: "Homemade from premium beef cuts" },
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
        description: { he: "בקר טחון מתובל, חסה לאליק, פטרוזיליה, נענע, לימון, צנוברים, טחינה וסלסה חריפה", en: "Seasoned ground beef, lollo rosso lettuce, parsley, mint, lemon, pine nuts, tahini and spicy salsa" },
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
        price: 42
      },
      {
        id: "trio-sausages",
        name: { he: "טריו נקניקיות הבית", en: "House Sausage Trio" },
        description: { he: "שלישיית נקניקיות - צ'וריסוס פיקנטי, בקר מעושן ובקר-עוף מעושן - צרובות על הפלאנצ'ה, לצד כרוב ובצל חום צלויים", en: "Three sausages - spicy chorizo, smoked beef and smoked beef-chicken - seared on the plancha, with roasted cabbage and brown onion" },
        price: 38
      }
    ]
  },
  {
    id: "burgers",
    name: {
      he: "Meat your Burger",
      en: "Meat your Burger"
    },
    image: "/imgs/meatupimgs/Meat-up/meatuplight/JPEG/Meat-up-burger.jpg",
    note: {
      he: "ניתן להזמין לחמניה ללא גלוטן, בתוספת תשלום 4 ₪",
      en: "Gluten-free bun available for an additional 4 ₪"
    },
    items: [
      {
        id: "chicken-ranch",
        name: { he: "צ'יקן ראנצ'", en: "Chicken Ranch" },
        description: { he: "חזה עוף בציפוי פריך - איולי ראנץ', חסות, בצל סגול וקרמבל בצל", en: "Crispy coated chicken breast - ranch aioli, lettuce, red onion and onion crumble" },
        price: 62
      },
      {
        id: "meatup-burger",
        name: { he: "מיטאפ בורגר", en: "Meatup Burger" },
        description: { he: "עשויה מנתחי בקר מובחר 230 גר' - איולי מיט אפ, חסה לאליק, עגבניה, בצל סגול ומלפפון כבוש", en: "Made from premium beef cuts 230g - Meatup aioli, lollo rosso lettuce, tomato, red onion and pickle" },
        price: 64
      },
      {
        id: "midtown-burger",
        name: { he: "מידטאון בורגר", en: "Midtown Burger" },
        description: { he: "עשויה מנתחי בקר מובחר 230 גר' ומתובלת בפטרוזיליה ובצל - מיונז, צ'ימצ'ורי ובצל מקורמל", en: "Made from premium beef cuts 230g seasoned with parsley and onion - mayo, chimichurri and caramelized onion" },
        price: 66
      },
      {
        id: "smash-and-eggs",
        name: { he: "סמאש אנד אגס", en: "Smash and Eggs" },
        description: { he: "סמאש בורגר 200 גר' - סלט ביצים עם בצל ירוק, חסה לאליק ומלפפון כבוש", en: "Smash burger 200g - egg salad with green onion, lollo rosso lettuce and pickle" },
        price: 66
      },
      {
        id: "topap-300",
        name: { he: "טופאפ 300", en: "Topap 300" },
        description: { he: "עשויה מנתחי בקר מובחר 300 גר' - איולי פלפלים שרופים, חסה לאליק וטבעות בצל דקיקות", en: "Made from premium beef cuts 300g - roasted pepper aioli, lollo rosso lettuce and thin onion rings" },
        price: 82
      },
      {
        id: "beyond-burger",
        name: { he: "המבורגר צמחוני מבוסס Beyond Burger", en: "Vegetarian Beyond Burger" },
        description: { he: "קציצה מהצומח עם מרקם וטעם שמזכירים בשר, עסיסית ועשירה בחלבון - איולי פלפלים שרופים, חסה לאליק, עגבניה, בצל סגול ומלפפון חמוץ", en: "Plant-based patty with meat-like texture and flavor, juicy and protein-rich - roasted pepper aioli, lollo rosso lettuce, tomato, red onion and pickle" },
        price: 64
      },
      // תוספות מעל
      { id: "subheader-toppings", name: { he: "Meat your Toppings", en: "Meat your Toppings" }, price: 0, isSubheader: true },
      { id: "crispy-onion", name: { he: "בצל פריך", en: "Crispy Onion" }, price: 6 },
      { id: "caramelized-onion", name: { he: "בצל מקורמל", en: "Caramelized Onion" }, price: 6 },
      { id: "jalapeno", name: { he: "חלפיניו על הפלאנצ'ה", en: "Grilled Jalapeño" }, price: 6 },
      { id: "chili-jam", name: { he: "ריבת צ'ילי", en: "Chili Jam" }, price: 8 },
      { id: "fried-egg", name: { he: "ביצת עין", en: "Fried Egg" }, price: 10 },
      { id: "smash-patty-100", name: { he: "קציצת סמאש 100 גר'", en: "Smash Patty 100g" }, price: 22 },
      { id: "burger-patty-230", name: { he: "קציצת בורגר 230 גר'", en: "Burger Patty 230g" }, price: 30 },
      // תוספות בצד
      { id: "subheader-sides", name: { he: "Meat your Sides", en: "Meat your Sides" }, price: 0, isSubheader: true },
      {
        id: "fries",
        name: { he: "צ'יפס קטן / גדול", en: "Fries Small / Large" },
        description: { he: "22 / 44 ₪", en: "22 / 44 ₪" },
        price: 22,
        priceAlt: 44
      },
      { id: "ranch-salad", name: { he: "סלט חסות ראנץ'", en: "Ranch Lettuce Salad" }, price: 22 },
      { id: "green-salad", name: { he: "סלט ירוק", en: "Green Salad" }, price: 22 },
      { id: "potatoes", name: { he: "פוטטוס", en: "Potatoes" }, price: 24 },
      { id: "green-beans", name: { he: "שעועית ירוקה", en: "Green Beans" }, price: 24 },
      // רטבים
      { id: "subheader-sauces", name: { he: "Meat your Extra Sauce", en: "Meat your Extra Sauce" }, price: 0, isSubheader: true },
      {
        id: "sauce-cup",
        name: { he: "קוקוט 80 מ\"ל", en: "Sauce Cup 80ml" },
        description: { he: "איולי כוסברה, איולי שום, איולי מיט אפ, איולי פלפלים שרופים, איולי ראנץ'", en: "Coriander aioli, garlic aioli, Meatup aioli, roasted pepper aioli, ranch aioli" },
        price: 4
      }
    ]
  },
  // Row 2: סלטים | עיקריות
  {
    id: "salads",
    name: {
      he: "Meat your Salads",
      en: "Meat your Salads"
    },
    image: "/imgs/meatupimgs/Meat-up/meatuplight/JPEG/Grilled-chicken-thighs-and-avocado-salad.jpg",
    items: [
      {
        id: "citrus-garden-salad",
        name: { he: "סלט גן הדרים", en: "Citrus Garden Salad" },
        description: { he: "חסה ועלי בייבי עם פרוסות פינק ליידי, צנוניות ובצל סגול, ברוטב ויניגרט הדרים, בתוספת שקדים ופקאנים מסוכרים", en: "Lettuce and baby leaves with Pink Lady apple slices, radishes and red onion, in citrus vinaigrette, topped with candied almonds and pecans" },
        price: 52
      },
      {
        id: "soy-caramel-salad",
        name: { he: "סלט רצועות עוף סויה וקרמל", en: "Soy & Caramel Chicken Strip Salad" },
        description: { he: "ויניגרט עשבי תיבול, חסה לאליק, מיקס פלפלים קלויים, שעועית ירוקה צלויה, שרי, בצל סגול, וקוביות אבוקדו טרי", en: "Herb vinaigrette, lollo rosso lettuce, roasted pepper mix, grilled green beans, cherry tomatoes, red onion and fresh avocado cubes" },
        price: 64
      },
      {
        id: "kebab-salad",
        name: { he: "סלט קבב אנטריקוט וירקות שדה", en: "Entrecote Kebab Salad with Field Vegetables" },
        description: { he: "פטרוזיליה, נענע, בצל סגול, עגבניות מגי, מלפפון בייבי, לימון וטחינה", en: "Parsley, mint, red onion, maggi tomatoes, baby cucumber, lemon and tahini" },
        price: 66
      },
      {
        id: "lettuce-salad",
        name: { he: "סלט פרגית צלויה וחסות", en: "Grilled Chicken Thigh & Lettuce Salad" },
        description: { he: "רוטב ראנץ', בצל סגול צלוי, שרי, אבוקדו, צנונית, פרורי לחם קריספיים עם שברי בצל", en: "Ranch dressing, roasted red onion, cherry tomatoes, avocado, radish, crispy breadcrumbs with onion bits" },
        price: 68
      },
      {
        id: "extra-protein",
        name: { he: "תוספת מנת עוף / פרגית / קבב", en: "Extra Chicken / Thigh / Kebab Portion" },
        price: 26
      }
    ]
  },
  {
    id: "mains",
    name: {
      he: "Meat your Main",
      en: "Meat your Main"
    },
    image: "/imgs/meatupimgs/Meat-up/meatuplight/JPEG/Ribeye-steak-antricot.jpg",
    items: [
      {
        id: "beef-soup",
        name: { he: "מרק בשר בבישול ארוך", en: "Slow-Cooked Beef Soup" },
        description: { he: "בשר ראש ואונטריב בבישול ארוך עם עצמות מח, ציר בקר וירקות, מוגש לצד טוסטונים", en: "Slow-cooked head meat and entrecote with marrow bones, beef stock and vegetables, served with tostones" },
        price: 52
      },
      {
        id: "chicken-breast",
        name: { he: "חזה עוף בפלאנצ'ה", en: "Grilled Chicken Breast" },
        description: { he: "בסלסת פטרוזיליה, שום ולימון, עם תוספת לבחירה", en: "In parsley, garlic and lemon salsa, with choice of side" },
        price: 62
      },
      {
        id: "chicken-thigh-marinade",
        name: { he: "פרגית במרינדה", en: "Marinated Chicken Thigh" },
        description: { he: "שיפודי פרגית במרינדה פיקנטית, נצרבים על הגריל ומוגשים לצד הומפרייז קריספי", en: "Chicken thigh skewers in spicy marinade, seared on the grill, served with crispy home fries" },
        price: 66
      },
      {
        id: "entrecote-kebab",
        name: { he: "קבב אנטריקוט", en: "Entrecote Kebab" },
        description: { he: "שיפודי קבב עסיסיים עשויים מנתחי בקר מובחר עם בצל ופטרוזיליה קצוצים ותוספת לבחירה", en: "Juicy kebab skewers made from premium beef cuts with chopped onion and parsley, with choice of side" },
        price: 72
      },
      {
        id: "ribeye-select",
        name: { he: "Ribeye Select", en: "Ribeye Select" },
        description: { he: "אנטריקוט בלאק אנגוס מיושן 300 גר', לצד מח עצם ותוספת לבחירה - פירה קרמי, שעועית ירוקה, צ'יפס או סלט ירוק", en: "Aged Black Angus ribeye 300g, with bone marrow and choice of side - creamy mash, green beans, fries or green salad" },
        price: 178
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
      he: "Meat your Alcohol",
      en: "Meat your Alcohol"
    },
    image: "/imgs/meatupimgs/wine.webp",
    items: [
      // בירות בחבית
      { id: "subheader-draft", name: { he: "בירות מהחבית", en: "Draft Beers" }, price: 0, isSubheader: true },
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
      { id: "nesher-malt", name: { he: "נשר מאלט", en: "Nesher Malt" }, price: 14 },
      { id: "tuborg-bottle", name: { he: "טובורג", en: "Tuborg" }, price: 26 },
      { id: "carlsberg-bottle", name: { he: "קרלסברג", en: "Carlsberg" }, price: 28 },
      { id: "goldstar", name: { he: "גולדסטאר", en: "Goldstar" }, price: 28 },
      { id: "french-wheat-beer", name: { he: "בירה חיטת צרפתית", en: "French Wheat Beer" }, price: 28 },
      // יינות - בקבוקים
      { id: "subheader-wine", name: { he: "יינות - בקבוקים", en: "Wines - Bottles" }, price: 0, isSubheader: true },
      {
        id: "morelli-white",
        name: { he: "מורלי, לבן", en: "Morelli, White" },
        description: { he: "שרדונה", en: "Chardonnay" },
        price: 96
      },
      {
        id: "morelli-red",
        name: { he: "מורלי, בלנד אדום", en: "Morelli, Red Blend" },
        price: 96
      },
      {
        id: "barkan-seven-hills",
        name: { he: "ברקן, סבן אילס - אדום", en: "Barkan Seven Hills, Red" },
        price: 120
      },
      {
        id: "ramat-hagolan",
        name: { he: "רמת הגולן, בלנד אדום", en: "Ramat HaGolan, Red Blend" },
        price: 145
      },
      {
        id: "ramat-hagolan-yarden",
        name: { he: "רמת הגולן, ירדן, ק.ס.", en: "Ramat HaGolan, Yarden, C.S." },
        price: 189
      },
      // יינות - כוסות
      { id: "subheader-wine-glass", name: { he: "יינות - כוסות", en: "Wines - By the Glass" }, price: 0, isSubheader: true },
      {
        id: "carmi-shai",
        name: { he: "כרמי שי, פריים ק.ס.", en: "Carmi Shai, Prime C.S." },
        price: 22
      },
      {
        id: "kumbia-white",
        name: { he: "קומביה, שרדונה, לבן", en: "Kumbia, Chardonnay, White" },
        price: 22
      },
      // אניס
      { id: "subheader-anis", name: { he: "אניס", en: "Anise" }, price: 0, isSubheader: true },
      { id: "arak-ayalot", name: { he: "ערק איילות", en: "Arak Ayalot" }, price: 26 },
      { id: "ouzo-12", name: { he: "אוזו 12", en: "Ouzo 12" }, price: 28 },
      // וודקה
      { id: "subheader-vodka", name: { he: "וודקה", en: "Vodka" }, price: 0, isSubheader: true },
      { id: "smirnoff", name: { he: "סמירנוף", en: "Smirnoff" }, price: 28 },
      { id: "grey-goose", name: { he: "גרייגוס", en: "Grey Goose" }, price: 42 },
      // ג'ין
      { id: "subheader-gin", name: { he: "ג'ין", en: "Gin" }, price: 0, isSubheader: true },
      { id: "gordons", name: { he: "גורדונס", en: "Gordon's" }, price: 36 },
      { id: "tanqueray", name: { he: "טנקרי", en: "Tanqueray" }, price: 36 },
      // וויסקי
      { id: "subheader-whisky", name: { he: "וויסקי", en: "Whisky" }, price: 0, isSubheader: true },
      { id: "jack-daniels", name: { he: "ג'ק דניאלס", en: "Jack Daniel's" }, price: 38 },
      { id: "glenlivet", name: { he: "גלנליווט", en: "Glenlivet" }, price: 42 },
      { id: "johnny-walker-gold", name: { he: "ג'וני ווקר גולד", en: "Johnnie Walker Gold" }, price: 55 },
      { id: "macallan-12", name: { he: "מקאלן 12", en: "Macallan 12" }, price: 76 },
      // טקילה
      { id: "subheader-tequila", name: { he: "טקילה", en: "Tequila" }, price: 0, isSubheader: true },
      { id: "cuervo", name: { he: "קווארבו", en: "José Cuervo" }, price: 34 },
      { id: "don-julio-reposado", name: { he: "דון חוליו רפוסדו", en: "Don Julio Reposado" }, price: 42 },
      { id: "patron", name: { he: "פטרון", en: "Patrón" }, price: 55 }
    ]
  },
  // Row 4: ילדים | שתיה קלה
  {
    id: "kids",
    name: {
      he: "Meat Kids",
      en: "Meat Kids"
    },
    image: "/imgs/meatupimgs/Meat-up/meatuplight/JPEG/Junior-burger.jpg",
    note: {
      he: "מוגש לצד תוספת לבחירה - צ'יפס, פוטטוס או סלט ירוק ופריגת ענבים",
      en: "Served with choice of side - fries, potatoes or green salad, and grape juice"
    },
    items: [
      { id: "kids-burger", name: { he: "בורגר 150 גר'", en: "Burger 150g" }, price: 58 },
      { id: "kids-schnitzel", name: { he: "שניצלונים", en: "Schnitzel Bites" }, price: 58 },
      { id: "kids-chicken-breast", name: { he: "חזה עוף", en: "Chicken Breast" }, price: 58 },
      { id: "kids-chicken-thigh", name: { he: "פרגית צלויה", en: "Grilled Chicken Thigh" }, price: 58 }
    ]
  },
  {
    id: "soft-drinks",
    name: {
      he: "Meat your Drinks",
      en: "Meat your Drinks"
    },
    image: "/imgs/meatupimgs/bevreges.webp",
    items: [
      { id: "mineral-water", name: { he: "מים מינרליים", en: "Mineral Water" }, price: 12 },
      { id: "soda", name: { he: "סודה", en: "Soda" }, price: 12 },
      { id: "coca-cola", name: { he: "קולה / קולה זירו / ספרייט / ספרייט זירו", en: "Cola / Cola Zero / Sprite / Sprite Zero" }, price: 14 },
      { id: "prigat", name: { he: "פריגת ענבים / תפוזים / אשכוליות / לימונענע", en: "Prigat Grapes / Orange / Grapefruit / Lemonade" }, price: 14 },
      { id: "fuze-tea", name: { he: "פיוזטי אפרסק", en: "Fuze Tea Peach" }, price: 14 },
      { id: "neviot", name: { he: "נביעות בטעמים אפרסק / תפוח / ענבים", en: "Neviot Peach / Apple / Grapes" }, price: 14 }
    ]
  }
];

// Allergen notice
export const allergenNotice = {
  he: "המנות המוצעות עשויות להכיל אלרגני מסוגים שונים. ניתן להזמין את מנות ההמבורגר והצ'יקן עם לחמניה ללא גלוטן, המנות כולן עלולות להכיל עקבות של גלוטן או אלרגנים שונים.",
  en: "The dishes offered may contain various allergens. Burger and chicken dishes can be ordered with gluten-free buns. All dishes may contain traces of gluten or various allergens."
};
