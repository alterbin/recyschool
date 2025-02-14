'use client';

import { metaData } from '@/utils/static';
import { Footer, Metas, Navbar } from '../components';
import {
  AboutEvent,
  EventAgenda,
  Competition,
  Showcase,
  Hero,
} from '../components/recyschool';
import { Provider } from '../contexts/global';

export default function Page() {
  return (
    <Provider>
      <Metas data={metaData} />

      <main className="app_landing_page app_recyschool_page">
        <Navbar variant="light" />

        <Hero />

        <AboutEvent />

        <EventAgenda />

        <Competition />

        <Showcase />

        <Footer />
      </main>
    </Provider>
  );
}
