import { cn } from "@/lib/utils";

type FillLineProps = {
  variant?: "block" | "wide";
  className?: string;
};

export function FillLine({ variant, className }: FillLineProps) {
  return (
    <span
      className={cn(
        "fill-line",
        variant === "block" && "fill-line--block",
        variant === "wide" && "fill-line--wide",
        className
      )}
      aria-hidden="true"
    >
      &nbsp;
    </span>
  );
}
