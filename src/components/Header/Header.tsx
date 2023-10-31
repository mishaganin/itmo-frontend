import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = (): React.JSX.Element => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/posts">
          <span className="nav__link">DEV</span>
        </Link>
      </div>
      <div className="header__nav">
        <nav className="nav">
          <Link to="/posts">
            <span className="nav__link">Posts</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
