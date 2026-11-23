'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Plus, Search, X } from 'lucide-react';
import {
  CATEGORIES,
  type PackWeightGrams,
  type Product,
} from '@/lib/catalog';
import {
  calculatePackPrice,
  filterProducts,
  formatEur,
  formatWeightLabel,
  PACK_WEIGHTS,
} from '@/lib/pricing';
import { useCart } from './CartProvider';
import { useLanguage } from './LanguageProvider';
import { ResilientImage } from './ResilientImage';

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { t } = useLanguage();
  const [selectedWeight, setSelectedWeight] = useState<PackWeightGrams>(250);
  const packPrice = calculatePackPrice(product.pricePerKg, selectedWeight);

  const tr = t.products[product.id];
  const productName = tr?.name ?? product.name;
  const productOrigin = tr?.origin ?? product.origin;
  const productShortDesc = tr?.shortDescription ?? product.shortDescription;
  const categoryLabel = t.catalog.categories[product.category];

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#E0D6C5] bg-[#FCF9F2] transition-transform duration-200 hover:-translate-y-0.5 dark:border-[#3F3025] dark:bg-[#261D17]">
      <div>
        <Link
          href={`/products/${product.slug}`}
          className="block overflow-hidden bg-[#EFE8DA] dark:bg-[#30241C]"
        >
          <ResilientImage
            src={product.image}
            alt={productName}
            label={productName}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </Link>

        <div className="p-5">
          <div className="flex items-center justify-between gap-2 text-xs text-[#695A4C] dark:text-[#BCAA95]">
            <span>{categoryLabel}</span>
            <span>{productOrigin}</span>
          </div>

          <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-[#241C15] dark:text-[#F3EAD9]">
            <Link
              href={`/products/${product.slug}`}
              className="hover:underline hover:underline-offset-4"
            >
              {productName}
            </Link>
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#695A4C] dark:text-[#BCAA95]">
            {productShortDesc}
          </p>
        </div>
      </div>

      <div className="border-t border-[#E0D6C5] p-5 pt-4 dark:border-[#3F3025]">
        <div
          role="group"
          aria-label={`${t.pdp.packWeight}: ${productName}`}
          className="grid grid-cols-4 gap-1 rounded-lg bg-[#EFE8DA] p-1 dark:bg-[#1C1510]"
        >
          {PACK_WEIGHTS.map((weight) => {
            const active = selectedWeight === weight;
            return (
              <button
                key={weight}
                type="button"
                onClick={() => setSelectedWeight(weight)}
                aria-pressed={active}
                className={`rounded-md py-1.5 font-mono text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  active
                    ? 'bg-[#FCF9F2] text-[#241C15] shadow-xs dark:bg-[#30241C] dark:text-[#F3EAD9]'
                    : 'text-[#695A4C] hover:text-[#241C15] dark:text-[#BCAA95] dark:hover:text-[#F3EAD9]'
                }`}
              >
                {formatWeightLabel(weight)}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <p className="font-mono text-base font-semibold text-[#241C15] dark:text-[#F3EAD9] tabular-nums">
              {formatEur(packPrice)}
            </p>
            <p className="font-mono text-[11px] text-[#695A4C] dark:text-[#BCAA95] tabular-nums">
              {formatEur(product.pricePerKg)} {t.catalog.basePerKg}
            </p>
          </div>

          <button
            type="button"
            onClick={() => addItem(product, selectedWeight, 1)}
            data-testid={`add-to-bag-${product.slug}`}
            className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-[#2E5A36] px-4 py-2 text-xs font-medium text-[#FAF7F0] hover:bg-[#23472A] dark:bg-[#5B9A62] dark:text-[#141D15] dark:hover:bg-[#6BAE72] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{t.catalog.addToBag}</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export function ProductCatalog({ products }: { products: Product[] }) {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = useMemo(
    () =>
      filterProducts(products, selectedCategory, searchQuery, (product) => {
        const tr = t.products[product.id];
        return tr
          ? [tr.name, tr.origin, tr.shortDescription, ...tr.tastingNotes]
          : [];
      }),
    [products, selectedCategory, searchQuery, t]
  );

  return (
    <section
      id="collection"
      className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:py-16"
    >
      <div className="flex flex-col justify-between gap-6 border-b border-[#E0D6C5] pb-6 dark:border-[#3F3025] lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-medium text-[#695A4C] dark:text-[#BCAA95]">
            {t.catalog.kicker}
          </p>
          <h2 className="mt-1 font-display text-balance text-2xl font-semibold tracking-tight text-[#241C15] dark:text-[#F3EAD9] sm:text-3xl">
            {t.catalog.title}
          </h2>
        </div>

        <div className="relative w-full lg:w-72">
          <label htmlFor="catalog-search" className="sr-only">
            {t.catalog.searchLabel}
          </label>
          <Search
            className="pointer-events-none absolute top-1/2 start-3 h-4 w-4 -translate-y-1/2 text-[#695A4C] dark:text-[#BCAA95]"
            aria-hidden="true"
          />
          <input
            id="catalog-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.catalog.searchPlaceholder}
            className="h-10 w-full rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] pe-9 ps-9 text-sm text-[#241C15] placeholder:text-[#695A4C]/70 focus:border-[#2E5A36] focus:outline-none dark:border-[#3F3025] dark:bg-[#261D17] dark:text-[#F3EAD9] dark:placeholder:text-[#BCAA95]/70 dark:focus:border-[#5B9A62]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label={t.catalog.clearSearch}
              className="absolute top-1/2 end-2.5 -translate-y-1/2 rounded p-1 text-[#695A4C] hover:text-[#241C15] dark:text-[#BCAA95] dark:hover:text-[#F3EAD9] cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div
          role="tablist"
          aria-label="Filter collection by category"
          className="flex flex-wrap items-center gap-1.5 rounded-lg bg-[#EFE8DA] p-1 dark:bg-[#261D17]"
        >
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={active}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#FCF9F2] text-[#241C15] shadow-xs dark:bg-[#30241C] dark:text-[#F3EAD9]'
                    : 'text-[#695A4C] hover:text-[#241C15] dark:text-[#BCAA95] dark:hover:text-[#F3EAD9]'
                }`}
              >
                {t.catalog.categories[category]}
              </button>
            );
          })}
        </div>

        <p className="font-mono text-xs text-[#695A4C] dark:text-[#BCAA95] tabular-nums">
          {t.catalog.showingPrefix} {filtered.length} {t.catalog.showingOf}{' '}
          {products.length} {t.catalog.batchesSuffix}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-xl border border-[#E0D6C5] bg-[#EFE8DA]/55 p-10 text-center dark:border-[#3F3025] dark:bg-[#261D17]">
          <p className="font-display text-lg font-semibold text-[#241C15] dark:text-[#F3EAD9]">
            {t.catalog.emptyTitle}
          </p>
          <p className="mt-2 text-sm text-[#695A4C] dark:text-[#BCAA95]">
            {t.catalog.emptyBody}
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-4 rounded-lg bg-[#2E5A36] px-4 py-2 text-xs font-medium text-[#FAF7F0] hover:bg-[#23472A] dark:bg-[#5B9A62] dark:text-[#141D15] cursor-pointer"
          >
            {t.catalog.resetFilters}
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
