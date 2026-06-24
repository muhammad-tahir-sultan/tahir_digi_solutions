import type { Metadata } from "next";
import "@/styles/sales-kit.css";
import { SalesKitProtection } from "@/components/sales-kit/SalesKitProtection";

export const metadata: Metadata = {
  title: "Sales Kit | Digi Business Solutions",
  robots: { index: false, follow: false },
};

export default function SalesKitLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sales-kit-root">
      <SalesKitProtection />
      {children}
    </div>
  );
}
