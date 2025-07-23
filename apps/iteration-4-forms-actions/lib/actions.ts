"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { updateReturn } from "./mock-data";
import type { UpdateReturnFormState } from "./types";

export async function updateReturnAction(
	returnId: string,
	prevState: UpdateReturnFormState,
	formData: FormData,
): Promise<UpdateReturnFormState> {
	const status = formData.get("status") as string;
	const carrier = formData.get("carrier") as string;
	const trackingNumber = formData.get("trackingNumber") as string;
	const notes = formData.get("notes") as string;

	// Validate required fields
	if (!status || !carrier || !trackingNumber) {
		return {
			success: false,
			error: "Wszystkie pola oprócz notatek są wymagane",
			fieldErrors: {
				status: !status ? "Status jest wymagany" : undefined,
				carrier: !carrier ? "Przewoźnik jest wymagany" : undefined,
				trackingNumber: !trackingNumber
					? "Numer przesyłki jest wymagany"
					: undefined,
			},
		};
	}

	// Validate tracking number format (basic validation)
	if (trackingNumber.length < 5) {
		return {
			success: false,
			error: "Numer przesyłki musi mieć co najmniej 5 znaków",
			fieldErrors: {
				trackingNumber: "Numer przesyłki jest za krótki",
			},
		};
	}

	try {
		// Simulate processing delay
		await new Promise((resolve) => setTimeout(resolve, 500));

		const updatedReturn = updateReturn(returnId, {
			status: status as any,
			carrier: carrier as any,
			trackingNumber,
			notes: notes || undefined,
		});

		if (!updatedReturn) {
			return {
				success: false,
				error: "Nie znaleziono zwrotu o podanym ID",
			};
		}

		// Revalidate the cache for the returns pages
		revalidatePath("/returns");
		revalidatePath(`/returns/${returnId}`);

		return {
			success: true,
			message: "Zwrot został pomyślnie zaktualizowany",
		};
	} catch (error) {
		console.error("Error updating return:", error);
		return {
			success: false,
			error: "Wystąpił błąd podczas aktualizacji zwrotu",
		};
	}
}

export async function redirectToReturnDetails(returnId: string) {
	redirect(`/returns/${returnId}`);
}
