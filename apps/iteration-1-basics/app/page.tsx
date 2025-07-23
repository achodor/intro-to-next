import { mockReturns } from "@/lib/mock-data";
import { carrierLabels, statusLabels } from "@/lib/types";

export default function Home() {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-bold text-gray-900">Lista Zwrotów</h1>
				<p className="mt-2 text-gray-600">
					Zarządzaj zwrotami produktów w łatwy sposób
				</p>
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
										<span>Numer przesyłki: {returnItem.trackingNumber}</span>
									</div>
									{returnItem.notes && (
										<div className="mt-2">
											<p className="text-sm text-gray-600 italic">
												Notatki: {returnItem.notes}
											</p>
										</div>
									)}
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>

			{mockReturns.length === 0 && (
				<div className="text-center py-12">
					<p className="text-gray-500">Brak zwrotów do wyświetlenia</p>
				</div>
			)}
		</div>
	);
}
