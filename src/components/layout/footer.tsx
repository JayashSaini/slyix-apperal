import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Footer() {
	const categories = [
		{ id: 1, name: "Graphic Tees", handle: "graphic-tees" },
		{ id: 2, name: "Plain Tees", handle: "plain-tees" },
		{ id: 3, name: "Vintage Tees", handle: "vintage-tees" },
		{ id: 4, name: "Oversized Tees", handle: "oversized-tees" },
		{ id: 5, name: "Anime Tees", handle: "anime-tees" },
		{ id: 6, name: "Band Tees", handle: "band-tees" },
	];

	const collections = [
		{ id: 1, title: "Summer Collection", handle: "summer" },
		{ id: 2, title: "Winter Collection", handle: "winter" },
		{ id: 3, title: "Sale", handle: "sale" },
	];

	return (
		<footer className="border-t border-border w-full">
			<div className="content-container flex flex-col w-full">
				<div className="flex flex-col gap-y-6 sm:flex-row items-start justify-between py-40">
					<div>
						<Link
							href="/"
							className="text-lg text-foreground hover:text-muted-foreground uppercase"
						>
							SLYIX Apparel
						</Link>
					</div>
					<div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
						<div className="flex flex-col gap-y-2">
							<span className="text-lg font-normal mb-3">Categories</span>
							<ul className="grid grid-cols-1 gap-2">
								{categories.map((c) => (
									<li
										key={c.id}
										className="flex flex-col gap-2 text-muted-foreground text-[15px]"
									>
										<Link
											href={`/categories/${c.handle}`}
											className={cn("hover:underline")}
										>
											{c.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="flex flex-col gap-y-2">
							<span className="text-lg font-normal mb-3">Collections</span>
							<ul
								className={cn(
									"grid grid-cols-1 gap-2 text-muted-foreground text-[15px]"
								)}
							>
								{collections.map((c) => (
									<li key={c.id}>
										<Link
											href={`/collections/${c.handle}`}
											className="hover:underline"
										>
											{c.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="flex flex-col gap-y-2">
							<span className="text-lg font-normal mb-3">SLYIX</span>
							<ul className="grid grid-cols-1 gap-y-2 text-muted-foreground text-[15px]">
								<li>
									<a
										href="#"
										className="hover:underline"
									>
										About Us
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:underline"
									>
										Contact
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:underline"
									>
										Privacy Policy
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex w-full mb-16 justify-between text-muted-foreground">
					<h3 className="text-[15px]">
						© {new Date().getFullYear()} SLYIX Apparel. All rights reserved.
					</h3>
					<Link
						href="/"
						className="text-[15px] hover:underline"
					>
						SLYIX APPAREL
					</Link>
				</div>
			</div>
		</footer>
	);
}
