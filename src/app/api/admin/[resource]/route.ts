import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import {
  getCollection,
  updateCollection,
  getContent,
  updateContent,
  getSeoSettings,
  updateSeoSettings,
  getContactLeads,
  getAuditRequests,
} from "@/lib/data";
import type { DataCollection } from "@/lib/types";

const validCollections: DataCollection[] = [
  "services",
  "industries",
  "portfolio",
  "caseStudies",
  "testimonials",
  "pricing",
];

async function requireAuth() {
  const session = await getSession();
  if (!session) {
    return null;
  }
  return session;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ resource: string }> }
) {
  const session = await requireAuth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { resource } = await params;

  if (resource === "content") {
    return NextResponse.json(await getContent());
  }

  if (resource === "seo") {
    return NextResponse.json(await getSeoSettings());
  }

  if (resource === "leads") {
    return NextResponse.json(await getContactLeads());
  }

  if (resource === "audit-requests") {
    return NextResponse.json(await getAuditRequests());
  }

  if (!validCollections.includes(resource as DataCollection)) {
    return NextResponse.json({ error: "Invalid resource" }, { status: 400 });
  }

  const data = await getCollection(resource as DataCollection);
  return NextResponse.json(data);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ resource: string }> }
) {
  const session = await requireAuth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { resource } = await params;
  const body = await request.json();

  if (resource === "content") {
    const updated = await updateContent(body);
    return NextResponse.json(updated);
  }

  if (resource === "seo") {
    const updated = await updateSeoSettings(body);
    return NextResponse.json(updated);
  }

  if (!validCollections.includes(resource as DataCollection)) {
    return NextResponse.json({ error: "Invalid resource" }, { status: 400 });
  }

  const updated = await updateCollection(resource as DataCollection, body);
  return NextResponse.json(updated);
}
