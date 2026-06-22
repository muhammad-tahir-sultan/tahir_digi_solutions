"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const auditItems = [
  { category: "Mobile", score: 38, status: "critical" as const, label: "Critical" },
  { category: "Speed", score: 45, status: "warning" as const, label: "Needs Work" },
  { category: "SEO", score: 61, status: "warning" as const, label: "Needs Work" },
  { category: "Conversion", score: 42, status: "critical" as const, label: "Critical" },
  { category: "Security", score: 78, status: "good" as const, label: "Good" },
  { category: "Accessibility", score: 55, status: "warning" as const, label: "Needs Work" },
];

const statusColors = {
  critical: "text-red-400 bg-red-400",
  warning: "text-amber-400 bg-amber-400",
  good: "text-emerald-400 bg-emerald-400",
};

export function AuditReportSection() {
  return (
    <section className="border-y border-border py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-8">
          <SectionHeading
            badge="Free Audit"
            badgeVariant="amber"
            title="See Exactly What's Holding Your Website Back"
          />

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flow-card w-full max-w-3xl p-8"
          >
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#f87171_52%,#27272a_0)]">
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-zinc-900">
                  <span className="text-2xl font-bold text-red-400">52</span>
                  <span className="text-[10px] text-muted">/100</span>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                  Website Audit Score
                </p>
                <p className="text-3xl font-bold text-foreground">52/100</p>
                <p className="text-sm text-red-400">Significant improvements needed</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {auditItems.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{item.category}</span>
                    <span className={cn("font-semibold", statusColors[item.status].split(" ")[0])}>
                      {item.score}/100 · {item.label}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                    <motion.div
                      className={cn("h-full rounded-full", statusColors[item.status].split(" ")[1])}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.article>

          <Button href="/free-audit" size="lg" className="flow-glow font-semibold">
            <Search className="h-5 w-5" />
            Get Your Free Audit
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
