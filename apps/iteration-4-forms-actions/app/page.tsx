import Link from "next/link";

export default function Home() {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-bold text-gray-900">System Zwrotów</h1>
				<p className="mt-2 text-gray-600">
					Witaj w systemie zarządzania zwrotami z formularzami i Server Actions
				</p>
			</div>

			<div className="bg-white shadow sm:rounded-lg">
				<div className="px-4 py-5 sm:p-6">
					<h3 className="text-lg leading-6 font-medium text-gray-900">
						Zarządzanie Zwrotami
					</h3>
					<div className="mt-2 max-w-xl text-sm text-gray-500">
						<p>
							Aplikacja pozwala na efektywne zarządzanie zwrotami produktów.
							Możesz teraz edytować zwroty używając formularzy z Server Actions.
						</p>
					</div>
					<div className="mt-5">
						<Link
							href="/returns"
							className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Zobacz Zwroty
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
