import { Suspense } from "react";

import CartButton from "@/components/common/cart-button";
import SideMenu from "@/components/common/side-mene";
import Link from "next/link";

export default async function Nav() {
	return (
		<div className="sticky top-0 inset-x-0 z-50 group">
			<header className="relative h-16 mx-auto border-b duration-200 bg-background border-border">
				<nav className="content-container text-base text-foreground flex items-center justify-between w-full h-full ">
					<div className="flex-1 basis-0 h-full flex items-center">
						<div className="h-full">
							<SideMenu />
						</div>
					</div>

					<div className="flex items-center h-full">
						<Link
							href="/"
							className="text-lg text-foreground hover:text-muted-foreground uppercase"
							data-testid="nav-store-link"
						>
							SLYIX APPAREL
						</Link>
					</div>

					<div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
						<div className="hidden sm:flex items-center gap-x-6 h-full">
							<Link
								className="hover:text-muted-foreground"
								href="/account"
								data-testid="nav-account-link"
							>
								Account
							</Link>
						</div>
						<Suspense
							fallback={
								<Link
									className="hover:text-muted-foreground flex gap-2"
									href="/cart"
									data-testid="nav-cart-link"
								>
									Cart (0)
								</Link>
							}
						>
							<CartButton />
						</Suspense>
					</div>
				</nav>
			</header>
		</div>
	);
}
