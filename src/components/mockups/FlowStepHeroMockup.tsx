"use client";

import Image from "next/image";
import { Gauge, TrendingUp } from "lucide-react";
import { flowstepImages } from "@/lib/flowstep-assets";
import { cn } from "@/lib/utils";

export function FlowStepHeroMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(21,93,252,0.35),transparent_65%)] blur-3xl" />

      <div className="relative">
        <div className="rounded-t-xl border border-white/10 bg-zinc-900 p-2 shadow-2xl">
          <div className="flex items-center gap-1.5 px-2 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="overflow-hidden rounded-lg bg-zinc-950">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
              <span className="text-xs font-bold text-neutral-50">Bright Smile Dental</span>
              <div className="flex items-center gap-3 text-[10px] text-muted">
                <span>Services</span>
                <span>About</span>
                <span className="rounded-sm bg-primary px-2 py-1 font-semibold text-white">
                  Book Now
                </span>
              </div>
            </div>
            <div className="relative h-40 sm:h-44">
              <Image
                src={flowstepImages.hero.dentalDesktop}
                alt="Modern dental clinic website preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center gap-1.5 p-4">
                <span className="text-sm font-bold text-white">Your Healthiest Smile Starts Here</span>
                <span className="text-[9px] text-white/70">Trusted family & cosmetic dentistry</span>
                <span className="w-fit rounded-sm bg-primary px-2 py-1 text-[9px] font-semibold text-white">
                  Book Appointment
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 p-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-md bg-zinc-900 p-2">
                  <div className={cn("mb-1 h-4 w-4 rounded-sm", i === 0 ? "bg-primary/30" : i === 1 ? "bg-emerald-500/30" : "bg-amber-400/30")} />
                  <div className="h-1.5 w-full rounded-sm bg-zinc-800" />
                  <div className="mt-1 h-1.5 w-2/3 rounded-sm bg-zinc-800" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto h-3 w-[108%] -translate-x-[4%] rounded-b-xl bg-zinc-800 shadow-xl" />

        <div className="absolute -bottom-6 right-2 w-28 rounded-xl border border-white/10 bg-zinc-900 p-1.5 shadow-2xl sm:w-32">
          <div className="overflow-hidden rounded-lg bg-zinc-950">
            <div className="relative h-28">
              <Image
                src={flowstepImages.hero.dentalMobile}
                alt="Dental clinic mobile preview"
                fill
                className="object-cover"
                sizes="128px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent" />
              <div className="absolute inset-x-2 bottom-2">
                <span className="block text-[8px] font-bold text-white">Bright Smile</span>
                <span className="mt-1 block w-fit rounded-sm bg-primary px-1.5 py-0.5 text-[7px] text-white">
                  Book
                </span>
              </div>
            </div>
            <div className="space-y-1 p-2">
              <div className="h-1.5 w-full rounded-sm bg-zinc-800" />
              <div className="h-1.5 w-3/4 rounded-sm bg-zinc-800" />
            </div>
          </div>
        </div>

        <div className="absolute -left-4 top-8 flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/80 px-3 py-2.5 shadow-2xl backdrop-blur-md">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20">
            <TrendingUp className="h-4 w-4 text-emerald-400" aria-hidden="true" />
          </div>
          <div>
            <div className="text-base font-bold leading-6 text-emerald-400">+147%</div>
            <div className="text-[10px] text-muted">Leads</div>
          </div>
        </div>

        <div className="absolute -left-2 bottom-2 flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/80 px-3 py-2.5 shadow-2xl backdrop-blur-md">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/15">
            <Gauge className="h-4 w-4 text-amber-400" aria-hidden="true" />
          </div>
          <div>
            <div className="text-base font-bold leading-6 text-amber-400">96/100</div>
            <div className="text-[10px] text-muted">Speed Score</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FlowStepBrowserFrame({
  title,
  image,
  imageAlt,
  className,
}: {
  title: string;
  image: string;
  imageAlt: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-2xl", className)}>
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/80" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="ml-2 truncate text-[10px] text-muted">{title}</span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    </div>
  );
}

export function FlowStepMobileFrame({
  image,
  imageAlt,
  className,
}: {
  image: string;
  imageAlt: string;
  className?: string;
}) {
  return (
    <div className={cn("w-24 overflow-hidden rounded-xl border border-white/10 bg-zinc-900 p-1 shadow-xl sm:w-28", className)}>
      <div className="overflow-hidden rounded-lg bg-zinc-950">
        <div className="relative aspect-[9/16]">
          <Image src={image} alt={imageAlt} fill className="object-cover" sizes="112px" />
        </div>
      </div>
    </div>
  );
}
