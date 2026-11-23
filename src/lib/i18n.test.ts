import test from 'node:test';
import assert from 'node:assert/strict';
import { PRODUCTS, JOURNAL_ARTICLES, INSTAGRAM_DISPATCHES } from './catalog';
import {
  getDictionary,
  getLocaleDirection,
  isValidLocale,
  LOCALES,
} from './i18n';

test('all 5 main locales (en, de, fr, sv, ar) have complete product, journal, and dispatch translations', () => {
  assert.equal(LOCALES.length, 5);

  for (const { code } of LOCALES) {
    assert.equal(isValidLocale(code), true);
    const dict = getDictionary(code);
    assert.ok(dict.hero.headline.length > 0);
    assert.ok(dict.nav.bag.length > 0);

    for (const product of PRODUCTS) {
      const tr = dict.products[product.id];
      assert.ok(tr, `Missing ${code} translation for product ${product.id}`);
      assert.ok(tr.name.length > 0);
      assert.ok(tr.tastingNotes.length > 0);
    }

    for (const article of JOURNAL_ARTICLES) {
      const tr = dict.articles[article.slug];
      assert.ok(tr, `Missing ${code} translation for article ${article.slug}`);
      assert.ok(tr.title.length > 0);
    }

    for (const dispatch of INSTAGRAM_DISPATCHES) {
      const tr = dict.dispatches[dispatch.id];
      assert.ok(tr, `Missing ${code} translation for dispatch ${dispatch.id}`);
      assert.ok(tr.caption.length > 0);
    }
  }
});

test('Arabic locale resolves to RTL direction and others resolve to LTR', () => {
  assert.equal(getLocaleDirection('ar'), 'rtl');
  assert.equal(getLocaleDirection('en'), 'ltr');
  assert.equal(getLocaleDirection('de'), 'ltr');
  assert.equal(getLocaleDirection('fr'), 'ltr');
  assert.equal(getLocaleDirection('sv'), 'ltr');
  assert.equal(isValidLocale('es'), false);
});
