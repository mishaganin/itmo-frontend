import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Burger from '../../assets/img/burger-menu.svg';
import clsx from 'clsx';
import BurgerMenu from '../../assets/img/burger-menu.tsx';
import './Header.scss';

const Header = (): React.JSX.Element => {
  const [isLinksCollapsed, setLinksCollapsed] = useState<boolean>(false);

  const handleHamburgerMenuClick = () => {
    setLinksCollapsed((previousState) => !previousState);
  };

  return (
    <header className="header">
      <div className="header__logo logo">
        <Link className="link" to="/">
          <span className="logo__text">DevShare</span>
        </Link>
      </div>
      <nav className="header__nav nav">
        <div className={clsx('nav__links', isLinksCollapsed && 'hidden')}>
          <Link className="link nav__link" to="/posts">
            <span>Posts</span>
          </Link>
          <Link className="link nav__link" to="/contacts">
            <span>Contacts</span>
          </Link>
          <Link className="link nav__link" to="/login">
            <span>Login</span>
          </Link>
        </div>
        <button className="nav__hamburger hamburger">
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
