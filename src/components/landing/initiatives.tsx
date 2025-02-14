import Image from 'next/image';
import Link from 'next/link';
import routes from '../../utils/routes';
import { Arrow } from '../svgs';
import { Typography } from '../shared';

const { hash } = routes.home;
const BASE_URL = '/media/landing/initiatives';

const initiatives = [
  {
    title: 'Philan',
    subTitle: 'Social Philanthropy',
    src: `${BASE_URL}/philan.jpg`,
    description: 'Encouraging and enabling the giving away of items people no longer need to those who can reuse or repurpose them, thus reducing waste and promoting sustainability.',
    linkText: 'Reach out',
    href: `#${hash.contactUs}`,
  },
  {
    title: 'Recyschool',
    subTitle: 'Education',
    src: `${BASE_URL}/recyschool.jpg`,
    description: 'Supporting education through sensitization and offering of learning incentives to students showcasing creativity in converting waste into valuables.',
    linkText: 'Reach out',
    href: `#${hash.contactUs}`,
  },
];

export default function Initiatives() {
  return (
    <div className="app_initiatives" id={routes.home.hash.initiatives}>
      <div className="app_mission__top">
        <Typography className="app_mission__top__h2 mb-2" fontFamily="TrenchSlab" fontWeight="md" variant="h2">
          Initiatives
        </Typography>

        <Typography className="app_mission__top__p">
          Discover Our Comprehensive Portfolio of Sustainable Initiatives and Impactful Projects.
          {' '}
          <br />
          Explore Our Sustainable Initiatives.
        </Typography>
      </div>

      <div className="app_initiatives__list app_landing_page__px">
        {initiatives.map((item) => (
          <div className="position-relative" key={item.title}>
            <div className="app_initiatives__item_title">
              <Typography className="app_initiatives__item_title__p" fontFamily="TrenchSlab" fontWeight="md">
                {item.title}
              </Typography>
            </div>

            <div className="app_initiatives__card card">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <Image className="app_initiatives__card__img" src={item.src} width={147} height={35} alt="" priority />

                  <Typography className="app_initiatives__card__h5" fontFamily="TrenchSlab" fontWeight="md" variant="h5">
                    {item.subTitle}
                  </Typography>

                  <Typography className="app_initiatives__card__p">
                    {item.description}
                  </Typography>
                </div>

                <div className="d-flex justify-content-end">
                  {item.href ? (
                    <Link className="app_hero_section__content__txt__action" href={item.href || ''}>
                      <Typography variant="span">
                        {item.linkText}
                      </Typography>

                      <Arrow />
                    </Link>
                  ) : (
                    <Typography color="sec-color" variant="span">
                      {item.linkText}
                    </Typography>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
