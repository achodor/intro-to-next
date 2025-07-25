import type { Return } from "./types";

export const mockReturns: Return[] = [
	{
		id: "1",
		orderNumber: "ZW-2024-001",
		customerName: "Anna Kowalska",
		productName: "Sukienka letnia w kwiaty",
		reason: "Zły rozmiar - za mała",
		status: "pending",
		requestDate: "2024-07-20",
		carrier: "inpost",
		trackingNumber: "INP123456789PL",
		sendDate: "2024-07-21",
		notes: "Klient prosi o wymianę na rozmiar L",
	},
	{
		id: "2",
		orderNumber: "ZW-2024-002",
		customerName: "Piotr Nowak",
		productName: "Koszula biznesowa biała",
		reason: "Uszkodzenie podczas transportu",
		status: "approved",
		requestDate: "2024-07-19",
		carrier: "dpd",
		trackingNumber: "DPD987654321PL",
		sendDate: "2024-07-20",
		notes: "Widoczne plamy na koszuli",
	},
	{
		id: "3",
		orderNumber: "ZW-2024-003",
		customerName: "Maria Wiśniewska",
		productName: "Buty sportowe Nike Air",
		reason: "Nie spełniają oczekiwań",
		status: "processed",
		requestDate: "2024-07-18",
		carrier: "dhl",
		trackingNumber: "DHL555666777PL",
		sendDate: "2024-07-19",
	},
	{
		id: "4",
		orderNumber: "ZW-2024-004",
		customerName: "Jakub Kaczmarek",
		productName: "Bluza z kapturem czarna",
		reason: "Zamówione przez pomyłkę",
		status: "rejected",
		requestDate: "2024-07-17",
		carrier: "gls",
		trackingNumber: "GLS888999000PL",
		sendDate: "2024-07-18",
		notes: "Przekroczony 14-dniowy termin zwrotu",
	},
	{
		id: "5",
		orderNumber: "ZW-2024-005",
		customerName: "Katarzyna Lewandowska",
		productName: "Płaszcz zimowy szary",
		reason: "Wada materiału",
		status: "approved",
		requestDate: "2024-07-16",
		carrier: "inpost",
		trackingNumber: "INP111222333PL",
		sendDate: "2024-07-17",
		notes: "Pęknięcie szwu przy rękawie",
	},
	{
		id: "6",
		orderNumber: "ZW-2024-006",
		customerName: "Tomasz Zieliński",
		productName: "Jeansy slim fit granatowe",
		reason: "Różni się od opisu",
		status: "pending",
		requestDate: "2024-07-15",
		carrier: "dpd",
		trackingNumber: "DPD444555666PL",
		sendDate: "2024-07-16",
		notes: "Kolor różni się od zdjęcia w sklepie",
	},
];
