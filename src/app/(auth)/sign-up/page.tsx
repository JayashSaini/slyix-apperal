import { GalleryVerticalEnd } from "lucide-react";
import { SignupForm } from "@/components/auth/sign-form";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign up - SLYIX APPAREL",
	description:
		"Sign up to your SLYIX APPAREL account to explore the latest fashion trends and manage your profile.",
};

export default function SignupPage() {
	return (
		<div className="w-full min-h-svh ">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex justify-center gap-2 md:justify-start">
					<Link
						href="/"
						className="flex items-center gap-2 font-medium"
					>
						<div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
							<GalleryVerticalEnd className="size-4" />
						</div>
						SLYIX APPAREL .
					</Link>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-md sm:mt-20 mt-14 mb-10">
						<SignupForm />
					</div>
				</div>
			</div>
		</div>
	);
}
