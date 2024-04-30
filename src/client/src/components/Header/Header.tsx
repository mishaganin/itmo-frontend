import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Burger from '../../assets/img/burger-menu.svg';
import clsx from 'clsx';
import { useLocation } from 'react-router';
import BurgerMenu from '@client/assets/img/burger-menu.tsx';
import capitalizeFirstLetter from '@client/utils/capitalizeFirstLetter.ts';
import './Header.scss';

const Header = (): React.JSX.Element => {
  const links: string[] = ['posts', 'contacts', 'login'];

  const [isLinksCollapsed, setLinksCollapsed] = useState<boolean>(false);

  const { pathname } = useLocation();

  const handleHamburgerMenuClick = () => {
    setLinksCollapsed((previousState) => !previousState);
  };

  return (
    <header className="header">
      <div className="header__logo logo">
        <Link className="logo__link" to="/">
          <span className="logo__text">DevShare</span>
        </Link>
      </div>
      <nav className="header__nav nav">
        <div className={clsx('nav__links', isLinksCollapsed && 'hidden')}>
          {links.map((link) => (
            <Link
              key={link}
              className={clsx('link nav__link', pathname.substring(1) === link && 'active')}
              to={`/${link}`}
            >
              <span>{capitalizeFirstLetter(link)}</span>
            </Link>
          ))}
        </div>
        <button type="button" className="nav__hamburger hamburger">
          <BurgerMenu
            fill="white"
            className="hamburger__image"
            onClick={handleHamburgerMenuClick}
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
