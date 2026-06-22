import type { Metadata } from "next";
import { getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { PageHero, FinalCTA } from "@/components/sections/ContentSections";
import { CaseStudiesGridSection } from "@/components/sections/premium/CaseStudiesGridSection";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  return buildMetadata("case-studies", data.seo["case-studies"], "/case-studies");
}

export default async function CaseStudiesPage() {
  const data = await getSiteData();

  return (
    <>
      <PageHero
        badge="Case Studies"
        title="Growth Projects for Local Businesses"
        description="Demo case studies showcasing our strategic approach. No fabricated revenue claims — just real strategies and expected outcomes."
      />
      <CaseStudiesGridSection caseStudies={data.caseStudies} />
      <FinalCTA content={data.content.cta} />
    </>
  );
}
