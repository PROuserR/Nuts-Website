'use client';

import React from 'react';
import Link from 'next/link';
import type { Product } from '@/lib/catalog';
import { calculatePackPrice, formatEur } from '@/lib/pricing';
import { useLanguage } from './LanguageProvider';
import { ResilientImage } from './ResilientImage';

export function RelatedProductsSection({ products }: { products: Product[] }) {
  const { t } = useLanguage();

  return (
    <section className="border-t border-[#E0D6C5] bg-[#EFE8DA]/55 dark:border-[#3F3025] dark:bg-[#261D17]/55">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-[#241C15] dark:text-[#F3EAD9]">
          {t.pdp.pairTitle}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {products.map((item) => {
            const tr = t.products[item.id];
            const name = tr?.name ?? item.name;
            const categoryLabel = t.catalog.categories[item.category];

            return (
              <Link
                key={item.id}
                href={`/products/${item.slug}`}
                className="group overflow-hidden rounded-xl border border-[#E0D6C5] bg-[#FCF9F2] transition-transform duration-200 hover:-translate-y-0.5 dark:border-[#3F3025] dark:bg-[#1C1510]"
              >
                <div className="overflow-hidden bg-[#EFE8DA] dark:bg-[#30241C]">
                  <ResilientImage
                    src={item.image}
                    alt={name}
                    label={name}
                    sizes="(max-width: 640px) 100vw, 380px"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-[#695A4C] dark:text-[#BCAA95]">
                    {categoryLabel}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold text-[#241C15] dark:text-[#F3EAD9]">
                    {name}
                  </h3>
                  <p className="mt-1.5 font-mono text-xs text-[#2E5A36] dark:text-[#5B9A62] tabular-nums">
                    {t.pdp.fromPrefix} {formatEur(calculatePackPrice(item.pricePerKg, 100))} / 100 g
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
