import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { CookieConsent } from '@/components/cookie-consent';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Cognito - Institutional Macroeconomic Intelligence',
  description: 'Access institutional-grade macroeconomic intelligence, forecasts, and analysis designed for economists, investors, and global decision-makers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
        <CookieConsent />
      </body>
    </html>
  );
}
