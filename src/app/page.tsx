import { Metadata } from "next";

// Metadata API for setting title and description
export const metadata: Metadata = {
	title: "SLYIX APPAREL",
	description: "SLYIX APPAREL - latest fashion trends.",
};

export default function Home() {
	return (
		<main className="bg-background w-full flex items-center justify-center relative ">
			<video
				src="https://res.cloudinary.com/dcvb5vgyf/video/upload/f_auto:video,q_auto/ninrnp6cqh5ahmbue8ba"
				muted
				autoPlay
				loop
				className="object-cover sm:w-full sm:h-auto h-[500px]"
			></video>
			{/* Text Box */}
			<div className="absolute bottom-5 w-full px-3">
				<div className=" w-full text-center py-2 px-4 rounded-md max-w-[650px] mx-auto z-10 bg-black/70 ">
					<h1 className="text-[#f5f5f5] bowlby-one-sc-regular text-xl sm:text-4xl font-extrabold tracking-widest  ">
						UNLEASH YOUR BOLD STYLE
					</h1>
					<p
						className="text-primary font-mono mt-2 text-sm
        "
					>
						Premium Addition
					</p>
				</div>
			</div>
			<div className="w-full h-full absolute top-0 bg-black/10"></div>
		</main>
	);
}
