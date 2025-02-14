import config from '@/utils/config';
import React from 'react';
import { Typography } from '..';
import Particle from './showcase-particle/particle';

function Showcase() {
  return (
    <div className="app_showcase_section app_recyschool_page__px">
      <div className="app_showcase_section__content m-0">
        <div className="app_showcase_section__content__txt">
          <Typography fontFamily="TrenchSlab" variant="h1" fontWeight="sb">
            {' '}
            Ready to ShowCase
            {' '}
            <br />
            {' '}
            Your Creativity?
          </Typography>
          <Typography variant="p" fontWeight="rg">
            Let the world see the value you can give to waste. Register to
            participate in
            {' '}
            <br />
            {' '}
            the recyschool
          </Typography>
        </div>
        <a style={{ textDecoration: 'none', visibility: 'hidden' }} href={config.services.google.forms.RECYCATHON_REGISTRATION} target="_blank" rel="noopener noreferrer">
          <button type="button" className="app_showcase_section__content__btn">Register</button>
        </a>
      </div>
      <Particle name="showcase_particle" />
    </div>
  );
}

export default Showcase;
