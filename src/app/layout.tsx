import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-inter",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: "600",
	display: "swap",
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "NFTBoost - Explore um Universo Digital de Colecionáveis Únicos!",
	description:
		"Projeto desenvolvido durante o curso de Front-End da CodeBOOST - Módulo NextJs14 + TailwindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR">
			<body className={`${inter.variable} ${poppins.variable}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
