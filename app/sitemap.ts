import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.packersandmoversjalandhar.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/office-relocation-services-jalandhar`,
      lastModified: new Date(),
      priority: 0.64,
    },
    {
      url: `${baseUrl}/bike-transport-service-jalandhar`,
      lastModified: new Date(),
      priority: 0.64,
    },
    {
      url: `${baseUrl}/hidden-charges-packers-movers-jalandhar`,
      lastModified: new Date(),
      priority: 0.64,
    },
    {
      url: `${baseUrl}/packers-movers-kapurthala-hoshiarpur-beas`,
      lastModified: new Date(),
      priority: 0.64,
    },
    {
      url: `${baseUrl}/top-packers-movers-jalandhar-cantt`,
      lastModified: new Date(),
      priority: 0.64,
    },
    {
      url: `${baseUrl}/best-car-transport-service-jalandhar`,
      lastModified: new Date(),
      priority: 0.64,
    },
    {
      url: `${baseUrl}/complete-guide-house-shifting-jalandhar`,
      lastModified: new Date(),
      priority: 0.64,
    },
  ];
}