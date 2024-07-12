import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Export NextAuth middleware
export { default } from "next-auth/middleware";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const { pathname } = request.nextUrl;

  // Redirect authenticated users trying to access sign-in or sign-up pages
  if (token && (pathname === "/sign-in" || pathname === "/sign-up")) {
    return NextResponse.redirect(new URL("/my-account", request.url));
  }

  // Allow requests for NextAuth session & provider fetching or if the token exists
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // Define protected routes that require authentication
  const protectedRoutes = ["/my-account", "/buy-package", "/change-profile"];

  // Redirect unauthenticated users to sign-in page if they are trying to access protected routes
  if (!token && protectedRoutes.some((route) => pathname.startsWith(route))) {
    const signInUrl = new URL("/sign-in", request.url);
    signInUrl.searchParams.set("callbackUrl", request.url);
    return NextResponse.redirect(signInUrl);
  }

  // Allow all other requests to proceed
  return NextResponse.next();
}

// Define the routes to be matched by the middleware
export const config = {
  matcher: [
    "/sign-in",
    "/sign-up",
    "/my-account/:path*",
    "/buy-package/:packageId*",
    "/change-profile",
  ],
};
