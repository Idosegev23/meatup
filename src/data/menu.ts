export interface MenuItem {
  id: string;
  name: {
    he: string;
    en: string;
  };
  description: {
    he: string;
    en: string;
  };
  price: number;
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
      he: "ראשונות",
      en: "Starters"
    },
    image: "/imgs/meatupimgs/firsts.webp",
    items: [
      {
        id: "carpaccio",
        name: { he: "קרפצ'יו פילה בקר", en: "Beef Fillet Carpaccio" },
        description: { 
          he: "פרוסות דקות של פילה בקר, שמן זית כתית, עלי רוקט וצנוברים קלויים", 
          en: "Thinly sliced beef fillet, extra virgin olive oil, arugula and toasted pine nuts" 
        },
        price: 78
      },
      {
        id: "tataki",
        name: { he: "טאטאקי בקר", en: "Beef Tataki" },
        description: { 
          he: "פרוסות בקר צרובות, רוטב פונזו, בצל ירוק ושומשום", 
          en: "Seared beef slices, ponzu sauce, scallions and sesame" 
        },
        price: 72
      },
      {
        id: "kebab-starters",
        name: { he: "קבב על האש", en: "Grilled Kebab" },
        description: { 
          he: "שיפודי קבב טלה מתובלים, טחינה גולמית ופיתה חמה", 
          en: "Spiced lamb kebab skewers, raw tahini and warm pita" 
        },
        price: 68
      },
      {
        id: "bone-marrow",
        name: { he: "מח עצם צלוי", en: "Roasted Bone Marrow" },
        description: { 
          he: "מח עצם בתנור, מלח גס, פטרוזיליה וטוסטים", 
          en: "Oven-roasted bone marrow, coarse salt, parsley and toasts" 
        },
        price: 64
      },
      {
        id: "hummus",
        name: { he: "חומוס הבית", en: "House Hummus" },
        description: { 
          he: "חומוס קרמי עם טחינה, שמן זית ופיתה טרייה", 
          en: "Creamy hummus with tahini, olive oil and fresh pita" 
        },
        price: 38
      }
    ]
  },
  {
    id: "steaks",
    name: {
      he: "הנתחים שלנו",
      en: "Our Cuts"
    },
    image: "/imgs/meatupimgs/meats.webp",
    items: [
      {
        id: "ribeye",
        name: { he: "ריביי 400 גרם", en: "Ribeye 400g" },
        description: { 
          he: "ריביי מיושן, שומן משויש מושלם, מוגש עם חמאת עשבים", 
          en: "Aged ribeye, perfect marbling, served with herb butter" 
        },
        price: 218
      },
      {
        id: "fillet",
        name: { he: "פילה מיניון 300 גרם", en: "Fillet Mignon 300g" },
        description: { 
          he: "הנתח הרך ביותר, צליית מדיום רר מומלצת", 
          en: "The most tender cut, medium rare recommended" 
        },
        price: 198
      },
      {
        id: "entrecote",
        name: { he: "אנטריקוט 350 גרם", en: "Entrecôte 350g" },
        description: { 
          he: "אנטריקוט מיושן 28 יום, עסיסי ומלא טעם", 
          en: "28-day aged entrecôte, juicy and full of flavor" 
        },
        price: 178
      },
      {
        id: "tomahawk",
        name: { he: "טומהוק 800 גרם", en: "Tomahawk 800g" },
        description: { 
          he: "סטייק מרשים על העצם, מושלם לשיתוף", 
          en: "Impressive bone-in steak, perfect for sharing" 
        },
        price: 398
      },
      {
        id: "picanha",
        name: { he: "פיקניה 350 גרם", en: "Picanha 350g" },
        description: { 
          he: "נתח ברזילאי קלאסי עם שכבת שומן מושלמת", 
          en: "Classic Brazilian cut with perfect fat cap" 
        },
        price: 158
      },
      {
        id: "asado",
        name: { he: "אסאדו בשלוש שעות", en: "3-Hour Braised Short Ribs" },
        description: { 
          he: "צלעות בקר בישול ארוך, פירה חלק ורוטב יין אדום", 
          en: "Slow-braised beef short ribs, smooth mash and red wine reduction" 
        },
        price: 148
      },
      {
        id: "lamb-chops",
        name: { he: "צלעות טלה", en: "Lamb Chops" },
        description: { 
          he: "צלעות טלה על הגריל, שום קונפי וירקות צלויים", 
          en: "Grilled lamb chops, garlic confit and roasted vegetables" 
        },
        price: 168
      }
    ]
  },
  {
    id: "burgers",
    name: {
      he: "ההמבורגרים שלנו",
      en: "Our Burgers"
    },
    image: "/imgs/meatupimgs/burgers.webp",
    items: [
      {
        id: "classic-burger",
        name: { he: "המבורגר קלאסי", en: "Classic Burger" },
        description: { 
          he: "200 גרם בקר טרי, בצל מקורמל, חסה ועגבנייה בלחמנייה ביתית", 
          en: "200g fresh beef, caramelized onion, lettuce and tomato in house bun" 
        },
        price: 78
      },
      {
        id: "cheese-burger",
        name: { he: "צ'יזבורגר", en: "Cheeseburger" },
        description: { 
          he: "200 גרם בקר טרי, גבינת קשיו טבעונית מותכת, מלפפון חמוץ וחרדל דיז'ון", 
          en: "200g fresh beef, melted vegan cashew cheese, pickles and Dijon mustard" 
        },
        price: 84
      },
      {
        id: "bbq-burger",
        name: { he: "המבורגר BBQ", en: "BBQ Burger" },
        description: { 
          he: "200 גרם בקר, רוטב ברביקיו, בצל פריך וגבינת קשיו מעושנת", 
          en: "200g beef, BBQ sauce, crispy onions and smoked vegan cashew cheese" 
        },
        price: 86
      },
      {
        id: "double-burger",
        name: { he: "דאבל המבורגר", en: "Double Burger" },
        description: { 
          he: "400 גרם בקר כפול, גבינת קשיו כפולה, כל התוספות", 
          en: "400g double beef, double vegan cashew cheese, all the toppings" 
        },
        price: 108
      },
      {
        id: "shawarma-burger",
        name: { he: "המבורגר שווארמה", en: "Shawarma Burger" },
        description: { 
          he: "200 גרם בקר עם תיבול שווארמה, טחינה ומלפפונים כבושים", 
          en: "200g beef with shawarma spices, tahini and pickled cucumbers" 
        },
        price: 82
      }
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
      {
        id: "chocolate",
        name: { he: "פונדנט שוקולד", en: "Chocolate Fondant" },
        description: { 
          he: "עוגת שוקולד חמה עם לב נוזלי, מוגש עם גלידת וניל פרווה", 
          en: "Warm chocolate cake with molten center, served with parve vanilla ice cream" 
        },
        price: 52
      },
      {
        id: "malabi",
        name: { he: "מלבי", en: "Malabi" },
        description: { 
          he: "קינוח חלב פרווה עם סירופ ורדים ואגוזים קצוצים", 
          en: "Parve milk pudding with rose syrup and crushed nuts" 
        },
        price: 38
      },
      {
        id: "sorbet",
        name: { he: "סורבה פירות", en: "Fruit Sorbet" },
        description: { 
          he: "סורבה טרייה מפירות העונה, שלוש כדורים", 
          en: "Fresh seasonal fruit sorbet, three scoops" 
        },
        price: 42
      },
      {
        id: "baklava",
        name: { he: "בקלאווה", en: "Baklava" },
        description: { 
          he: "בקלאווה ביתית עם אגוזים ודבש", 
          en: "Homemade baklava with nuts and honey" 
        },
        price: 44
      }
    ]
  },
  {
    id: "soft-drinks",
    name: {
      he: "שתייה קלה",
      en: "Soft Drinks"
    },
    image: "/imgs/meatupimgs/bevreges.webp",
    items: [
      {
        id: "cola",
        name: { he: "קולה / קולה זירו", en: "Cola / Cola Zero" },
        description: { 
          he: "330 מ\"ל", 
          en: "330ml" 
        },
        price: 14
      },
      {
        id: "sprite",
        name: { he: "ספרייט", en: "Sprite" },
        description: { 
          he: "330 מ\"ל", 
          en: "330ml" 
        },
        price: 14
      },
      {
        id: "fanta",
        name: { he: "פאנטה", en: "Fanta" },
        description: { 
          he: "330 מ\"ל", 
          en: "330ml" 
        },
        price: 14
      },
      {
        id: "water",
        name: { he: "מים מינרליים", en: "Mineral Water" },
        description: { 
          he: "500 מ\"ל", 
          en: "500ml" 
        },
        price: 12
      },
      {
        id: "sparkling",
        name: { he: "מים מוגזים", en: "Sparkling Water" },
        description: { 
          he: "330 מ\"ל", 
          en: "330ml" 
        },
        price: 14
      },
      {
        id: "juice",
        name: { he: "מיץ טבעי", en: "Fresh Juice" },
        description: { 
          he: "תפוזים / גזר / לימונדה", 
          en: "Orange / Carrot / Lemonade" 
        },
        price: 22
      },
      {
        id: "coffee",
        name: { he: "קפה", en: "Coffee" },
        description: { 
          he: "אספרסו, אמריקנו, קפה שחור", 
          en: "Espresso, Americano, Black Coffee" 
        },
        price: 14
      }
    ]
  },
  {
    id: "wine-beer",
    name: {
      he: "יין ובירות",
      en: "Wine & Beer"
    },
    image: "/imgs/meatupimgs/wine.webp",
    items: [
      {
        id: "wine-red-glass",
        name: { he: "יין אדום - כוס", en: "Red Wine - Glass" },
        description: { 
          he: "יין אדום מובחר מהיקב הגולן", 
          en: "Selected red wine from Golan Heights Winery" 
        },
        price: 48
      },
      {
        id: "wine-white-glass",
        name: { he: "יין לבן - כוס", en: "White Wine - Glass" },
        description: { 
          he: "יין לבן קריר ומרענן", 
          en: "Chilled refreshing white wine" 
        },
        price: 44
      },
      {
        id: "wine-red-bottle",
        name: { he: "יין אדום - בקבוק", en: "Red Wine - Bottle" },
        description: { 
          he: "מבחר בקבוקי יין אדום מהארץ ומהעולם", 
          en: "Selection of red wine bottles from Israel and worldwide" 
        },
        price: 180
      },
      {
        id: "wine-white-bottle",
        name: { he: "יין לבן - בקבוק", en: "White Wine - Bottle" },
        description: { 
          he: "מבחר בקבוקי יין לבן מהארץ ומהעולם", 
          en: "Selection of white wine bottles from Israel and worldwide" 
        },
        price: 160
      },
      {
        id: "beer-draft",
        name: { he: "בירה מהחבית", en: "Draft Beer" },
        description: { 
          he: "בירה טרייה מהחבית, 500 מ\"ל", 
          en: "Fresh draft beer, 500ml" 
        },
        price: 32
      },
      {
        id: "beer-bottle",
        name: { he: "בירה בבקבוק", en: "Bottle Beer" },
        description: { 
          he: "מבחר בירות מקומיות ומיובאות", 
          en: "Selection of local and imported beers" 
        },
        price: 28
      },
      {
        id: "beer-craft",
        name: { he: "בירה בוטיק", en: "Craft Beer" },
        description: { 
          he: "בירות בוטיק ישראליות", 
          en: "Israeli craft beers" 
        },
        price: 36
      }
    ]
  }
];
