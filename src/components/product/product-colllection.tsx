"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ProductCard } from "./product-card";
import { requestHandler } from "@/lib/utils";
import { getCategoryByIdAPI } from "@/api/ecommerce";
import { CategoryInterface, ProductInterface } from "@/types/app";
import { ProductCollectionSkeleton } from "../skeleton/product-collection-skeleton";

function ProductCollection({ categoryId }: { categoryId: number }) {
	const [category, setCategory] = useState<CategoryInterface | null>(null);
	const [products, setProducts] = useState<ProductInterface[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		requestHandler(
			() => getCategoryByIdAPI(categoryId, 1, 8),
			setLoading,
			({ data }) => {
				setCategory(data.category);
				setProducts(data.products);
			},
			() => toast.error("Failed to load category.")
		);
	}, [categoryId]);

	return loading ? (
		<ProductCollectionSkeleton />
	) : (
		<section className="w-full py-10">
			<div className="container space-y-6">
				<header className="text-left">
					<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
						{category?.name}
					</h2>
				</header>

				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
					{products.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export { ProductCollection };
