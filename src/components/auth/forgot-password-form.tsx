"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "@/lib/schemas/reset-password";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { resetPassword as resetPasswordHandler } from "@/features/thunk/authThunk";

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export function ResetPasswordForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"form">) {
	const [loading, setLoading] = useState(false);
	const { token } = useParams();

	const router = useRouter();
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ResetPasswordFormData>({
		resolver: zodResolver(resetPasswordSchema),
	});

	const onSubmit = async (data: ResetPasswordFormData) => {
		setLoading(true);
		const result = await dispatch(
			resetPasswordHandler({
				token: token?.toString() || "",
				newPassword: data.newPassword,
				confirmPassword: data.confirmPassword,
			})
		);
		reset();

		setLoading(false);
		if (resetPasswordHandler.fulfilled.match(result)) {
			// Show success message or redirect if needed
			router.push("/login");
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn("flex flex-col gap-6", className)}
			{...props}
		>
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-2xl font-bold">Reset Password</h1>
				<p className="text-balance text-sm text-muted-foreground">
					Enter your new password below
				</p>
			</div>
			<div className="grid gap-6">
				<div className="grid gap-2">
					<Label htmlFor="newPassword">New Password</Label>
					<Input
						id="newPassword"
						type="password"
						placeholder="Enter new password"
						{...register("newPassword")}
						error={errors.newPassword?.message}
					/>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="confirmPassword">Confirm Password</Label>
					<Input
						id="confirmPassword"
						type="password"
						placeholder="Confirm new password"
						{...register("confirmPassword")}
						error={errors.confirmPassword?.message}
					/>
				</div>

				<Button
					type="submit"
					className="w-full"
					disabled={loading}
					isLoading={loading}
				>
					Submit
				</Button>

				<p className="text-center text-sm text-muted-foreground">
					Remembered your password?{" "}
					<Link
						href="/login"
						className="text-primary underline"
					>
						Login
					</Link>
				</p>
			</div>
		</form>
	);
}
