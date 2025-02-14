import Image from 'next/image';
import Link from 'next/link';
import { useGlobalContext } from '../../contexts/global';
import staticRoutes from '../../utils/routes';
import Typography from '../shared/typography';
import Socials from '../shared/socials';
import { Arrow } from '../svgs/arrows';

const { hash } = staticRoutes.recyschool;

const routes = [
  { label: 'About Us', href: `#${hash.aboutUs}` },
  { label: 'Initiatives', href: `#${hash.initiatives}` },
  { label: 'Events', href: `#${hash.events}` },
  { label: 'Contact', href: `#${hash.contactUs}` },
];

function Menu({ className = '' }) {
  const { state: { showMobileMenu }, setState } = useGlobalContext();

  const toggleMenu = () => {
    setState((draft) => ({ showMobileMenu: !draft.showMobileMenu }));
  };

  if (showMobileMenu) {
    return (
      <svg onClick={toggleMenu} className={`cursor-pointer ${className}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 44 44" fill="none">
        <path d="M27.0253 28.9683C27.5272 29.4751 28.3442 29.4798 28.8502 28.9789C29.3561 28.4779 29.3594 27.6608 28.8575 27.154L16.7406 14.9177C16.2388 14.4109 15.4217 14.4061 14.9158 14.9071C14.4099 15.4081 14.4066 16.2251 14.9085 16.732L27.0253 28.9683Z" fill="#06382E" />
        <path d="M28.9214 16.7642C29.4249 16.2607 29.4248 15.4444 28.9214 14.9409C28.4179 14.4375 27.6016 14.4375 27.0982 14.9409L14.9433 27.0958C14.4399 27.5992 14.4399 28.4156 14.9433 28.919C15.4468 29.4225 16.2631 29.4225 16.7665 28.919L28.9214 16.7642Z" fill="#06382E" />
      </svg>
    );
  }

  return (
    <svg onClick={toggleMenu} className={`cursor-pointer ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 5.25C12.5858 5.25 12.25 5.58579 12.25 6C12.25 6.41421 12.5858 6.75 13 6.75H19C19.4142 6.75 19.75 6.41421 19.75 6C19.75 5.58579 19.4142 5.25 19 5.25H13Z" fill="#06382E" />
      <path d="M5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75H19C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25H5Z" fill="#06382E" />
      <path d="M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H19C19.4142 18.75 19.75 18.4142 19.75 18C19.75 17.5858 19.4142 17.25 19 17.25H9Z" fill="#06382E" />
    </svg>
  );
}

function Routes({ mobile = false }) {
  return (
    <ul className={`app__header__ul ${mobile ? '' : 'd-none d-lg-flex'}`}>
      {routes.map((item) => (
        <li className="app__header__ul__li" key={item.label}>
          <Link className="app__header__ul__li__a" href={item.href}>
            <Typography fontWeight="md">
              {item.label}
            </Typography>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Main() {
  return (
    <div className="w-100 d-flex justify-content-between align-items-center rounded-pill navbar__content">
      <Link href={staticRoutes.recyschool.path}>
        <Image className="app__header__logo" src="/media/logos/h-logo2.svg" width={147} height={35} alt="" priority />
      </Link>

      <Routes />

      <Image style={{ visibility: 'hidden' }} className="app__header__logo d-none d-lg-flex" src="/media/logos/h-logo2.svg" width={147} height={35} alt="" priority />

      <Menu className="d-block d-lg-none" />
    </div>
  );
}

function MobileMenu() {
  const { state: { showMobileMenu } } = useGlobalContext();

  if (!showMobileMenu) return null;

  return (
    <div className="recyschool__header__mobile_menu_content">
      <div className="d-flex flex-column align-items-center">
        <Routes mobile />

        <a className="app_hero_section__content__txt__action" href="/">
          <Arrow />

          <Typography variant="span">
            Learn more
          </Typography>
        </a>
      </div>

      <div className="app__header__mobile_menu_content__footer">
        <Socials dark />
      </div>
    </div>
  );
}

export default function Navbar() {
  const { state: { showMobileMenu } } = useGlobalContext();

  return (
    <header className={`recyschool__header ${showMobileMenu ? 'recyschool__header--show_mobile_menu' : ''} recyschool_landing_page__px`}>
      <Main />

      <MobileMenu />
    </header>
  );
}
