"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionSection } from "@/components/visual/MotionSection";
import { flowstepImages } from "@/lib/flowstep-assets";

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
    <section className="relative overflow-hidden py-16 sm:py-20">
      <Container className="relative">
        <SectionHeading
          badge="Transformation"
          badgeVariant="emerald"
          title="See the Difference a Premium Website Makes"
          description="Drag the slider to compare outdated websites with our conversion-focused redesigns."
        />

        <MotionSection className="mx-auto mt-10 max-w-4xl">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] select-none overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            role="group"
            aria-label="Before and after website comparison. Use arrow keys or drag the slider."
          >
            <Image
              src={flowstepImages.beforeAfter.after}
              alt="After website redesign"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src={flowstepImages.beforeAfter.before}
                alt="Before website redesign"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 896px) 100vw, 896px"
              />
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
                className="flow-card p-4 text-center"
              >
                <p className="text-sm font-medium text-muted">{metric.label}</p>
                <div className="mt-2 flex items-center justify-center gap-3">
                  <span className="text-sm text-red-400 line-through">{metric.before}</span>
                  <span className="text-lg font-bold text-emerald-400">{metric.after}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}
