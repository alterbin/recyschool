'use client';

import { useGalleryCollections } from '@/hooks/use-gallery-collection';
import React from 'react';
import { Typography } from '../shared';
import { Collection } from './collection';

export function GalleryCollections() {
  const { collections, loading } = useGalleryCollections();

  return (
    <div className="pt-5 app_gallery_card app_recyschool_page__px">
      <div className="app_mission__top pt-5">
        <Typography className="app_mission__top__h2 mb-2" fontFamily="TrenchSlab" fontWeight="md" variant="h2">
          Gallery Collections
        </Typography>

        <Typography className="app_mission__top__p">
          Discover Our Comprehensive Portfolio of Sustainable Initiatives and Impactful Projects.
          {' '}
          <br />
          Explore Our Sustainable Initiatives.
        </Typography>
      </div>
      <div className="app_gallery_card_wrapper">
        {!loading && collections?.data?.map((collection) => (
          <div key={collection.id}>
            <Collection {...collection} />
          </div>
        ))}

        {!loading && collections?.total < 1 && (
          <div className="app_gallery_card_empty">
            <Typography variant="h5" fontWeight="md">No collections available</Typography>
          </div>
        )}

        {loading && (
        <div className="app_gallery_card_empty">
          <Typography variant="h5" fontWeight="md">Loading collections...</Typography>
        </div>
        )}

      </div>
    </div>
  );
}
