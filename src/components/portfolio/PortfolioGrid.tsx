"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PageHero, FinalCTA } from "@/components/sections/ContentSections";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import { WebsiteShowcase } from "@/components/mockups/DeviceMockups";
import { getIndustryKey } from "@/components/illustrations/IndustryIllustrations";
import type { PortfolioItem, SiteContent } from "@/lib/types";
import { cn } from "@/lib/utils";

const filters = ["All", "Dentists", "Law Firms", "Real Estate", "Accounting", "Physiotherapy"];

export function PortfolioGrid({
  portfolio,
  cta,
}: {
  portfolio: PortfolioItem[];
  cta: SiteContent["cta"];
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? portfolio
      : portfolio.filter((p) => p.industry === activeFilter);

  return (
    <>
      <PageHero
        badge="Portfolio"
        title="Demo Projects for Local Businesses"
        description="Explore our concept projects across dental, legal, real estate, accounting, and physiotherapy industries."
      />
      <section className="relative overflow-hidden py-20">
        <BackgroundEffects variant="default" />
        <Container className="relative">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeFilter === filter
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "glass text-muted hover:text-foreground"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => {
                const industryKey = getIndustryKey(item.industry);

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                  >
                    <Link href={`/portfolio/${item.slug}`} className="group block h-full">
                      <motion.article
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="glass-strong flex h-full flex-col overflow-hidden rounded-2xl"
                      >
                        <div className="overflow-hidden p-3 pb-0">
                          <div className="overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-[1.02]">
                            <WebsiteShowcase
                              industry={industryKey}
                              title={item.title}
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <Badge>{item.industry}</Badge>
                          <h3 className="mt-3 font-semibold text-foreground">{item.title}</h3>
                          <p className="mt-2 flex-1 text-sm text-muted line-clamp-2">{item.overview}</p>
                          <p className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                            View project
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </p>
                        </div>
                      </motion.article>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>
      <FinalCTA content={cta} />
    </>
  );
}
