'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { JournalArticle } from '@/lib/catalog';
import { useLanguage } from './LanguageProvider';
import { ResilientImage } from './ResilientImage';

export function JournalIndexClient({ articles }: { articles: JournalArticle[] }) {
  const { t, dir } = useLanguage();

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:py-16">
      <div className="max-w-2xl space-y-3 border-b border-[#E0D6C5] pb-8 dark:border-[#3F3025]">
        <p className="text-xs font-medium text-[#695A4C] dark:text-[#BCAA95]">
          {t.journalPage.kicker}
        </p>
        <h1 className="font-display text-balance text-3xl font-semibold tracking-tight text-[#241C15] dark:text-[#F3EAD9] sm:text-4xl">
          {t.journalPage.title}
        </h1>
        <p className="text-base leading-relaxed text-[#695A4C] dark:text-[#BCAA95]">
          {t.journalPage.subtitle}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {articles.map((article) => {
          const tr = t.articles[article.slug];
          const title = tr?.title ?? article.title;
          const category = tr?.category ?? article.category;
          const excerpt = tr?.excerpt ?? article.excerpt;

          return (
            <article
              key={article.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#E0D6C5] bg-[#FCF9F2] transition-transform duration-200 hover:-translate-y-0.5 dark:border-[#3F3025] dark:bg-[#261D17]"
            >
              <div>
                <Link
                  href={`/journal/${article.slug}`}
                  className="block overflow-hidden bg-[#EFE8DA] dark:bg-[#30241C]"
                >
                  <ResilientImage
                    src={article.coverImage}
                    alt={title}
                    label={title}
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-[#695A4C] dark:text-[#BCAA95]">
                    <span>{category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">
                      {article.readMinutes} {t.craft.minRead}
                    </span>
                  </div>
                  <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-[#241C15] dark:text-[#F3EAD9]">
                    <Link
                      href={`/journal/${article.slug}`}
                      className="hover:underline hover:underline-offset-4"
                    >
                      {title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#695A4C] dark:text-[#BCAA95]">
                    {excerpt}
                  </p>
                </div>
              </div>
              <div className="border-t border-[#E0D6C5] px-5 py-3.5 dark:border-[#3F3025]">
                <Link
                  href={`/journal/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2E5A36] hover:underline dark:text-[#5B9A62]"
                >
                  <span>{t.journalPage.readGuide}</span>
                  {dir === 'rtl' ? (
                    <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
