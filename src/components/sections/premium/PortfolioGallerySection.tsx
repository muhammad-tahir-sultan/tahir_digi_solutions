"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  FlowStepBrowserFrame,
  FlowStepMobileFrame,
} from "@/components/mockups/FlowStepHeroMockup";
import { flowstepImages } from "@/lib/flowstep-assets";
import type { PortfolioItem } from "@/lib/types";
import { cn } from "@/lib/utils";

const portfolioImages: Record<string, { desktop: string; mobile?: string }> = {
  Dentists: { desktop: flowstepImages.portfolio.dental, mobile: flowstepImages.portfolio.dentalMobile },
  "Law Firms": { desktop: flowstepImages.portfolio.lawFirm },
  "Real Estate Agencies": { desktop: flowstepImages.portfolio.realEstate },
  "Real Estate": { desktop: flowstepImages.portfolio.realEstate },
  "Accounting Firms": { desktop: flowstepImages.portfolio.accounting },
  Accounting: { desktop: flowstepImages.portfolio.accounting },
};

function getPortfolioImages(industry: string) {
  return portfolioImages[industry] ?? { desktop: flowstepImages.portfolio.dental, mobile: flowstepImages.portfolio.dentalMobile };
}

export function PortfolioGallerySection({ portfolio }: { portfolio: PortfolioItem[] }) {
  const items = portfolio.slice(0, 4);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <Container className="relative">
        <SectionHeading
          badge="Portfolio"
          badgeVariant="sky"
          title="Websites That Win Clients"
          description="Explore demo projects across every industry we serve — from concept to conversion-ready design."
        />

        <div className="mt-12 space-y-20">
          {items.map((item, index) => {
            const images = getPortfolioImages(item.industry);
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
                <div className={cn("relative", isReversed && "lg:[direction:ltr]")}>
                  <FlowStepBrowserFrame
                    title={item.title}
                    image={images.desktop}
                    imageAlt={`${item.title} desktop preview`}
                  />
                  {images.mobile && (
                    <FlowStepMobileFrame
                      image={images.mobile}
                      imageAlt={`${item.title} mobile preview`}
                      className="absolute -bottom-4 -right-2 sm:-right-4"
                    />
                  )}
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
