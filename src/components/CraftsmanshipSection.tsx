'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { JournalArticle } from '@/lib/catalog';
import { useLanguage } from './LanguageProvider';

export function CraftsmanshipSection({
  articles,
}: {
  articles: JournalArticle[];
}) {
  const { t, dir } = useLanguage();

  return (
    <section
      id="craft"
      className="border-y border-[#E0D6C5] bg-[#EFE8DA]/55 dark:border-[#3F3025] dark:bg-[#261D17]/75"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:py-18">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium text-[#695A4C] dark:text-[#BCAA95]">
              {t.craft.kicker}
            </p>
            <h2 className="mt-1 font-display text-balance text-2xl font-semibold tracking-tight text-[#241C15] dark:text-[#F3EAD9] sm:text-3xl">
              {t.craft.title}
            </h2>

            <div className="mt-8 divide-y divide-[#E0D6C5] dark:divide-[#3F3025]">
              {t.craft.steps.map((step) => (
                <div key={step.number} className="py-5 first:pt-0 last:pb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-[#241C15] dark:text-[#F3EAD9]">
                      {step.number} {step.title}
                    </h3>
                    <span className="font-mono text-xs font-medium text-[#9A5B25] dark:text-[#DFA264] tabular-nums">
                      {step.metric}
                    </span>
                  </div>
                  <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-[#695A4C] dark:text-[#BCAA95]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-[#E0D6C5] bg-[#FCF9F2] p-6 dark:border-[#3F3025] dark:bg-[#1C1510] lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-medium text-[#695A4C] dark:text-[#BCAA95]">
                  {t.craft.journalTitle}
                </p>
                <Link
                  href="/journal"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#2E5A36] hover:underline dark:text-[#5B9A62]"
                >
                  <span>{t.craft.allGuides}</span>
                  {dir === 'rtl' ? (
                    <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                </Link>
              </div>

              <div className="mt-5 divide-y divide-[#E0D6C5] dark:divide-[#3F3025]">
                {articles.map((article) => {
                  const tr = t.articles[article.slug];
                  return (
                    <article key={article.slug} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex items-center gap-2 text-xs text-[#695A4C] dark:text-[#BCAA95]">
                        <span>{tr?.category ?? article.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">
                          {article.readMinutes} {t.craft.minRead}
                        </span>
                      </div>
                      <h3 className="mt-1 font-display text-base font-semibold leading-snug text-[#241C15] dark:text-[#F3EAD9]">
                        <Link
                          href={`/journal/${article.slug}`}
                          className="hover:underline hover:underline-offset-4"
                        >
                          {tr?.title ?? article.title}
                        </Link>
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#695A4C] dark:text-[#BCAA95]">
                        {tr?.excerpt ?? article.excerpt}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 border-t border-[#E0D6C5] pt-4 text-xs text-[#695A4C] dark:border-[#3F3025] dark:text-[#BCAA95]">
              {t.craft.tip}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
