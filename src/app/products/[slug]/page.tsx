import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getCachedProductBySlug,
  getCachedProducts,
} from '@/lib/roastery-cache';
import { buildProductJsonLd } from '@/lib/seo';
import { ProductDetailClient } from '@/components/ProductDetailClient';
import { RelatedProductsSection } from '@/components/RelatedProductsSection';

export const instant = false;

export async function generateStaticParams() {
  const products = await getCachedProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getCachedProductBySlug(slug);
  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      type: 'website',
      title: `${product.name} | Saber Nuts`,
      description: product.shortDescription,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 900,
          alt: product.imageAlt,
        },
      ],
    },
  };
}

function ProductDetailSkeleton() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="aspect-[4/3] rounded-2xl bg-[#EFE8DA] dark:bg-[#261D17] lg:col-span-6" />
        <div className="space-y-4 lg:col-span-6">
          <div className="h-5 w-48 rounded bg-[#EFE8DA] dark:bg-[#261D17]" />
          <div className="h-10 w-3/4 rounded bg-[#EFE8DA] dark:bg-[#261D17]" />
          <div className="h-24 w-full rounded bg-[#EFE8DA] dark:bg-[#261D17]" />
        </div>
      </div>
    </div>
  );
}

async function ProductDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [product, allProducts] = await Promise.all([
    getCachedProductBySlug(slug),
    getCachedProducts(),
  ]);

  if (!product) {
    notFound();
  }

  const related = allProducts
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);
  const productJsonLd = buildProductJsonLd(product);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailClient product={product} />
      <RelatedProductsSection products={related} />
    </>
  );
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <ProductDetailContent params={params} />
    </Suspense>
  );
}
