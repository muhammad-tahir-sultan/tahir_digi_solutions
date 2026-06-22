"use client";

import { motion, useReducedMotion } from "framer-motion";

export function BackgroundEffects({ variant = "default" }: { variant?: "default" | "hero" | "subtle" }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="noise-overlay absolute inset-0 opacity-[0.35]" />

      {variant === "hero" && (
        <>
          <div className="mesh-gradient absolute inset-0 opacity-60" />
          <motion.div
            className="gradient-blob absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
            animate={reduceMotion ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="gradient-blob absolute -right-24 top-40 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
            animate={reduceMotion ? undefined : { x: [0, -25, 0], y: [0, 25, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="gradient-blob absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl"
            animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {variant === "default" && (
        <>
          <div className="mesh-gradient absolute inset-0 opacity-40" />
          <motion.div
            className="gradient-blob absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
            animate={reduceMotion ? undefined : { x: [0, -15, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="gradient-blob absolute -left-16 bottom-1/4 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
            animate={reduceMotion ? undefined : { y: [0, 15, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {variant === "subtle" && (
        <div className="mesh-gradient absolute inset-0 opacity-25" />
      )}

      {!reduceMotion && (
        <>
          <motion.div
            className="absolute right-[15%] top-[20%] h-3 w-3 rounded-full bg-primary/40"
            animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute left-[10%] top-[60%] h-2 w-2 rounded-full bg-accent/50"
            animate={{ y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute right-[30%] bottom-[25%] h-4 w-4 rotate-45 border border-primary/20 bg-primary/5"
            animate={{ rotate: [45, 90, 45] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </>
      )}
    </div>
  );
}
