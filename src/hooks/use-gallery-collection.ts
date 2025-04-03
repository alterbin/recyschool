import { useEffect, useState } from 'react';
import {
  fetchCollections,
  GalleryCollectionResponse,
} from '../services/galleryService';

export const useGalleryCollections = () => {
  const [collections, setCollections] = useState<GalleryCollectionResponse>({
    data: [],
    total: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCollections = async () => {
      try {
        const data = await fetchCollections();
        setCollections(data);
      } catch (err) {
        setError('Failed to load collections');
      } finally {
        setLoading(false);
      }
    };

    loadCollections();
  }, []);

  return { collections, loading, error };
};
