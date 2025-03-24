"use client";

import { ResetPasswordForm } from "@/components/auth/forgot-password-form";

export default function EmailVerificationLoadingPage() {
	return (
		<div className="w-full min-h-screen">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-md sm:mt-20 mt-14">
						<ResetPasswordForm />
					</div>
				</div>
			</div>
		</div>
	);
}
