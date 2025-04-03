'use client';

import { Footer, Navbar } from '@/components';
import { GalleryCollections } from '@/components/gallery-collections';
import React from 'react';

export default function GalleryPage() {
  return (
    <div>
      <main className="app_landing_page app_recyschool_page">
        <Navbar variant="light" />

        <GalleryCollections />

        <Footer />
      </main>
    </div>
  );
}
