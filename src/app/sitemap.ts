import type { MetadataRoute } from "next";
import { SITE, products } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", ...Object.values(products).map((p) => `/${p.slug}/`), "/policies/"];
  return pages.map((path) => ({
    url: `${SITE.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
