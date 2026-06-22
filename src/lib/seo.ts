import type { Metadata } from "next";
import type { SeoPageMeta } from "./types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://digitalsolutions.com";
const SITE_NAME = "Digital Solutions";

export function buildMetadata(
  pageKey: string,
  seo?: SeoPageMeta,
  path = ""
): Metadata {
  const title = seo?.title || `${SITE_NAME} | Local Business Growth Partner`;
  const description =
    seo?.description ||
    "We help local businesses attract more customers with high-converting websites.";
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    openGraph: {
      title: seo?.ogTitle || title,
      description: seo?.ogDescription || description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.ogTitle || title,
      description: seo?.ogDescription || description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Local business growth partner helping dentists, law firms, accountants, real estate agencies, and physiotherapy clinics generate more leads.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@digitalsolutions.com",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Website Design",
      "Website Redesign",
      "Local SEO",
      "Conversion Optimization",
    ],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "We help local businesses attract more customers, generate inquiries, and improve online presence through high-converting websites.",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Your City",
      addressRegion: "ST",
      addressCountry: "US",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export { SITE_URL, SITE_NAME };
