import type { MetadataRoute } from "next";
import { STATIC_ROUTES, getAbsoluteUrl } from "@/lib/data";
import { PRODUCT_CATALOG } from "@/lib/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...STATIC_ROUTES,
    ...PRODUCT_CATALOG.map((product) => `/produits/${product.slug}`),
  ];

  return routes.map((route) => ({
    changeFrequency: route === "/" ? "weekly" : "monthly",
    lastModified: new Date(),
    priority: route === "/" ? 1 : 0.7,
    url: getAbsoluteUrl(route),
  }));
}
