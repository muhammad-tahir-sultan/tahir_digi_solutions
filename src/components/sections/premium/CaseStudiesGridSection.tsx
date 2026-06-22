"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import {
  CaseStudyBeforePreview,
  CaseStudyAfterPreview,
} from "@/components/mockups/CaseStudyWebsitePreviews";
import {
  IndustryIllustration,
  getIndustryKey,
  industryGradients,
} from "@/components/illustrations/IndustryIllustrations";
import type { CaseStudy } from "@/lib/types";
import { cn } from "@/lib/utils";

export function CaseStudiesGridSection({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <section className="relative overflow-hidden py-20">
      <BackgroundEffects variant="default" />
      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-2">
          {caseStudies.map((study, index) => {
            const industryKey = getIndustryKey(study.industry);
            const gradient = industryGradients[industryKey];

            return (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
              >
                <Link href={`/case-studies/${study.slug}`} className="group block h-full">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="glass-strong flex h-full flex-col overflow-hidden rounded-2xl"
                  >
                    <div className={cn("relative bg-gradient-to-br p-6", gradient)}>
                      <div className="absolute right-4 top-4 h-16 w-16 opacity-70">
                        <IndustryIllustration industry={industryKey} />
                      </div>
                      <Badge className="bg-white/20 text-white">{study.industry}</Badge>
                      <h2 className="mt-3 text-xl font-bold text-white">{study.title}</h2>
                    </div>

                    {/* Mini before → after preview */}
                    <div className="relative -mt-4 mx-4 grid grid-cols-2 gap-2">
                      <div className="overflow-hidden rounded-lg border border-red-500/20 shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                        <div className="bg-red-500/10 px-2 py-0.5 text-[8px] font-bold uppercase text-red-500">
                          Before
                        </div>
                        <div className="aspect-[4/3] min-h-[100px]">
                          <CaseStudyBeforePreview slug={study.slug} />
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-lg border border-emerald-500/20 shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
                        <div className="bg-emerald-500/10 px-2 py-0.5 text-[8px] font-bold uppercase text-emerald-600">
                          After
                        </div>
                        <div className="aspect-[4/3] min-h-[100px]">
                          <CaseStudyAfterPreview slug={study.slug} />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 pt-5">
                      <p className="text-sm text-muted line-clamp-3">{study.businessOverview}</p>

                      <div className="mt-4 flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-600 dark:text-red-400">
                          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                          {study.challenges.length} challenges
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                          <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                          {study.websiteImprovements.length} improvements
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
                          Strategy included
                        </span>
                      </div>

                      <p className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Read case study
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
