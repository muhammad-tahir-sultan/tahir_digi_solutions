import type { Metadata } from "next";
import { getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { PageHero, FinalCTA } from "@/components/sections/ContentSections";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  return buildMetadata("industries", data.seo.industries, "/industries");
}

export default async function IndustriesPage() {
  const data = await getSiteData();

  return (
    <>
      <PageHero
        badge="Industries"
        title="Specialized Solutions for Your Industry"
        description="We understand the unique challenges local businesses face in your market."
      />
      <section className="py-20">
        <Container>
          <div className="space-y-20">
            {data.industries.map((industry) => (
              <div key={industry.id} id={industry.slug} className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-foreground">{industry.name}</h2>
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  <Card>
                    <h3 className="font-semibold text-foreground">Challenges</h3>
                    <ul className="mt-4 space-y-2">
                      {industry.challenges.map((c) => (
                        <li key={c} className="text-sm text-muted">• {c}</li>
                      ))}
                    </ul>
                  </Card>
                  <Card>
                    <h3 className="font-semibold text-foreground">Opportunities</h3>
                    <ul className="mt-4 space-y-2">
                      {industry.opportunities.map((o) => (
                        <li key={o} className="text-sm text-muted">• {o}</li>
                      ))}
                    </ul>
                  </Card>
                  <Card>
                    <h3 className="font-semibold text-foreground">Website Features Needed</h3>
                    <ul className="mt-4 space-y-2">
                      {industry.websiteFeatures.map((f) => (
                        <li key={f} className="text-sm text-muted">• {f}</li>
                      ))}
                    </ul>
                  </Card>
                  <Card>
                    <h3 className="font-semibold text-foreground">Recommended Conversion Elements</h3>
                    <ul className="mt-4 space-y-2">
                      {industry.conversionElements.map((e) => (
                        <li key={e} className="text-sm text-muted">• {e}</li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA content={data.content.cta} />
    </>
  );
}
