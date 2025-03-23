// components/common/meta.tsx
import Head from "next/head";

interface MetaProps {
	title: string;
	description: string;
}

export function Meta({ title, description }: MetaProps) {
	return (
		<Head>
			<title>{title}</title>
			<meta
				name="description"
				content={description}
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta charSet="UTF-8" />
		</Head>
	);
}
