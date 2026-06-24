export const salesKitHub = [
  {
    badge: "Core",
    title: "Pricing Sheet",
    description: "Starter, Professional & Premium packages with timelines and deliverables.",
    href: "/sales-kit/pricing",
  },
  {
    badge: "Sales",
    title: "Sales Pitch Document",
    description: "Full pitch deck on paper — problem, solution, process, and close.",
    href: "/sales-kit/sales-pitch",
  },
  {
    badge: "Outreach",
    title: "Outreach Scripts",
    description: "Cold call, email, DM, and follow-up scripts for local businesses.",
    href: "/sales-kit/outreach",
  },
  {
    badge: "Team",
    title: "Commission Structure",
    description: "Clear hunter commission tiers, payout rules, and examples.",
    href: "/sales-kit/commission",
  },
  {
    badge: "Close",
    title: "Proposal Template",
    description: "Client-ready proposal with scope, timeline, and investment.",
    href: "/sales-kit/proposal",
  },
  {
    badge: "Legal",
    title: "Contract Template",
    description: "Website services agreement — scope, payment, and terms.",
    href: "/sales-kit/contract",
  },
  {
    badge: "CRM",
    title: "Lead Sheet (CRM)",
    description: "Minimum viable CRM — track hunters, status, deal value & notes.",
    href: "/sales-kit/leads",
  },
  {
    badge: "Billing",
    title: "Invoice Template",
    description: "Professional invoice with line items, totals, and payment details.",
    href: "/sales-kit/invoice",
  },
] as const;

export const pricingPackages = [
  {
    name: "Starter",
    price: "$500",
    timeline: "⏱ 2–3 weeks",
    featured: false,
    description: "Essential web presence for small local businesses getting started online.",
    features: [
      "Up to 5 custom pages",
      "Mobile-responsive design",
      "Contact form integration",
      "Basic on-page SEO",
      "30 days post-launch support",
    ],
  },
  {
    name: "Professional ★",
    price: "$800",
    timeline: "⏱ 3–4 weeks",
    featured: true,
    description: "Growth-focused website for businesses ready to generate consistent leads.",
    features: [
      "Up to 10 custom pages",
      "Conversion-optimized design",
      "Industry-specific templates",
      "Local SEO foundation",
      "90 days post-launch support",
    ],
  },
  {
    name: "Premium",
    price: "$2,500",
    timeline: "⏱ 8–12 weeks",
    featured: false,
    description: "Enterprise-quality website with advanced features for competitive markets.",
    features: [
      "Unlimited custom pages",
      "Advanced conversion optimization",
      "Booking / CRM integrations",
      "Comprehensive SEO strategy",
      "6 months priority support",
    ],
  },
] as const;

export const outreachScripts = [
  {
    title: "📞 Cold Call Script",
    body: `"Hi, is this [Contact Name]?

My name is [Your Name] from Digi Business Solutions. We specialize in helping [industry] businesses in [city] get more leads from their website.

I noticed [specific observation — e.g. 'your site isn't mobile-friendly' or 'I couldn't find a booking button'].

We recently helped a [similar business] increase their online inquiries by over 140%. I'd love to offer you a completely free website audit — no strings attached — to show you exactly what's possible.

Do you have 2 minutes, or should I send the details by email?"`,
  },
  {
    title: "📧 Cold Email #1 — Introduction",
    subject: "Subject: Quick question about [Business Name]'s website",
    body: `Hi [Contact Name],

I'm [Your Name] from Digi Business Solutions. We help [industry] businesses in [city] turn their websites into lead-generation tools.

I took a quick look at [website URL] and noticed a few opportunities that could help you get more [bookings / consultations / inquiries] — especially from mobile visitors.

Would you be open to a free 15-minute website audit? We'll send you a clear report on mobile experience, speed, SEO, and conversion — no obligation.

Best,
[Your Name]
Digi Business Solutions
contact@digibusinesssolutions.com
digibusinesssolutions.com/free-audit`,
  },
  {
    title: "📧 Follow-Up Email #2 (3 days later)",
    subject: "Subject: Re: [Business Name] website — still happy to help",
    body: `Hi [Contact Name],

Just following up on my message from [day]. I know you're busy running [Business Name].

I wanted to share one quick stat: businesses in [industry] with mobile-optimized sites see 2–3× more inquiries from local search.

Happy to send a free audit report if useful — takes us about 24 hours and costs you nothing.

Let me know,
[Your Name]`,
  },
  {
    title: "📧 Follow-Up Email #3 — Breakup (7 days later)",
    subject: "Subject: Closing the loop — [Business Name]",
    body: `Hi [Contact Name],

I'll keep this short — I've reached out a couple of times about a free website audit for [Business Name] and haven't heard back, so I'll assume the timing isn't right.

If things change, we're here: contact@digibusinesssolutions.com

Wishing you and the team all the best,
[Your Name]`,
  },
  {
    title: "💬 Instagram / Facebook DM",
    body: `Hi [Name]! 👋 I came across [Business Name] and love what you're doing in [city].

I work with Digi Business Solutions — we build websites that help local [industry] businesses get more leads online.

Would you be open to a free quick audit of your current site? No pitch, just honest feedback. Happy to chat here or on a quick call 😊`,
  },
  {
    title: "📧 After Free Audit — Proposal Send",
    subject: "Subject: Your website audit results + next steps for [Business Name]",
    body: `Hi [Contact Name],

Great speaking with you! As promised, here's your website audit summary:

🔴 Mobile Score: [X]/100
🔴 Page Speed: [X]/100
🟡 SEO: [X]/100
🔴 Conversion Paths: [X]/100

Based on this, we recommend our [Starter / Professional / Premium] package — [brief 1-line why].

I've attached a formal proposal. Investment: $[amount] | Timeline: [weeks]

Ready to move forward? Reply to this email or book a call: contact@digibusinesssolutions.com

[Your Name]
Digi Business Solutions`,
  },
  {
    title: "📞 Post-Proposal Follow-Up Call",
    body: `"Hi [Name], it's [Your Name] from Digi Business Solutions. I sent over the proposal on [date] — did you get a chance to review it?

I'm happy to walk through any questions. The main thing I want to make sure is: does the [package] scope match what you need to hit [their goal — more bookings / consultations / etc.]?

If you're ready, we can get started with a 50% deposit this week and have your new site live in [timeline]."`,
  },
] as const;
