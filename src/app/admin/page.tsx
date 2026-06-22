import Link from "next/link";
import {
  Briefcase,
  Building2,
  FileText,
  FolderOpen,
  Mail,
  MessageSquareQuote,
  ClipboardList,
} from "lucide-react";
import { getSiteData, getContactLeads, getAuditRequests } from "@/lib/data";
import { Card } from "@/components/ui/Card";

export default async function AdminDashboardPage() {
  const data = await getSiteData();
  const leads = await getContactLeads();
  const audits = await getAuditRequests();

  const stats = [
    { label: "Portfolio Items", count: data.portfolio.length, href: "/admin/portfolio", icon: FolderOpen },
    { label: "Case Studies", count: data.caseStudies.length, href: "/admin/case-studies", icon: FileText },
    { label: "Testimonials", count: data.testimonials.length, href: "/admin/testimonials", icon: MessageSquareQuote },
    { label: "Services", count: data.services.length, href: "/admin/services", icon: Briefcase },
    { label: "Industries", count: data.industries.length, href: "/admin/industries", icon: Building2 },
    { label: "Contact Leads", count: leads.length, href: "/admin/leads", icon: Mail },
    { label: "Audit Requests", count: audits.length, href: "/admin/audit-requests", icon: ClipboardList },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
      <p className="mt-2 text-muted">Manage your website content and leads</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card hover className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stat.count}</p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
