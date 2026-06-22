import { NextResponse } from "next/server";
import { addContactLead } from "@/lib/data";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, businessName, industry, websiteUrl, message } = body;

    if (!name || !email || !businessName || !industry || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const lead = await addContactLead({
      name,
      email,
      businessName,
      industry,
      websiteUrl: websiteUrl || "",
      message,
    });

    return NextResponse.json({ success: true, id: lead.id });
  } catch {
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
  }
}
