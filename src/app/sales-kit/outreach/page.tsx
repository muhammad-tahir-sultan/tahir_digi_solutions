import { BackLink } from "@/components/sales-kit/BackLink";
import { DocHeader } from "@/components/sales-kit/DocHeader";
import { ScriptBox } from "@/components/sales-kit/ScriptBox";
import { BRAND } from "@/lib/brand";
import { outreachScripts } from "@/lib/sales-kit/content";

export default function SalesKitOutreachPage() {
  return (
    <div className="doc">
      <BackLink />
      <DocHeader
        subtitle="Outreach Scripts Library"
        meta={
          <>
            <strong>Client Hunter Scripts</strong>
            Customize [brackets]
            <br />
            {BRAND.email}
          </>
        }
      />

      <h2 className="doc-title">Outreach Scripts</h2>
      <p className="doc-subtitle">
        Cold call, email, social DM, and follow-up templates. Replace [brackets] with real details. Log
        every contact in the Lead Sheet.
      </p>

      {outreachScripts.map((script) => (
        <section key={script.title} className="section">
          <h2>{script.title}</h2>
          {"subject" in script && script.subject ? (
            <p>
              <strong>{script.subject.split(":")[0]}:</strong>
              {script.subject.split(":").slice(1).join(":")}
            </p>
          ) : null}
          <ScriptBox subject={"subject" in script ? script.subject : undefined}>{script.body}</ScriptBox>
        </section>
      ))}

      <div className="callout no-print">
        <p>
          <strong>Rule:</strong> Every outreach → log in Lead Sheet immediately. Status: Contacted →
          Interested → Meeting → Proposal → Won/Lost.
        </p>
      </div>

      <footer className="doc-footer">
        <span>{BRAND.name} — Outreach Scripts</span>
        <span>Internal use only</span>
      </footer>
    </div>
  );
}
