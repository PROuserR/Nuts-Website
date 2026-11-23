import React from 'react';
import { cacheLife, cacheTag } from 'next/cache';
import { HeroSection } from '@/components/HeroSection';
import { ProductCatalog } from '@/components/ProductCatalog';
import { CraftsmanshipSection } from '@/components/CraftsmanshipSection';
import { InstagramShowcase } from '@/components/InstagramShowcase';
import {
  getCachedInstagramDispatches,
  getCachedJournalArticles,
  getCachedProducts,
} from '@/lib/roastery-cache';
import { buildStoreJsonLd } from '@/lib/seo';

export default async function HomePage() {
  'use cache';
  cacheLife('hours');
  cacheTag('storefront');

  const [products, articles, dispatches] = await Promise.all([
    getCachedProducts(),
    getCachedJournalArticles(),
    getCachedInstagramDispatches(),
  ]);

  const storeJsonLd = buildStoreJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJsonLd) }}
      />
      <HeroSection />
      <ProductCatalog products={products} />
      <CraftsmanshipSection articles={articles} />
      <InstagramShowcase dispatches={dispatches} />
    </>
  );
}
