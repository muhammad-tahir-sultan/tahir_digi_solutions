import { BackLink } from "@/components/sales-kit/BackLink";
import { DocHeader } from "@/components/sales-kit/DocHeader";
import { BRAND } from "@/lib/brand";

export default function SalesKitCommissionPage() {
  return (
    <div className="doc">
      <BackLink />
      <DocHeader
        subtitle="Client Hunter Commission Plan"
        meta={
          <>
            <strong>Commission Structure</strong>
            {BRAND.email}
          </>
        }
      />

      <h2 className="doc-title">Client Hunter Commission Structure</h2>
      <p className="doc-subtitle">
        Simple, transparent commissions for 1–5 hunters. Paid when client payment is received — not on
        proposal sent.
      </p>

      <section className="section">
        <h2>Commission Rates (Per Closed Deal)</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Package Sold</th>
                <th>Deal Value</th>
                <th>Your Commission (15%)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Starter</td><td>$500</td><td><strong>$75</strong></td></tr>
              <tr><td>Professional</td><td>$800</td><td><strong>$120</strong></td></tr>
              <tr><td>Premium</td><td>$2,500</td><td><strong>$375</strong></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>Bonus Tiers (Monthly)</h2>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Deals Closed / Month</th><th>Bonus</th></tr></thead>
            <tbody>
              <tr><td>3 deals</td><td>+$50 bonus</td></tr>
              <tr><td>5 deals</td><td>+$150 bonus</td></tr>
              <tr><td>8+ deals</td><td>+$300 bonus + &quot;Top Hunter&quot; recognition</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>Rules</h2>
        <ol>
          <li><strong>Commission triggers on payment received</strong> — deposit or full payment, whichever comes first for that milestone.</li>
          <li><strong>Lead ownership:</strong> First hunter to log the lead in the CRM sheet owns it for 30 days.</li>
          <li><strong>Split deals:</strong> If two hunters collaborate, split 50/50 unless agreed otherwise in writing.</li>
          <li><strong>Chargebacks / refunds:</strong> Commission is reversed if client receives full refund within 14 days.</li>
          <li><strong>Payout schedule:</strong> Commissions paid every Friday for deals closed that week.</li>
          <li><strong>Add-ons:</strong> Hunter earns 10% on add-on services (maintenance, extra pages, logo).</li>
        </ol>
      </section>

      <div className="callout success">
        <p><strong>Example:</strong> Ali closes ABC Dental on Professional ($800). Client pays $400 deposit → Ali receives $60. Client pays $400 balance at launch → Ali receives $60. Total: <strong>$120</strong>.</p>
      </div>

      <section className="section">
        <h2>Hunter Agreement (Sign Below)</h2>
        <p>I understand and accept the commission structure above.</p>
        <div className="signature-block">
          <div><div className="signature-line">Hunter Name &amp; Signature</div></div>
          <div><div className="signature-line">Date</div></div>
        </div>
      </section>

      <footer className="doc-footer">
        <span>{BRAND.name} — Commission Structure</span>
        <span>{BRAND.domain}</span>
      </footer>
    </div>
  );
}
