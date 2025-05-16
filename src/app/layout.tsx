import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/features/provider";
import { Toaster } from "@/components/common/toaster";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Toaster>
					<ReduxProvider>
						<Nav />

						{children}
						<Footer />
					</ReduxProvider>
				</Toaster>
			</body>
		</html>
	);
}
