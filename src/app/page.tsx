import { Metadata } from "next";

// Metadata API for setting title and description
export const metadata: Metadata = {
	title: "SLYIX APPAREL",
	description: "SLYIX APPAREL - latest fashion trends.",
};

export default function Home() {
	return (
		<main className="bg-background w-full h-screen flex items-center justify-center">
			<h1 className="text-xl">Welcome to SLYIX APPAREL!</h1>
		</main>
	);
}
