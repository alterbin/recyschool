import React from 'react';
import Image from 'next/image';
import assets from '@/utils/assets';
import routes from '@/utils/routes';
import Line from './line';
import { Typography } from '../shared';

const prizeGivingDescription = 'Through this Alterbin’s flagship project, students in primary/secondary schools are mobilized to contribute to community waste management efforts in an organized way and are rewarded. Recyschool offers learning incentives (such as full/ partial tuition payment, learning aids- notes and textbooks, and other school needs) to participants as an exchange for the disposal of recyclable items.';

function Award() {
  return (
    <div className="app_award_section" id={routes.home.hash.prize}>
      <div className="app_award_section__content app_recyschool_page__px">
        <div className="app_award_section__content__text">
          <Typography
            variant="p"
            fontWeight="md"
            color="sub-text-color"
            className=""
          >
            <Line />
            PRIZE
          </Typography>
          <Typography fontFamily="TrenchSlab" variant="h1">
            {' '}
            Recyschool Participants Get Rewarded For
            {' '}
            <br />
            <span className="d-flex justify-content-center">
              Outstanding Innovations
            </span>
            {' '}
          </Typography>
        </div>

        <div className="app_award_section__content__performance">
          <Typography className="app_award_section__content__performance__txt__px">
            {prizeGivingDescription}
          </Typography>
        </div>
      </div>
    </div>
  );
}

function Judges() {
  return (
    <div className="app_judges_section" id={routes.home.hash.mentorship}>
      <div className="app_judges_section__content app_recyschool_page__px">
        <div className="app_judges_section__content__text">
          <Typography
            variant="P-XXS"
            fontWeight="md"
            color="sub-text-color"
            className=""
          >
            <Line />
            MENTORSHIP
          </Typography>
          <Typography
            fontFamily="TrenchSlab"
            variant="h1"
            className="app_judges_section__content__text__h1"
          >
            <span className="d-flex justify-content-center">
              Mentors With Expert Knowledge In
            </span>
            Sustainable Development And Innovations
          </Typography>
        </div>

        <div className="app_judges_section__content__container">
          <div className="app_judges_section__content__img">
            <Image
              src={assets.recyschool.judge1}
              alt=""
              priority
              className="app_judges_section__content__img_ct"
            />
            <div className="app_judges_section__content__img_txt">
              <Typography fontFamily="TrenchSlab" variant="h5" fontWeight="md">
                Empathetic listener
              </Typography>
            </div>
          </div>
          <div className="app_judges_section__content__img">
            <Image
              src={assets.recyschool.judge2}
              alt=""
              priority
              className="app_judges_section__content__img_ct"
            />
            <div className="app_judges_section__content__img_txt">
              <Typography fontFamily="TrenchSlab" variant="h5" fontWeight="md">
                Adaptive guidian
              </Typography>
              {/* <Typography>Role</Typography> */}
            </div>
          </div>
          <div className="app_judges_section__content__img">
            <Image
              src={assets.recyschool.judge3}
              alt=""
              priority
              className="app_judges_section__content__img_ct"
            />
            <div className="app_judges_section__content__img_txt">
              <Typography fontFamily="TrenchSlab" variant="h5" fontWeight="md">
                Authentic relationship-builder
              </Typography>
              {/* <Typography variant="P-XXS">Role</Typography> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Competition() {
  return (
    <>
      <Award />

      <Judges />
    </>
  );
}

export default Competition;
