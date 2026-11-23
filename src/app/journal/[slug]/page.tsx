import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getCachedJournalArticles,
  getCachedJournalBySlug,
} from '@/lib/roastery-cache';
import { buildArticleJsonLd } from '@/lib/seo';
import { JournalReaderClient } from '@/components/JournalReaderClient';

export const instant = false;

export async function generateStaticParams() {
  const articles = await getCachedJournalArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getCachedJournalBySlug(slug);
  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/journal/${article.slug}`,
    },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 675,
          alt: article.coverAlt,
        },
      ],
    },
  };
}

function JournalArticleSkeleton() {
  return (
    <div className="mx-auto max-w-[740px] px-4 py-12 sm:px-6">
      <div className="space-y-4">
        <div className="h-4 w-32 rounded bg-[#EFE8DA] dark:bg-[#261D17]" />
        <div className="h-10 w-4/5 rounded bg-[#EFE8DA] dark:bg-[#261D17]" />
        <div className="aspect-[16/9] w-full rounded-xl bg-[#EFE8DA] dark:bg-[#261D17]" />
      </div>
    </div>
  );
}

async function JournalArticleContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getCachedJournalBySlug(slug);
  if (!article) {
    notFound();
  }

  const articleJsonLd = buildArticleJsonLd(article);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <JournalReaderClient article={article} />
    </>
  );
}

export default function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<JournalArticleSkeleton />}>
      <JournalArticleContent params={params} />
    </Suspense>
  );
}
