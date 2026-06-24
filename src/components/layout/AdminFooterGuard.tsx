"use client";

import { usePathname } from "next/navigation";

export function AdminFooterGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/admin") || pathname.startsWith("/sales-kit")) return null;
  return <>{children}</>;
}
