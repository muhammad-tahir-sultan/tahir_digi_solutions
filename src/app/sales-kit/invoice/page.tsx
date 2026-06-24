import { BackLink } from "@/components/sales-kit/BackLink";
import { DocHeader } from "@/components/sales-kit/DocHeader";
import { FillLine } from "@/components/sales-kit/FillLine";
import { BRAND } from "@/lib/brand";

export default function SalesKitInvoicePage() {
  return (
    <div className="doc">
      <BackLink />
      <DocHeader
        subtitle={BRAND.tagline}
        meta={
          <>
            <strong>INVOICE</strong>
            #DBS-INV-________
            <br />
            Date: _______________
            <br />
            Due: _______________
          </>
        }
      />

      <section className="section two-col" style={{ marginTop: 24 }}>
        <div>
          <p className="label">Bill To</p>
          <p>
            <strong><FillLine variant="block" /></strong>
            <FillLine variant="block" />
            <FillLine variant="block" />
            Email: <FillLine variant="block" />
          </p>
        </div>
        <div>
          <p className="label">From</p>
          <p>
            <strong>{BRAND.name}</strong>
            <br />
            {BRAND.email}
            <br />
            {BRAND.domain}
            <br />
            Payment ref: DBS-INV-________
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Invoice Details</h2>
        <div className="table-wrap">
          <table className="invoice-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Website Package — <FillLine variant="wide" /></strong>
                  <br />
                  <span style={{ fontSize: "0.8125rem", color: "var(--sk-muted)" }}>
                    Deposit / Balance / Full payment — Contract DBS-________
                  </span>
                </td>
                <td>1</td>
                <td>$<FillLine /></td>
                <td>$<FillLine /></td>
              </tr>
              <tr>
                <td><FillLine variant="block" /> (add-on if applicable)</td>
                <td>1</td>
                <td>$<FillLine /></td>
                <td>$<FillLine /></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 24, display: "flex", justifyContent: "flex-end" }}>
          <div style={{ minWidth: 360, width: "40%" }}>
            <div className="table-wrap">
              <table className="invoice-summary">
                <tbody>
                  <tr><td>Subtotal</td><td style={{ textAlign: "right" }}>$<FillLine /></td></tr>
                  <tr><td>Tax (if applicable)</td><td style={{ textAlign: "right" }}>$<FillLine /></td></tr>
                  <tr>
                    <td><strong>Total Due</strong></td>
                    <td style={{ textAlign: "right" }}><strong className="invoice-total">$<FillLine /></strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Payment Instructions</h2>
        <div className="callout">
          <p>
            <strong>Bank Transfer / PayPal:</strong> Contact {BRAND.email} for payment details.
            <br />
            <strong>Reference:</strong> DBS-INV-________ — [Client Business Name]
            <br />
            <strong>Note:</strong> Please send payment confirmation to {BRAND.email}
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Payment Status</h2>
        <p>☐ Unpaid &nbsp;&nbsp; ☐ Partially Paid ($_______) &nbsp;&nbsp; ☐ Paid in Full &nbsp;&nbsp; Date Paid: _______________</p>
      </section>

      <div className="callout success">
        <p>
          Thank you for choosing {BRAND.name}. We look forward to helping <FillLine variant="wide" /> grow
          online.
        </p>
      </div>

      <footer className="doc-footer">
        <span>Invoice #DBS-INV-________ — {BRAND.name}</span>
        <span>{BRAND.email}</span>
      </footer>
    </div>
  );
}
