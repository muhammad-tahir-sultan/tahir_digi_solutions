import { getSiteData } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

export default async function sitemap() {
  const data = await getSiteData();

  const staticPages = [
    "",
    "/about",
    "/services",
    "/industries",
    "/portfolio",
    "/case-studies",
    "/process",
    "/pricing",
    "/testimonials",
    "/contact",
    "/free-audit",
  ];

  const portfolioPages = data.portfolio.map((item) => ({
    url: `${SITE_URL}/portfolio/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyPages = data.caseStudies.map((item) => ({
    url: `${SITE_URL}/case-studies/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...portfolioPages,
    ...caseStudyPages,
  ];
}
