import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ListemProvider } from '@/components/listem/ListemProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AniStream',
  description: 'Modern anime akış deneyimi (mock UI)'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.className}>
      <body className="min-h-screen bg-bg">
        <ListemProvider>{children}</ListemProvider>
      </body>
    </html>
  );
}
