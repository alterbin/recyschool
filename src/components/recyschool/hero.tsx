import config from '@/utils/config';
import React, { useEffect, useState } from 'react';
import routes from '../../utils/routes';
import { Typography } from '../shared';
import { TimeDot } from '../svgs';

function CountTimer() {
  const targetDate = new Date('March 31, 2024 23:59:59').getTime();
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeRemaining = targetDate - currentDate;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setCountdown({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        clearInterval(interval);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  function formatCountdownValue(value: number) {
    return value < 10 ? `0${value}` : value;
  }

  return (
    <div className="recyschool__hero__section__countdown">
      <Typography
        fontFamily="TrenchSlab"
        variant="h5"
        fontWeight="bd"
        className="recyschool__hero__section__countdown__h5"
      >
        Count Every Seconds Until The Event
      </Typography>
      <div className="recyschool__hero__section__countdown__counter">
        <div>
          <Typography fontFamily="TrenchSlab" variant="h1" fontWeight="sb">
            {formatCountdownValue(countdown.days)}
          </Typography>
          <Typography variant="p" fontWeight="rg" color="sub-text-color">
            {countdown.days < 2 ? 'Day' : 'Days'}
          </Typography>
        </div>
        <TimeDot />
        <div>
          <Typography fontFamily="TrenchSlab" variant="h1" fontWeight="sb">
            {formatCountdownValue(countdown.hours)}
          </Typography>
          <Typography variant="p" fontWeight="rg" color="sub-text-color">
            {countdown.hours < 2 ? 'Hour' : 'Hours'}
          </Typography>
        </div>
        <TimeDot />
        <div>
          <Typography fontFamily="TrenchSlab" variant="h1" fontWeight="sb">
            {formatCountdownValue(countdown.minutes)}
          </Typography>
          <Typography variant="p" fontWeight="rg" color="sub-text-color">
            {countdown.minutes < 2 ? 'Minute' : 'Minutes'}
          </Typography>
        </div>
        <TimeDot />
        <div>
          <Typography fontFamily="TrenchSlab" variant="h1" fontWeight="sb">
            {formatCountdownValue(countdown.seconds)}
          </Typography>
          <Typography variant="P-XXS" fontWeight="rg" color="sub-text-color">
            {countdown.seconds < 2 ? 'Second' : 'Seconds'}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="recyschool_hero_section">
      <div className="recyschool_hero_section__container recyschool_landing_page__px">
        <div className="recyschool_hero_section__container__content">
          <div className="recyschool_hero_section__container__content__blur_circle">
            <Typography
              variant="h1"
              fontFamily="TrenchSlab"
              className="recyschool_hero_section__container__content__blur_circle__h1"
            >
              31st
            </Typography>
            <Typography variant="h2" fontFamily="TrenchSlab" color="sec-color">
              Mar
            </Typography>
            <Typography
              variant="p"
              fontFamily="TrenchSlab"
              className="recyschool_hero_section__container__content__blur_circle__p"
            >
              12:00pm-4:30pm
            </Typography>
          </div>
          <div className="recyschool_hero_section__container__content__txt">
            <Typography
              variant="h1"
              fontFamily="TrenchSlab"
              className="recyschool_hero_section__container__content__txt__h1"
            >
              A competitive solution to waste management challenges.
            </Typography>
            <Typography
              variant="h5"
              id={routes.home.hash.aboutUs}
              className="recyschool_hero_section__container__content__txt__p"
            >
              {/* eslint-disable-next-line max-len */}
              An exciting intra-school competition aimed at addressing waste management challenges and encouraging creative solutions to the issue.
            </Typography>
            <div className="recyschool_hero_section__container__content__txt__btn">
              <a href={config.services.google.forms.RECYCATHON_REGISTRATION} target="_blank" rel="noopener noreferrer">
                <button
                  type="button"
                  className="recyschool_hero_section__container__content__txt__btn1"
                >
                  Register
                </button>
              </a>
              <button
                type="button"
                className="recyschool_hero_section__container__content__txt__btn2"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="recyschool_hero_section__timer">
        <CountTimer />
      </div>
    </div>
  );
}
