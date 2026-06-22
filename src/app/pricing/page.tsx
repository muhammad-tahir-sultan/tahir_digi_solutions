import type { Metadata } from "next";
import { Check } from "lucide-react";
import { getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PageHero, FinalCTA } from "@/components/sections/ContentSections";
import { cn } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteData();
  return buildMetadata("pricing", data.seo.pricing, "/pricing");
}

export default async function PricingPage() {
  const data = await getSiteData();

  return (
    <>
      <PageHero
        badge="Pricing"
        title="Transparent Packages for Every Stage of Growth"
        description="Choose the package that fits your business needs, or request a custom quote."
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {data.pricing.map((pkg) => (
              <Card
                key={pkg.id}
                className={cn(
                  "relative flex flex-col",
                  pkg.featured && "border-primary shadow-lg shadow-primary/10"
                )}
              >
                {pkg.featured && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <h2 className="text-xl font-bold text-foreground">{pkg.name}</h2>
                <p className="mt-2 text-3xl font-bold text-primary">{pkg.price}</p>
                <p className="mt-2 text-sm text-muted">{pkg.description}</p>

                <div className="mt-6 flex-1">
                  <h3 className="text-sm font-semibold text-foreground">Features</h3>
                  <ul className="mt-3 space-y-2">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-6 text-sm font-semibold text-foreground">Deliverables</h3>
                  <ul className="mt-3 space-y-2">
                    {pkg.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-sm text-muted">
                    Timeline: <span className="font-medium text-foreground">{pkg.timeline}</span>
                  </p>
                  <Button href="/contact" className="mt-4 w-full" variant={pkg.featured ? "primary" : "outline"}>
                    Request Custom Quote
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
