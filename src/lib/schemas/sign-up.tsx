import { z } from "zod";

export const registerSchema = z.object({
	email: z
		.string()
		.nonempty("Email is required")
		.trim()
		.email("Please provide a valid email address."), // Email format validation

	username: z
		.string()
		.nonempty("Username is required")
		.trim()
		.min(3, "Username must be at least 3 characters")
		.max(20, "Username cannot be more than 20 characters long.")
		.regex(
			/^[a-zA-Z0-9_]+$/, // Alphanumeric and underscore only
			"Username can only contain alphanumeric characters and underscores (_)."
		),

	password: z
		.string()
		.nonempty("Password is required")
		.trim()
		.min(8, "Password must be at least 8 characters")
		.max(25, "Password cannot be more than 25 characters long."),
});
