import Link from "next/link";
import { getUser } from "@/lib/auth";

export default async function Home() {
	const user = await getUser();

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-bold text-gray-900">System Zwrotów</h1>
				<p className="mt-2 text-gray-600">
					{user
						? `Witaj ${user.name}! Zarządzaj zwrotami produktów z pełną autoryzacją.`
						: "Witaj w systemie zarządzania zwrotami z autoryzacją użytkowników."}
				</p>
			</div>

			<div className="bg-white shadow sm:rounded-lg">
				<div className="px-4 py-5 sm:p-6">
					<h3 className="text-lg leading-6 font-medium text-gray-900">
						{user ? "Panel Zarządzania" : "Zaloguj się"}
					</h3>
					<div className="mt-2 max-w-xl text-sm text-gray-500">
						<p>
							{user
								? "Masz pełny dostęp do funkcji zarządzania zwrotami. Możesz przeglądać, edytować i zarządzać wszystkimi zwrotami."
								: "Aby uzyskać dostęp do systemu zarządzania zwrotami, musisz się najpierw zalogować."}
						</p>
					</div>
					<div className="mt-5">
						{user ? (
							<Link
								href="/returns"
								className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Zobacz Zwroty
							</Link>
						) : (
							<Link
								href="/login"
								className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Zaloguj się
							</Link>
						)}
					</div>
				</div>
			</div>

			{!user && (
				<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
					<div className="text-sm text-blue-800">
						<p className="font-medium mb-2">Dane testowe do logowania:</p>
						<p>Email: admin@example.com</p>
						<p>Hasło: password123</p>
					</div>
				</div>
			)}
		</div>
	);
}
