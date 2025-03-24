import { z } from "zod";

export const forgotPasswordSchema = z.object({
	email: z
		.string()
		.nonempty("Email is required")
		.trim()
		.email("Please provide a valid email address."),
});
