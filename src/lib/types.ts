export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  challenges: string[];
  opportunities: string[];
  websiteFeatures: string[];
  conversionElements: string[];
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  industry: string;
  overview: string;
  technologies: string[];
  features: string[];
  demoUrl: string;
  coverImage: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  industry: string;
  businessOverview: string;
  challenges: string[];
  strategy: string;
  websiteImprovements: string[];
  conversionImprovements: string[];
  seoImprovements: string[];
  expectedOutcome: string;
}

export interface Testimonial {
  id: string;
  name: string;
  business: string;
  industry: string;
  rating: number;
  review: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  featured?: boolean;
}

export interface ContactLead {
  id: string;
  name: string;
  email: string;
  businessName: string;
  industry: string;
  websiteUrl: string;
  message: string;
  createdAt: string;
}

export interface AuditRequest {
  id: string;
  name: string;
  email: string;
  businessName: string;
  websiteUrl: string;
  createdAt: string;
}

export interface SiteContent {
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    mission: string;
    vision: string;
    story: string;
    whyChooseUs: string[];
  };
  cta: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

export interface SeoPageMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

export interface SeoSettings {
  [page: string]: SeoPageMeta;
}

export interface SiteData {
  services: Service[];
  industries: Industry[];
  portfolio: PortfolioItem[];
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
  pricing: PricingPackage[];
  content: SiteContent;
  seo: SeoSettings;
  contactLeads: ContactLead[];
  auditRequests: AuditRequest[];
}

export type DataCollection =
  | "services"
  | "industries"
  | "portfolio"
  | "caseStudies"
  | "testimonials"
  | "pricing";
