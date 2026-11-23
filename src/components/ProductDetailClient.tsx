'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, Minus, Plus } from 'lucide-react';
import type { PackWeightGrams, Product } from '@/lib/catalog';
import {
  calculateEffectivePricePerKg,
  calculatePackPrice,
  formatEur,
  formatWeightLabel,
  PACK_WEIGHTS,
} from '@/lib/pricing';
import { useCart } from './CartProvider';
import { useLanguage } from './LanguageProvider';
import { ResilientImage } from './ResilientImage';

export function ProductDetailClient({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { t, dir } = useLanguage();
  const [selectedWeight, setSelectedWeight] = useState<PackWeightGrams>(250);
  const [quantity, setQuantity] = useState<number>(1);
  const [justAdded, setJustAdded] = useState(false);

  const tr = t.products[product.id];
  const productName = tr?.name ?? product.name;
  const productOrigin = tr?.origin ?? product.origin;
  const productProfile = tr?.roastProfile ?? product.roastProfile;
  const productDesc = tr?.description ?? product.description;
  const productNotes = tr?.tastingNotes ?? product.tastingNotes;
  const productIngredients = tr?.ingredients ?? product.ingredients;
  const categoryLabel = t.catalog.categories[product.category];

  const unitPrice = calculatePackPrice(product.pricePerKg, selectedWeight);
  const effectivePerKg = calculateEffectivePricePerKg(unitPrice, selectedWeight);
  const totalLinePrice = unitPrice * quantity;

  const handleAdd = () => {
    addItem(product, selectedWeight, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:py-12">
      <Link
        href="/#collection"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#695A4C] hover:text-[#241C15] dark:text-[#BCAA95] dark:hover:text-[#F3EAD9]"
      >
        {dir === 'rtl' ? (
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        )}
        <span>{t.pdp.backToCollection}</span>
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:sticky lg:top-24 lg:col-span-6">
          <div className="overflow-hidden rounded-2xl border border-[#E0D6C5] bg-[#EFE8DA] dark:border-[#3F3025] dark:bg-[#261D17]">
            <ResilientImage
              src={product.image}
              alt={productName}
              priority
              sizes="(max-width: 1024px) 100vw, 580px"
              label={productName}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] p-3 dark:border-[#3F3025] dark:bg-[#261D17]">
              <p className="font-mono text-xs font-semibold text-[#241C15] dark:text-[#F3EAD9] tabular-nums">
                {product.batchTempC}°C
              </p>
              <p className="mt-0.5 text-[11px] text-[#695A4C] dark:text-[#BCAA95]">
                {t.pdp.roastTemp}
              </p>
            </div>
            <div className="rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] p-3 dark:border-[#3F3025] dark:bg-[#261D17]">
              <p className="font-mono text-xs font-semibold text-[#241C15] dark:text-[#F3EAD9] tabular-nums">
                {product.roastMinutes} min
              </p>
              <p className="mt-0.5 text-[11px] text-[#695A4C] dark:text-[#BCAA95]">
                {t.pdp.cycleTime}
              </p>
            </div>
            <div className="rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] p-3 dark:border-[#3F3025] dark:bg-[#261D17]">
              <p className="font-mono text-xs font-semibold text-[#241C15] dark:text-[#F3EAD9] tabular-nums">
                {product.nutritionPer100g.proteinG} g
              </p>
              <p className="mt-0.5 text-[11px] text-[#695A4C] dark:text-[#BCAA95]">
                {t.pdp.proteinPer100}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-6">
          <div className="space-y-2 border-b border-[#E0D6C5] pb-5 dark:border-[#3F3025]">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#695A4C] dark:text-[#BCAA95]">
              <span>{categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{productOrigin}</span>
            </div>
            <h1 className="font-display text-balance text-3xl font-semibold tracking-tight text-[#241C15] dark:text-[#F3EAD9] sm:text-4xl">
              {productName}
            </h1>
            <div className="flex items-baseline gap-3 pt-1">
              <span className="font-mono text-2xl font-semibold text-[#241C15] dark:text-[#F3EAD9] tabular-nums">
                {formatEur(totalLinePrice)}
              </span>
              <span className="font-mono text-xs text-[#695A4C] dark:text-[#BCAA95] tabular-nums">
                ({formatEur(effectivePerKg)} / kg)
              </span>
            </div>
          </div>

          <p className="text-base leading-relaxed text-[#695A4C] dark:text-[#BCAA95]">
            {productDesc}
          </p>

          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-[#241C15] dark:text-[#F3EAD9]">
                {t.pdp.packWeight}
              </span>
              <span className="text-[#695A4C] dark:text-[#BCAA95]">
                {t.pdp.bulkSavings}
              </span>
            </div>
            <div
              role="group"
              aria-label={t.pdp.packWeight}
              className="grid grid-cols-4 gap-2"
            >
              {PACK_WEIGHTS.map((weight) => {
                const active = selectedWeight === weight;
                const price = calculatePackPrice(product.pricePerKg, weight);
                return (
                  <button
                    key={weight}
                    type="button"
                    onClick={() => setSelectedWeight(weight)}
                    aria-pressed={active}
                    className={`flex flex-col items-center rounded-lg border py-2.5 px-2 text-center transition-colors cursor-pointer ${
                      active
                        ? 'border-[#2E5A36] bg-[#2E5A36]/10 text-[#241C15] dark:border-[#5B9A62] dark:bg-[#5B9A62]/15 dark:text-[#F3EAD9]'
                        : 'border-[#E0D6C5] bg-[#FCF9F2] text-[#695A4C] hover:border-[#241C15]/40 dark:border-[#3F3025] dark:bg-[#261D17] dark:text-[#BCAA95]'
                    }`}
                  >
                    <span className="font-mono text-xs font-semibold">
                      {formatWeightLabel(weight)}
                    </span>
                    <span className="mt-0.5 font-mono text-[11px] tabular-nums">
                      {formatEur(price)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 items-center rounded-lg border border-[#E0D6C5] bg-[#FCF9F2] dark:border-[#3F3025] dark:bg-[#261D17]">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="inline-flex h-full w-11 items-center justify-center hover:bg-[#EFE8DA] dark:hover:bg-[#30241C] cursor-pointer"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-mono text-sm font-medium tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="inline-flex h-full w-11 items-center justify-center hover:bg-[#EFE8DA] dark:hover:bg-[#30241C] cursor-pointer"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              data-testid="pdp-add-to-bag"
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-[#2E5A36] px-5 text-sm font-medium text-[#FAF7F0] hover:bg-[#23472A] dark:bg-[#5B9A62] dark:text-[#141D15] dark:hover:bg-[#6BAE72] transition-colors cursor-pointer"
            >
              {justAdded ? (
                <>
                  <Check className="h-4 w-4" aria-hidden="true" />
                  <span>{t.pdp.addedToBag}</span>
                </>
              ) : (
                <span>
                  {t.pdp.addPrefix} {quantity} × {formatWeightLabel(selectedWeight)} {t.pdp.toBagSuffix}
                </span>
              )}
            </button>
          </div>

          <div className="divide-y divide-[#E0D6C5] border-t border-[#E0D6C5] pt-2 text-sm dark:divide-[#3F3025] dark:border-[#3F3025]">
            <div className="py-3">
              <p className="text-xs font-medium text-[#695A4C] dark:text-[#BCAA95]">
                {t.pdp.tastingNotes}
              </p>
              <p className="mt-1 text-[#241C15] dark:text-[#F3EAD9]">
                {productNotes.join(' · ')}
              </p>
            </div>
            <div className="py-3">
              <p className="text-xs font-medium text-[#695A4C] dark:text-[#BCAA95]">
                {t.pdp.ingredientsMethod}
              </p>
              <p className="mt-1 text-[#241C15] dark:text-[#F3EAD9]">
                {productIngredients} ({productProfile})
              </p>
            </div>
            <div className="py-3">
              <p className="text-xs font-medium text-[#695A4C] dark:text-[#BCAA95]">
                {t.pdp.nutrition100g}
              </p>
              <p className="mt-1 font-mono text-xs text-[#241C15] dark:text-[#F3EAD9] tabular-nums">
                {product.nutritionPer100g.energyKcal} kcal · {product.nutritionPer100g.proteinG} g · {product.nutritionPer100g.healthyFatsG} g · {product.nutritionPer100g.fiberG} g
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
