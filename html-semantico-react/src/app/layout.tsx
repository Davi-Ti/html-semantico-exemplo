import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css"; // Caminho correto para o Next.js (App Router)

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Exemplo de Site Semântico",
	description: "Um exemplo de site semântico usando Next.js e Tailwind CSS.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>
				<div className="min-h-screen flex flex-col">{children}</div>
			</body>
		</html>
	);
}
