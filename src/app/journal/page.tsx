import React from 'react';
import type { Metadata } from 'next';
import { cacheLife, cacheTag } from 'next/cache';
import { getCachedJournalArticles } from '@/lib/roastery-cache';
import { JournalIndexClient } from '@/components/JournalIndexClient';

export const metadata: Metadata = {
  title: 'Roastery Reading Journal',
  description:
    'Read about dry cast-iron nut roasting, Antep pistachio harvests, and evening cardamom coffee pairings from Saber Nuts.',
  alternates: {
    canonical: '/journal',
  },
};

export default async function JournalIndexPage() {
  'use cache';
  cacheLife('days');
  cacheTag('journal');

  const articles = await getCachedJournalArticles();

  return <JournalIndexClient articles={articles} />;
}
