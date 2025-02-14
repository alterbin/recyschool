import { metaData as staticMetaData } from './static';

export function wipAlert() {
  // eslint-disable-next-line no-alert
  alert('WIP :)');
}

export function getMetadata(metaData = staticMetaData) {
  return {
    title: metaData.siteName,
    description: metaData.description,
    openGraph: {
      ...metaData,
      type: 'website',
      images: [{
        url: metaData.image,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      site: `@${metaData.url}`,
      creator: `@${metaData.siteName}`,
      images: metaData.image,
    },
  };
}
