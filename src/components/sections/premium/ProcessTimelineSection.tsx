"use client";

import { motion } from "framer-motion";
import {
  Code2,
  GitBranch,
  Lightbulb,
  PenTool,
  Rocket,
  Search,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const defaultProcessSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and current online presence.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Site structure, conversion paths, and a clear project roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description: "Custom mockups tailored to your industry and brand identity.",
  },
  {
    number: "04",
    title: "Development",
    description: "Clean code, mobile optimization, and SEO foundations built in.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Thorough testing, analytics setup, and a smooth go-live.",
  },
  {
    number: "06",
    title: "Growth",
    description: "Ongoing support and optimization to keep leads flowing.",
  },
];

export const detailedProcessSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your business, goals, target customers, and current online presence through a detailed discovery call.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We create a strategic plan including site structure, conversion paths, content requirements, and project timeline.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our team creates custom designs focused on your brand, industry, and conversion goals for your approval.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build your website with clean code, mobile optimization, SEO foundations, and performance best practices.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "After thorough testing, we launch your site with analytics, forms, and tracking configured for success.",
  },
  {
    number: "06",
    title: "Support",
    description:
      "We provide post-launch support, performance monitoring, and ongoing optimization to keep your site growing.",
  },
];

const stepIcons: Record<string, LucideIcon> = {
  Discovery: Search,
  Strategy: Lightbulb,
  Planning: Lightbulb,
  Design: PenTool,
  Development: Code2,
  Launch: Rocket,
  Growth: TrendingUp,
  Support: TrendingUp,
};

export function ProcessTimelineSection({
  steps = defaultProcessSteps,
  showHeading = true,
  badge = "Our Process",
  title = "From First Call to First Lead",
  description = "A proven six-step process that delivers premium websites on time and on strategy.",
}: {
  steps?: ProcessStep[];
  showHeading?: boolean;
  badge?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-y border-border py-16 sm:py-20">
      <Container>
        {showHeading && (
          <SectionHeading
            badge={badge}
            badgeIcon={GitBranch}
            badgeVariant="sky"
            title={title}
            description={description}
          />
        )}

        <div className={`relative mx-auto max-w-3xl ${showHeading ? "mt-12" : ""}`}>
          <div
            className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-sky-400 to-primary shadow-[0_0_20px_2px_rgba(21,93,252,0.4)]"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const Icon = stepIcons[step.title] ?? Search;
              const stepNum = parseInt(step.number, 10) || index + 1;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="flex items-center gap-4 sm:gap-6"
                >
                  <div className={`hidden flex-1 sm:block ${!isLeft ? "order-3" : ""}`}>
                    {isLeft && (
                      <article className="flow-card p-4 backdrop-blur-sm">
                        <div className="flex flex-col items-end gap-0.5 text-right">
                          <span className="flex items-center gap-1.5 text-base font-bold text-foreground">
                            {step.title}
                            <Icon className="h-4 w-4 text-sky-400" aria-hidden="true" />
                          </span>
                          <span className="text-xs leading-relaxed text-muted">{step.description}</span>
                        </div>
                      </article>
                    )}
                  </div>

                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-sky-400 text-base font-bold text-white shadow-lg shadow-primary/40">
                    {stepNum}
                  </div>

                  <div className={`flex-1 ${isLeft ? "sm:hidden" : ""}`}>
                    {!isLeft ? (
                      <article className="flow-card p-4 backdrop-blur-sm">
                        <div className="flex flex-col gap-0.5">
                          <span className="flex items-center gap-1.5 text-base font-bold text-foreground">
                            <Icon className="h-4 w-4 text-sky-400" aria-hidden="true" />
                            {step.title}
                          </span>
                          <span className="text-xs leading-relaxed text-muted">{step.description}</span>
                        </div>
                      </article>
                    ) : (
                      <article className="flow-card p-4 backdrop-blur-sm sm:hidden">
                        <div className="flex flex-col gap-0.5">
                          <span className="flex items-center gap-1.5 text-base font-bold text-foreground">
                            <Icon className="h-4 w-4 text-sky-400" aria-hidden="true" />
                            {step.title}
                          </span>
                          <span className="text-xs leading-relaxed text-muted">{step.description}</span>
                        </div>
                      </article>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
