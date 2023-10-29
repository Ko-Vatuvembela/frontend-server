import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	style: ['normal', 'italic'],
	weight: ['100', '300', '400', '500', '700', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Ko Vatuvembela',
	description: 'Projeto de integração de línguas Africanas',
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<div className="mx-auto max-w-7xl">{children}</div>
			</body>
		</html>
	);
}
