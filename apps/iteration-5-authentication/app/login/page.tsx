"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { loginAction } from "@/lib/actions";
import type { LoginFormState } from "@/lib/types";

export default function LoginPage() {
	const router = useRouter();
	const [state, formAction] = useActionState(loginAction, {
		success: false,
	} as LoginFormState);

	useEffect(() => {
		if (state.success && state.redirectTo) {
			router.push(state.redirectTo);
		}
	}, [state.success, state.redirectTo, router]);

	return (
		<div className="min-h-96 flex items-center justify-center">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Logowanie do systemu
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Zaloguj się aby zarządzać zwrotami
					</p>
				</div>

				<div className="bg-blue-50 border border-blue-200 rounded-md p-4">
					<div className="text-sm text-blue-800">
						<p className="font-medium">Dane testowe:</p>
						<p>Email: admin@example.com</p>
						<p>Hasło: password123</p>
					</div>
				</div>

				<form className="mt-8 space-y-6" action={formAction}>
					{state.error && (
						<div className="rounded-md bg-red-50 p-4">
							<div className="text-sm text-red-800">{state.error}</div>
						</div>
					)}

					<div className="space-y-4">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								placeholder="admin@example.com"
							/>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Hasło
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								placeholder="password123"
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Zaloguj się
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
