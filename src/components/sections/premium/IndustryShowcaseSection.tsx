"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import { BrowserMockup } from "@/components/mockups/DeviceMockups";
import {
  IndustryIllustration,
  getIndustryKey,
  industryGradients,
} from "@/components/illustrations/IndustryIllustrations";
import type { Industry } from "@/lib/types";
import { cn } from "@/lib/utils";

const industryLabels: Record<string, string> = {
  Dentists: "Dentist",
  "Law Firms": "Law Firm",
  "Real Estate Agencies": "Real Estate",
  "Real Estate": "Real Estate",
  "Accounting Firms": "Accountant",
  Accounting: "Accountant",
  "Physiotherapy Clinics": "Physiotherapy",
  Physiotherapy: "Physiotherapy",
};

export function IndustryShowcaseSection({ industries }: { industries: Industry[] }) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary/30 py-20">
      <BackgroundEffects variant="subtle" />
      <Container className="relative">
        <SectionHeading
          badge="Industries"
          title="Built for Businesses Like Yours"
          description="Industry-specific designs that speak your clients' language and drive real results."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const key = getIndustryKey(industry.name);
            const gradient = industryGradients[key];
            const label = industryLabels[industry.name] ?? industry.name;

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                <Link href={`/industries#${industry.slug}`} className="group block h-full">
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="glass-strong flex h-full flex-col overflow-hidden rounded-2xl"
                  >
                    <div className={cn("relative h-32 bg-gradient-to-br p-6", gradient)}>
                      <div className="absolute right-4 top-4 h-16 w-16 opacity-80">
                        <IndustryIllustration industry={key} />
                      </div>
                      <p className="relative z-10 text-sm font-semibold uppercase tracking-wider text-white/80">
                        {label}
                      </p>
                      <h3 className="relative z-10 mt-1 text-xl font-bold text-white">
                        {industry.name}
                      </h3>
                    </div>

                    <div className="relative -mt-6 mx-4 overflow-hidden rounded-xl border border-border shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                      <BrowserMockup industry={key} size="large" title={`${industry.name} website preview`} />
                    </div>

                    <div className="flex flex-1 flex-col p-6 pt-8">
                      <p className="text-sm text-muted line-clamp-2">
                        {industry.challenges[0]}
                      </p>
                      <p className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Explore solutions
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </p>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button href="/industries" variant="outline">
            Explore All Industries
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
