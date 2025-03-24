import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/features/provider";
import { Toaster } from "@/components/common/toaster";
import { ThemeProvider } from "@/components/common/theme";
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
				<ThemeProvider
					attribute="class"
					enableSystem
					disableTransitionOnChange
				>
					<Toaster>
						<ReduxProvider>
							<Nav />

							{children}
							<Footer />
						</ReduxProvider>
					</Toaster>
				</ThemeProvider>
			</body>
		</html>
	);
}
