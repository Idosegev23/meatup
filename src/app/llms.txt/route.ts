import { config } from "@/data/config";
import { menuData, allergenNotice } from "@/data/menu";
import { SITE_URL } from "@/lib/seo";

/**
 * /llms.txt — a plain-language brief for AI assistants, following the
 * llms.txt convention. Generated from `config` and `menuData` so it can never
 * drift from the site the way a hand-written copy would.
 *
 * The full menu is inlined on purpose: the questions people ask an assistant
 * about a restaurant are "what do they serve" and "how much is X", and a link
 * alone does not answer either.
 */
export const dynamic = "force-static";

export function GET() {
  const sections = menuData
    .map((category) => {
      const items = category.items
        .filter((item) => !item.isSubheader)
        .map((item) => {
          const price = item.priceAlt
            ? `${item.price} / ${item.priceAlt} ₪`
            : `${item.price} ₪`;
          const desc = item.description ? ` — ${item.description.he}` : "";
          return `- ${item.name.he} (${price})${desc}`;
        })
        .join("\n");
      const note = category.note ? `\n_${category.note.he}_\n` : "";
      return `### ${category.name.he}\n${note}${items}`;
    })
    .join("\n\n");

  const body = `# MEATUP (מיט אפ)

> ${config.tagline}. מסעדת בשרים והמבורגרים כשרה בבני ברק, ישראל.

- **כשרות:** ${config.kosher.he}
- **כתובת:** ${config.address.he} (${config.addressLine2.he})
- **טלפון:** ${config.phone}
- **שעות פתיחה:** ${config.hours.he}
- **טווח מחירים:** ₪₪ (מחירים בשקלים חדשים)

## קישורים

- [אתר הבית](${SITE_URL})
- [התפריט המלא](${SITE_URL}/menu)
- [גלריית תמונות](${SITE_URL}/gallery)
- [צור קשר והגעה](${SITE_URL}/contact)
- [הזמנת מקום (Tabit)](${config.tabitUrl})
- [משלוח ואיסוף עצמי (Tabit)](${config.tabitDeliveryUrl})
- [משלוחים ב-Wolt](${config.woltUrl})
- [Instagram](${config.instagram})
- [Facebook](${config.facebook})
- [Waze](${config.wazeLink})

## התפריט

${sections}

## הערות

${allergenNotice.he}

מחירים ופריטים עשויים להשתנות; ${SITE_URL}/menu הוא המקור המעודכן.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
