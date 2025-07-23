import Link from "next/link";
import { notFound } from "next/navigation";
import EditReturnForm from "@/components/EditReturnForm";
import { getReturnById } from "@/lib/mock-data";
import type { Return } from "@/lib/types";

interface EditReturnPageProps {
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

export default async function EditReturnPage({ params }: EditReturnPageProps) {
	const { id } = await params;
	const returnItem = await getReturn(id);

	if (!returnItem) {
		notFound();
	}

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-2xl font-bold text-gray-900">Edytuj Zwrot</h1>
					<p className="mt-2 text-gray-600">
						Zamówienie: {returnItem.orderNumber} - {returnItem.customerName}
					</p>
				</div>
				<div className="flex space-x-3">
					<Link
						href={`/returns/${returnItem.id}`}
						className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
					>
						Anuluj
					</Link>
				</div>
			</div>

			<div className="bg-white shadow sm:rounded-lg">
				<div className="px-4 py-5 sm:px-6">
					<h3 className="text-lg leading-6 font-medium text-gray-900">
						Edycja danych zwrotu
					</h3>
					<p className="mt-1 max-w-2xl text-sm text-gray-500">
						Zaktualizuj status, przewoźnika i inne informacje
					</p>
				</div>
				<div className="border-t border-gray-200 px-4 py-5 sm:px-6">
					<EditReturnForm returnItem={returnItem} />
				</div>
			</div>

			<div className="bg-gray-50 rounded-lg p-4">
				<h4 className="text-sm font-medium text-gray-900 mb-2">
					Informacje o produkcie
				</h4>
				<div className="text-sm text-gray-600 space-y-1">
					<p>
						<strong>Produkt:</strong> {returnItem.productName}
					</p>
					<p>
						<strong>Powód zwrotu:</strong> {returnItem.reason}
					</p>
					<p>
						<strong>Data zgłoszenia:</strong>{" "}
						{new Date(returnItem.requestDate).toLocaleDateString("pl-PL")}
					</p>
				</div>
			</div>
		</div>
	);
}
