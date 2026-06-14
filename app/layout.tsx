import type { Metadata } from 'next';
import { Inter, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import { SpotlightCursor } from '@/components/ui/SpotlightCursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '800'],
  display: 'swap',
});

// Keep jakarta variable for legacy components that still reference it
const SITE_URL = 'https://webbaura.com';

export const metadata: Metadata = {
  title: {
    default: 'Webbaura · Strategic websites for Australian small businesses',
    template: '%s · Webbaura',
  },
  description:
    'Webbaura builds clean, fast, conversion focused websites for Australian small businesses. See your new site before you commit. Melbourne based, full code ownership, no lock in.',
  keywords: [
    'web design Melbourne',
    'freelance web developer Australia',
    'small business websites',
    'conversion-focused web design',
    'custom website design Australia',
    'Next.js developer Melbourne',
  ],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: SITE_URL,
    siteName: 'Webbaura',
    title: 'Webbaura · Strategic websites for Australian small businesses',
    description:
      'Production-ready websites built with purpose. See your staging site before you pay. Melbourne based.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Webbaura' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webbaura · Strategic websites for Australian small businesses',
    description: 'See your new site before you commit. Melbourne based.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${display.variable}`}>
      <body>
        {children}
        <SpotlightCursor />
      </body>
    </html>
  );
}
