import type { JournalArticle, Product } from './catalog';
import { calculatePackPrice } from './pricing';

export function getSiteUrl(): string {
  return process.env.APP_URL?.replace(/\/$/, '') || 'https://saber-nusse.com';
}

export function buildStoreJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'Saber Nuts',
    alternateName: 'SABER NÜSSE',
    description:
      'Artisanal hearth-roasted nuts, Mediterranean dried fruits, hand-cut pistachio nougat, and cardamom coffee crafted in small batches.',
    url: siteUrl,
    sameAs: ['https://www.instagram.com/sabernuts/'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Elisabethstraße 70',
      addressLocality: 'Kiel',
      postalCode: '24143',
      addressCountry: 'DE',
    },
    priceRange: '€€',
  };
}

export function buildProductJsonLd(product: Product) {
  const siteUrl = getSiteUrl();
  const startingPrice = calculatePackPrice(product.pricePerKg, 100);
  const kiloPrice = calculatePackPrice(product.pricePerKg, 1000);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `${siteUrl}${product.image}`,
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: 'Saber Nuts',
    },
    category: product.category,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: startingPrice.toFixed(2),
      highPrice: kiloPrice.toFixed(2),
      offerCount: 4,
      availability: 'https://schema.org/InStock',
      url: `${siteUrl}/products/${product.slug}`,
    },
  };
}

export function buildArticleJsonLd(article: JournalArticle) {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: `${siteUrl}${article.coverImage}`,
    author: {
      '@type': 'Organization',
      name: 'Saber Nuts Roastery',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Saber Nuts',
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/journal/${article.slug}`,
  };
}
