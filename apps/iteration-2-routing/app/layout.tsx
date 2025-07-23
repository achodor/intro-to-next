import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "System Zwrotów - Routing",
	description: "Aplikacja do zarządzania zwrotami - iteracja 2",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
			>
				<nav className="bg-white shadow-sm border-b">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between h-16">
							<div className="flex items-center space-x-8">
								<Link
									href="/"
									className="text-xl font-semibold text-gray-900 hover:text-gray-700"
								>
									System Zwrotów
								</Link>
								<Link
									href="/returns"
									className="text-gray-600 hover:text-gray-900 font-medium"
								>
									Zwroty
								</Link>
							</div>
						</div>
					</div>
				</nav>
				<main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					{children}
				</main>
			</body>
		</html>
	);
}
