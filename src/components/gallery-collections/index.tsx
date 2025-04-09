/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { useGalleryCollections } from '@/hooks/use-gallery-collection';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useModals } from '@/contexts/modal';
import { GalleryCollection } from '@/services/galleryService';
import { Typography } from '../shared';
import { Collection } from './collection';
import { MorePicturesModal } from './modals';

export function GalleryCollections() {
  const {
    collections, loading, setPage, hasMore, isFetchingNextPage,
  } = useGalleryCollections(10);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { modals, setModals } = useModals();

  const handleShowMorePictures = (data: GalleryCollection) => {
    setModals((draft) => ({
      ...draft,
      show: true,
      record: data,
    }));
  };

  useEffect(() => {
    if (inView && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [inView, hasMore, setPage]);

  return (
    <div className="pt-5 app_gallery_card app_recyschool_page__px">
      {modals.show && (<MorePicturesModal />)}
      <div className="app_mission__top pt-5">
        <Typography
          className="app_mission__top__h2 mb-2"
          fontFamily="TrenchSlab"
          fontWeight="md"
          variant="h2"
        >
          Gallery
        </Typography>

        <Typography className="app_mission__top__p">
          A Visual Reflection.
          {' '}
          <br />
          Explore Our Sustainable Initiatives.
        </Typography>
      </div>
      <div className="app_gallery_card_wrapper">
        {!loading
          && collections?.data?.map((collection, index) => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
              key={collection.id}
              ref={index === collections.data.length - 1 ? ref : null}
              onClick={() => handleShowMorePictures(collection)}
            >
              <Collection {...collection} />
            </div>
          ))}

      </div>

      {!loading && collections?.total < 1 && (
      <div className="app_gallery_card_empty">
        <Typography variant="h5" fontWeight="md">
          No collections available
        </Typography>
      </div>
      )}

      {loading && (
      <div className="app_gallery_card_empty w-100">
        <Typography variant="h5" fontWeight="md">
          Loading collections...
        </Typography>
      </div>
      )}

      {isFetchingNextPage && (
        <div className="flex w-100 justify-content-center align-items-center text-center">
          <Typography variant="h5" fontWeight="md">Loading more collections...</Typography>
        </div>
      )}
    </div>
  );
}
