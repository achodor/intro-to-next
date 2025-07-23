import Link from "next/link";
import { mockReturns } from "@/lib/mock-data";
import { carrierLabels, type Return, statusLabels } from "@/lib/types";

async function getReturns(): Promise<Return[]> {
	// Simulate network delay to show the realistic data fetching experience
	await new Promise((resolve) => setTimeout(resolve, 200));

	// Direct function call instead of API route
	return mockReturns;
}

export default async function ReturnsPage() {
	const returns = await getReturns();

	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-bold text-gray-900">Lista Zwrotów</h1>
				<p className="mt-2 text-gray-600">
					Zarządzaj zwrotami produktów - dane z funkcji serwera, z możliwością
					edycji
				</p>
			</div>

			<div className="bg-white shadow overflow-hidden sm:rounded-md">
				<ul className="divide-y divide-gray-200">
					{returns.map((returnItem) => (
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
									<div className="mt-3 flex space-x-2">
										<Link
											href={`/returns/${returnItem.id}`}
											className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
										>
											Szczegóły
										</Link>
										<Link
											href={`/returns/${returnItem.id}/edit`}
											className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700"
										>
											Edytuj
										</Link>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>

			{returns.length === 0 && (
				<div className="text-center py-12">
					<p className="text-gray-500">Brak zwrotów do wyświetlenia</p>
				</div>
			)}
		</div>
	);
}
