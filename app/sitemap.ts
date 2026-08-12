import type { MetadataRoute } from "next";
import { tools } from "./lib/calculators";
import { guides } from "./lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://buildwisecalc.com";
  const staticRoutes = ["", "/about", "/privacy", "/terms", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.5,
    })),
    ...tools.map((tool) => ({
      url: `${base}/${tool.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...guides.map((guide) => ({
      url: `${base}/guides/${guide.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      lastModified: new Date("2026-08-12"),
    })),
  ];
}
