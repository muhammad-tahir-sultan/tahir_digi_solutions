"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  Building2,
  FileText,
  FolderOpen,
  DollarSign,
  MessageSquareQuote,
  Settings,
  Search,
  Mail,
  ClipboardList,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/portfolio", label: "Portfolio", icon: FolderOpen },
  { href: "/admin/case-studies", label: "Case Studies", icon: FileText },
  { href: "/admin/testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { href: "/admin/services", label: "Services", icon: Briefcase },
  { href: "/admin/industries", label: "Industries", icon: Building2 },
  { href: "/admin/pricing", label: "Pricing", icon: DollarSign },
  { href: "/admin/content", label: "Website Content", icon: Settings },
  { href: "/admin/seo", label: "SEO", icon: Search },
  { href: "/admin/leads", label: "Contact Leads", icon: Mail },
  { href: "/admin/audit-requests", label: "Audit Requests", icon: ClipboardList },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-border bg-card">
      <div className="border-b border-border p-6">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white">
            DS
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">Admin Dashboard</p>
            <p className="text-xs text-muted">Digital Solutions</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted hover:bg-secondary hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-4">
        <Button variant="ghost" size="sm" className="w-full justify-start" onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
        <Link href="/" className="mt-2 block text-center text-xs text-muted hover:text-primary">
          View Website
        </Link>
      </div>
    </aside>
  );
}
