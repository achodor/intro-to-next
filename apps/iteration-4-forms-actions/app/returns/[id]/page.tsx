import Link from "next/link";
import { notFound } from "next/navigation";
import { getReturnById } from "@/lib/mock-data";
import { carrierLabels, type Return, statusLabels } from "@/lib/types";

interface ReturnDetailPageProps {
	params: {
		id: string;
	};
}

async function getReturn(id: string): Promise<Return | null> {
	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 100));

	// Direct function call instead of API route
	return getReturnById(id) || null;
}

export default async function ReturnDetailPage({
	params,
}: ReturnDetailPageProps) {
	const { id } = await params;
	const returnItem = await getReturn(id);

	if (!returnItem) {
		notFound();
	}

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-2xl font-bold text-gray-900">Szczegóły Zwrotu</h1>
					<p className="mt-2 text-gray-600">
						Zamówienie: {returnItem.orderNumber}
					</p>
				</div>
				<div className="flex space-x-3">
					<Link
						href="/returns"
						className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
					>
						← Powrót do listy
					</Link>
					<Link
						href={`/returns/${returnItem.id}/edit`}
						className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
					>
						Edytuj
					</Link>
				</div>
			</div>

			<div className="bg-white shadow overflow-hidden sm:rounded-lg">
				<div className="px-4 py-5 sm:px-6">
					<h3 className="text-lg leading-6 font-medium text-gray-900">
						Informacje o zwrocie
					</h3>
					<p className="mt-1 max-w-2xl text-sm text-gray-500">
						Szczegóły i status zwrotu produktu pobrane bezpośrednio przez Server
						Component
					</p>
				</div>
				<div className="border-t border-gray-200">
					<dl>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Status</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
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
							</dd>
						</div>
						<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Klient</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{returnItem.customerName}
							</dd>
						</div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Produkt</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{returnItem.productName}
							</dd>
						</div>
						<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Przewoźnik</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{carrierLabels[returnItem.carrier]}
							</dd>
						</div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">
								Numer przesyłki
							</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								<code className="bg-gray-100 px-2 py-1 rounded text-sm">
									{returnItem.trackingNumber}
								</code>
							</dd>
						</div>
						{returnItem.notes && (
							<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Notatki</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									{returnItem.notes}
								</dd>
							</div>
						)}
					</dl>
				</div>
			</div>
		</div>
	);
}
