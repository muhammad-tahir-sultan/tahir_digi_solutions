# Niche Deliverables — Quick Index

Use these client-ready templates to customize the website for any client in each niche.
Replace every `[EDIT: ...]` placeholder with real client data.

---

## Live Demo Websites

Each demo is **standalone** — no shared folder needed at deploy time. UI is bundled inside `src/niche-ui/`.

| Niche | Demo Folder | Port | Deploy |
|-------|-------------|------|--------|
| Dentists | `demos/dental/` | 3001 | Own Vercel/Netlify project |
| Law Firms | `demos/law-firm/` | 3002 | Own Vercel/Netlify project |
| Real Estate | `demos/real-estate/` | 3003 | Own Vercel/Netlify project |
| Accounting | `demos/accounting/` | 3004 | Own Vercel/Netlify project |
| Physiotherapy | `demos/physiotherapy/` | 3005 | Own Vercel/Netlify project |

Edit client data in each demo's `src/config/site.ts`.

See [demos/README.md](./demos/README.md) for deployment steps.

---

## Available Templates

| Niche | File | Primary CTA | Main Lead Goal |
|-------|------|-------------|----------------|
| **Dentists** | [deliverable_dentists.md](./deliverable_dentists.md) | Book Appointment | New patient bookings |
| **Law Firms** | [deliverable_lawFirms.md](./deliverable_lawFirms.md) | Free Consultation | Consultation requests |
| **Real Estate** | [deliverable_realEstate.md](./deliverable_realEstate.md) | Home Valuation | Buyer & seller leads |
| **Accounting** | [deliverable_accounting.md](./deliverable_accounting.md) | Free Consultation | Tax & advisory inquiries |
| **Physiotherapy** | [deliverable_physiotherapy.md](./deliverable_physiotherapy.md) | Book Appointment | Online bookings |

---

## How to Use for a New Client

### Step 1 — Pick the niche template
Open the matching `deliverable_[niche].md` file.

### Step 2 — Fill in Section 1 (Client Brief)
Replace all `[EDIT:]` fields with the client's real business info.

### Step 3 — Customize copy (Sections 5–14)
Update headlines, services, team, testimonials, and SEO keywords.

### Step 4 — Update the website
Either:
- Use **Admin Dashboard** at `/admin` (recommended), or
- Edit **`data/site-data.json`** directly

### Step 5 — Run launch checklist
Each template ends with a niche-specific checklist — complete before go-live.

---

## What Each Template Includes

Every niche deliverable contains:

1. **Client Brief** — editable business info table
2. **Branding** — colors, tone, logo
3. **Positioning** — niche-specific messaging
4. **Pages Required** — focused page list (not full agency site)
5. **Home Page** — hero, problems, solutions, CTAs
6. **About Page** — mission, vision, values
7. **Services / Specialties** — niche-specific list + templates
8. **Team Profiles** — editable table
9. **Testimonials** — placeholder structure
10. **Case Study** — demo template (no fake revenue)
11. **Contact & Lead Forms** — field list
12. **SEO Keywords** — local search targets
13. **Admin Data Mapping** — which dashboard section to edit
14. **Launch Checklist** — pre-go-live verification

---

## Admin Dashboard Mapping (All Niches)

| Content Type | Admin Path |
|--------------|------------|
| Hero, About, CTA text | `/admin/content` |
| Services / specialties | `/admin/services` |
| Industry section | `/admin/industries` |
| Portfolio project | `/admin/portfolio` |
| Case study | `/admin/case-studies` |
| Testimonials | `/admin/testimonials` |
| Pricing packages | `/admin/pricing` |
| SEO meta tags | `/admin/seo` |
| Contact form leads | `/admin/leads` |
| Audit form leads | `/admin/audit-requests` |

---

## Search & Replace Tip

In any deliverable file, search for `[EDIT:` to jump to every field that needs client data.

Example workflow in VS Code / Cursor:
```
Find:    [EDIT:
Replace: (your client's real value)
```

---

## Full Agency Build Reference

For the complete multi-niche agency website spec (Digital Solutions template), see:
[delierable.md](./delierable.md)
