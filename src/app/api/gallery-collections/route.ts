import { NextResponse } from 'next/server';
import { getGalleryCollections } from '@/services/galleryService';

export async function GET() {
  try {
    const { collections, total } = await getGalleryCollections();
    return NextResponse.json({ data: collections, total }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch collections' },
      { status: 500 },
    );
  }
}
