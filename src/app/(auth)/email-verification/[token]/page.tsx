"use client";
import { verifyEmailRequest } from "@/api";
import { requestHandler } from "@/lib/utils";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import { useEffect } from "react";
import { toast } from "sonner";

export default function EmailVerificationLoadingPage() {
	const { token } = useParams();
	const router = useRouter();

	// Perform email verification logic here using the provided token

	useEffect(() => {
		if (token) {
			requestHandler(
				() => verifyEmailRequest(token.toString() || ""),
				null,
				() => {
					toast.success("Email verified successfully! You can now log in.");
					router.push("/login");
				},
				(e) => {
					toast.error(e || "Failed to verify email. Please try again.");
					router.push("/sign-up");
				}
			);
		}
	}, [token, router]);

	return (
		<div className="w-full min-h-screen">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex justify-center gap-2 md:justify-start">
					<Link
						href="/"
						className="flex items-center gap-2 font-medium"
					>
						<div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
							<GalleryVerticalEnd className="size-4" />
						</div>
						SLYIX APPAREL
					</Link>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="flex flex-1 items-center justify-center mt-8">
						<div className="w-full max-w-md text-center">
							<h2 className="text-3xl font-bold mb-4">Verifying...</h2>
							<p className="text-gray-500 mb-6">
								Please wait while we verify your email address.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
