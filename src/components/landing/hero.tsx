import Image from 'next/image';
import routes from '../../utils/routes';
import landing from '../../utils/assets/landing';
import { Typography } from '../shared';
import { Arrow } from '../svgs';
import Particle from './particle';

export default function Hero() {
  return (
    <div className="app_hero_section">
      <div className="app_hero_section__content app_landing_page__px">
        <div className="app_hero_section__content__txt">
          <Typography className="app_hero_section__content__txt__h1" fontFamily="TrenchSlab" fontWeight="md" variant="h1">
            Fostering
            {' '}
            <br className="d-none d-lg-flex" />
            <span>solutions</span>
            {' '}
            for waste management challenges.
          </Typography>

          <Typography className="app_hero_section__content__txt__p">
            {/* eslint-disable-next-line max-len */}
            Alterbin provides creative and innovative initiatives to transform waste for a suitable future.
          </Typography>

          {false && (
            <a className="app_hero_section__content__txt__action" href="/">
              <Arrow />

              <Typography fontFamily="TrenchSlab" variant="span" id={routes.home.hash.aboutUs}>
                Learn more
              </Typography>
            </a>
          )}
        </div>

        <Image className="app_hero_section__img_ct" src={landing.trash} alt="" priority />
        <Particle name="main_particle" />
      </div>
    </div>
  );
}
