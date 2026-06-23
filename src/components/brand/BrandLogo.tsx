import { useId } from "react";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

function BrandLogoMark({
  size = 36,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const gradientId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="6" y1="4" x2="30" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#155dfc" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="9" fill={`url(#${gradientId})`} />
      <rect x="8" y="21" width="3.5" height="7" rx="1.25" fill="white" fillOpacity="0.85" />
      <rect x="13.25" y="17" width="3.5" height="11" rx="1.25" fill="white" fillOpacity="0.92" />
      <rect x="18.5" y="13" width="3.5" height="15" rx="1.25" fill="white" />
      <path
        d="M23.5 11.5L27.5 8.5L27.5 12.5L31 12.5L27 16.5"
        stroke="white"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="11" r="2.25" fill="#34d399" />
      <circle cx="10" cy="11" r="1" fill="white" fillOpacity="0.9" />
    </svg>
  );
}

export function BrandLogo({
  variant = "inline",
  markSize = 36,
  className,
  showTagline = false,
}: {
  variant?: "mark" | "inline" | "stacked";
  markSize?: number;
  className?: string;
  showTagline?: boolean;
}) {
  if (variant === "mark") {
    return <BrandLogoMark size={markSize} className={className} />;
  }

  if (variant === "stacked") {
    return (
      <div className={cn("flex items-start gap-3", className)}>
        <BrandLogoMark size={markSize} />
        <div>
          <p className="font-bold leading-tight text-foreground">{BRAND.name}</p>
          {(showTagline || variant === "stacked") && (
            <p className="mt-0.5 text-xs text-muted">{BRAND.tagline}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <BrandLogoMark size={markSize} />
      <div className="min-w-0 leading-tight">
        <p className="truncate text-sm font-bold tracking-tight text-foreground sm:text-[15px]">
          <span className="text-primary">Digi</span>{" "}
          <span className="hidden sm:inline">Business </span>Solutions
        </p>
        {showTagline && (
          <p className="hidden text-[11px] text-muted md:block">{BRAND.tagline}</p>
        )}
      </div>
    </div>
  );
}
