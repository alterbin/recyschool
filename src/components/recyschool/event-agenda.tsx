import Image from 'next/image';
import React from 'react';
import recyschool from '@/utils/assets/recyschool';
import { Typography } from '../shared';
import { Bullet } from '../svgs/bullet';

function EventAgenda() {
  return (
    <div className="app_eventagenda_section">
      <div className="app_eventagenda_section__content app_recyschool_page__px">
        <div className="app_eventagenda_section__content__txt">
          <Typography
            variant="h3"
            className="app_eventagenda_section__content__txt__p__about"
          >
            {' '}
            <span className="app_eventagenda_section__content__txt__p__line" />
            {' '}
            AGENDA
          </Typography>
          <Typography
            fontFamily="TrenchSlab"
            fontWeight="md"
            variant="h1"
            className="app_eventagenda_section__content__txt__title"
          >
            Teaching Innovation In
          </Typography>
          <Typography
            fontFamily="TrenchSlab"
            fontWeight="md"
            variant="h1"
            className="app_eventagenda_section__content__txt__title"
          >
            Waste Value
          </Typography>
          <Typography className="app_eventagenda_section__content__txt__p">
            On a journey to educate young minds on the creative and innovative ways to
            {' '}
            <br />
            {' '}
            create value for waste. This event entails:
          </Typography>
          <div className="app_eventagenda_section__content__txt__list_container">
            <div className="app_eventagenda_section__content__txt__list_container__list">
              <div className="app_eventagenda_section__content__txt__list_container__list__bullet">
                <Bullet />
              </div>
              <Typography variant="P-LG">Online registration of participants for the competition</Typography>
            </div>
            <div className="app_eventagenda_section__content__txt__list_container__list">
              <div className="app_eventagenda_section__content__txt__list_container__list__bullet">
                <Bullet />
              </div>
              <Typography variant="P-LG">On the D-day, participants showcase/present their innovations</Typography>
            </div>
            <div className="app_eventagenda_section__content__txt__list_container__list">
              <div className="app_eventagenda_section__content__txt__list_container__list__bullet">
                <Bullet />
              </div>
              <Typography variant="P-LG">Judges how are experts in the field analyze each of the innovations presented</Typography>
            </div>
            <div className="app_eventagenda_section__content__txt__list_container__list">
              <div className="app_eventagenda_section__content__txt__list_container__list__bullet">
                <Bullet />
              </div>
              <Typography variant="P-LG">Award presentation to the winners</Typography>
            </div>
          </div>
        </div>
        <Image
          src={recyschool.aboutEvent1}
          alt=" event agenda"
          className="app_eventagenda_section__img_ct"
          priority
        />
      </div>
    </div>
  );
}

export default EventAgenda;
