import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getGalleryCollections() {
  const [collections, total] = await Promise.all([
    prisma.gallery_collections.findMany(),
    prisma.gallery_collections.count(),
  ]);

  return { collections, total };
}

/* frontend use */

export interface GalleryCollection {
  id: string;
  title: string;
  description: string;
  images: string[];
}
export interface GalleryCollectionResponse {
  data: GalleryCollection[];
  total: number;
}

export const fetchCollections = async (): Promise<GalleryCollectionResponse> => {
  try {
    const response = await fetch('/api/gallery-collections');
    if (!response.ok) {
      throw new Error('Failed to fetch collections');
    }
    const data = await response.json();
    return {
      data: data.data as GalleryCollection[],
      total: data.total as number,
    };
  } catch (error) {
    console.log('Error fetching collections:', error);
    return {
      data: [],
      total: 0,
    }; // Return an empty array to prevent crashes
  }
};
