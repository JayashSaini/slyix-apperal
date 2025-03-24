"use client";

import { ResetPasswordForm } from "@/components/auth/forgot-password-form";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";

export default function EmailVerificationLoadingPage() {
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
					<div className="w-full max-w-md sm:mt-20 mt-14">
						<ResetPasswordForm />
					</div>
				</div>
			</div>
		</div>
	);
}
