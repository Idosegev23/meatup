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
  image?: string; // Optional dish image, shown when user clicks the item
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

const dishImg = "/imgs/meatupimgs/Meat-up/meatuplight/JPEG";

export const menuData: MenuCategory[] = [
  // Row 1: Meatup Social | Meat your Burger
  {
    id: "starters",
    name: {
      he: "Meatup Social",
      en: "Meatup Social"
    },
    image: `${dishImg}/Jerusalem-bagel.jpg`,
    items: [
      {
        id: "frena-bread",
        name: { he: "לחם פרנה", en: "Frena Bread" },
        description: { he: "מתבלים, טחינה, שום קונפי וזיתים", en: "Spices, tahini, confit garlic and olives" },
        price: 28
      },
      {
        id: "merguez-sausages",
        name: { he: "נקניקיות מרגז", en: "Merguez Sausages" },
        description: { he: "עשויות ביצור ביתי מנתחי בקר מובחרים", en: "Homemade from premium beef cuts" },
        price: 38
      },
      {
        id: "trio-sausages",
        name: { he: "טריו נקניקיות הבית", en: "House Sausage Trio" },
        description: { he: "שלישיית נקניקיות - צ'וריסוס פיקנטי, בקר מעושן ובקר-עוף מעושן - צרובות על הפלאנצ'ה, לצד כרוב ובצל חום צלויים", en: "Three sausages - spicy chorizo, smoked beef and smoked beef-chicken - seared on the plancha, with roasted cabbage and brown onion" },
        price: 38
      },
      {
        id: "eggplant-steak",
        name: { he: "חציל Steak", en: "Eggplant Steak" },
        description: { he: "טחינה הר ברכה, צנונית, סלסה עגבניות חריפות וצנוברים", en: "Har Bracha tahini, radish, spicy tomato salsa and pine nuts" },
        price: 42,
        image: `${dishImg}/Eggplant-steak.jpg`
      },
      {
        id: "meatup-wings",
        name: { he: "מיטאפ ווינגס", en: "Meatup Wings" },
        description: { he: "כנפיים חצויות (8 יח') מטוגנות בזיגוג מייפל, שמן צ'ילי ושומשום, בצל ירוק", en: "Split wings (8 pcs) fried with maple glaze, chili oil, sesame and green onion" },
        price: 42,
        image: `${dishImg}/Crispy-wings.jpg`
      },
      {
        id: "crispy-nuggets",
        name: { he: "קריספי נאגטס", en: "Crispy Nuggets" },
        description: { he: "נגיסי עוף בציפוי פריך לצד איולי פלפלים שרופים", en: "Crispy chicken nuggets with roasted pepper aioli" },
        price: 42,
        image: `${dishImg}/Chicken-breast-nuggets.jpg`
      },
      {
        id: "beef-cigar",
        name: { he: "סיגר בקר", en: "Beef Cigar" },
        description: { he: "בקר טחון מתובל, חסה לאליק, פטרוזיליה, נענע, לימון, צנוברים, טחינה וסלסה חריפה", en: "Seasoned ground beef, lollo rosso lettuce, parsley, mint, lemon, pine nuts, tahini and spicy salsa" },
        price: 46,
        image: `${dishImg}/Beef-and-lamb-cigars.jpg`
      }
    ]
  },
  {
    id: "burgers",
    name: {
      he: "Meat your Burger",
      en: "Meat your Burger"
    },
    image: `${dishImg}/Meat-up-burger.jpg`,
    note: {
      he: "ניתן להזמין לחמניה ללא גלוטן, בתוספת תשלום 4 ₪",
      en: "Gluten-free bun available for an additional 4 ₪"
    },
    items: [
      {
        id: "chicken-ranch",
        name: { he: "צ'יקן ראנצ'", en: "Chicken Ranch" },
        description: { he: "חזה עוף בציפוי פריך - איולי ראנץ', חסות, בצל סגול וקרמבל בצל", en: "Crispy coated chicken breast - ranch aioli, lettuce, red onion and onion crumble" },
        price: 62,
        image: `${dishImg}/Crispy-chicken-burger.jpg`
      },
      {
        id: "meatup-burger",
        name: { he: "מיטאפ בורגר", en: "Meatup Burger" },
        description: { he: "עשויה מנתחי בקר מובחר 230 גר' - איולי מיט אפ, חסה לאליק, עגבניה, בצל סגול ומלפפון כבוש", en: "Made from premium beef cuts 230g - Meatup aioli, lollo rosso lettuce, tomato, red onion and pickle" },
        price: 64,
        image: `${dishImg}/Meat-up-burger.jpg`
      },
      {
        id: "midtown-burger",
        name: { he: "מידטאון בורגר", en: "Midtown Burger" },
        description: { he: "עשויה מנתחי בקר מובחר 230 גר' ומתובלת בפטרוזיליה ובצל - מיונז, צ'ימצ'ורי ובצל מקורמל", en: "Made from premium beef cuts 230g seasoned with parsley and onion - mayo, chimichurri and caramelized onion" },
        price: 66,
        image: `${dishImg}/Midtown-burger.jpg`
      },
      {
        id: "smash-and-eggs",
        name: { he: "סמאש אנד אגס", en: "Smash and Eggs" },
        description: { he: "סמאש בורגר 200 גר' - סלט ביצים עם בצל ירוק, חסה לאליק ומלפפון כבוש", en: "Smash burger 200g - egg salad with green onion, lollo rosso lettuce and pickle" },
        price: 66,
        image: `${dishImg}/Double-smash-burger.jpg`
      },
      {
        id: "topap-300",
        name: { he: "טופאפ 300", en: "Topap 300" },
        description: { he: "עשויה מנתחי בקר מובחר 300 גר' - איולי פלפלים שרופים, חסה לאליק ובצל פריך", en: "Made from premium beef cuts 300g - roasted pepper aioli, lollo rosso lettuce and crispy onion" },
        price: 82,
        image: `${dishImg}/Topup300-burger.jpg`
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
      { id: "portobello", name: { he: "פטריית פורטובלו", en: "Portobello Mushroom" }, price: 12 },
      { id: "entrecote-strip", name: { he: "סטריפ אנטריקוט", en: "Entrecote Strip" }, price: 15 },
      { id: "smash-patty-100", name: { he: "קציצת סמאש 100 גר'", en: "Smash Patty 100g" }, price: 22 },
      { id: "burger-patty-230", name: { he: "קציצת בורגר 230 גר'", en: "Burger Patty 230g" }, price: 30 },
      // תוספות בצד
      { id: "subheader-sides", name: { he: "Meat your Sides", en: "Meat your Sides" }, price: 0, isSubheader: true },
      { id: "white-rice", name: { he: "אורז לבן", en: "White Rice" }, price: 17 },
      {
        id: "fries",
        name: { he: "צ'יפס קטן / גדול", en: "Fries Small / Large" },
        description: { he: "22 / 44 ₪", en: "22 / 44 ₪" },
        price: 22,
        priceAlt: 44,
        image: `${dishImg}/French-fries.jpg`
      },
      { id: "ranch-salad", name: { he: "סלט חסות ראנץ'", en: "Ranch Lettuce Salad" }, price: 22, image: `${dishImg}/Ranch-lettuce-salad.jpg` },
      { id: "green-salad", name: { he: "סלט ירוק", en: "Green Salad" }, price: 22, image: `${dishImg}/Green-market-salad.jpg` },
      { id: "potatoes", name: { he: "פוטטוס", en: "Potatoes" }, price: 24, image: `${dishImg}/Potatos.jpg` },
      { id: "green-beans", name: { he: "שעועית ירוקה", en: "Green Beans" }, price: 24, image: `${dishImg}/Green-beans.jpg` },
      { id: "onion-rings", name: { he: "טבעות בצל", en: "Onion Rings" }, price: 26 },
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
    image: `${dishImg}/Grilled-chicken-thighs-and-avocado-salad.jpg`,
    items: [
      {
        id: "citrus-garden-salad",
        name: { he: "סלט גן הדרים", en: "Citrus Garden Salad" },
        description: { he: "חסה ועלי בייבי עם פרוסות פינק ליידי, צנוניות ובצל סגול, ברוטב ויניגרט הדרים, בתוספת שקדים ופקאנים מסוכרים", en: "Lettuce and baby leaves with Pink Lady apple slices, radishes and red onion, in citrus vinaigrette, topped with candied almonds and pecans" },
        price: 52,
        image: `${dishImg}/Green-market-salad.jpg`
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
        price: 66,
        image: `${dishImg}/Ribeye-kebab-salad.jpg`
      },
      {
        id: "lettuce-salad",
        name: { he: "סלט פרגית צלויה וחסות", en: "Grilled Chicken Thigh & Lettuce Salad" },
        description: { he: "רוטב ראנץ', בצל סגול צלוי, שרי, אבוקדו, צנונית, פרורי לחם קריספיים עם שברי בצל", en: "Ranch dressing, roasted red onion, cherry tomatoes, avocado, radish, crispy breadcrumbs with onion bits" },
        price: 68,
        image: `${dishImg}/Grilled-chicken-thighs-and-avocado-salad.jpg`
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
    image: `${dishImg}/Ribeye-steak-antricot.jpg`,
    items: [
      {
        id: "araisi-shuk",
        name: { he: "עראייס שוק", en: "Araisi Shuk" },
        description: { he: "שלישיית חצאי פיתות ממולאות בבקר מתובל, פטרוזיליה ובצל, מוגשות לצד טחינה לימונית, סלסת עגבניות וצ'יפס", en: "Three half-pitas filled with seasoned beef, parsley and onion, served with lemon tahini, tomato salsa and fries" },
        price: 58
      },
      {
        id: "chicken-breast",
        name: { he: "חזה עוף בפלאנצ'ה", en: "Grilled Chicken Breast" },
        description: { he: "בסלסת פטרוזיליה, שום ולימון, עם תוספת לבחירה", en: "In parsley, garlic and lemon salsa, with choice of side" },
        price: 62,
        image: `${dishImg}/Plancha-chicken-breast.jpg`
      },
      {
        id: "entrecote-kebab",
        name: { he: "קבב אנטריקוט", en: "Entrecote Kebab" },
        description: { he: "שיפודי קבב עסיסיים (320 גר') עשויים מנתחי בקר מובחרים עם בצל ופטרוזיליה קצוצים, מוגשים לצד תפו\"א קריספי, שום קונפי נימוח ועגבניות שרי צלויות", en: "Juicy kebab skewers (320g) made from premium beef cuts with chopped onion and parsley, served with crispy potatoes, soft confit garlic and roasted cherry tomatoes" },
        price: 72
      },
      {
        id: "chicken-thigh-marinade",
        name: { he: "פרגית במרינדה", en: "Marinated Chicken Thigh" },
        description: { he: "שיפודי פרגית במרינדה פיקנטית, נצרבים על הגריל ומוגשים לצד הומפרייז קריספי", en: "Chicken thigh skewers in spicy marinade, seared on the grill, served with crispy home fries" },
        price: 74,
        image: `${dishImg}/Roasted-chicken-leg.jpg`
      },
      {
        id: "ribeye-select",
        name: { he: "Ribeye Select", en: "Ribeye Select" },
        description: { he: "אנטריקוט בלאק אנגוס מיושן 330 גר', לצד מח עצם ותוספת לבחירה - פירה קרמי, שעועית ירוקה, צ'יפס או סלט ירוק", en: "Aged Black Angus ribeye 330g, with bone marrow and choice of side - creamy mash, green beans, fries or green salad" },
        price: 178,
        image: `${dishImg}/Ribeye-steak-antricot.jpg`
      }
    ]
  },
  // Row 3: קינוחים | אלכוהול
  {
    id: "desserts",
    name: {
      he: "Meat your Sweets",
      en: "Meat your Sweets"
    },
    image: `${dishImg}/Warm-chocolate-fondant.jpg`,
    items: [
      {
        id: "kinder-cookies",
        name: { he: "קוקיס קינדר", en: "Kinder Cookies" },
        description: { he: "משולש שכבות בצק עוגיות קוקיס שוקו צ'יפס שביניהם גנאש קינדר עשיר, מוגש עם גלידת פררו רושה", en: "Triple layer of chocolate chip cookie dough with rich Kinder ganache, served with Ferrero Rocher ice cream" },
        price: 42,
        image: `${dishImg}/Cookies-kinder-cake.jpg`
      },
      {
        id: "pistachio-tart",
        name: { he: "טארט פיסטוק לימון", en: "Pistachio Lemon Tart" },
        description: { he: "קריספי פייטה פיסטוק ושוקולד לבן, קרמו לימון, קרם שנטילי וניל", en: "Crispy pistachio feuillantine and white chocolate, lemon cremeux, vanilla chantilly cream" },
        price: 42,
        image: `${dishImg}/Pistachio-lemon-tart.jpg`
      },
      {
        id: "sorbet-fruits",
        name: { he: "גלידת סורבה ופירות העונה", en: "Sorbet & Seasonal Fruits" },
        description: { he: "תות / מנגו / פסיפלורה - שני כדורים לבחירה", en: "Strawberry / Mango / Passion Fruit - two scoops of your choice" },
        price: 44
      },
      {
        id: "panna-cotta",
        name: { he: "קרם פנקוטה", en: "Panna Cotta" },
        description: { he: "רוטב פסיפלורה, טוויל פירות ורוטב פירות יער", en: "Passion fruit sauce, fruit tuile and berry sauce" },
        price: 46,
        image: `${dishImg}/Vanilla-panna-cotta-and-berries.jpg`
      },
      {
        id: "fondant",
        name: { he: "פונדנט שוקולד חם", en: "Hot Chocolate Fondant" },
        description: { he: "עוגת שוקולד חמה ונימוחה, העשויה ללא קמח ומוגשת עם גלידת קרם וניל", en: "Hot and melting chocolate cake, made without flour, served with vanilla cream ice cream" },
        price: 48,
        image: `${dishImg}/Warm-chocolate-fondant.jpg`
      }
    ]
  },
  {
    id: "wine",
    name: {
      he: "Meat your Wine",
      en: "Meat your Wine"
    },
    image: "/imgs/meatupimgs/wine.webp",
    note: {
      he: "ליינות נוספים המשתנים בתפריט, ניתן לפנות למלצר היין",
      en: "For additional rotating wines, please consult the wine server"
    },
    items: [
      // אדום
      { id: "subheader-red-wine", name: { he: "אדום", en: "Red" }, price: 0, isSubheader: true },
      {
        id: "house-red",
        name: { he: "יין הבית אדום (כוס)", en: "House Red (Glass)" },
        description: { he: "יין צעיר ורענן, גוף קליל ונעים, פירות יער אדומים ושחורים, דובדבן ונגיעה של פלפל שחור, סיומת חלקה", en: "Young and fresh wine, light and pleasant body, red and black berries, cherry and a touch of black pepper, smooth finish" },
        price: 26
      },
      {
        id: "darom-red-yatir",
        name: { he: "דרום אדום, יתיר", en: "Darom Red, Yatir" },
        description: { he: "בלנד אדום מאזור הנגב, גוף בינוני, פרי אדום רענן ואופי ים-תיכוני, חומציות מאוזנת וסיומת חלקה", en: "Red blend from the Negev region, medium body, fresh red fruit and Mediterranean character, balanced acidity and smooth finish" },
        price: 120
      },
      {
        id: "ramat-hagolan-red",
        name: { he: "בלנד אדום, רמת הגולן", en: "Red Blend, Ramat HaGolan" },
        description: { he: "בלנד מהאקלים הקריר של רמת הגולן, גוף בינוני-מלא, ארומות דובדבן ושזיף, נגיעות תבלין וסיומת מאוזנת", en: "Blend from the cool climate of Ramat HaGolan, medium-full body, cherry and plum aromas, hints of spice and balanced finish" },
        price: 146
      },
      {
        id: "har-amasa-red-yatir",
        name: { he: "הר עמשא אדום, יתיר", en: "Har Amasa Red, Yatir" },
        description: { he: "בלנד מדרום הרי יהודה, גוף מלא, פרי כהה בשל, תיבול עדין, מבנה מאוזן וסיומת ארוכה", en: "Blend from the southern Judean Hills, full body, ripe dark fruit, delicate spice, balanced structure and long finish" },
        price: 170
      },
      {
        id: "yaar-yatir",
        name: { he: "יער יתיר, יתיר", en: "Yaar Yatir, Yatir" },
        description: { he: "יין הדגל מדרום הרי יהודה, בלנד מורכב, עשיר ועוצמתי, גוף מלא, עומק של פרי שחור, תבלינים ועץ אלון, סיומת ארוכה ואלגנטית", en: "Flagship wine from the southern Judean Hills, complex blend, rich and powerful, full body, depth of black fruit, spices and oak, long and elegant finish" },
        price: 380
      },
      // לבן
      { id: "subheader-white-wine", name: { he: "לבן", en: "White" }, price: 0, isSubheader: true },
      {
        id: "house-white",
        name: { he: "יין הבית לבן (כוס)", en: "House White (Glass)" },
        description: { he: "יין קליל ורענן, ארומות של פירות בר, רמזי הדר, סיומת נקייה ונעימה", en: "Light and fresh wine, aromas of wild fruits, hints of citrus, clean and pleasant finish" },
        price: 26
      },
      {
        id: "darom-white-yatir",
        name: { he: "דרום לבן, יתיר", en: "Darom White, Yatir" },
        description: { he: "בלנד מאזור הנגב, גוף קל־בינוני, פרי הדר ופירות לבנים, רעננות נעימה וסיומת נקייה", en: "Blend from the Negev region, light-medium body, citrus and white fruits, pleasant freshness and clean finish" },
        price: 120
      },
      {
        id: "talpiot-white-la-pourah",
        name: { he: "תלפיות לבן, לה פורה בלאנש", en: "Talpiot White, La Poire Blanche" },
        description: { he: "בלנד בסגנון עמק הלואר מכרם שדה כלב שבדרום הר חברון, גוף בינוני, הדרים ופירות טרופיים, מינרליות עדינה, חומציות רעננה וסיומת יבשה ומאוזנת", en: "Loire Valley-style blend from the Sde Kalev vineyard in the southern Hebron Hills, medium body, citrus and tropical fruits, delicate minerality, fresh acidity and dry balanced finish" },
        price: 120
      },
      {
        id: "har-amasa-white-yatir",
        name: { he: "הר עמשא לבן, יתיר", en: "Har Amasa White, Yatir" },
        description: { he: "בלנד מדרום הרי יהודה, גוף בינוני, ארומות אפרסק ופירות לבנים, חומציות מאוזנת וסיומת אלגנטית", en: "Blend from the southern Judean Hills, medium body, peach and white fruit aromas, balanced acidity and elegant finish" },
        price: 170
      },
      // רוזה
      { id: "subheader-rose-wine", name: { he: "רוזה", en: "Rosé" }, price: 0, isSubheader: true },
      {
        id: "har-amasa-rose-yatir",
        name: { he: "הר עמשא רוזה, יתיר", en: "Har Amasa Rosé, Yatir" },
        description: { he: "רוזה יבש מדרום הרי יהודה, גוף קל־בינוני, תות שדה ופירות אדומים רעננים, חומציות נעימה וסיומת פריכה", en: "Dry rosé from the southern Judean Hills, light-medium body, strawberry and fresh red fruits, pleasant acidity and crisp finish" },
        price: 120
      },
      {
        id: "talpiot-rose-la-pourah",
        name: { he: "תלפיות רוזה, לה פורה בלאנש", en: "Talpiot Rosé, La Poire Blanche" },
        description: { he: "רוזה יבש בסגנון פרובאנס מכרם שדה כלב שבדרום הר חברון, גוף קל, תותי בר ופריחה עדינה, פירות יער רעננים, חומציות מרעננת וסיומת נקייה", en: "Provence-style dry rosé from the Sde Kalev vineyard in the southern Hebron Hills, light body, wild strawberries and delicate blossom, fresh berries, refreshing acidity and clean finish" },
        price: 120
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
        id: "corona-draft",
        name: { he: "קורונה", en: "Corona" },
        description: { he: "רבע 18 ₪  |  שליש 26 ₪  |  חצי 34 ₪", en: "1/4 - 18₪  |  1/3 - 26₪  |  1/2 - 34₪" },
        price: 18,
        priceAlt: 34
      },
      // בירות בבקבוק
      { id: "subheader-bottle", name: { he: "בירה מחבית", en: "Bottled Beers" }, price: 0, isSubheader: true },
      { id: "nesher-malt", name: { he: "נשר מאלט", en: "Nesher Malt" }, price: 14 },
      { id: "tuborg-bottle", name: { he: "טובורג", en: "Tuborg" }, price: 26 },
      { id: "carlsberg-bottle", name: { he: "קרלסברג", en: "Carlsberg" }, price: 28 },
      { id: "goldstar-unfiltered", name: { he: "גולדסטאר (לא מסונן)", en: "Goldstar (Unfiltered)" }, price: 28 },
      { id: "french-wheat-1664", name: { he: "בירה חיטת צרפתית 1664", en: "French Wheat Beer 1664" }, price: 30 },
      // אניס
      { id: "subheader-anis", name: { he: "אניס (מנה / צ'ייסר)", en: "Anise (Serving / Chaser)" }, price: 0, isSubheader: true },
      {
        id: "arak-ayalot",
        name: { he: "ערק איילות", en: "Arak Ayalot" },
        description: { he: "מנה 32 ₪  |  צ'ייסר 19 ₪", en: "Serving 32₪  |  Chaser 19₪" },
        price: 19,
        priceAlt: 32
      },
      {
        id: "ouzo-12",
        name: { he: "אוזו 12", en: "Ouzo 12" },
        description: { he: "מנה 34 ₪  |  צ'ייסר 21 ₪", en: "Serving 34₪  |  Chaser 21₪" },
        price: 21,
        priceAlt: 34
      },
      // וויסקי
      { id: "subheader-whisky", name: { he: "וויסקי (מנה / צ'ייסר)", en: "Whisky (Serving / Chaser)" }, price: 0, isSubheader: true },
      {
        id: "jack-daniels",
        name: { he: "ג'ק דניאלס", en: "Jack Daniel's" },
        description: { he: "מנה 48 ₪  |  צ'ייסר 28 ₪", en: "Serving 48₪  |  Chaser 28₪" },
        price: 28,
        priceAlt: 48
      },
      {
        id: "glenlivet-12",
        name: { he: "גלנליווט 12", en: "Glenlivet 12" },
        description: { he: "מנה 58 ₪  |  צ'ייסר 34 ₪", en: "Serving 58₪  |  Chaser 34₪" },
        price: 34,
        priceAlt: 58
      },
      {
        id: "macallan-12",
        name: { he: "מקאלן 12", en: "Macallan 12" },
        description: { he: "מנה 85 ₪  |  צ'ייסר 45 ₪", en: "Serving 85₪  |  Chaser 45₪" },
        price: 45,
        priceAlt: 85
      },
      // טקילה
      { id: "subheader-tequila", name: { he: "טקילה (מנה / צ'ייסר)", en: "Tequila (Serving / Chaser)" }, price: 0, isSubheader: true },
      {
        id: "patron-silver",
        name: { he: "פטרון סילבר", en: "Patrón Silver" },
        description: { he: "מנה 55 ₪  |  צ'ייסר 32 ₪", en: "Serving 55₪  |  Chaser 32₪" },
        price: 32,
        priceAlt: 55
      },
      {
        id: "patron-gold",
        name: { he: "פטרון גולד", en: "Patrón Gold" },
        description: { he: "מנה 75 ₪  |  צ'ייסר 45 ₪", en: "Serving 75₪  |  Chaser 45₪" },
        price: 45,
        priceAlt: 75
      },
      // ג'ין
      { id: "subheader-gin", name: { he: "ג'ין (מנה / צ'ייסר)", en: "Gin (Serving / Chaser)" }, price: 0, isSubheader: true },
      {
        id: "gordons",
        name: { he: "גורדונס", en: "Gordon's" },
        description: { he: "מנה 36 ₪  |  צ'ייסר 20 ₪", en: "Serving 36₪  |  Chaser 20₪" },
        price: 20,
        priceAlt: 36
      },
      // וודקה
      { id: "subheader-vodka", name: { he: "וודקה (מנה / צ'ייסר)", en: "Vodka (Serving / Chaser)" }, price: 0, isSubheader: true },
      {
        id: "smirnoff",
        name: { he: "סמירנוף", en: "Smirnoff" },
        description: { he: "מנה 36 ₪  |  צ'ייסר 20 ₪", en: "Serving 36₪  |  Chaser 20₪" },
        price: 20,
        priceAlt: 36
      },
      {
        id: "grey-goose",
        name: { he: "גרייגוס", en: "Grey Goose" },
        description: { he: "מנה 48 ₪  |  צ'ייסר 38 ₪", en: "Serving 48₪  |  Chaser 38₪" },
        price: 38,
        priceAlt: 48
      },
      // קוקטיילים
      { id: "subheader-cocktails", name: { he: "קוקטייל", en: "Cocktails" }, price: 0, isSubheader: true },
      {
        id: "blooming-anise",
        name: { he: "אניס פורח", en: "Blooming Anise" },
        description: { he: "ערק, אפרסק ובזיליקום טרי. שילוב טעמים נקי, רענן ומתוחכם שנותן כבוד לחומרי הגלם", en: "Arak, peach and fresh basil. A clean, fresh and sophisticated flavor combination" },
        price: 42
      },
      {
        id: "summer-crush",
        name: { he: "סאמר קראש", en: "Summer Crush" },
        description: { he: "וודקה, פסיפלורה טרייה, אבטיח ונגיעת ספרייט. מתוק, חמצמץ ומאוזן להפליא", en: "Vodka, fresh passion fruit, watermelon and a touch of Sprite. Sweet, tangy and beautifully balanced" },
        price: 42
      },
      {
        id: "electric-blue",
        name: { he: "אלקטריק בלו", en: "Electric Blue" },
        description: { he: "וודקה, ליקר תפוזי קירסאו כחול ומיץ לימון טרי. קוקטייל תוסס בטעם חמוץ-מתוק", en: "Vodka, blue Curaçao orange liqueur and fresh lemon juice. A vibrant sweet-and-sour cocktail" },
        price: 42
      }
    ]
  },
  // Row 4: ילדים | שתיה קלה
  {
    id: "kids",
    name: {
      he: "Meat Kids",
      en: "Meat Kids"
    },
    image: `${dishImg}/Junior-burger.jpg`,
    note: {
      he: "מוגש לצד תוספת לבחירה - צ'יפס, פוטטוס או סלט ירוק ופריגת ענבים",
      en: "Served with choice of side - fries, potatoes or green salad, and grape juice"
    },
    items: [
      { id: "kids-burger", name: { he: "בורגר 150 גר'", en: "Burger 150g" }, price: 58, image: `${dishImg}/Junior-burger.jpg` },
      { id: "kids-schnitzel", name: { he: "שניצלונים", en: "Schnitzel Bites" }, price: 58, image: `${dishImg}/Chicken-breast-schnitzel-bites.jpg` },
      { id: "kids-chicken-breast", name: { he: "חזה עוף", en: "Chicken Breast" }, price: 58, image: `${dishImg}/Plancha-chicken-breast.jpg` },
      { id: "kids-chicken-thigh", name: { he: "פרגית צלויה", en: "Grilled Chicken Thigh" }, price: 58, image: `${dishImg}/Junior-chicken-thigh-steak.jpg` }
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
      // משקאות קלים
      { id: "subheader-soft", name: { he: "משקאות קלים", en: "Soft Drinks" }, price: 0, isSubheader: true },
      { id: "mineral-water", name: { he: "מים מינרליים", en: "Mineral Water" }, price: 12 },
      { id: "soda", name: { he: "סודה", en: "Soda" }, price: 12 },
      { id: "coca-cola", name: { he: "קולה / קולה זירו / ספרייט / ספרייט זירו", en: "Cola / Cola Zero / Sprite / Sprite Zero" }, price: 14 },
      { id: "prigat", name: { he: "פריגת ענבים / תפוזים / אשכוליות / לימונענע", en: "Prigat Grapes / Orange / Grapefruit / Lemonade" }, price: 14 },
      { id: "fuze-tea", name: { he: "פיוזטי אפרסק", en: "Fuze Tea Peach" }, price: 14 },
      { id: "neviot", name: { he: "נביעות בטעמים אפרסק / תפוח / ענבים", en: "Neviot Peach / Apple / Grapes" }, price: 14 },
      // משקאות חמים
      { id: "subheader-hot", name: { he: "משקאות חמים", en: "Hot Drinks" }, price: 0, isSubheader: true },
      { id: "tea", name: { he: "תה", en: "Tea" }, price: 12 },
      {
        id: "espresso",
        name: { he: "אספרסו קצר / כפול", en: "Espresso Short / Double" },
        description: { he: "12 / 14 ₪", en: "12 / 14 ₪" },
        price: 12,
        priceAlt: 14
      },
      {
        id: "affogato",
        name: { he: "אפוגטו", en: "Affogato" },
        description: { he: "אספרסו על גלידת קרם וניל", en: "Espresso over vanilla cream ice cream" },
        price: 24
      }
    ]
  }
];

// Allergen notice
export const allergenNotice = {
  he: "המנות המוצעות עשויות להכיל אלרגני מסוגים שונים. ניתן להזמין את מנות ההמבורגר והצ'יקן עם לחמניה ללא גלוטן, המנות כולן עלולות להכיל עקבות של גלוטן או אלרגנים שונים.",
  en: "The dishes offered may contain various allergens. Burger and chicken dishes can be ordered with gluten-free buns. All dishes may contain traces of gluten or various allergens."
};
