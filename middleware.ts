import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Temporarily disabled routes
  const disabledRoutes = ["/cart", "/store"];

  // Check if the current path starts with any disabled route
  if (disabledRoutes.some((route) => pathname.startsWith(route))) {
    // Redirect to home page with a message
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.searchParams.set("message", "This feature is temporarily unavailable");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/cart/:path*", "/store/:path*"],
};
