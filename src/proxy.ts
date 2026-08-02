import { NextRequest, NextResponse } from "next/server";
import { UAParser } from "ua-parser-js";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request: NextRequest) {
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });
  // if (!session) {
  //   return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  // }
  const pathname = request.nextUrl.pathname;

  // Don't redirect if already on /mobile
  // if (pathname.startsWith("/mobile")) {
  //   return NextResponse.next();
  // }

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
