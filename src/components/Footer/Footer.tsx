import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const URL: string = 'https://github.com/mishaganin';

const Footer = (): React.JSX.Element => (
  <footer className="footer">
    <div className="container">
      <Link className="footer__link link" to="/">
        <span className="footer__logo">DevShare, 2023</span>
      </Link>
      <Link className="footer__link link" to={URL}>
        <span className="footer__subscription">Also subscribe to my github 😊</span>
      </Link>
    </div>
  </footer>
);

export default Footer;
