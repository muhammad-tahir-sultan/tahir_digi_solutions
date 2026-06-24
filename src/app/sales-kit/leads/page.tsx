import { BackLink } from "@/components/sales-kit/BackLink";
import { DocHeader } from "@/components/sales-kit/DocHeader";
import { FillLine } from "@/components/sales-kit/FillLine";
import { LeadSheetClient } from "@/components/sales-kit/LeadSheetClient";
import { BRAND } from "@/lib/brand";

export default function SalesKitLeadsPage() {
  return (
    <div className="doc doc--wide">
      <BackLink />
      <DocHeader
        subtitle="Minimum Viable CRM — Lead Sheet"
        meta={
          <>
            <strong>Lead Tracker</strong>
            Month: _______________
            <br />
            {BRAND.email}
          </>
        }
      />

      <h2 className="doc-title">Client Hunter Lead Sheet</h2>
      <p className="doc-subtitle">
        Shuru mein itni badi CRM ki zarurat nahi. Agar 1–5 client hunters hain to yehi sheet kaafi hai.
        Simplicity = better adoption.
      </p>

      <div className="callout no-print">
        <p>
          <strong>Status values:</strong> New → Contacted → Interested → Meeting → Proposal → Won → Lost.
          Click any cell to edit in browser, or download Excel template below.
        </p>
      </div>

      <LeadSheetClient />

      <section className="section">
        <h2>Status Legend</h2>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Status</th><th>Meaning</th><th>Next Action</th></tr></thead>
            <tbody>
              <tr><td><span className="status status-new">New</span></td><td>Lead identified, not yet contacted</td><td>Send first outreach within 48 hrs</td></tr>
              <tr><td><span className="status status-contacted">Contacted</span></td><td>Initial message or call made</td><td>Follow up in 3–5 days</td></tr>
              <tr><td><span className="status status-interested">Interested</span></td><td>Showed interest, needs more info</td><td>Send audit or case study</td></tr>
              <tr><td><span className="status status-meeting">Meeting</span></td><td>Call or meeting scheduled</td><td>Prepare pitch + proposal</td></tr>
              <tr><td><span className="status status-proposal">Proposal</span></td><td>Proposal sent, awaiting decision</td><td>Follow up on agreed date</td></tr>
              <tr><td><span className="status status-won">Won</span></td><td>Deal closed — deposit received</td><td>Hand off to delivery team</td></tr>
              <tr><td><span className="status status-lost">Lost</span></td><td>Not proceeding</td><td>Log reason in Notes</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section two-col">
        <div>
          <h2>Pipeline Summary</h2>
          <div className="table-wrap">
            <table>
              <tbody>
                <tr><td>Total Leads</td><td>_______</td></tr>
                <tr><td>Active (not Lost)</td><td>_______</td></tr>
                <tr><td>Proposals Out</td><td>_______</td></tr>
                <tr><td>Won This Month</td><td>_______</td></tr>
                <tr><td>Pipeline Value</td><td>$_______</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2>Hunter Performance</h2>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Hunter</th><th>Leads</th><th>Won</th><th>Value</th></tr></thead>
              <tbody>
                <tr><td>Ali</td><td>___</td><td>___</td><td>$___</td></tr>
                <tr><td><FillLine /></td><td>___</td><td>___</td><td>$___</td></tr>
                <tr><td><FillLine /></td><td>___</td><td>___</td><td>$___</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="doc-footer">
        <span>{BRAND.name} — Lead Sheet CRM</span>
        <span>Print fresh copy monthly or duplicate rows in Excel</span>
      </footer>
    </div>
  );
}
