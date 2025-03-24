"use client";

import {
	Popover,
	PopoverButton,
	PopoverPanel,
	Transition,
} from "@headlessui/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

const CartDropdown = () => {
	const [activeTimer, setActiveTimer] = useState<
		ReturnType<typeof setTimeout> | undefined
	>(undefined);

	const [cartDropdownOpen, setCartDropdownOpen] = useState(false);

	const open = () => setCartDropdownOpen(true);
	const close = () => setCartDropdownOpen(false);

	// const totalItems =
	// 	cartState?.items?.reduce((acc, item) => {
	// 		return acc + item.quantity;
	// 	}, 0) || 0;
	// const subtotal = cartState?.subtotal ?? 0;
	const totalItems = 0;

	const itemRef = useRef<number>(totalItems || 0);

	const timedOpen = () => {
		open();

		const timer = setTimeout(close, 5000);

		setActiveTimer(timer);
	};

	const openAndCancel = () => {
		if (activeTimer) {
			clearTimeout(activeTimer);
		}

		open();
	};

	// Clean up the timer when the component unmounts
	useEffect(() => {
		return () => {
			if (activeTimer) {
				clearTimeout(activeTimer);
			}
		};
	}, [activeTimer]);

	const pathname = usePathname();

	// open cart dropdown when modifying the cart items, but only if we're not on the cart page
	useEffect(() => {
		if (itemRef.current !== totalItems && !pathname.includes("/cart")) {
			timedOpen();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [totalItems, itemRef.current]);

	return (
		<div
			className="h-full "
			onMouseEnter={openAndCancel}
			onMouseLeave={close}
		>
			<Popover className="relative h-full">
				<PopoverButton className="h-full">
					<Link
						className="hover:text-ui-fg-base"
						href="/cart"
						data-testid="nav-cart-link"
					>{`Cart (${totalItems})`}</Link>
				</PopoverButton>
				<Transition
					show={cartDropdownOpen}
					as={Fragment}
					enter="transition ease-out duration-200"
					enterFrom="opacity-0 translate-y-1"
					enterTo="opacity-100 translate-y-0"
					leave="transition ease-in duration-150"
					leaveFrom="opacity-100 translate-y-0"
					leaveTo="opacity-0 translate-y-1"
				>
					<PopoverPanel
						static
						className="hidden sm:block absolute top-[calc(100%+20px)] right-0 bg-popover  w-[420px] text-card-foreground rounded-bl-2xl rounded-br-2xl"
						data-testid="nav-cart-dropdown"
					>
						<div className="p-4 flex items-center justify-center">
							<h3 className="text-lg text-foreground font-semibold">Cart</h3>
						</div>
						{/* {cartState && cartState.items?.length ? (
							<>
								<div className="overflow-y-scroll max-h-[402px] px-4 grid grid-cols-1 gap-y-8 no-scrollbar p-px">
									{cartState.items
										.sort((a, b) => {
											return (a.created_at ?? "") > (b.created_at ?? "")
												? -1
												: 1;
										})
										.map((item) => (
											<div
												className="grid grid-cols-[122px_1fr] gap-x-4"
												key={item.id}
												data-testid="cart-item"
											>
												<LocalizedClientLink
													href={`/products/${item.product_handle}`}
													className="w-24"
												>
													<Thumbnail
														thumbnail={item.thumbnail}
														images={item.variant?.product?.images}
														size="square"
													/>
												</LocalizedClientLink>
												<div className="flex flex-col justify-between flex-1">
													<div className="flex flex-col flex-1">
														<div className="flex items-start justify-between">
															<div className="flex flex-col overflow-ellipsis whitespace-nowrap mr-4 w-[180px]">
																<h3 className="text-base-regular overflow-hidden text-ellipsis">
																	<LocalizedClientLink
																		href={`/products/${item.product_handle}`}
																		data-testid="product-link"
																	>
																		{item.title}
																	</LocalizedClientLink>
																</h3>
																<LineItemOptions
																	variant={item.variant}
																	data-testid="cart-item-variant"
																	data-value={item.variant}
																/>
																<span
																	data-testid="cart-item-quantity"
																	data-value={item.quantity}
																>
																	Quantity: {item.quantity}
																</span>
															</div>
															<div className="flex justify-end">
																<LineItemPrice
																	item={item}
																	style="tight"
																	currencyCode={cartState.currency_code}
																/>
															</div>
														</div>
													</div>
													<DeleteButton
														id={item.id}
														className="mt-1"
														data-testid="cart-item-remove-button"
													>
														Remove
													</DeleteButton>
												</div>
											</div>
										))}
								</div>
								<div className="p-4 flex flex-col gap-y-4 text-small-regular">
									<div className="flex items-center justify-between">
										<span className="text-ui-fg-base font-semibold">
											Subtotal{" "}
											<span className="font-normal">(excl. taxes)</span>
										</span>
										<span
											className="text-large-semi"
											data-testid="cart-subtotal"
											data-value={subtotal}
										>
											{subtotal}
										</span>
									</div>
									<LocalizedClientLink
										href="/cart"
										passHref
									>
										<Button
											className="w-full"
											size="large"
											data-testid="go-to-cart-button"
										>
											Go to cart
										</Button>
									</LocalizedClientLink>
								</div>
							</>
						) : ( */}
						<div>
							<div className="flex py-12 flex-col gap-y-4 items-center justify-center">
								<span>Your shopping bag is empty.</span>
								<div>
									<Link href="/store">
										<>
											<span className="sr-only">Go to all products page</span>
											<Button onClick={close}>Explore products</Button>
										</>
									</Link>
								</div>
							</div>
						</div>
						{/* )} */}
					</PopoverPanel>
				</Transition>
			</Popover>
		</div>
	);
};

export default CartDropdown;
