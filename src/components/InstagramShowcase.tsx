'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { InstagramDispatch } from '@/lib/catalog';
import { useLanguage } from './LanguageProvider';
import { ResilientImage } from './ResilientImage';

export function InstagramShowcase({
  dispatches,
}: {
  dispatches: InstagramDispatch[];
}) {
  const { t } = useLanguage();

  return (
    <section
      id="gallery"
      className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:py-18"
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-medium text-[#695A4C] dark:text-[#BCAA95]">
            {t.gallery.kicker}
          </p>
          <h2 className="mt-1 font-display text-balance text-2xl font-semibold tracking-tight text-[#241C15] dark:text-[#F3EAD9] sm:text-3xl">
            {t.gallery.title}
          </h2>
        </div>

        <a
          href="https://www.instagram.com/sabernuts/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] px-4 py-2 text-xs font-medium text-[#241C15] hover:bg-[#EFE8DA] dark:border-[#3F3025] dark:bg-[#261D17] dark:text-[#F3EAD9] dark:hover:bg-[#30241C] transition-colors whitespace-nowrap shrink-0"
        >
          <span>{t.gallery.followCta}</span>
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dispatches.map((post) => {
          const tr = t.dispatches[post.id];
          return (
            <Link
              key={post.id}
              href={`/products/${post.productSlug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#E0D6C5] bg-[#FCF9F2] transition-transform duration-200 hover:-translate-y-0.5 dark:border-[#3F3025] dark:bg-[#261D17]"
            >
              <div className="overflow-hidden bg-[#EFE8DA] dark:bg-[#30241C]">
                <ResilientImage
                  src={post.image}
                  alt={tr?.caption ?? post.imageAlt}
                  label={post.handle}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-4">
                <p className="text-xs leading-relaxed text-[#241C15] dark:text-[#F3EAD9]">
                  {tr?.caption ?? post.caption}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-[#695A4C] dark:text-[#BCAA95]">
                  <span>{tr?.location ?? post.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{tr?.dateLabel ?? post.dateLabel}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
