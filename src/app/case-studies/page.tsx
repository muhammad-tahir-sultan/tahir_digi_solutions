import type { Metadata } from "next";
import Link from "next/link";
import { getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageHero, FinalCTA } from "@/components/sections/ContentSections";
import { ArrowRight } from "lucide-react";

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
      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {data.caseStudies.map((study) => (
              <Card key={study.id} hover>
                <Badge>{study.industry}</Badge>
                <h2 className="mt-4 text-xl font-bold text-foreground">{study.title}</h2>
                <p className="mt-3 text-sm text-muted line-clamp-3">{study.businessOverview}</p>
                <div className="mt-6 flex items-center gap-4 text-sm text-muted">
                  <span>{study.challenges.length} challenges</span>
                  <span>•</span>
                  <span>{study.websiteImprovements.length} improvements</span>
                </div>
                <div className="mt-6">
                  <Button href={`/case-studies/${study.slug}`} variant="outline" size="sm">
                    Read Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA content={data.content.cta} />
    </>
  );
}
