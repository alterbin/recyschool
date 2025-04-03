import { NextResponse } from 'next/server';
import { getGalleryCollections } from '@/services/galleryService';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get('page')) || 1;
    const take = Number(searchParams.get('take')) || 10;
    const skip = (page - 1) * take;

    const { collections, total } = await getGalleryCollections(skip, take);
    return NextResponse.json(
      { data: collections, total },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch collections' },
      { status: 500 },
    );
  }
}
