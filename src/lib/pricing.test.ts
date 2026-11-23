import test from 'node:test';
import assert from 'node:assert/strict';
import { PRODUCTS } from './catalog';
import {
  calculatePackPrice,
  calculateEffectivePricePerKg,
  calculateCartTotals,
  filterProducts,
  formatWeightLabel,
  formatEur,
} from './pricing';

test('calculatePackPrice computes standard and bulk tier prices accurately', () => {
  // €20.00/kg base
  assert.equal(calculatePackPrice(20, 100), 2.0);
  assert.equal(calculatePackPrice(20, 250), 5.0);
  // 500g applies 5% tier discount: 20 * 0.5 * 0.95 = 9.50
  assert.equal(calculatePackPrice(20, 500), 9.5);
  // 1000g applies 10% tier discount: 20 * 1 * 0.90 = 18.00
  assert.equal(calculatePackPrice(20, 1000), 18.0);
});

test('calculateEffectivePricePerKg reflects discounted pack rates', () => {
  const pack500 = calculatePackPrice(25, 500);
  assert.equal(pack500, 11.88);
  assert.equal(calculateEffectivePricePerKg(pack500, 500), 23.76);
});

test('calculateCartTotals handles empty cart, standard shipping, and free shipping threshold', () => {
  const empty = calculateCartTotals([]);
  assert.equal(empty.subtotal, 0);
  assert.equal(empty.shipping, 0);
  assert.equal(empty.total, 0);
  assert.equal(empty.freeShippingRemaining, 45);

  const belowThreshold = calculateCartTotals([
    { pricePerKg: 20, weightGrams: 500, quantity: 2 }, // €19.00
  ]);
  assert.equal(belowThreshold.subtotal, 19.0);
  assert.equal(belowThreshold.shipping, 4.9);
  assert.equal(belowThreshold.total, 23.9);
  assert.equal(belowThreshold.itemCount, 2);
  assert.equal(belowThreshold.freeShippingRemaining, 26.0);

  const aboveThreshold = calculateCartTotals([
    { pricePerKg: 25, weightGrams: 1000, quantity: 2 }, // €45.00 exact
  ]);
  assert.equal(aboveThreshold.subtotal, 45.0);
  assert.equal(aboveThreshold.shipping, 0);
  assert.equal(aboveThreshold.total, 45.0);
  assert.equal(aboveThreshold.freeShippingRemaining, 0);
  assert.equal(aboveThreshold.freeShippingProgressPercent, 100);
});

test('filterProducts filters by category and search terms across English & German names', () => {
  const all = filterProducts(PRODUCTS, 'All', '');
  assert.equal(all.length, PRODUCTS.length);

  const nutsOnly = filterProducts(PRODUCTS, 'Nuts & Seeds', '');
  assert.ok(nutsOnly.length >= 3);
  assert.ok(nutsOnly.every((p) => p.category === 'Nuts & Seeds'));

  const germanMatch = filterProducts(PRODUCTS, 'All', 'Mandeln');
  assert.equal(germanMatch.length, 1);
  assert.equal(germanMatch[0].slug, 'sea-salted-mediterranean-almonds');

  const noMatch = filterProducts(PRODUCTS, 'Dried Fruits', 'Cardamom');
  assert.equal(noMatch.length, 0);
});

test('formatting helpers render crisp weight and Euro currency labels', () => {
  assert.equal(formatWeightLabel(250), '250 g');
  assert.equal(formatWeightLabel(1000), '1 kg');
  assert.equal(formatEur(17), '€17.00');
});
