import { getSiteData } from "@/lib/data";
import { HeroSection } from "@/components/sections/HeroSection";
import {
  ClientLogosSection,
  ProblemSection,
  SolutionSection,
} from "@/components/sections/HomeSections";
import { ServicesOverview, CaseStudyPreview, FinalCTA } from "@/components/sections/ContentSections";
import { BeforeAfterSection } from "@/components/sections/premium/BeforeAfterSection";
import { IndustryShowcaseSection } from "@/components/sections/premium/IndustryShowcaseSection";
import { PortfolioGallerySection } from "@/components/sections/premium/PortfolioGallerySection";
import { ProcessTimelineSection } from "@/components/sections/premium/ProcessTimelineSection";
import { AnalyticsDashboardSection } from "@/components/sections/premium/AnalyticsDashboardSection";
import { AuditReportSection } from "@/components/sections/premium/AuditReportSection";
import { PremiumTestimonialsSection } from "@/components/sections/premium/PremiumTestimonialsSection";

export default async function HomePage() {
  const data = await getSiteData();

  return (
    <>
      <HeroSection content={data.content.hero} />
      <ClientLogosSection />
      <BeforeAfterSection />
      <IndustryShowcaseSection industries={data.industries} />
      <PortfolioGallerySection portfolio={data.portfolio} />
      <ProcessTimelineSection />
      <AnalyticsDashboardSection />
      <AuditReportSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesOverview services={data.services} />
      <CaseStudyPreview caseStudies={data.caseStudies} />
      <PremiumTestimonialsSection testimonials={data.testimonials} />
      <FinalCTA content={data.content.cta} />
    </>
  );
}
