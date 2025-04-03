import { PrismaClient } from '@prisma/client';
import toast from 'react-hot-toast';

const prisma = new PrismaClient();

export async function getGalleryCollections(
  skip: number,
  take: number,
  order?: 'asc' | 'desc',
) {
  const [collections, total] = await Promise.all([
    prisma.gallery_collections.findMany({
      skip,
      take,
      orderBy: { createdAt: order || 'desc' },
    }),
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

type Params = {
  page: number;
  take: number;
  order?: string;
};

export const fetchCollections = async ({
  page,
  take,
  order,
}: Params): Promise<GalleryCollectionResponse> => {
  try {
    const response = await fetch(
      `/api/gallery-collections?page=${page}&take=${take}${
        order ? `&order=${order}` : ''
      }`,
    );
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
    toast.error('Error fetching collections');
    return {
      data: [],
      total: 0,
    }; // Return an empty array to prevent crashes
  }
};
