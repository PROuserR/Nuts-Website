'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Moon, Sun } from 'lucide-react';
import type { JournalArticle } from '@/lib/catalog';
import { useLanguage } from './LanguageProvider';
import { useTheme } from './ThemeProvider';
import { ResilientImage } from './ResilientImage';

export function JournalReaderClient({ article }: { article: JournalArticle }) {
  const { t, dir } = useLanguage();
  const { theme, mounted, toggleTheme } = useTheme();
  const [largeType, setLargeType] = useState(false);
  const isDark = mounted && theme === 'dark';

  const tr = t.articles[article.slug];
  const title = tr?.title ?? article.title;
  const subtitle = tr?.subtitle ?? article.subtitle;
  const category = tr?.category ?? article.category;
  const publishedAt = tr?.publishedAt ?? article.publishedAt;
  const excerpt = tr?.excerpt ?? article.excerpt;
  const sections = tr?.sections ?? article.sections;

  return (
    <article className="mx-auto max-w-[740px] px-4 py-8 sm:px-6 lg:py-12">
      <div className="mb-6">
        <Link
          href="/journal"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#695A4C] hover:text-[#241C15] dark:text-[#BCAA95] dark:hover:text-[#F3EAD9]"
        >
          {dir === 'rtl' ? (
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          ) : (
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          )}
          <span>{t.journalPage.backAllGuides}</span>
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E0D6C5] pb-5 dark:border-[#3F3025]">
        <div className="flex items-center gap-2 text-xs text-[#695A4C] dark:text-[#BCAA95]">
          <span>{category}</span>
          <span aria-hidden="true">·</span>
          <span>{publishedAt}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">
            {article.readMinutes} {t.craft.minRead}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLargeType((prev) => !prev)}
            aria-pressed={largeType}
            className="inline-flex h-9 items-center rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] px-3 text-xs font-medium text-[#241C15] hover:bg-[#EFE8DA] dark:border-[#3F3025] dark:bg-[#261D17] dark:text-[#F3EAD9] dark:hover:bg-[#30241C] cursor-pointer"
          >
            {largeType ? t.journalPage.standardText : t.journalPage.largeText}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] px-3 text-xs font-medium text-[#241C15] hover:bg-[#EFE8DA] dark:border-[#3F3025] dark:bg-[#261D17] dark:text-[#F3EAD9] dark:hover:bg-[#30241C] cursor-pointer"
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

      <header className="mt-7 space-y-3">
        <h1 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-[#241C15] dark:text-[#F3EAD9] sm:text-4xl">
          {title}
        </h1>
        <p className="text-base leading-relaxed text-[#695A4C] dark:text-[#BCAA95] sm:text-lg">
          {subtitle}
        </p>
      </header>

      <div className="mt-8 overflow-hidden rounded-xl border border-[#E0D6C5] bg-[#EFE8DA] dark:border-[#3F3025] dark:bg-[#261D17]">
        <ResilientImage
          src={article.coverImage}
          alt={title}
          priority
          sizes="(max-width: 768px) 100vw, 720px"
          label={title}
          className="aspect-[16/9] w-full object-cover"
        />
      </div>

      <div
        className={`mt-9 space-y-8 text-[#241C15]/90 dark:text-[#F3EAD9]/90 ${
          largeType
            ? 'text-lg leading-[1.85] tracking-[0.005em]'
            : 'text-base leading-[1.75]'
        }`}
      >
        <p className="font-medium text-[#241C15] dark:text-[#F3EAD9]">
          {excerpt}
        </p>

        {sections.map((section) => (
          <section key={section.heading} className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-[#241C15] dark:text-[#F3EAD9]">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-[#695A4C] dark:text-[#D5C7B6]">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
