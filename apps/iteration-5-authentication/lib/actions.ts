"use server";

import { redirect } from "next/navigation";
import { login, removeSession, setSession } from "./auth";
import type { LoginFormState } from "./types";

export async function loginAction(
	prevState: LoginFormState,
	formData: FormData,
): Promise<LoginFormState> {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	if (!email || !password) {
		return {
			success: false,
			error: "Email i hasło są wymagane",
		};
	}

	try {
		const user = await login(email, password);

		if (!user) {
			return {
				success: false,
				error: "Nieprawidłowy email lub hasło",
			};
		}

		await setSession(user);

		return {
			success: true,
			redirectTo: "/returns",
		};
	} catch (error) {
		console.error("Login error:", error);
		return {
			success: false,
			error: "Wystąpił błąd podczas logowania",
		};
	}
}

export async function logoutAction() {
	await removeSession();
	redirect("/login");
}
