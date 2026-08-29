import type { MetadataRoute } from "next";
import { areas, services, SITE_URL } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...services.map(service => ({ url: `${SITE_URL}/services/${service.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${SITE_URL}/areas-served`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...areas.map(area => ({ url: `${SITE_URL}/areas-served/${area.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
