import type { Metadata } from "next";
import { getSiteData } from "@/lib/data";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero, FinalCTA } from "@/components/sections/ContentSections";
import { ServicesDetailSection } from "@/components/sections/premium/ServicesDetailSection";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  return buildMetadata("services", data.seo.services, "/services");
}

export default async function ServicesPage() {
  const data = await getSiteData();
  const allFaqs = data.services.flatMap((s) => s.faqs);

  return (
    <>
      <JsonLd data={faqJsonLd(allFaqs)} />
      <PageHero
        badge="Services"
        title="Website Solutions Built for Local Business Growth"
        description="From design to SEO to ongoing maintenance — everything you need to generate more leads online."
      />
      <ServicesDetailSection services={data.services} />
      <FinalCTA content={data.content.cta} />
    </>
  );
}
