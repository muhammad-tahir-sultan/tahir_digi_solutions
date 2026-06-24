import { BackLink } from "@/components/sales-kit/BackLink";
import { DocHeader } from "@/components/sales-kit/DocHeader";
import { ScriptBox } from "@/components/sales-kit/ScriptBox";
import { BRAND } from "@/lib/brand";

export default function SalesKitSalesPitchPage() {
  return (
    <div className="doc">
      <BackLink />
      <DocHeader
        subtitle="Sales Pitch Document"
        meta={
          <>
            <strong>For Client Hunters</strong>
            Use on calls &amp; meetings
            <br />
            {BRAND.domain}
          </>
        }
      />

      <h2 className="doc-title">The Digi Business Solutions Pitch</h2>
      <p className="doc-subtitle">
        A complete talk track for selling high-converting websites to local service businesses.
      </p>

      <section className="section">
        <h2>1. Opening (30 seconds)</h2>
        <ScriptBox>
          {`"Hi [Name], I'm [Your Name] from Digi Business Solutions. We help local businesses like [their industry] turn their website into a lead-generation machine — more calls, bookings, and inquiries without spending more on ads. Do you have 10 minutes? I'd love to show you what's possible."`}
        </ScriptBox>
      </section>

      <section className="section">
        <h2>2. The Problem (Pain Points)</h2>
        <p>Most local businesses we talk to struggle with the same issues. Ask these questions:</p>
        <ul>
          <li>&quot;When someone searches for [service] in [city], does your website show up — or your competitor&apos;s?&quot;</li>
          <li>&quot;How many inquiries do you get from your website per month?&quot;</li>
          <li>&quot;Does your site look good on mobile? That&apos;s where 70%+ of your customers search.&quot;</li>
          <li>&quot;When was the last time your website was updated?&quot;</li>
        </ul>
        <div className="callout warning">
          <p><strong>Key pain:</strong> An outdated website doesn&apos;t just look bad — it actively costs customers every single day.</p>
        </div>
      </section>

      <section className="section">
        <h2>3. Our Solution</h2>
        <p><strong>Digi Business Solutions</strong> builds conversion-focused websites specifically for local businesses:</p>
        <ul>
          <li><strong>Dentists</strong> — online appointment booking, trust-building design</li>
          <li><strong>Law Firms</strong> — consultation request flows, credibility-focused layouts</li>
          <li><strong>Accountants</strong> — tax season lead capture, professional presence</li>
          <li><strong>Real Estate</strong> — property showcases, seller/buyer lead forms</li>
          <li><strong>Physiotherapy</strong> — session booking, condition-specific landing pages</li>
        </ul>
        <p>We don&apos;t just build pretty sites — we build <strong>growth engines</strong> engineered to convert visitors into paying customers.</p>
      </section>

      <section className="section">
        <h2>4. Social Proof</h2>
        <ScriptBox>
          {`"We've helped businesses like Bright Smile Dental triple their online appointment bookings within two months. Law firms have doubled consultation requests. Real estate agents now rank top 3 for local searches. Every project is built around measurable results — not just design awards."`}
        </ScriptBox>
      </section>

      <section className="section">
        <h2>5. Our Process (Build Trust)</h2>
        <ol>
          <li><strong>Discovery</strong> — We learn your business, goals, and customers</li>
          <li><strong>Strategy</strong> — Conversion paths and content plan</li>
          <li><strong>Design</strong> — Custom mockups for your approval</li>
          <li><strong>Development</strong> — Fast, mobile-first, SEO-ready build</li>
          <li><strong>Launch</strong> — Testing, analytics, go-live</li>
          <li><strong>Growth</strong> — Ongoing optimization and support</li>
        </ol>
      </section>

      <section className="section">
        <h2>6. Packages (Quick Reference)</h2>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Package</th><th>Price</th><th>Timeline</th><th>Best For</th></tr></thead>
            <tbody>
              <tr><td>Starter</td><td>$500</td><td>2–3 weeks</td><td>New businesses going online</td></tr>
              <tr><td>Professional ★</td><td>$800</td><td>3–4 weeks</td><td>Businesses ready to grow leads</td></tr>
              <tr><td>Premium</td><td>$2,500</td><td>8–12 weeks</td><td>Competitive markets, full build</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>7. The Free Audit Close</h2>
        <ScriptBox>
          {`"Before you commit to anything, let us do a completely free website audit for you. We'll check your mobile experience, page speed, SEO, and conversion paths — and send you a clear report showing exactly what's holding your site back. No obligation. Would [day] work for a quick 15-minute call to walk through the results?"`}
        </ScriptBox>
        <p style={{ marginTop: 12 }}><strong>CTA:</strong> Book free audit → {BRAND.email} → {BRAND.domain}/free-audit</p>
      </section>

      <section className="section">
        <h2>8. Objection Handling</h2>
        <h3>&quot;It&apos;s too expensive.&quot;</h3>
        <ScriptBox>
          {`"I understand. Consider this — if your website brings just 2 extra clients per month at $200 each, that's $400/month. Our Professional package pays for itself in 2 months. We also have a Starter option at $500 if budget is tight right now."`}
        </ScriptBox>
        <h3>&quot;We already have a website.&quot;</h3>
        <ScriptBox>
          {`"That's great — and that's exactly why the free audit is valuable. We'll show you specifically what's working and what's costing you leads. Many of our best clients came to us with an existing site that just wasn't converting."`}
        </ScriptBox>
        <h3>&quot;I need to think about it.&quot;</h3>
        <ScriptBox>
          {`"Absolutely. I'll send you the proposal and a link to our portfolio. Can we schedule a 10-minute follow-up on [specific date] so I can answer any questions? That way you're not deciding alone."`}
        </ScriptBox>
      </section>

      <footer className="doc-footer">
        <span>{BRAND.name} — Sales Pitch</span>
        <span>{BRAND.email}</span>
      </footer>
    </div>
  );
}
