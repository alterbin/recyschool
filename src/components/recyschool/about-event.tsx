/* eslint-disable max-len */
import config from '@/utils/config';
import Image from 'next/image';
import React from 'react';
import recyschool from '@/utils/assets/recyschool';
import { Typography } from '../shared';
import Line from './line';

function AboutEvent() {
  return (
    <div className="app_aboutevent_section">
      <div className="app_aboutevent_section__content app_recyschool_page__px">
        {/* <div></div> */}
        <div className="app_aboutevent_section__content__wrapper ">
          <Image
            src={recyschool.aboutEvent}
            alt="about event"
            className="app_aboutevent_section__img_ct"
            priority
          />
          <div className="app_aboutevent_section__content__txt">
            <Typography
              variant="h3"
              className="app_aboutevent_section__content__txt__h3"
            >
              {' '}
              <Line />
              {' '}
              ABOUT
            </Typography>
            <Typography
              fontFamily="TrenchSlab"
              fontWeight="md"
              variant="h1"
              className="app_aboutevent_section__content__txt__title"
            >
              Recyschool 2023
            </Typography>
            <Typography className="app_aboutevent_section__content__txt__p">
              The Recyschool is aimed at transforming collectible waste into valuable finished products.
              We seek the support of schools for sensitizing students on creative waste management.
              We do this by catching their attention through the engagement of their curious creative minds.
            </Typography>
            <Typography className="app_aboutevent_section__content__txt__p">
              The features creative displays, judging panels, and a prize-giving ceremony to recognize and
              reward the outstanding contributions of our students. &quot;Recyschool&quot; will provide a platform for students
              to apply their problem-solving skills, foster creativity, and learn about the importance of waste management
              practically and engagingly.
            </Typography>
            <a href={config.services.google.forms.RECYCATHON_REGISTRATION} target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="app_aboutevent_section__content__txt__button px-5"
              >
                Register
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutEvent;
