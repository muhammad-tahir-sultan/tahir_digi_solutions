import Link from "next/link";
import { DocHeader } from "@/components/sales-kit/DocHeader";
import { BRAND } from "@/lib/brand";
import { salesKitHub } from "@/lib/sales-kit/content";

export default function SalesKitHubPage() {
  return (
    <div className="doc">
      <DocHeader
        subtitle={BRAND.tagline}
        meta={
          <>
            <strong>Sales &amp; Operations Kit</strong>
            {BRAND.email}
            <br />
            {BRAND.domain}
          </>
        }
      />

      <h2 className="doc-title">Client Hunter Toolkit</h2>
      <p className="doc-subtitle">
        Professional templates for pricing, outreach, proposals, contracts, invoicing, and lead tracking.
        Open any document → edit in browser → Print to PDF (Ctrl+P).
      </p>

      <div className="callout success no-print">
        <p>
          <strong>How to use:</strong> Click a document below. Use your browser&apos;s{" "}
          <em>Print → Save as PDF</em> to export. All fields marked with underscores can be filled before
          printing.
        </p>
      </div>

      <div className="hub-grid">
        {salesKitHub.map((item) => (
          <div key={item.href} className="hub-card">
            <span className="hub-badge">{item.badge}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link href={item.href}>Open document →</Link>
          </div>
        ))}
      </div>

      <footer className="doc-footer">
        <span>© {BRAND.name} — Internal Use</span>
        <span>{BRAND.domain}</span>
      </footer>
    </div>
  );
}
