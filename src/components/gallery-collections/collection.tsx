/* eslint-disable @next/next/no-img-element */
import { GalleryCollection } from '@/services/galleryService';
import React from 'react';
import { Typography } from '../shared';

export function Collection(collection: GalleryCollection) {
  return (
    <div className="app_gallery_card_container">
      <div className="app_gallery_card_image_container">
        <img
          src={collection?.images[0]}
          alt={collection?.title}
          width="100"
          className="app_gallery_card_image"
        />
      </div>
      <div className="app_gallery_card_text">
        <Typography variant="h5">{collection?.title}</Typography>
        <Typography>{collection?.description}</Typography>
      </div>
    </div>
  );
}
