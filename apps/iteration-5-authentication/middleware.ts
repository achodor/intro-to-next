import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

const protectedRoutes = ["/returns"];
const authRoutes = ["/login"];

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const token = request.cookies.get("session")?.value;

	// Check if user is authenticated
	const user = token ? await verifyToken(token) : null;

	// Redirect authenticated users away from login page
	if (user && authRoutes.some((route) => pathname.startsWith(route))) {
		return NextResponse.redirect(new URL("/returns", request.url));
	}

	// Redirect unauthenticated users from protected routes
	if (!user && protectedRoutes.some((route) => pathname.startsWith(route))) {
		const loginUrl = new URL("/login", request.url);
		loginUrl.searchParams.set("from", pathname);
		return NextResponse.redirect(loginUrl);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
};
