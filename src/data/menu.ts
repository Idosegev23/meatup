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
      {
        id: "bagel",
        name: { he: "בייגל ירושלמי", en: "Jerusalem Bagel" },
        price: 38
      },
      {
        id: "eggplant-steak",
        name: { he: "חציל STEAK", en: "Eggplant Steak" },
        price: 42
      },
      {
        id: "beef-cigar",
        name: { he: "סיגר בקר", en: "Beef Cigar" },
        price: 46
      },
      {
        id: "crispy-nuggets",
        name: { he: "קריספי נאגטס", en: "Crispy Nuggets" },
        price: 38
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
        id: "roasted-chicken-leg",
        name: { he: "כרע עוף צלוי", en: "Roasted Chicken Leg" },
        price: 66
      },
      {
        id: "chicken-breast",
        name: { he: "חזה עוף בפלנצ'ה", en: "Grilled Chicken Breast" },
        price: 62
      },
      {
        id: "lettuce-salad",
        name: { he: "סלט חסות ופרגית צלויה", en: "Lettuce Salad with Grilled Chicken" },
        price: 66
      },
      {
        id: "kebab-salad",
        name: { he: "סלט קבב אנטריקוט וירקות שדה", en: "Entrecote Kebab Salad with Field Vegetables" },
        price: 66
      },
      {
        id: "beef-soup",
        name: { he: "מרק בשר בבישול ארוך", en: "Slow-Cooked Beef Soup" },
        price: 52
      },
      {
        id: "ribeye-select",
        name: { he: "Ribeye Select (אנטריקוט 300 גר')", en: "Ribeye Select (Entrecote 300g)" },
        price: 168
      }
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
      {
        id: "meatup-burger",
        name: { he: "מיטאפ בורגר", en: "Meatup Burger" },
        price: 64
      },
      {
        id: "midtown-burger",
        name: { he: "מידטאון בורגר", en: "Midtown Burger" },
        price: 66
      },
      {
        id: "topup-300",
        name: { he: "טופאפ 300", en: "TopUp 300" },
        price: 82
      },
      {
        id: "smash-and-eggs",
        name: { he: "סמאש אנד אגס", en: "Smash and Eggs" },
        price: 66
      },
      {
        id: "chicken-ranch",
        name: { he: "צ'יקן ראנצ'", en: "Chicken Ranch" },
        price: 62
      }
    ]
  },
  {
    id: "sides",
    name: {
      he: "תוספות",
      en: "Sides"
    },
    image: "/imgs/meatupimgs/firsts.webp",
    items: [
      {
        id: "ranch-salad",
        name: { he: "סלט חסות ראנץ", en: "Ranch Lettuce Salad" },
        price: 22
      },
      {
        id: "green-salad",
        name: { he: "סלט ירוק", en: "Green Salad" },
        price: 22
      },
      {
        id: "fries",
        name: { he: "צ'יפס", en: "Fries" },
        price: 20
      },
      {
        id: "potatoes",
        name: { he: "פוטטוס", en: "Potatoes" },
        price: 24
      },
      {
        id: "mashed",
        name: { he: "פירה", en: "Mashed Potatoes" },
        price: 24
      },
      {
        id: "green-beans",
        name: { he: "שעועית ירוקה", en: "Green Beans" },
        price: 24
      },
      {
        id: "caramelized-onion",
        name: { he: "בצל מקורמל", en: "Caramelized Onion" },
        price: 6
      },
      {
        id: "jalapeno",
        name: { he: "חלפניו על הפלנצ'ה", en: "Grilled Jalapeño" },
        price: 6
      },
      {
        id: "smash-patty-100",
        name: { he: "קציצת סמאש 100 גרם", en: "Smash Patty 100g" },
        price: 22
      },
      {
        id: "patty-230",
        name: { he: "קציצה 230 גרם", en: "Patty 230g" },
        price: 30
      },
      {
        id: "fried-egg",
        name: { he: "ביצת עין", en: "Fried Egg" },
        price: 10
      }
    ]
  },
  {
    id: "sauces",
    name: {
      he: "רטבים",
      en: "Sauces"
    },
    image: "/imgs/meatupimgs/firsts.webp",
    items: [
      {
        id: "aioli-coriander",
        name: { he: "איולי כוסברה", en: "Coriander Aioli" },
        price: 4
      },
      {
        id: "aioli-garlic",
        name: { he: "איולי שום", en: "Garlic Aioli" },
        price: 4
      },
      {
        id: "aioli-meatup",
        name: { he: "איולי מיט אפ", en: "Meatup Aioli" },
        price: 4
      },
      {
        id: "aioli-peppers",
        name: { he: "איולי פלפלים שרופים", en: "Roasted Pepper Aioli" },
        price: 4
      },
      {
        id: "aioli-ranch",
        name: { he: "איולי ראנץ", en: "Ranch Aioli" },
        price: 4
      }
    ]
  },
  {
    id: "kids",
    name: {
      he: "מנות ילדים",
      en: "Kids Menu"
    },
    image: "/imgs/meatupimgs/burgers.webp",
    items: [
      {
        id: "kids-burger",
        name: { he: "בורגר ילדים", en: "Kids Burger" },
        price: 58
      },
      {
        id: "kids-schnitzel",
        name: { he: "שניצלוני חזה עוף", en: "Chicken Breast Schnitzel" },
        price: 58
      },
      {
        id: "kids-chicken",
        name: { he: "פרגית ילדים", en: "Kids Chicken" },
        price: 58
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
        id: "fondant",
        name: { he: "פונדנט שוקולד חם", en: "Hot Chocolate Fondant" },
        price: 48
      },
      {
        id: "kinder-cookies",
        name: { he: "קוקיס קינדר", en: "Kinder Cookies" },
        price: 42
      },
      {
        id: "pistachio-tart",
        name: { he: "טארט פיסטוק לימון", en: "Pistachio Lemon Tart" },
        price: 42
      },
      {
        id: "panna-cotta",
        name: { he: "קרם פנקוטה", en: "Panna Cotta" },
        price: 46
      },
      {
        id: "strawberries",
        name: { he: "תותים", en: "Strawberries" },
        price: 44
      }
    ]
  }
];
