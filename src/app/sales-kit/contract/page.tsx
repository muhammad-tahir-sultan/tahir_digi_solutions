import { BackLink } from "@/components/sales-kit/BackLink";
import { DocHeader } from "@/components/sales-kit/DocHeader";
import { FillLine } from "@/components/sales-kit/FillLine";
import { BRAND } from "@/lib/brand";

export default function SalesKitContractPage() {
  return (
    <div className="doc">
      <BackLink />
      <DocHeader
        subtitle="Website Services Agreement"
        meta={
          <>
            <strong>Contract #</strong> DBS-________
            <br />
            Date: _______________
          </>
        }
      />

      <h2 className="doc-title">Website Design &amp; Development Agreement</h2>
      <p className="doc-subtitle">
        This Agreement is entered into as of <FillLine /> between the parties below.
      </p>

      <section className="section two-col">
        <div>
          <p className="label">Service Provider</p>
          <p>
            <strong>{BRAND.name}</strong>
            <br />
            Email: {BRAND.email}
            <br />
            Website: {BRAND.domain}
          </p>
        </div>
        <div>
          <p className="label">Client</p>
          <p>
            <strong><FillLine variant="block" /></strong>
            Contact: <FillLine variant="block" />
            Email: <FillLine variant="block" />
            Address: <FillLine variant="block" />
          </p>
        </div>
      </section>

      <section className="section">
        <h2>1. Scope of Services</h2>
        <p>
          Provider agrees to design, develop, and deliver a website for Client as described in Proposal
          #DBS-________ dated <FillLine />, including:
        </p>
        <ul>
          <li>Package: <strong>☐ Starter &nbsp; ☐ Professional &nbsp; ☐ Premium</strong></li>
          <li>Number of pages: <FillLine /></li>
          <li>Mobile-responsive design and development</li>
          <li>Contact / lead capture forms</li>
          <li>Basic on-page SEO configuration</li>
          <li>Launch support as specified in the proposal</li>
        </ul>
        <p>Work outside this scope requires a written change order and may incur additional fees.</p>
      </section>

      <section className="section">
        <h2>2. Timeline</h2>
        <p>
          Estimated project duration: <FillLine /> weeks from receipt of deposit and all required client
          materials (logo, content, images, access credentials).
        </p>
        <p>Delays caused by late client feedback or missing content may extend the timeline without penalty to Provider.</p>
      </section>

      <section className="section">
        <h2>3. Fees &amp; Payment</h2>
        <div className="table-wrap">
          <table>
            <tbody>
              <tr><td>Total Project Fee</td><td><strong>$<FillLine /></strong></td></tr>
              <tr><td>Deposit (50%) — due to commence work</td><td>$<FillLine /></td></tr>
              <tr><td>Balance (50%) — due before launch</td><td>$<FillLine /></td></tr>
            </tbody>
          </table>
        </div>
        <p>Payment methods: Bank transfer, PayPal, or other method agreed in writing. Late payments may pause work until resolved.</p>
      </section>

      <section className="section">
        <h2>4. Client Responsibilities</h2>
        <ul>
          <li>Provide content, images, and brand assets in a timely manner</li>
          <li>Designate one point of contact for approvals</li>
          <li>Respond to feedback requests within 5 business days</li>
          <li>Provide access to domain, hosting, or third-party accounts as needed</li>
        </ul>
      </section>

      <section className="section">
        <h2>5. Revisions</h2>
        <p>Package includes <FillLine /> rounds of design revisions. Additional revisions billed at $75/hour unless otherwise agreed.</p>
      </section>

      <section className="section">
        <h2>6. Ownership &amp; License</h2>
        <p>
          Upon full payment, Client receives ownership of the final website design and content created
          specifically for this project. Provider retains the right to display the work in its portfolio
          unless Client requests otherwise in writing.
        </p>
      </section>

      <section className="section">
        <h2>7. Limitation of Liability</h2>
        <p>
          Provider&apos;s total liability shall not exceed the total fees paid under this Agreement.
          Provider is not liable for indirect, incidental, or consequential damages.
        </p>
      </section>

      <section className="section">
        <h2>8. Termination</h2>
        <p>
          Either party may terminate with 14 days written notice. Client pays for all work completed to
          date. Deposits are non-refundable once work has commenced.
        </p>
      </section>

      <section className="section">
        <h2>9. Signatures</h2>
        <p>By signing below, both parties agree to the terms of this Agreement.</p>
        <div className="signature-block">
          <div>
            <p className="label">{BRAND.name}</p>
            <div className="signature-line">Authorized Signature</div>
            <p style={{ marginTop: 8, fontSize: "0.8125rem", color: "var(--sk-muted)" }}>Name: _______________ Date: _______________</p>
          </div>
          <div>
            <p className="label">Client</p>
            <div className="signature-line">Authorized Signature</div>
            <p style={{ marginTop: 8, fontSize: "0.8125rem", color: "var(--sk-muted)" }}>Name: _______________ Date: _______________</p>
          </div>
        </div>
      </section>

      <footer className="doc-footer">
        <span>{BRAND.name} — Services Agreement</span>
        <span>{BRAND.email}</span>
      </footer>
    </div>
  );
}
