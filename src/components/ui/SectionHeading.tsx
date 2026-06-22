import { cn } from "@/lib/utils";
import { SectionBadge } from "@/components/ui/SectionBadge";
import type { LucideIcon } from "lucide-react";

export function SectionHeading({
  badge,
  badgeIcon,
  badgeVariant = "primary",
  title,
  description,
  align = "center",
  className,
}: {
  badge?: string;
  badgeIcon?: LucideIcon;
  badgeVariant?: "primary" | "emerald" | "amber" | "red" | "sky";
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <SectionBadge icon={badgeIcon} variant={badgeVariant} className="mb-4">
          {badge}
        </SectionBadge>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
