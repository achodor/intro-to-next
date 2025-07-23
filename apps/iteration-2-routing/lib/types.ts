export interface Return {
	id: string;
	orderNumber: string;
	customerName: string;
	productName: string;
	reason: string;
	status: "pending" | "approved" | "rejected" | "processed";
	requestDate: string;
	carrier: "dpd" | "inpost" | "dhl" | "gls";
	trackingNumber: string;
	sendDate: string;
	notes?: string;
}

export const statusLabels: Record<Return["status"], string> = {
	pending: "Oczekujący",
	approved: "Zatwierdzony",
	rejected: "Odrzucony",
	processed: "Przetworzony",
};

export const carrierLabels: Record<Return["carrier"], string> = {
	dpd: "DPD",
	inpost: "InPost",
	dhl: "DHL",
	gls: "GLS",
};
