"use client";

import { ProductCardSkeleton } from "./product-card-skeleton";

const ProductCollectionSkeleton = () => {
	return (
		<section className="w-full py-10">
			<div className="container space-y-6">
				<div className="h-8 w-1/3 bg-muted rounded-md animate-pulse" />

				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
					{[...Array(4)].map((_, i) => (
						<ProductCardSkeleton key={i} />
					))}
				</div>
			</div>
		</section>
	);
};

export { ProductCollectionSkeleton };
