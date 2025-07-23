import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-96 flex items-center justify-center">
			<div className="text-center">
				<div className="mb-4">
					<h1 className="text-6xl font-bold text-gray-400">404</h1>
				</div>
				<h2 className="text-2xl font-semibold text-gray-900 mb-2">
					Strona nie została znaleziona
				</h2>
				<p className="text-gray-600 mb-8">
					Przepraszamy, ale szukana strona nie istnieje.
				</p>
				<div className="space-x-4">
					<Link
						href="/"
						className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Strona główna
					</Link>
					<Link
						href="/returns"
						className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Lista zwrotów
					</Link>
				</div>
			</div>
		</div>
	);
}
