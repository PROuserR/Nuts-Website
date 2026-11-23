import type { PackWeightGrams, Product } from './catalog';

export const PACK_WEIGHTS: readonly PackWeightGrams[] = [100, 250, 500, 1000] as const;

export const FREE_SHIPPING_THRESHOLD_EUR = 45;
export const STANDARD_SHIPPING_EUR = 4.9;

/**
 * Computes pack price from base pricePerKg with subtle bulk freshness savings:
 * - 100g & 250g: standard per-kg rate
 * - 500g: 5% tier savings
 * - 1000g (1kg): 10% tier savings
 */
export function calculatePackPrice(
  pricePerKg: number,
  weightGrams: PackWeightGrams
): number {
  if (pricePerKg < 0 || !Number.isFinite(pricePerKg)) {
    throw new Error('pricePerKg must be a non-negative finite number');
  }
  const weightKg = weightGrams / 1000;
  let multiplier = 1;
  if (weightGrams === 500) {
    multiplier = 0.95;
  } else if (weightGrams === 1000) {
    multiplier = 0.9;
  }
  return Math.round(pricePerKg * weightKg * multiplier * 100) / 100;
}

export function calculateEffectivePricePerKg(
  packPrice: number,
  weightGrams: PackWeightGrams
): number {
  const weightKg = weightGrams / 1000;
  return Math.round((packPrice / weightKg) * 100) / 100;
}

export interface CartCalculationItem {
  pricePerKg: number;
  weightGrams: PackWeightGrams;
  quantity: number;
}

export interface CartTotals {
  subtotal: number;
  shipping: number;
  total: number;
  itemCount: number;
  freeShippingRemaining: number;
  freeShippingProgressPercent: number;
}

export function calculateCartTotals(items: CartCalculationItem[]): CartTotals {
  let subtotal = 0;
  let itemCount = 0;

  for (const item of items) {
    const qty = Math.max(0, Math.floor(item.quantity));
    if (qty === 0) continue;
    const unitPrice = calculatePackPrice(item.pricePerKg, item.weightGrams);
    subtotal += unitPrice * qty;
    itemCount += qty;
  }

  subtotal = Math.round(subtotal * 100) / 100;
  const qualifiesForFreeShipping =
    subtotal >= FREE_SHIPPING_THRESHOLD_EUR || subtotal === 0;
  const shipping = qualifiesForFreeShipping ? 0 : STANDARD_SHIPPING_EUR;
  const total = Math.round((subtotal + shipping) * 100) / 100;
  const freeShippingRemaining = Math.max(
    0,
    Math.round((FREE_SHIPPING_THRESHOLD_EUR - subtotal) * 100) / 100
  );
  const freeShippingProgressPercent =
    subtotal <= 0
      ? 0
      : Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD_EUR) * 100));

  return {
    subtotal,
    shipping,
    total,
    itemCount,
    freeShippingRemaining,
    freeShippingProgressPercent,
  };
}

export function filterProducts(
  products: Product[],
  category: string,
  query: string,
  getLocalizedText?: (product: Product) => string[]
): Product[] {
  const normalizedQuery = query.trim().toLowerCase();

  return products.filter((product) => {
    const matchesCategory = category === 'All' || product.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const localizedFields = getLocalizedText ? getLocalizedText(product) : [];
    const searchableText = [
      product.name,
      product.germanName,
      product.category,
      product.origin,
      product.shortDescription,
      ...product.tastingNotes,
      ...localizedFields,
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

export function formatWeightLabel(weightGrams: PackWeightGrams): string {
  return weightGrams === 1000 ? '1 kg' : `${weightGrams} g`;
}

export function formatEur(amount: number): string {
  return `€${amount.toFixed(2)}`;
}
