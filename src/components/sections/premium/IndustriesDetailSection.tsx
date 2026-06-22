"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import { BrowserMockup } from "@/components/mockups/DeviceMockups";
import {
  IndustryIllustration,
  getIndustryKey,
  industryGradients,
} from "@/components/illustrations/IndustryIllustrations";
import type { Industry } from "@/lib/types";
import { cn } from "@/lib/utils";

function InfoCard({
  title,
  items,
  index,
}: {
  title: string;
  items: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="glass-strong rounded-2xl p-6"
    >
      <h3 className="font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function IndustriesDetailSection({ industries }: { industries: Industry[] }) {
  return (
    <section className="relative overflow-hidden py-20">
      <BackgroundEffects variant="default" />
      <Container className="relative">
        <div className="space-y-24">
          {industries.map((industry, sectionIndex) => {
            const key = getIndustryKey(industry.name);
            const gradient = industryGradients[key];
            const isReversed = sectionIndex % 2 === 1;

            return (
              <motion.article
                key={industry.id}
                id={industry.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-24"
              >
                <div
                  className={cn(
                    "grid items-start gap-10 lg:grid-cols-2 lg:gap-14",
                    isReversed && "lg:[direction:rtl]"
                  )}
                >
                  <div className={cn(isReversed && "lg:[direction:ltr]")}>
                    <div className={cn("relative overflow-hidden rounded-2xl bg-gradient-to-br p-8", gradient)}>
                      <div className="absolute right-6 top-6 h-24 w-24 opacity-70">
                        <IndustryIllustration industry={key} />
                      </div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                        Industry Focus
                      </p>
                      <h2 className="mt-2 text-3xl font-bold text-white">{industry.name}</h2>
                      <p className="mt-4 max-w-md text-sm text-white/80">
                        {industry.opportunities[0]}
                      </p>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative -mt-8 mx-6 overflow-hidden rounded-xl border border-border shadow-xl"
                    >
                      <BrowserMockup industry={key} title={`${industry.name} website preview`} />
                    </motion.div>
                  </div>

                  <div className={cn("grid gap-4 sm:grid-cols-2", isReversed && "lg:[direction:ltr]")}>
                    <InfoCard title="Challenges" items={industry.challenges} index={0} />
                    <InfoCard title="Opportunities" items={industry.opportunities} index={1} />
                    <InfoCard title="Website Features Needed" items={industry.websiteFeatures} index={2} />
                    <InfoCard
                      title="Recommended Conversion Elements"
                      items={industry.conversionElements}
                      index={3}
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
