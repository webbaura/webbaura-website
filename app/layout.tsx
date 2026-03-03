import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Webbaura — We build your site first. You decide.',
    template: '%s | Webbaura',
  },
  description:
    'Webbaura builds production-ready websites for Melbourne businesses using competitor intelligence and AI. You see the staging site before committing. No upfront cost.',
  keywords: ['web design Melbourne', 'website builder', 'small business websites', 'Melbourne web agency'],
  metadataBase: new URL('https://webbaura.com'),
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://webbaura.com',
    siteName: 'Webbaura',
    title: 'Webbaura — We build your site first. You decide.',
    description:
      'Production-ready websites built from competitor intelligence. See your new site before you commit.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webbaura — We build your site first.',
    description: 'See your new website before you commit to anything.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
