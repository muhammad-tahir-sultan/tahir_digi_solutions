import { BackLink } from "@/components/sales-kit/BackLink";
import { DocHeader } from "@/components/sales-kit/DocHeader";
import { FillLine } from "@/components/sales-kit/FillLine";
import { BRAND } from "@/lib/brand";

export default function SalesKitProposalPage() {
  return (
    <div className="doc">
      <BackLink />
      <DocHeader
        subtitle="Website Design & Development Proposal"
        meta={
          <>
            <strong>Proposal #</strong> DBS-________
            <br />
            Date: _______________
            <br />
            Valid for 14 days
          </>
        }
      />

      <h2 className="doc-title">Project Proposal</h2>
      <p className="doc-subtitle">
        Prepared for <FillLine /> · Industry: <FillLine />
      </p>

      <section className="section two-col">
        <div>
          <p className="label">Prepared For</p>
          <p>
            <strong><FillLine variant="block" /></strong>
            Contact: <FillLine variant="block" />
            Email: <FillLine variant="block" />
            Phone: <FillLine variant="block" />
          </p>
        </div>
        <div>
          <p className="label">Prepared By</p>
          <p>
            <strong>{BRAND.name}</strong>
            <br />
            {BRAND.email}
            <br />
            {BRAND.domain}
            <br />
            Hunter: <FillLine />
          </p>
        </div>
      </section>

      <section className="section">
        <h2>1. Executive Summary</h2>
        <p>
          {BRAND.name} will design and develop a high-converting, mobile-first website for{" "}
          <FillLine />. Our goal is to increase online inquiries, improve local search visibility, and
          establish a professional digital presence that reflects the quality of your business.
        </p>
      </section>

      <section className="section">
        <h2>2. Current Challenges</h2>
        <ul>
          <li><FillLine /> (e.g. Outdated design hurting credibility)</li>
          <li><FillLine /> (e.g. Poor mobile experience)</li>
          <li><FillLine /> (e.g. Low lead generation from website)</li>
          <li><FillLine /> (e.g. Weak local SEO presence)</li>
        </ul>
      </section>

      <section className="section">
        <h2>3. Proposed Solution</h2>
        <p>Package selected: <strong>☐ Starter &nbsp; ☐ Professional &nbsp; ☐ Premium</strong></p>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Deliverable</th><th>Included</th></tr></thead>
            <tbody>
              <tr><td>Custom homepage design</td><td>✓</td></tr>
              <tr><td>Mobile-responsive development</td><td>✓</td></tr>
              <tr><td>Contact / lead capture forms</td><td>✓</td></tr>
              <tr><td>On-page SEO setup</td><td>✓</td></tr>
              <tr><td>Google Analytics integration</td><td>✓</td></tr>
              <tr><td>Pages: <FillLine /></td><td>✓</td></tr>
              <tr><td>Additional: <FillLine /></td><td>✓</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>4. Timeline</h2>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Phase</th><th>Duration</th><th>Deliverable</th></tr></thead>
            <tbody>
              <tr><td>Discovery &amp; Strategy</td><td>Week 1</td><td>Project brief, sitemap</td></tr>
              <tr><td>Design</td><td>Week 1–2</td><td>Mockups for approval</td></tr>
              <tr><td>Development</td><td>Week 2–3</td><td>Full site build</td></tr>
              <tr><td>Testing &amp; Launch</td><td>Final week</td><td>Go-live + handoff</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Estimated completion:</strong> <FillLine /> weeks from deposit received.</p>
      </section>

      <section className="section">
        <h2>5. Investment</h2>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Item</th><th>Amount</th></tr></thead>
            <tbody>
              <tr><td>Website Package (<FillLine />)</td><td>$<FillLine /></td></tr>
              <tr><td>Add-ons (if any)</td><td>$<FillLine /></td></tr>
              <tr><td><strong>Total Investment</strong></td><td><strong className="invoice-total">$<FillLine /></strong></td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Payment:</strong> 50% deposit to begin · 50% due before launch.</p>
      </section>

      <section className="section">
        <h2>6. Why {BRAND.name}</h2>
        <ul>
          <li>Specialized in local service businesses (dental, legal, accounting, real estate, physio)</li>
          <li>Conversion-focused design — every page built to generate leads</li>
          <li>Transparent process with clear timelines</li>
          <li>Post-launch support included</li>
        </ul>
      </section>

      <section className="section">
        <h2>7. Acceptance</h2>
        <p>By signing below, the client agrees to the scope, timeline, and investment outlined in this proposal.</p>
        <div className="signature-block">
          <div><div className="signature-line">Client Name &amp; Signature</div></div>
          <div><div className="signature-line">Date</div></div>
        </div>
      </section>

      <footer className="doc-footer">
        <span>{BRAND.name} — Proposal DBS-________</span>
        <span>{BRAND.email}</span>
      </footer>
    </div>
  );
}
