import type { Metadata } from 'next';
import Script from 'next/script';
import {
  Cairo,
  Fraunces,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/components/LanguageProvider';
import { CartProvider } from '@/components/CartProvider';
import { MotionWrapper } from '@/components/MotionWrapper';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { BagDrawer } from '@/components/BagDrawer';
import { getSiteUrl } from '@/lib/seo';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const SITE_TITLE = 'Saber Nuts – Artisanal Hearth-Roasted Nuts & Roastery';
const SITE_DESCRIPTION =
  'Dry hearth-roasted almonds, Antep pistachios, sun-cured Smyrna figs, honey nougat, and cardamom coffee crafted weekly in Kiel by Saber Nuts.';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: SITE_TITLE,
    template: '%s | Saber Nuts',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Saber Nuts',
    'Saber Nüsse',
    'roasted pistachios',
    'sea salted almonds',
    'artisanal nougat',
    'dried Smyrna figs',
    'cardamom coffee',
    'Kiel nut roastery',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Saber Nuts',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    images: [
      {
        url: '/images/hero_saber_roastery_1795363214450.jpg',
        width: 1200,
        height: 675,
        alt: 'Saber Nuts hearth-roasted pistachios, almonds, cashews, and walnuts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/hero_saber_roastery_1795363214450.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const initScript = `
(function() {
  try {
    var savedTheme = localStorage.getItem('sabernuts-theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
    var savedLang = localStorage.getItem('sabernuts-locale');
    if (savedLang === 'ar' || savedLang === 'de' || savedLang === 'fr' || savedLang === 'sv' || savedLang === 'en') {
      document.documentElement.lang = savedLang;
      document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${fraunces.variable} ${jakarta.variable} ${cairo.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen antialiased selection:bg-[#2E5A36] selection:text-[#FAF7F0] dark:selection:bg-[#5B9A62] dark:selection:text-[#141D15]">
        <Script id="saber-boot-preferences" strategy="beforeInteractive">
          {initScript}
        </Script>
        <ThemeProvider>
          <LanguageProvider>
            <CartProvider>
              <MotionWrapper>
                <div className="flex min-h-screen flex-col">
                  <SiteHeader />
                  <main className="flex-1">{children}</main>
                  <SiteFooter />
                </div>
                <BagDrawer />
              </MotionWrapper>
            </CartProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
