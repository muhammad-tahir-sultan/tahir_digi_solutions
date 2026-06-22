import { getSiteData } from "@/lib/data";
import { HeroSection } from "@/components/sections/HeroSection";
import {
  ClientLogosSection,
  ProblemSection,
  SolutionSection,
} from "@/components/sections/HomeSections";
import {
  ServicesOverview,
  IndustriesPreview,
  PortfolioPreview,
  CaseStudyPreview,
  TestimonialsPreview,
  FinalCTA,
} from "@/components/sections/ContentSections";

export default async function HomePage() {
  const data = await getSiteData();

  return (
    <>
      <HeroSection content={data.content.hero} />
      <ClientLogosSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesOverview services={data.services} />
      <IndustriesPreview industries={data.industries} />
      <PortfolioPreview portfolio={data.portfolio} />
      <CaseStudyPreview caseStudies={data.caseStudies} />
      <TestimonialsPreview testimonials={data.testimonials} />
      <FinalCTA content={data.content.cta} />
    </>
  );
}
