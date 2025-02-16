import '../../public/fonts/GeneralSans_Complete/Fonts/WEB/css/general-sans.css';
import '../../public/fonts/TrenchSlab_Complete/Fonts/WEB/css/trench-slab.css';

import '../../public/css/bootstrap.min.css';
import '../../public/css/colors.css';
import '../../public/scss/main.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import generateColorsCss from '@/utils/colors';
import { Metas } from '@/components/shared/metas';
import { ReactNode } from 'react';
import { getMetadata } from '@/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = getMetadata();

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <Metas>
        <style>{generateColorsCss()}</style>
      </Metas>

      <body suppressHydrationWarning className={inter.className}>{children}</body>
    </html>
  );
}
