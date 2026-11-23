'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Moon, Sun } from 'lucide-react';
import { ResilientImage } from './ResilientImage';
import { useLanguage } from './LanguageProvider';
import { useTheme } from './ThemeProvider';

export function HeroSection() {
  const { t, dir } = useLanguage();
  const { theme, mounted, toggleTheme } = useTheme();
  const isDark = mounted && theme === 'dark';

  return (
    <section className="mx-auto max-w-[1200px] px-4 pt-7 pb-10 sm:px-6 lg:pt-10 lg:pb-12">
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Editorial Column */}
        <div className="flex flex-col justify-between lg:col-span-5">
          <div className="space-y-5">
            <p className="text-xs font-medium tracking-wide text-[#695A4C] dark:text-[#BCAA95]">
              {t.hero.kicker}
            </p>

            <h1 className="font-display text-balance text-[clamp(2.15rem,3.8vw,3.4rem)] font-semibold leading-[1.12] tracking-tight text-[#241C15] dark:text-[#F3EAD9]">
              {t.hero.headline}
            </h1>

            <p className="max-w-[52ch] text-base leading-relaxed text-[#695A4C] dark:text-[#BCAA95]">
              {t.hero.body}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/#collection"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#2E5A36] px-5 py-2.5 text-sm font-medium text-[#FAF7F0] hover:bg-[#23472A] dark:bg-[#5B9A62] dark:text-[#141D15] dark:hover:bg-[#6BAE72] transition-colors whitespace-nowrap shrink-0"
              >
                <span>{t.hero.ctaPrimary}</span>
                {dir === 'rtl' ? (
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                )}
              </Link>

              <button
                type="button"
                onClick={toggleTheme}
                data-testid="hero-theme-toggle"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-[#E0D6C5] bg-[#EFE8DA] px-4 py-2.5 text-sm font-medium text-[#241C15] hover:bg-[#E5DCC9] dark:border-[#3F3025] dark:bg-[#261D17] dark:text-[#F3EAD9] dark:hover:bg-[#30241C] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {isDark ? (
                  <>
                    <Sun className="h-4 w-4 text-[#DFA264]" aria-hidden="true" />
                    <span>{t.nav.themeLightLabel}</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 text-[#2E5A36]" aria-hidden="true" />
                    <span>{t.nav.themeDarkLabel}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="mt-8 border-t border-[#E0D6C5] pt-5 dark:border-[#3F3025]">
            <p className="text-xs text-[#695A4C] dark:text-[#BCAA95]">
              {t.hero.followPrefix}{' '}
              <a
                href="https://www.instagram.com/sabernuts/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#241C15] underline underline-offset-4 hover:text-[#2E5A36] dark:text-[#F3EAD9] dark:hover:text-[#5B9A62]"
              >
                @sabernuts
              </a>
            </p>
          </div>
        </div>

        {/* Hero Media Column — 100% immediate visibility on SSR */}
        <div className="lg:col-span-7">
          <div className="relative h-full min-h-[260px] overflow-hidden rounded-2xl border border-[#E0D6C5] bg-[#261D17] dark:border-[#3F3025]">
            <ResilientImage
              src="/images/hero_saber_roastery_1795363214450.jpg"
              alt="Hearth-roasted pistachios, salted almonds, cashews, and honey-glazed walnuts on slate beside a copper scoop"
              priority
              sizes="(max-width: 1024px) 100vw, 700px"
              label={t.brandName}
              className="aspect-[16/9] w-full object-cover lg:aspect-auto lg:h-full"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#18110C]/90 via-[#18110C]/45 to-transparent p-5 sm:p-6">
              <p className="text-xs font-medium text-[#F3EAD9]/85">
                {t.hero.captionKicker}
              </p>
              <p className="mt-1 font-display text-lg font-medium text-[#FAF7F0]">
                {t.hero.captionTitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width 4-column craft & proof strip */}
      <div className="mt-8 grid grid-cols-2 gap-4 border-y border-[#E0D6C5] py-5 dark:border-[#3F3025] md:grid-cols-4 md:gap-6">
        {t.hero.proof.map((item) => (
          <div key={item.title}>
            <p className="font-mono text-sm font-semibold text-[#241C15] dark:text-[#F3EAD9] tabular-nums">
              {item.title}
            </p>
            <p className="mt-1 text-xs text-[#695A4C] dark:text-[#BCAA95]">
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
