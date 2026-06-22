"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Activity,
  AlertTriangle,
  Clock,
  MapPinOff,
  Smartphone,
  Sparkles,
  Target,
  TrendingDown,
  Zap,
} from "lucide-react";

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
    <section className="border-b border-border pb-12 pt-4">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-zinc-900/40 px-6 py-6 sm:px-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <span className="shrink-0 text-sm font-medium text-muted">
              Trusted by local businesses
            </span>
            <div className="grid flex-1 grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
              {clientLogos.map((logo, index) => (
                <motion.span
                  key={logo}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="text-sm font-semibold tracking-tight text-foreground/70"
                >
                  {logo}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const problems = [
  {
    icon: AlertTriangle,
    title: "Outdated Design",
    description: "Your website looks old and doesn't reflect the quality of your business.",
    border: "border-red-500/20",
    iconBg: "bg-red-500/15 text-red-400",
  },
  {
    icon: Smartphone,
    title: "Poor Mobile Experience",
    description: "Most visitors browse on phones — a broken mobile site means lost customers.",
    border: "border-amber-400/20",
    iconBg: "bg-amber-400/15 text-amber-400",
  },
  {
    icon: Clock,
    title: "Slow Load Times",
    description: "Every extra second of load time costs you leads and search rankings.",
    border: "border-sky-400/20",
    iconBg: "bg-sky-400/15 text-sky-400",
  },
  {
    icon: TrendingDown,
    title: "Low Conversion Rate",
    description: "Traffic without bookings or inquiries is wasted marketing spend.",
    border: "border-red-500/20",
    iconBg: "bg-red-500/15 text-red-400",
  },
  {
    icon: MapPinOff,
    title: "Weak Local Presence",
    description: "Competitors outrank you locally and capture nearby customers.",
    border: "border-red-500/20",
    iconBg: "bg-red-500/15 text-red-400",
  },
];

export function ProblemSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          badge="The Problem"
          badgeVariant="red"
          title="Is Your Website Costing You Customers?"
          description="Most local businesses struggle with the same website challenges that prevent growth."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.article
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`flow-card p-6 ${problem.border}`}
              >
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${problem.iconBg}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-foreground">{problem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{problem.description}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

const solutions = [
  {
    icon: Target,
    title: "Conversion-Focused Design",
    description: "Layouts engineered to turn visitors into booked leads.",
    iconBg: "bg-primary/20 text-primary",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Flawless experiences on every device your customers use.",
    iconBg: "bg-amber-400/15 text-amber-400",
  },
  {
    icon: Activity,
    title: "Local SEO",
    description: "Rank in your area so nearby customers find you first.",
    iconBg: "bg-emerald-500/20 text-emerald-400",
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Lightning-fast pages that keep visitors engaged and converting.",
    iconBg: "bg-amber-400/15 text-amber-400",
  },
];

export function SolutionSection() {
  return (
    <section className="border-y border-border py-16 sm:py-20">
      <Container>
        <SectionHeading
          badge="The Solution"
          badgeIcon={Sparkles}
          badgeVariant="emerald"
          title="We Don't Just Build Websites — We Build Growth Engines"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flow-card p-6 transition-transform hover:-translate-y-1"
              >
                <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${item.iconBg}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
