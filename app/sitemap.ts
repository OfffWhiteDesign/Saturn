import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/privacy",
    "/terms",
    "/appstract",
    "/appstract/privacy",
    "/appstract/terms",
  ];

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" || path === "/appstract" ? 1 : 0.5,
  }));
}
