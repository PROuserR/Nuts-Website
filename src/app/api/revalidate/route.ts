import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

const ALLOWED_TAGS = new Set([
  'catalog',
  'products',
  'journal',
  'storefront',
  'instagram-dispatches',
]);

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as { tag?: string };
    const tag = typeof body.tag === 'string' && ALLOWED_TAGS.has(body.tag)
      ? body.tag
      : 'catalog';

    revalidateTag(tag, 'max');
    return NextResponse.json({ revalidated: true, tag });
  } catch {
    return NextResponse.json(
      { revalidated: false, error: 'Invalid revalidation request' },
      { status: 400 }
    );
  }
}
