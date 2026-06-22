"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";
import type { AuditRequest } from "@/lib/types";

export default function AdminAuditRequestsPage() {
  const [requests, setRequests] = useState<AuditRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/audit-requests")
      .then((res) => res.json())
      .then((data) => {
        setRequests(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function exportCsv() {
    const headers = ["Name", "Email", "Business", "Website", "Date"];
    const rows = requests.map((req) => [
      req.name,
      req.email,
      req.businessName,
      req.websiteUrl,
      req.createdAt,
    ]);

    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `audit-requests-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (loading) {
    return <p className="text-muted">Loading...</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Audit Requests</h1>
          <p className="mt-2 text-muted">{requests.length} total requests</p>
        </div>
        <Button variant="outline" onClick={exportCsv} disabled={requests.length === 0}>
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <Card className="mt-8 overflow-x-auto p-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/30">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Name</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Email</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Business</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Website</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Date</th>
            </tr>
          </thead>
          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-muted">
                  No audit requests yet
                </td>
              </tr>
            ) : (
              requests.map((req) => (
                <tr key={req.id} className="border-b border-border">
                  <td className="px-4 py-3 text-foreground">{req.name}</td>
                  <td className="px-4 py-3 text-muted">{req.email}</td>
                  <td className="px-4 py-3 text-muted">{req.businessName}</td>
                  <td className="px-4 py-3 text-muted">{req.websiteUrl}</td>
                  <td className="px-4 py-3 text-muted">{formatDate(req.createdAt)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
