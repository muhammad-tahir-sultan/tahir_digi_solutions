"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackgroundEffects } from "@/components/visual/BackgroundEffects";
import { MotionSection } from "@/components/visual/MotionSection";

function BeforePreview() {
  return (
    <div className="flex h-full flex-col bg-slate-200 p-4" aria-hidden="true">
      <div className="mb-3 h-4 w-full bg-slate-300" />
      <div className="mb-2 h-2 w-3/4 bg-slate-300" />
      <div className="mb-2 h-2 w-full bg-slate-300" />
      <div className="mb-4 h-2 w-5/6 bg-slate-300" />
      <div className="grid flex-1 grid-cols-2 gap-2">
        <div className="bg-slate-300" />
        <div className="bg-slate-300" />
      </div>
      <div className="mt-3 text-center text-xs text-slate-500">Outdated · Slow · Not Mobile-Friendly</div>
    </div>
  );
}

function AfterPreview() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-blue-50 to-indigo-50 p-4" aria-hidden="true">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-3 w-16 rounded bg-blue-600" />
        <div className="flex gap-1">
          <div className="h-2 w-6 rounded bg-blue-200" />
          <div className="h-2 w-6 rounded bg-blue-200" />
        </div>
      </div>
      <div className="mb-2 h-3 w-2/3 rounded bg-blue-900/80" />
      <div className="mb-1 h-2 w-full rounded bg-blue-200/80" />
      <div className="mb-4 h-2 w-4/5 rounded bg-blue-200/60" />
      <div className="grid flex-1 grid-cols-3 gap-2">
        <div className="rounded-lg bg-white shadow-sm" />
        <div className="rounded-lg bg-white shadow-sm" />
        <div className="rounded-lg bg-white shadow-sm" />
      </div>
      <div className="mt-3 flex justify-center">
        <div className="rounded-full bg-blue-600 px-4 py-1 text-[10px] font-semibold text-white">
          Book Appointment
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setPosition(percent);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => setIsDragging(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(p - 5, 5));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(p + 5, 95));
  };

  return (
    <section className="relative overflow-hidden py-20">
      <BackgroundEffects variant="default" />
      <Container className="relative">
        <SectionHeading
          badge="Transformation"
          title="See the Difference a Premium Website Makes"
          description="Drag the slider to compare outdated websites with our conversion-focused redesigns."
        />

        <MotionSection className="mx-auto mt-12 max-w-4xl">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border shadow-2xl select-none"
            role="group"
            aria-label="Before and after website comparison. Use arrow keys or drag the slider."
          >
            <div className="absolute inset-0">
              <AfterPreview />
            </div>
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <BeforePreview />
            </div>

            <div
              className="absolute inset-y-0 z-10 w-1 cursor-ew-resize bg-white shadow-lg"
              style={{ left: `${position}%`, transform: "translateX(-50%)" }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="slider"
              aria-valuemin={5}
              aria-valuemax={95}
              aria-valuenow={Math.round(position)}
              aria-label="Comparison slider"
            >
              <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary shadow-lg">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="white" aria-hidden="true">
                  <path d="M5 4L1 8l4 4V4zm6 0v8l4-4-4-4z" />
                </svg>
              </div>
            </div>

            <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-red-500/90 px-3 py-1 text-xs font-semibold text-white">
              Before
            </div>
            <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white">
              After
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Load Time", before: "8.2s", after: "1.4s" },
              { label: "Mobile Score", before: "42", after: "98" },
              { label: "Monthly Leads", before: "12", after: "47" },
            ].map((metric) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-4 text-center"
              >
                <p className="text-sm font-medium text-muted">{metric.label}</p>
                <div className="mt-2 flex items-center justify-center gap-3">
                  <span className="text-sm text-red-500 line-through">{metric.before}</span>
                  <span className="text-lg font-bold text-emerald-600">{metric.after}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}
