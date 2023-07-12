import './globals.css';
import Navbar from './components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Cross APP',
	description: 'Welcome to Cross App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={inter.className}>
			<body className='bg-slate-800'>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
