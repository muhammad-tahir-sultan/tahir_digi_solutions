import { BackLink } from "@/components/sales-kit/BackLink";
import { DocHeader } from "@/components/sales-kit/DocHeader";
import { BRAND } from "@/lib/brand";
import { pricingPackages } from "@/lib/sales-kit/content";
import { cn } from "@/lib/utils";

export default function SalesKitPricingPage() {
  return (
    <div className="doc">
      <BackLink />
      <DocHeader
        subtitle={BRAND.tagline}
        meta={
          <>
            <strong>Pricing Sheet</strong>
            Effective: _______________
            <br />
            {BRAND.email}
          </>
        }
      />

      <h2 className="doc-title">Website Packages &amp; Pricing</h2>
      <p className="doc-subtitle">
        Transparent pricing for local businesses — dentists, law firms, accountants, real estate, and
        physiotherapy clinics.
      </p>

      <div className="pricing-grid">
        {pricingPackages.map((pkg) => (
          <div key={pkg.name} className={cn("price-card", pkg.featured && "featured")}>
            <div className="price-card-header">
              <h3>{pkg.name}</h3>
              <div className="price-amount">{pkg.price}</div>
              <div className="price-timeline">{pkg.timeline}</div>
            </div>
            <div className="price-card-body">
              <p style={{ fontSize: "0.8125rem", color: "var(--sk-muted)", marginBottom: 12 }}>
                {pkg.description}
              </p>
              <ul>
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <section className="section">
        <h2>Package Comparison</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Starter</th>
                <th>Professional</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Investment</td><td>$500</td><td>$800</td><td>$2,500</td></tr>
              <tr><td>Timeline</td><td>2–3 weeks</td><td>3–4 weeks</td><td>8–12 weeks</td></tr>
              <tr><td>Custom Pages</td><td>Up to 5</td><td>Up to 10</td><td>Unlimited</td></tr>
              <tr><td>Mobile Optimized</td><td>✓</td><td>✓</td><td>✓</td></tr>
              <tr><td>Contact / Lead Forms</td><td>✓</td><td>✓</td><td>✓</td></tr>
              <tr><td>On-Page SEO</td><td>Basic</td><td>Foundation</td><td>Comprehensive</td></tr>
              <tr><td>Conversion Optimization</td><td>—</td><td>✓</td><td>Advanced</td></tr>
              <tr><td>Integrations (Booking, CRM)</td><td>—</td><td>—</td><td>✓</td></tr>
              <tr><td>Post-Launch Support</td><td>30 days</td><td>90 days</td><td>6 months</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>Add-On Services (Optional)</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Service</th><th>Price</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td>Free Website Audit</td><td>Free</td><td>Lead generation tool — always offer first</td></tr>
              <tr><td>Extra Page</td><td>$75/page</td><td>Beyond package limit</td></tr>
              <tr><td>Logo Design</td><td>$150</td><td>3 concepts, 2 revisions</td></tr>
              <tr><td>Monthly Maintenance</td><td>$99/mo</td><td>Updates, backups, minor edits</td></tr>
              <tr><td>Google Business Profile Setup</td><td>$200</td><td>Local SEO boost</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="callout">
        <p>
          <strong>Payment terms:</strong> 50% deposit to start · 50% before launch. Custom quotes available
          for projects outside standard packages.
        </p>
      </div>

      <footer className="doc-footer">
        <span>{BRAND.name} — Pricing Sheet</span>
        <span>{BRAND.email}</span>
      </footer>
    </div>
  );
}
