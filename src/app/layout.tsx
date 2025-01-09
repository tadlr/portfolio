import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import '@/css/main.css';

const lato = Lato({
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Gustavo's Portfolio",
  description: 'Some of my work and stuff.',
};

export const runtime = 'edge';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lato.variable} antialiased`}>{children}</body>
    </html>
  );
}
