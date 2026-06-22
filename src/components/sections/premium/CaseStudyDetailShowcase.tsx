"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  AlertTriangle,
  Lightbulb,
  Globe,
  MousePointerClick,
  Search,
  Target,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import {
  CaseStudyRedesignComparison,
  CaseStudyAfterShowcase,
} from "@/components/sections/premium/CaseStudyRedesignComparison";
import {
  IndustryIllustration,
  getIndustryKey,
  industryGradients,
} from "@/components/illustrations/IndustryIllustrations";
import type { CaseStudy } from "@/lib/types";
import { cn } from "@/lib/utils";

function ImprovementCard({
  title,
  icon: Icon,
  items,
  index,
}: {
  title: string;
  icon: typeof Globe;
  items: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="glass-strong rounded-2xl p-6"
    >
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function CaseStudyDetailShowcase({ study }: { study: CaseStudy }) {
  const industryKey = getIndustryKey(study.industry);
  const gradient = industryGradients[industryKey];

  return (
    <>
      <section className={cn("relative overflow-hidden bg-gradient-to-br py-16 sm:py-20", gradient)}>
        <BackgroundEffects variant="subtle" />
        <Container className="relative">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-white/90 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Case Studies
          </Link>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="h-14 w-14">
                  <IndustryIllustration industry={industryKey} />
                </div>
                <Badge className="bg-white/20 text-white">{study.industry}</Badge>
              </div>
              <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">{study.title}</h1>
              <p className="mt-4 text-lg text-white/80">{study.businessOverview}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <CaseStudyAfterShowcase slug={study.slug} title={study.title} />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20">
        <BackgroundEffects variant="default" />
        <Container className="relative">
          <div className="mx-auto max-w-5xl space-y-16">
            <CaseStudyRedesignComparison slug={study.slug} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8"
            >
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" aria-hidden="true" />
                <h2 className="text-xl font-bold text-foreground">Challenges</h2>
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {study.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="flex items-start gap-2 rounded-lg border border-border bg-card/50 p-3 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" aria-hidden="true" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8"
            >
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" aria-hidden="true" />
                <h2 className="text-xl font-bold text-foreground">Strategy</h2>
              </div>
              <p className="mt-4 text-muted">{study.strategy}</p>
            </motion.div>

            <div>
              <h2 className="mb-6 text-center text-xl font-bold text-foreground">Improvement Plan</h2>
              <div className="grid gap-6 lg:grid-cols-3">
                <ImprovementCard title="Website" icon={Globe} items={study.websiteImprovements} index={0} />
                <ImprovementCard title="Conversion" icon={MousePointerClick} items={study.conversionImprovements} index={1} />
                <ImprovementCard title="SEO" icon={Search} items={study.seoImprovements} index={2} />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/5 p-8"
            >
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" aria-hidden="true" />
                <h2 className="font-semibold text-foreground">Expected Outcome</h2>
              </div>
              <p className="mt-4 text-muted">{study.expectedOutcome}</p>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
