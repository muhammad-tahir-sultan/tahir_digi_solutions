import type { Metadata } from "next";
import { getSiteData } from "@/lib/data";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PageHero, FinalCTA } from "@/components/sections/ContentSections";

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
      <section className="py-20">
        <Container>
          <div className="space-y-16">
            {data.services.map((service, index) => (
              <div key={service.id} id={service.id}>
                <Card className="overflow-hidden p-0">
                  <div className="border-b border-border bg-secondary/30 px-8 py-6">
                    <Badge>Service {index + 1}</Badge>
                    <h2 className="mt-3 text-2xl font-bold text-foreground">{service.title}</h2>
                    <p className="mt-2 text-muted">{service.description}</p>
                  </div>
                  <div className="grid gap-8 p-8 lg:grid-cols-2">
                    <div>
                      <h3 className="font-semibold text-foreground">Benefits</h3>
                      <ul className="mt-3 space-y-2">
                        {service.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Deliverables</h3>
                      <ul className="mt-3 space-y-2">
                        {service.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Process</h3>
                      <ol className="mt-3 space-y-2">
                        {service.process.map((step, i) => (
                          <li key={step} className="flex items-start gap-3 text-sm text-muted">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">FAQs</h3>
                      <div className="mt-3 space-y-4">
                        {service.faqs.map((faq) => (
                          <div key={faq.question}>
                            <p className="text-sm font-medium text-foreground">{faq.question}</p>
                            <p className="mt-1 text-sm text-muted">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA content={data.content.cta} />
    </>
  );
}
