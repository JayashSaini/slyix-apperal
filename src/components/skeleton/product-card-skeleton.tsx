"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

const ProductCardSkeleton = () => {
	return (
		<Card className="rounded-sm bg-transparent border-none shadow-none">
			<div className="relative w-full aspect-[4/5] bg-muted">
				<Skeleton className="absolute inset-0 w-full h-full" />
			</div>
			<CardContent className="pt-3 px-1.5 pb-0 space-y-1.5">
				<div className="flex justify-between items-center">
					<Skeleton className="h-4 w-1/2" />
					<Skeleton className="h-4 w-1/4" />
				</div>
				<Skeleton className="h-3 w-3/4" />
			</CardContent>
		</Card>
	);
};

export { ProductCardSkeleton };
