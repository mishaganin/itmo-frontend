import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = (): React.JSX.Element => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link className="link" to="/">
          <span>DEV</span>
        </Link>
      </div>
      <nav className="header__nav nav">
        <Link className="link nav__link" to="/posts">
          <span>Posts</span>
        </Link>
        <Link className="link nav__link" to="/contacts">
          <span>Contacts</span>
        </Link>
        <Link className="link nav__link" to="/login">
          <span>Login</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
