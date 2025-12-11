import { NextResponse } from "next/server";

const PROTECTED_PATHS = ["/"]; // root and everything under it
const LOGIN_PATH = "/login";
const PASSWORD_COOKIE = "ve_auth";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isLogin = pathname.startsWith(LOGIN_PATH);

  // Allow Next.js internals & static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/assets")
  ) {
    return NextResponse.next();
  }

  const hasAuthCookie = request.cookies.get(PASSWORD_COOKIE)?.value === "true";

  if (!hasAuthCookie && !isLogin) {
    const loginUrl = new URL(LOGIN_PATH, request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (hasAuthCookie && isLogin) {
    const target = request.nextUrl.searchParams.get("from") || "/";
    return NextResponse.redirect(new URL(target, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"]
};
