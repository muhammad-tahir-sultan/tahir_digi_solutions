import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import { getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { PageHero, FinalCTA } from "@/components/sections/ContentSections";
import { PremiumTestimonialsSection } from "@/components/sections/premium/PremiumTestimonialsSection";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  return buildMetadata("testimonials", data.seo.testimonials, "/testimonials");
}

export default async function TestimonialsPage() {
  const data = await getSiteData();

  return (
    <>
      <PageHero
        badge="Testimonials"
        title="Trusted by Local Business Owners"
        description={`See what our partners say about working with ${BRAND.name}.`}
      />
      <PremiumTestimonialsSection
        testimonials={data.testimonials}
        showAll
        showHeading={false}
        showViewAll={false}
      />
      <FinalCTA content={data.content.cta} />
    </>
  );
}
