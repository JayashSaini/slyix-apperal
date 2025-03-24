"use client";

import { Popover, PopoverPanel, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import { Fragment } from "react";
import Link from "next/link";

const SideMenuItems = {
	Home: "/",
	Store: "/store",
	Account: "/login",
	Cart: "/cart",
};

const SideMenu = () => {
	return (
		<div className="h-full">
			<div className="flex items-center h-full">
				<Popover className="h-full flex">
					{({ open, close }) => (
						<>
							<div className="relative flex h-full">
								<Popover.Button
									data-testid="nav-menu-button"
									className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-muted-foreground cursor-pointer"
								>
									Menu
								</Popover.Button>
							</div>

							<Transition
								show={open}
								as={Fragment}
								enter="transition ease-out duration-150"
								enterFrom="opacity-0"
								enterTo="opacity-100 backdrop-blur-2xl"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 backdrop-blur-2xl"
								leaveTo="opacity-0"
							>
								<PopoverPanel className="flex flex-col  bg-sidebar absolute w-[90%] pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-50 inset-x-0 text-sm text-sidebar-foreground   rounded-tr-2xl rounded-br-2xl ">
									<div
										data-testid="nav-menu-popup"
										className="flex flex-col h-full   text-sidebar-foreground rounded-rounded justify-between p-6 "
									>
										<div
											className="flex justify-end"
											id="xmark"
										>
											<button
												data-testid="close-menu-button"
												onClick={close}
											>
												<X />
											</button>
										</div>
										<ul className="flex flex-col gap-6 items-start justify-start">
											{Object.entries(SideMenuItems).map(([name, href]) => {
												return (
													<li key={name}>
														<Link
															href={href}
															className="text-3xl leading-10 text-sidebar-foreground "
															onClick={close}
															data-testid={`${name.toLowerCase()}-link`}
														>
															{name}
														</Link>
													</li>
												);
											})}
										</ul>
										<div className="flex flex-col gap-y-6">
											<h3 className="flex justify-between text-sidebar-foreground">
												© {new Date().getFullYear()} SLYIX APPAREL . All rights
												reserved.
											</h3>
										</div>
									</div>
								</PopoverPanel>
							</Transition>
						</>
					)}
				</Popover>
			</div>
		</div>
	);
};

export default SideMenu;
