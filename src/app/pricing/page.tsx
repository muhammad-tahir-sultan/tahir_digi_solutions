import type { Metadata } from "next";
import { Check, Clock, Rocket, Sparkles, Star, Zap } from "lucide-react";
import { getSiteData } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero, FinalCTA } from "@/components/sections/ContentSections";
import { cn } from "@/lib/utils";

const packageVisuals: Record<
  string,
  { icon: typeof Zap; gradient: string; glow: string }
> = {
  Starter: {
    icon: Zap,
    gradient: "from-sky-500/30 via-blue-600/20 to-transparent",
    glow: "shadow-sky-500/10",
  },
  Professional: {
    icon: Star,
    gradient: "from-primary/35 via-blue-600/20 to-transparent",
    glow: "shadow-primary/20",
  },
  Premium: {
    icon: Rocket,
    gradient: "from-amber-500/30 via-orange-600/15 to-transparent",
    glow: "shadow-amber-500/15",
  },
};

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
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {data.pricing.map((pkg) => {
              const visual = packageVisuals[pkg.name] ?? packageVisuals.Starter;
              const Icon = visual.icon;

              return (
                <article
                  key={pkg.id}
                  className={cn(
                    "flow-card relative flex flex-col overflow-hidden transition-transform hover:-translate-y-1",
                    pkg.featured && "border-primary/40 shadow-xl",
                    visual.glow
                  )}
                >
                  <div className={cn("relative h-28 overflow-hidden bg-gradient-to-br", visual.gradient)}>
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_55%)]" />
                    <div className="absolute inset-0 flex items-center justify-between px-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm">
                        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {pkg.featured && (
                        <span className="rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                          Most Popular
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 pt-5">
                    <h2 className="text-xl font-bold text-foreground">{pkg.name}</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-primary">{pkg.price}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{pkg.description}</p>

                    <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-zinc-900/60 px-3 py-1.5 text-xs text-muted">
                      <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      <span>
                        Timeline: <span className="font-semibold text-foreground">{pkg.timeline}</span>
                      </span>
                    </div>

                    <div className="mt-6 flex-1">
                      <h3 className="text-sm font-semibold text-foreground">Features</h3>
                      <ul className="mt-3 space-y-2">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <h3 className="mt-6 text-sm font-semibold text-foreground">Deliverables</h3>
                      <ul className="mt-3 space-y-2">
                        {pkg.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted">
                            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      href="/contact"
                      className="mt-6 w-full font-semibold"
                      variant={pkg.featured ? "primary" : "outline"}
                    >
                      Get Started
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      <FinalCTA content={data.content.cta} />
    </>
  );
}
