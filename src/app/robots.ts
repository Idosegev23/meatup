import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Crawlers used by AI assistants. `User-Agent: *` already permits them, so
 * these entries change nothing today — they exist so the intent is explicit
 * and survives a future blanket disallow. Split by purpose because the two
 * groups answer different questions: whether the site may be used for
 * training, and whether it may be cited in an answer.
 */
const AI_CRAWLERS = [
  // Answer engines / retrieval at question time
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot",
  // Training and index building
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  "CCBot",
  "Amazonbot",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
