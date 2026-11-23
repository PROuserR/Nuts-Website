'use client';

import React from 'react';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';
import { LOCALES } from '@/lib/i18n';
import { useLanguage } from './LanguageProvider';
import { useTheme } from './ThemeProvider';

export function SiteFooter() {
  const { locale, setLocale, t } = useLanguage();
  const { theme, mounted, toggleTheme } = useTheme();
  const isDark = mounted && theme === 'dark';

  return (
    <footer className="border-t border-[#E0D6C5] bg-[#EFE8DA]/60 dark:border-[#3F3025] dark:bg-[#261D17]">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5 space-y-3">
            <Link
              href="/"
              className="font-display text-xl font-semibold text-[#241C15] dark:text-[#F3EAD9]"
            >
              {t.brandName}
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-[#695A4C] dark:text-[#BCAA95]">
              {t.footer.blurb}
            </p>
            <p className="text-xs text-[#695A4C] dark:text-[#BCAA95]">
              Elisabethstraße 70, 24143 Kiel, Germany
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5 text-sm">
            <h2 className="font-semibold text-[#241C15] dark:text-[#F3EAD9]">
              {t.footer.roasteryHeading}
            </h2>
            <ul className="space-y-2 text-[#695A4C] dark:text-[#BCAA95]">
              <li>
                <Link href="/#collection" className="hover:text-[#241C15] dark:hover:text-[#F3EAD9]">
                  {t.nav.collection}
                </Link>
              </li>
              <li>
                <Link href="/#craft" className="hover:text-[#241C15] dark:hover:text-[#F3EAD9]">
                  {t.nav.craft}
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-[#241C15] dark:hover:text-[#F3EAD9]">
                  {t.nav.journal}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3 text-sm">
            <h2 className="font-semibold text-[#241C15] dark:text-[#F3EAD9]">
              {t.footer.connectHeading}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-[#695A4C] dark:text-[#BCAA95]">
              <a
                href="https://www.instagram.com/sabernuts/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[#241C15] dark:hover:text-[#F3EAD9]"
              >
                Instagram @sabernuts
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://saber-nusse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[#241C15] dark:hover:text-[#F3EAD9]"
              >
                Saber Nüsse
              </a>
            </div>

            {/* Language segmented buttons in footer */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {LOCALES.map((item) => {
                const active = locale === item.code;
                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => setLocale(item.code)}
                    aria-pressed={active}
                    className={`rounded-md border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                      active
                        ? 'border-[#2E5A36] bg-[#2E5A36] text-[#FAF7F0] dark:border-[#5B9A62] dark:bg-[#5B9A62] dark:text-[#141D15]'
                        : 'border-[#E0D6C5] bg-[#FCF9F2] text-[#695A4C] hover:text-[#241C15] dark:border-[#3F3025] dark:bg-[#1C1510] dark:text-[#BCAA95] dark:hover:text-[#F3EAD9]'
                    }`}
                  >
                    {item.nativeLabel}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[#E0D6C5] bg-[#FCF9F2] px-3 text-xs font-medium text-[#241C15] hover:bg-[#EFE8DA] dark:border-[#3F3025] dark:bg-[#1C1510] dark:text-[#F3EAD9] dark:hover:bg-[#30241C] transition-colors cursor-pointer"
              >
                {isDark ? (
                  <>
                    <Sun className="h-3.5 w-3.5 text-[#DFA264]" aria-hidden="true" />
                    <span>{t.nav.themeLightLabel}</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-3.5 w-3.5 text-[#2E5A36]" aria-hidden="true" />
                    <span>{t.nav.themeDarkLabel}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[#E0D6C5] pt-6 text-xs text-[#695A4C] dark:border-[#3F3025] dark:text-[#BCAA95] sm:flex-row sm:items-center">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
