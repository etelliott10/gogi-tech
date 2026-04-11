import type { Metadata } from 'next';
import { DM_Sans, JetBrains_Mono, Syne } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import 'react-day-picker/dist/style.css';
import '@/styles/globals.css';

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne'
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains-mono'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'https://gogi.tech'),
  title: {
    default: 'Gogi Tech | AI Agents, Automation & Robotics Implementation',
    template: '%s | Gogi Tech'
  },
  description:
    'Gogi Tech helps businesses implement AI agents, workflow automation, robotics, and custom websites. Book a free strategy call today.',
  keywords: ['AI agents', 'automation', 'robotics', 'web development', 'AI implementation'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gogi.tech',
    siteName: 'Gogi Tech',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@gogitech'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navbar transparent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
