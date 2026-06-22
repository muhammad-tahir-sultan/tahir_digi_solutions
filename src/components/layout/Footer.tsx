import Link from "next/link";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/process", label: "Process" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services", label: "All Services" },
    { href: "/industries", label: "Industries" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/case-studies", label: "Case Studies" },
  ],
  resources: [
    { href: "/free-audit", label: "Free Website Audit" },
    { href: "/pricing", label: "Pricing" },
  ],
};

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-secondary/30">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                DS
              </div>
              <div>
                <p className="font-bold text-foreground">Digital Solutions</p>
                <p className="text-xs text-muted">Local Business Growth Partner</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted">
              We help local businesses attract more customers, generate inquiries, and improve
              their online presence through high-converting websites.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Digital Solutions. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            hello@digitalsolutions.com
          </p>
        </div>
      </Container>
    </footer>
  );
}
