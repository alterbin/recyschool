'use client';

import { ReactNode } from 'react';
import { ModalsProvider } from './modal';

export default function Providers({ children }: { children: ReactNode }) {
  return <ModalsProvider>{children}</ModalsProvider>;
}
