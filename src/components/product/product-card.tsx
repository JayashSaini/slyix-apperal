"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ProductInterface } from "@/types/app";
import { CDNImage } from "../common/cdn-image";
import { Card, CardContent } from "@/components/ui/card";

const ProductCard: React.FC<{ product: ProductInterface }> = ({ product }) => {
	const [hovered, setHovered] = useState(false);
	const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

	const router = useRouter();

	return (
		<Card
			className="rounded-sm bg-transparent border-none shadow-none cursor-pointer "
			onClick={() => {
				window.scrollTo(0, 0);
				router.push(`/product/${product.id}`);
			}}
		>
			<div
				className="relative w-full aspect-[4/5] bg-muted overflow-hidden"
				onMouseEnter={() => {
					hoverTimeout.current = setTimeout(() => setHovered(true), 300);
				}}
				onMouseLeave={() => {
					if (hoverTimeout.current) {
						clearTimeout(hoverTimeout.current);
					}
					setHovered(false);
				}}
			>
				<CDNImage
					src={
						hovered
							? product.images[1]?.key ?? product.images[0]?.key
							: product.images[0]?.key
					}
					alt={product.description}
					fill
					className="object-cover transition-transform duration-500 ease-in-out hover:scale-105 delay-500"
					loading="lazy"
				/>
			</div>

			<CardContent className="pt-3 px-1.5 pb-0">
				<div className="flex justify-between items-center mb-0.5 gap-1">
					<h3 className="text-[13px] sm:text-sm font-medium truncate text-foreground max-w-[70%]">
						{product.name}
					</h3>
					<span className="text-[12px] sm:text-sm text-muted-foreground whitespace-nowrap">
						Rs. {product.basePrice}
					</span>
				</div>
				<p className="text-[11px] sm:text-xs text-muted-foreground truncate">
					{product.description}
				</p>
			</CardContent>
		</Card>
	);
};

export { ProductCard };
