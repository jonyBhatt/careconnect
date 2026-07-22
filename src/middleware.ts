import { NextRequest, NextResponse } from "next/server";
import { UAParser } from "ua-parser-js";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Don't redirect if already on /mobile
  if (pathname.startsWith("/mobile")) {
    return NextResponse.next();
  }

  const ua = request.headers.get("user-agent") ?? "";
  const parser = new UAParser(ua);

  if (parser.getDevice().type === "mobile") {
    const url = request.nextUrl.clone();
    url.pathname = "/mobile";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
