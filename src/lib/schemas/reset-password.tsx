import { z } from "zod";

export const resetPasswordSchema = z
	.object({
		newPassword: z
			.string()
			.nonempty("Password is required")
			.trim()
			.min(8, "Password must be at least 8 characters")
			.max(25, "Password cannot be more than 25 characters long."),
		confirmPassword: z
			.string()
			.nonempty("Password is required")
			.trim()
			.min(8, "Password must be at least 8 characters")
			.max(25, "Password cannot be more than 25 characters long."),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"], // Specify where the error should appear
	});
