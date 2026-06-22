import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const variants = {
  primary: "border-primary/30 bg-primary/10 text-blue-400",
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  amber: "border-amber-400/30 bg-amber-400/10 text-amber-400",
  red: "border-red-500/30 bg-red-500/10 text-red-400",
  sky: "border-sky-500/30 bg-sky-500/10 text-sky-400",
};

export function SectionBadge({
  children,
  icon: Icon,
  variant = "primary",
  className,
}: {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest",
        variants[variant],
        className
      )}
    >
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      {children}
    </span>
  );
}
