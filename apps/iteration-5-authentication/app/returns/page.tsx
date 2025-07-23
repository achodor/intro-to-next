import Link from "next/link";
import { requireAuth } from "@/lib/auth";
import { mockReturns } from "@/lib/mock-data";
import { carrierLabels, statusLabels } from "@/lib/types";

export default async function ReturnsPage() {
	// This will redirect to login if user is not authenticated
	const user = await requireAuth();

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-2xl font-bold text-gray-900">Lista Zwrotów</h1>
					<p className="mt-2 text-gray-600">
						Witaj {user.name}! Zarządzaj zwrotami produktów - wymagane
						uwierzytelnienie
					</p>
				</div>
				<div className="text-sm text-gray-500">
					Zalogowany jako: {user.email}
				</div>
			</div>

			<div className="bg-white shadow overflow-hidden sm:rounded-md">
				<ul className="divide-y divide-gray-200">
					{mockReturns.map((returnItem) => (
						<li key={returnItem.id} className="px-6 py-4">
							<div className="flex items-center justify-between">
								<div className="flex-1 min-w-0">
									<div className="flex items-center justify-between">
										<div>
											<p className="text-sm font-medium text-gray-900 truncate">
												{returnItem.customerName}
											</p>
											<p className="text-sm text-gray-500">
												Zamówienie: {returnItem.orderNumber}
											</p>
										</div>
										<div className="ml-4 flex-shrink-0">
											<span
												className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
													returnItem.status === "pending"
														? "bg-yellow-100 text-yellow-800"
														: returnItem.status === "approved"
															? "bg-green-100 text-green-800"
															: returnItem.status === "rejected"
																? "bg-red-100 text-red-800"
																: "bg-blue-100 text-blue-800"
												}`}
											>
												{statusLabels[returnItem.status]}
											</span>
										</div>
									</div>
									<div className="mt-2">
										<p className="text-sm text-gray-900 font-medium">
											{returnItem.productName}
										</p>
										<p className="text-sm text-gray-600 mt-1">
											Powód: {returnItem.reason}
										</p>
									</div>
									<div className="mt-2 flex items-center text-sm text-gray-500 space-x-4">
										<span>
											Data zgłoszenia:{" "}
											{new Date(returnItem.requestDate).toLocaleDateString(
												"pl-PL",
											)}
										</span>
										<span>Przewoźnik: {carrierLabels[returnItem.carrier]}</span>
									</div>
									<div className="mt-3">
										<Link
											href={`/returns/${returnItem.id}`}
											className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
										>
											Szczegóły
										</Link>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>

			<div className="bg-green-50 border border-green-200 rounded-lg p-4">
				<div className="text-sm text-green-800">
					<p className="font-medium">✓ Dostęp autoryzowany</p>
					<p>
						Ta strona jest chroniona - dostęp tylko dla zalogowanych
						użytkowników.
					</p>
				</div>
			</div>
		</div>
	);
}
