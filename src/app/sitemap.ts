import { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pimakimagro.com";

  // Static pages
  const staticPages = [
    "",
    "/katalog",
    "/tentang-kami",
    "/kontak"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  // Dynamic product pages
  const productPages = products.map((product) => ({
    url: `${baseUrl}/katalog/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticPages, ...productPages];
}
