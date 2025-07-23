import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const secretKey = process.env.JWT_SECRET || "your-secret-key";
const key = new TextEncoder().encode(secretKey);

export interface User {
	email: string;
	name: string;
}

// Mock user for demo purposes
const DEMO_USER = {
	email: "admin@example.com",
	password: "password123",
	name: "Administrator",
};

export async function login(
	email: string,
	password: string,
): Promise<User | null> {
	// Simulate API delay
	await new Promise((resolve) => setTimeout(resolve, 500));

	if (email === DEMO_USER.email && password === DEMO_USER.password) {
		return {
			email: DEMO_USER.email,
			name: DEMO_USER.name,
		};
	}

	return null;
}

export async function createToken(user: User): Promise<string> {
	return await new SignJWT({ email: user.email, name: user.name })
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("24h")
		.sign(key);
}

export async function verifyToken(token: string): Promise<User | null> {
	try {
		const { payload } = await jwtVerify(token, key);
		const email = typeof payload.email === "string" ? payload.email : undefined;
		const name = typeof payload.name === "string" ? payload.name : undefined;
		
		if (email && name) {
			return { email, name };
		}
		return null;
	} catch (error) {
		return null;
	}
}

export async function getUser(): Promise<User | null> {
	const cookieStore = await cookies();
	const token = cookieStore.get("session")?.value;

	if (!token) return null;

	return await verifyToken(token);
}

export async function requireAuth(): Promise<User> {
	const user = await getUser();

	if (!user) {
		redirect("/login");
	}

	return user;
}

export async function setSession(user: User) {
	const token = await createToken(user);
	const cookieStore = await cookies();

	cookieStore.set("session", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		maxAge: 60 * 60 * 24, // 24 hours
	});
}

export async function removeSession() {
	const cookieStore = await cookies();
	cookieStore.delete("session");
}
