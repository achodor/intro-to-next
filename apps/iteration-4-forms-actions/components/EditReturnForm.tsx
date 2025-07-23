"use client";

import { useActionState } from "react";
import { updateReturnAction } from "@/lib/actions";
import {
	carrierLabels,
	type Return,
	statusLabels,
	type UpdateReturnFormState,
} from "@/lib/types";

interface EditReturnFormProps {
	returnItem: Return;
}

export default function EditReturnForm({ returnItem }: EditReturnFormProps) {
	const [state, formAction] = useActionState(
		updateReturnAction.bind(null, returnItem.id),
		{ success: false } as UpdateReturnFormState,
	);

	const { success, message, error, fieldErrors } = state;

	return (
		<form action={formAction} className="space-y-6">
			{success && message && (
				<div className="rounded-md bg-green-50 p-4">
					<div className="text-sm text-green-800">{message}</div>
				</div>
			)}

			{error && (
				<div className="rounded-md bg-red-50 p-4">
					<div className="text-sm text-red-800">{error}</div>
				</div>
			)}

			<div>
				<label
					htmlFor="status"
					className="block text-sm font-medium text-gray-700"
				>
					Status *
				</label>
				<select
					id="status"
					name="status"
					defaultValue={returnItem.status}
					className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
				>
					{Object.entries(statusLabels).map(([value, label]) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
				{fieldErrors?.status && (
					<p className="mt-2 text-sm text-red-600">{fieldErrors.status}</p>
				)}
			</div>

			<div>
				<label
					htmlFor="carrier"
					className="block text-sm font-medium text-gray-700"
				>
					Przewoźnik *
				</label>
				<select
					id="carrier"
					name="carrier"
					defaultValue={returnItem.carrier}
					className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
				>
					{Object.entries(carrierLabels).map(([value, label]) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
				{fieldErrors?.carrier && (
					<p className="mt-2 text-sm text-red-600">{fieldErrors.carrier}</p>
				)}
			</div>

			<div>
				<label
					htmlFor="trackingNumber"
					className="block text-sm font-medium text-gray-700"
				>
					Numer przesyłki *
				</label>
				<input
					type="text"
					id="trackingNumber"
					name="trackingNumber"
					defaultValue={returnItem.trackingNumber}
					className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					placeholder="np. DPD123456789PL"
				/>
				{fieldErrors?.trackingNumber && (
					<p className="mt-2 text-sm text-red-600">
						{fieldErrors.trackingNumber}
					</p>
				)}
			</div>

			<div>
				<label
					htmlFor="notes"
					className="block text-sm font-medium text-gray-700"
				>
					Notatki
				</label>
				<textarea
					id="notes"
					name="notes"
					rows={3}
					defaultValue={returnItem.notes || ""}
					className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					placeholder="Dodatkowe informacje..."
				/>
			</div>

			<div className="flex justify-end space-x-3">
				<button
					type="submit"
					className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Zapisz zmiany
				</button>
			</div>
		</form>
	);
}
