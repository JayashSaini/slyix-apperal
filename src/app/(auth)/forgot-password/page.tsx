import { Metadata } from "next";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-request-form";

// Metadata API for setting title and description
export const metadata: Metadata = {
	title: "Forgot Password - SLYIX APPAREL",
	description:
		"Forgot Password to your SLYIX APPAREL account to explore the latest fashion trends and manage your profile.",
};

export default function ForgotPasswordPage() {
	return (
		<div className="w-full min-h-svh">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-md sm:mt-20 mt-14">
						<ForgotPasswordForm />
					</div>
				</div>
			</div>
		</div>
	);
}
