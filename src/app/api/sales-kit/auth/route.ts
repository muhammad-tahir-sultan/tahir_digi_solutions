import { NextResponse } from "next/server";

const COOKIE_NAME = "sales_kit_access";

export async function POST(request: Request) {
  const secret = process.env.SALES_KIT_PASSWORD;

  if (!secret) {
    const response = NextResponse.json({ ok: true });
    response.cookies.set(COOKIE_NAME, "1", {
      httpOnly: true,
      sameSite: "lax",
      path: "/sales-kit",
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  }

  const body = (await request.json()) as { password?: string };

  if (body.password !== secret) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/sales-kit",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
