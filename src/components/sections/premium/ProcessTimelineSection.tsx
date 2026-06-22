"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import { GrowthIllustration } from "@/components/illustrations/IndustryIllustrations";

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
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary/30 py-20">
      <BackgroundEffects variant="subtle" />
      <Container className="relative">
        {showHeading && (
          <SectionHeading badge={badge} title={title} description={description} />
        )}

        <div className={`relative mx-auto max-w-3xl ${showHeading ? "mt-16" : ""}`}>
          <div
            className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
                className="relative flex gap-6 md:gap-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.15, type: "spring", stiffness: 200 }}
                  className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-700 text-lg font-bold text-white shadow-lg shadow-primary/25"
                >
                  {step.number}
                  {!reduceMotion && index < steps.length - 1 && (
                    <motion.div
                      className="absolute -bottom-8 left-1/2 h-8 w-px bg-primary/30 md:hidden"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    />
                  )}
                </motion.div>

                <motion.div whileHover={{ x: 4 }} className="glass-strong flex-1 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 hidden justify-center lg:flex"
            aria-hidden="true"
          >
            <div className="h-24 w-48">
              <GrowthIllustration />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
