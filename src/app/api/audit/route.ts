import { NextResponse } from "next/server";
import { addAuditRequest } from "@/lib/data";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, businessName, websiteUrl } = body;

    if (!name || !email || !businessName || !websiteUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const audit = await addAuditRequest({
      name,
      email,
      businessName,
      websiteUrl,
    });

    return NextResponse.json({ success: true, id: audit.id });
  } catch {
    return NextResponse.json({ error: "Failed to submit request" }, { status: 500 });
  }
}
