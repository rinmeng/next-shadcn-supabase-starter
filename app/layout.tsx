import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { Navbar } from '@/components/Navbar';

import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { AuthProvider } from '@/contexts/AuthContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next.js Starter - Shadcn + Supabase',
  description: 'A modern Next.js boilerplate with Shadcn UI and Supabase',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <Navbar />
            <main>{children}</main>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
