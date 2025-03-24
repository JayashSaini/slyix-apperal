"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { requestHandler } from "@/lib/utils";
import { resendEmailVerificationRequest } from "@/api";
import { useAppSelector } from "@/store/hooks";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function EmailVerificationPage() {
	const [isLoading, setIsLoading] = useState(false);
	const email = useAppSelector((state) => state.auth.email);
	const router = useRouter();

	const handleResend = async () => {
		if (!email) {
			toast.error("Email address is not available!");
			router.push("/sign-up");
		}
		requestHandler(
			() => resendEmailVerificationRequest(email || ""),
			setIsLoading,
			() => {
				toast.success(
					"Verification email re-send successfully, Please check your inbox."
				);
			},
			(e) => {
				toast.error(e || "Failed to resend email verification!");
				router.push("/sign-up");
			}
		);
	};

	return (
		<div className="w-full min-h-screen">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-md sm:mt-20 mt-14 text-center">
						<h2 className="text-3xl font-bold mb-4">
							Verify Your Email Address
						</h2>
						<p className="text-gray-500 mb-6">
							A verification link has been sent to your email address. Please
							check your inbox and click on the link to complete your
							registration.
						</p>
						<Button
							onClick={handleResend}
							disabled={isLoading}
							isLoading={isLoading}
							className="w-full"
						>
							Resend Verification Email
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
