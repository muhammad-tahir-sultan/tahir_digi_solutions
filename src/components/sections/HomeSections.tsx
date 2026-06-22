"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";

const clientLogos = [
  "Bright Smile Dental",
  "Rodriguez Law",
  "Chen Realty",
  "Thompson Accounting",
  "Active Life Physio",
  "Summit Legal Group",
];

export function ClientLogosSection() {
  return (
    <section className="relative overflow-hidden border-b border-border py-12">
      <BackgroundEffects variant="subtle" />
      <Container className="relative">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted">
          Trusted by local businesses
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass flex h-16 items-center justify-center rounded-xl px-4 text-center text-xs font-semibold text-muted"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const problems = [
  "Outdated website that doesn't reflect your quality",
  "Poor mobile experience losing potential customers",
  "Slow website driving visitors away",
  "Low lead generation despite having traffic",
  "Weak online presence compared to competitors",
];

export function ProblemSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          badge="The Problem"
          title="Is Your Website Costing You Customers?"
          description="Most local businesses struggle with the same website challenges that prevent growth."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <motion.div
              key={problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900/50 dark:bg-red-950/20"
            >
              <p className="text-sm font-medium text-red-700 dark:text-red-400">
                {problem}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const solutions = [
  {
    title: "Conversion-Focused Design",
    description: "Every page is designed with clear paths to generate leads, bookings, and inquiries.",
  },
  {
    title: "Mobile-First Experience",
    description: "Your customers search on phones. We ensure your site performs flawlessly on every device.",
  },
  {
    title: "Local SEO Foundation",
    description: "Built-in SEO architecture helps local customers find your business when they search.",
  },
  {
    title: "Performance Optimized",
    description: "Fast-loading websites that keep visitors engaged and improve search rankings.",
  },
];

export function SolutionSection() {
  return (
    <section className="border-y border-border bg-secondary/30 py-20">
      <Container>
        <SectionHeading
          badge="The Solution"
          title="We Don't Just Build Websites — We Build Growth Engines"
          description="Digital Solutions partners with local businesses to create websites that attract customers and convert visitors into paying clients."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {solutions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
