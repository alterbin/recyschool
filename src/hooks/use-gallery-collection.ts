import { useEffect, useState } from 'react';
import {
  fetchCollections,
  GalleryCollectionResponse,
} from '../services/galleryService';

export const useGalleryCollections = (take = 10) => {
  const [collections, setCollections] = useState<GalleryCollectionResponse>({
    data: [],
    total: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState<boolean>(false);

  useEffect(() => {
    const loadCollections = async () => {
      if (!hasMore) return;

      if (page === 1) {
        setLoading(true);
      } else {
        setIsFetchingNextPage(true);
      }
      try {
        const data = await fetchCollections({ page, take });
        setCollections((prev) => ({
          data: [...prev.data, ...data.data], // Append new data
          total: data.total,
        }));
        setHasMore(data.data.length > 0); // Stop if no more data
      } catch (err) {
        setError('Failed to load collections');
      } finally {
        setLoading(false);
        setIsFetchingNextPage(false);
      }
    };

    loadCollections();
  }, [page, take]);

  return {
    collections,
    loading,
    error,
    setPage,
    hasMore,
    isFetchingNextPage,
  };
};
