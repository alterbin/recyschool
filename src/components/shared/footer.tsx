import Image from 'next/image';
import { usePathname } from 'next/navigation';
import routes from '@/utils/routes';
import config from '@/utils/config';
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Call, Message } from '../svgs';
import Typography from './typography';
import Socials from './socials';

const { WEB_APP_URL: MAIN_WEB_APP_URL, RECYCATHON_WEB_APP_URL } = config.services.google.sheets;

function Union() {
  return (
    <svg className="app_footer__union" preserveAspectRatio="none" width="1440" height="189" viewBox="0 0 1440 189" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 16.971C155.341 -0.80553 279.709 134.835 724.993 12.5634C927.049 -42.9197 1348.63 108.452 1440 23.382V189H0L0 16.971Z" fill="#333333" />
    </svg>
  );
}

function FooterBtm() {
  const footNote = `Copyright © ${(new Date().getFullYear())} Alterbin Technologies`;
  return (
    <>
      <Socials />

      <Typography variant="span">{footNote}</Typography>
    </>
  );
}

function FooterC() {
  const [loading, setLoading] = useState(false);

  const pathname = usePathname();

  const isRecyschool = routes.recyschool.path === pathname;

  const WEB_APP_URL = isRecyschool ? RECYCATHON_WEB_APP_URL : MAIN_WEB_APP_URL;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailInput = document.querySelector('form input[name="Email"]') || {} as any;

    const formData = new FormData();
    formData.append('Email', emailInput.value);

    try {
      setLoading(true);

      const response = await fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formData,
      });

      if (typeof response === 'object') {
        toast.success('Successful', { position: 'bottom-right' });
        emailInput.value = '';
      } else {
        throw new Error('Failed');
      }
    } catch (error: any) {
      toast.error('Failed', { position: 'bottom-right' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="app_footer">
      <div className="app_footer__contact_us app_landing_page__px">
        <div className="app_footer__contact_us__con" id={routes.home.hash.contactUs}>
          <Typography className="app_mission__top__h3" color="main-color" fontFamily="TrenchSlab" fontWeight="md" variant="h2">
            Contact Us
          </Typography>

          <div className="app_footer__contact_us__con__info">
            <div className="app_footer__contact_us__con__info__item">
              <Message />

              <a href={`mailto:${config.CONTACT_US.email}`} style={{ textDecoration: 'none' }}>
                <Typography color="sub-text-color" variant="span">{config.CONTACT_US.email}</Typography>
              </a>
            </div>

            <div className="app_footer__contact_us__con__info__item">
              <Call />

              <Typography color="sub-text-color" variant="span">+234 903 988 7841</Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="app_footer__content app_landing_page__px">
        <div className="app_footer__content__item">
          <Image
            className="app__header__logo"
            src="/media/logos/h-logo-light.svg"
            width={147}
            height={35}
            alt=""
            priority
          />

          <Typography variant="span">
            Creating value for waste.
          </Typography>

          <a href={`mailto:${config.CONTACT_US.email}`} style={{ color: '#fefefe' }}>
            <Typography variant="span">{config.CONTACT_US.email}</Typography>
          </a>
        </div>

        <div className="app_footer__content__item">
          <Typography fontWeight="bd" variant="h5">
            Our Initiatives
          </Typography>

          <div className="app_footer__content__item__text">
            <Typography variant="p">Recyschool</Typography>
            <Typography variant="p">Philan</Typography>
          </div>
        </div>

        <div className="app_footer__content__item">
          <Typography fontWeight="bd" variant="h5">
            Alterbin
          </Typography>

          <div className="app_footer__content__item__text">
            <a href={`#${routes.home.hash.aboutUs}`} style={{ color: '#fefefe' }}>
              <Typography variant="p">About Us</Typography>
            </a>

            <a href={`#${routes.home.hash.contactUs}`} style={{ color: '#fefefe' }}>
              <Typography variant="p">Contact Us</Typography>
            </a>
          </div>
        </div>

        <div className="app_footer__content__item">
          <Typography fontWeight="bd" variant="h5">
            Stay in the loop
          </Typography>

          <div>
            <Typography variant="span" fontWeight="lt">
              Join our mailing list to stay in the loop on how we are creating a
              sustainable environment
            </Typography>
          </div>

          <form onSubmit={handleSubmit} method="POST" action={WEB_APP_URL} className="app_footer__content__item__subscribe">
            <input
              type="text"
              className="app_footer__content__item__subscribe__input"
              placeholder="Enter your email address.."
              name="Email"
              required
            />

            <button
              type="submit"
              className="app_footer__content__item__subscribe__button"
            >
              {loading ? 'Submitting...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      <div className="app_landing_page__px d-none d-lg-block">
        <div className="app_footer__btm">
          <FooterBtm />
        </div>
      </div>

      <div className="app_footer__btm app_landing_page__px d-flex d-lg-none">
        <FooterBtm />
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <div className="position-relative">
      <Union />

      <FooterC />

      <Toaster />
    </div>
  );
}
