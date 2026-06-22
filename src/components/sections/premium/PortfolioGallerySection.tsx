"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import { DevicePairShowcase } from "@/components/mockups/DeviceMockups";
import { getIndustryKey } from "@/components/illustrations/IndustryIllustrations";
import type { PortfolioItem } from "@/lib/types";
import { cn } from "@/lib/utils";

export function PortfolioGallerySection({ portfolio }: { portfolio: PortfolioItem[] }) {
  const items = portfolio.slice(0, 4);

  return (
    <section className="relative overflow-hidden py-20">
      <BackgroundEffects variant="default" />
      <Container className="relative">
        <SectionHeading
          badge="Portfolio"
          title="Websites That Win Clients"
          description="Explore demo projects across every industry we serve — from concept to conversion-ready design."
        />

        <div className="mt-12 space-y-24">
          {items.map((item, index) => {
            const industryKey = getIndustryKey(item.industry);
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "grid items-center gap-10 lg:grid-cols-2 lg:gap-14",
                  isReversed && "lg:[direction:rtl]"
                )}
              >
                <div className={cn(isReversed && "lg:[direction:ltr]")}>
                  <DevicePairShowcase industry={industryKey} title={item.title} />
                </div>

                <div className={cn(isReversed && "lg:[direction:ltr]")}>
                  <Badge>{item.industry}</Badge>
                  <h3 className="mt-4 text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-muted">{item.overview}</p>
                  <ul className="mt-4 space-y-2">
                    {item.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    View project details
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Button href="/portfolio" variant="outline">
            View Full Portfolio
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
