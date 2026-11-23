import { cacheLife, cacheTag } from 'next/cache';
import {
  INSTAGRAM_DISPATCHES,
  JOURNAL_ARTICLES,
  PRODUCTS,
  type InstagramDispatch,
  type JournalArticle,
  type Product,
} from './catalog';

export async function getCachedProducts(): Promise<Product[]> {
  'use cache';
  cacheLife('hours');
  cacheTag('catalog', 'products');
  return PRODUCTS;
}

export async function getCachedProductBySlug(
  slug: string
): Promise<Product | undefined> {
  'use cache';
  cacheLife('hours');
  cacheTag('catalog', `product:${slug}`);
  return PRODUCTS.find((item) => item.slug === slug);
}

export async function getCachedJournalArticles(): Promise<JournalArticle[]> {
  'use cache';
  cacheLife('days');
  cacheTag('journal');
  return JOURNAL_ARTICLES;
}

export async function getCachedJournalBySlug(
  slug: string
): Promise<JournalArticle | undefined> {
  'use cache';
  cacheLife('days');
  cacheTag('journal', `journal:${slug}`);
  return JOURNAL_ARTICLES.find((article) => article.slug === slug);
}

export async function getCachedInstagramDispatches(): Promise<InstagramDispatch[]> {
  'use cache';
  cacheLife('hours');
  cacheTag('instagram-dispatches');
  return INSTAGRAM_DISPATCHES;
}
