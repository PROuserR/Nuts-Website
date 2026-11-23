'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Globe, Menu, Moon, ShoppingBag, Sun, X } from 'lucide-react';
import { LOCALES, type Locale } from '@/lib/i18n';
import { useCart } from './CartProvider';
import { useLanguage } from './LanguageProvider';
import { useTheme } from './ThemeProvider';

export function SiteHeader() {
  const { totals, openCart } = useCart();
  const { locale, setLocale, t } = useLanguage();
  const { theme, mounted, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDark = mounted && theme === 'dark';

  return (
    <header className="sticky top-0 z-30 border-b border-[#E0D6C5] bg-[#F7F3EB]/95 backdrop-blur-sm dark:border-[#3F3025] dark:bg-[#1C1510]/95">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-2 px-3 py-3 sm:gap-6 sm:px-6 sm:py-3.5">
        {/* Zone 1: Single-element Brand Wordmark */}
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-[#241C15] dark:text-[#F3EAD9] whitespace-nowrap shrink-0 sm:text-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2E5A36] dark:focus-visible:outline-[#5B9A62]"
        >
          {t.brandName}
        </Link>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#695A4C] dark:text-[#BCAA95]"
        >
          <Link
            href="/#collection"
            className="whitespace-nowrap shrink-0 py-1 hover:text-[#241C15] hover:underline hover:underline-offset-4 dark:hover:text-[#F3EAD9] transition-colors"
          >
            {t.nav.collection}
          </Link>
          <Link
            href="/#craft"
            className="whitespace-nowrap shrink-0 py-1 hover:text-[#241C15] hover:underline hover:underline-offset-4 dark:hover:text-[#F3EAD9] transition-colors"
          >
            {t.nav.craft}
          </Link>
          <Link
            href="/journal"
            className="whitespace-nowrap shrink-0 py-1 hover:text-[#241C15] hover:underline hover:underline-offset-4 dark:hover:text-[#F3EAD9] transition-colors"
          >
            {t.nav.journal}
          </Link>
          <Link
            href="/#gallery"
            className="whitespace-nowrap shrink-0 py-1 hover:text-[#241C15] hover:underline hover:underline-offset-4 dark:hover:text-[#F3EAD9] transition-colors"
          >
            {t.nav.gallery}
          </Link>
        </nav>

        {/* Zone 3: Language selector, Light/Dark theme toggle, Bag action */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <div className="relative flex items-center">
            <Globe
              className="pointer-events-none absolute start-2 h-3.5 w-3.5 text-[#695A4C] dark:text-[#BCAA95] sm:start-2.5"
              aria-hidden="true"
            />
            <label htmlFor="header-language-select" className="sr-only">
              {t.nav.languageLabel}
            </label>
            <select
              id="header-language-select"
              data-testid="language-select"
              value={locale}
              onChange={(e) => setLocale(e.target.value as Locale)}
              className="h-9 w-[86px] appearance-none truncate rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] ps-6 pe-1.5 text-xs font-medium text-[#241C15] hover:bg-[#EFE8DA] focus:border-[#2E5A36] focus:outline-none dark:border-[#3F3025] dark:bg-[#261D17] dark:text-[#F3EAD9] dark:hover:bg-[#30241C] dark:focus:border-[#5B9A62] cursor-pointer sm:h-10 sm:w-auto sm:ps-8 sm:pe-3"
            >
              {LOCALES.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.nativeLabel}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            data-testid="header-theme-toggle"
            aria-label={isDark ? t.nav.themeToLight : t.nav.themeToDark}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] text-[#241C15] hover:bg-[#EFE8DA] dark:border-[#3F3025] dark:bg-[#261D17] dark:text-[#F3EAD9] dark:hover:bg-[#30241C] transition-colors shrink-0 cursor-pointer sm:h-10 sm:w-10"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-[#DFA264]" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4 text-[#2E5A36]" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] text-[#241C15] hover:bg-[#EFE8DA] dark:border-[#3F3025] dark:bg-[#261D17] dark:text-[#F3EAD9] dark:hover:bg-[#30241C] transition-colors shrink-0 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={openCart}
            aria-label={`${t.nav.bag} (${totals.itemCount})`}
            data-testid="open-bag-button"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#2E5A36] px-2.5 py-2 text-xs font-medium text-[#FAF7F0] hover:bg-[#23472A] dark:bg-[#5B9A62] dark:text-[#141D15] dark:hover:bg-[#6BAE72] transition-colors whitespace-nowrap shrink-0 cursor-pointer sm:h-10 sm:gap-2 sm:px-4 sm:text-sm"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            <span className="tabular-nums">
              <span className="hidden sm:inline">{t.nav.bag} </span>({totals.itemCount})
            </span>
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-[#E0D6C5] bg-[#F7F3EB] px-4 py-3 dark:border-[#3F3025] dark:bg-[#1C1510]"
        >
          <div className="flex flex-col gap-1">
            <Link
              href="/#collection"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#241C15] hover:bg-[#EFE8DA] dark:text-[#F3EAD9] dark:hover:bg-[#261D17]"
            >
              {t.nav.collection}
            </Link>
            <Link
              href="/#craft"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#241C15] hover:bg-[#EFE8DA] dark:text-[#F3EAD9] dark:hover:bg-[#261D17]"
            >
              {t.nav.craft}
            </Link>
            <Link
              href="/journal"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#241C15] hover:bg-[#EFE8DA] dark:text-[#F3EAD9] dark:hover:bg-[#261D17]"
            >
              {t.nav.journal}
            </Link>
            <Link
              href="/#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#241C15] hover:bg-[#EFE8DA] dark:text-[#F3EAD9] dark:hover:bg-[#261D17]"
            >
              {t.nav.gallery}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
