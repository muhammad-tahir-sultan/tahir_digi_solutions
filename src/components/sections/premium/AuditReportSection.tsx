"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import { AuditIllustration } from "@/components/illustrations/IndustryIllustrations";
import { cn } from "@/lib/utils";
import { MotionSection } from "@/components/visual/MotionSection";

const auditItems = [
  { category: "Mobile Experience", score: 42, status: "critical" as const, issue: "Not mobile-responsive" },
  { category: "Page Speed", score: 38, status: "critical" as const, issue: "Load time over 5 seconds" },
  { category: "SEO Foundation", score: 55, status: "warning" as const, issue: "Missing meta descriptions" },
  { category: "Conversion Paths", score: 48, status: "warning" as const, issue: "Weak call-to-action placement" },
  { category: "Security", score: 72, status: "good" as const, issue: "SSL enabled" },
  { category: "Accessibility", score: 61, status: "warning" as const, issue: "Missing alt text on images" },
];

function ScoreBar({ score, status }: { score: number; status: "critical" | "warning" | "good" }) {
  const colors = {
    critical: "bg-red-500",
    warning: "bg-amber-500",
    good: "bg-emerald-500",
  };

  return (
    <div className="h-2 overflow-hidden rounded-full bg-border">
      <motion.div
        className={cn("h-full rounded-full", colors[status])}
        initial={{ width: 0 }}
        whileInView={{ width: `${score}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}

export function AuditReportSection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary/30 py-20">
      <BackgroundEffects variant="subtle" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              badge="Free Audit"
              title="See Exactly What's Holding Your Website Back"
              description="Our comprehensive audit covers mobile experience, speed, SEO, conversions, and security — delivered in a clear, actionable report."
            />
            <MotionSection className="mt-8">
              <Button href="/free-audit" size="lg">
                Get Your Free Audit
                <ArrowRight className="h-4 w-4" />
              </Button>
            </MotionSection>
          </div>

          <MotionSection delay={0.15}>
            <div className="glass-strong overflow-hidden rounded-2xl shadow-xl">
              <div className="flex items-center justify-between border-b border-border bg-primary/5 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10">
                    <AuditIllustration />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Website Audit Report</p>
                    <p className="text-xs text-muted">Sample preview · yourbusiness.com</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-500">52</p>
                  <p className="text-xs text-muted">Overall Score</p>
                </div>
              </div>

              <div className="space-y-4 p-6">
                {auditItems.map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="rounded-xl border border-border bg-card/50 p-4"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {item.status === "good" ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                        ) : (
                          <AlertTriangle
                            className={`h-4 w-4 ${item.status === "critical" ? "text-red-500" : "text-amber-500"}`}
                            aria-hidden="true"
                          />
                        )}
                        <span className="text-sm font-medium text-foreground">{item.category}</span>
                      </div>
                      <span className="text-sm font-bold text-foreground">{item.score}/100</span>
                    </div>
                    <ScoreBar score={item.score} status={item.status} />
                    <p className="mt-2 text-xs text-muted">{item.issue}</p>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-border bg-emerald-500/5 px-6 py-4">
                <p className="text-sm text-muted">
                  <span className="font-semibold text-emerald-600">4 critical issues</span> found.
                  Fix these to unlock an estimated{" "}
                  <span className="font-semibold text-foreground">+120% more leads</span>.
                </p>
              </div>
            </div>
          </MotionSection>
        </div>
      </Container>
    </section>
  );
}
