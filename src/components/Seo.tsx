import { useEffect } from "react";

const SITE = "Saaniya Afreen — Product Manager";
const BASE = "https://saaniyaafreen.vercel.app";

interface SeoProps {
  /** Page-specific title; the site name is appended automatically. */
  title?: string;
  description?: string;
  /** Path beginning with "/" used for the canonical URL. */
  path?: string;
  image?: string;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Lightweight, dependency-free SEO manager. Updates the document title and the
 * key meta/canonical tags on route change. Crawlers that execute JS (Google)
 * read these; the static index.html provides the fallback for social scrapers.
 */
const Seo = ({ title, description, path = "/", image }: SeoProps) => {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE}` : SITE;
    const url = `${BASE}${path}`;
    const img = image ? `${BASE}${image}` : `${BASE}/og-image.png`;

    document.title = fullTitle;
    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
    }
    setMeta("property", "og:title", fullTitle);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);
    setMeta("name", "twitter:image", img);
    setCanonical(url);
  }, [title, description, path, image]);

  return null;
};

export default Seo;
