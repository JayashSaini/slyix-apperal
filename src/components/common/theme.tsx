"use client";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { ReactNode, useEffect } from "react";

interface EnhancedThemeProviderProps extends ThemeProviderProps {
	children: ReactNode;
}

export function ThemeProvider({
	children,
	...props
}: EnhancedThemeProviderProps) {
	const { theme, setTheme } = useTheme();

	// Load theme from localStorage or set to "system" on initial load
	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (!storedTheme) {
			setTheme("light");
			localStorage.setItem("theme", "light");
		} else if (storedTheme !== theme) {
			setTheme(storedTheme);
		}
	}, [setTheme, theme]);

	// Update localStorage whenever the theme changes
	useEffect(() => {
		if (theme) {
			localStorage.setItem("theme", theme);
		}
	}, [theme]);

	return (
		<NextThemesProvider
			{...props}
			attribute="class"
		>
			{children}
		</NextThemesProvider>
	);
}
