import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const ADMIN_COOKIE = "admin_session";
const SALES_KIT_COOKIE = "sales_kit_access";

function getSecret() {
  const secret = process.env.JWT_SECRET || "digital-solutions-dev-secret-change-in-production";
  return new TextEncoder().encode(secret);
}

async function verifyToken(token: string) {
  try {
    await jwtVerify(token, getSecret());
    return true;
  } catch {
    return false;
  }
}

async function hasSalesKitAccess(request: NextRequest) {
  const password = process.env.SALES_KIT_PASSWORD;
  if (!password) return true;

  const cookie = request.cookies.get(SALES_KIT_COOKIE)?.value;
  if (cookie === "1") return true;

  const adminToken = request.cookies.get(ADMIN_COOKIE)?.value;
  if (adminToken && (await verifyToken(adminToken))) return true;

  return false;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/sales-kit") && pathname !== "/sales-kit/login") {
    if (!(await hasSalesKitAccess(request))) {
      return NextResponse.redirect(new URL("/sales-kit/login", request.url));
    }
  }

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const token = request.cookies.get(ADMIN_COOKIE)?.value;

    if (!token || !(await verifyToken(token))) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  if (pathname === "/admin/login") {
    const token = request.cookies.get(ADMIN_COOKIE)?.value;
    if (token && (await verifyToken(token))) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/sales-kit/:path*"],
};
