"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "@/lib/schemas/forgot-password-request";
import { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { forgotPassword as forgotPasswordHandler } from "@/features/thunk/authThunk";

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"form">) {
	const [loading, setLoading] = useState(false);

	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ForgotPasswordFormData>({
		resolver: zodResolver(forgotPasswordSchema),
	});

	const onSubmit = async (data: ForgotPasswordFormData) => {
		setLoading(true);
		await dispatch(forgotPasswordHandler(data?.email));
		setLoading(false);
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn("flex flex-col gap-6", className)}
			{...props}
		>
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-2xl font-bold">Forgot Password</h1>
				<p className="text-balance text-sm text-muted-foreground">
					Enter your email below to receive a password reset link
				</p>
			</div>
			<div className="grid gap-6">
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						placeholder="joe@example.com"
						{...register("email")}
						error={errors.email?.message}
					/>
				</div>

				<Button
					type="submit"
					className="w-full"
					disabled={loading}
					isLoading={loading}
				>
					Send Reset Link
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
