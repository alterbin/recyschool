/* eslint-disable @next/next/no-img-element */
import { ModalContainer, Typography } from '@/components/shared';
import { useModals } from '@/contexts/modal';
import { GalleryCollection } from '@/services/galleryService';
import React from 'react';

export function MorePicturesModal() {
  const { modals, setModals } = useModals();

  const collection = modals.record as GalleryCollection;

  const handleClose = () => setModals((draft) => ({ ...draft, show: false }));

  return (
    <ModalContainer isOpen={modals.show} onClose={handleClose}>
      <div className="">
        <div className="px-6 pb-2 fs-5">
          <Typography variant="h4" fontWeight="md">
            Pictures of {collection?.title}
          </Typography>
          <Typography variant="p" fontWeight="rg">
           {collection?.description}
          </Typography>
        </div>
        <div className="app_gallery_modal_image_wrapper overflow-y-auto">
          {collection?.images?.map((image) => (
            <div key={image} className="mb-2">
              <img
                src={image}
                alt="gallery"
                className="app_gallery_modal_image"
              />
            </div>
          ))}
        </div>
      </div>
    </ModalContainer>
  );
}
