import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const URL: string = 'https://github.com/mishaganin';

const Footer = (): React.JSX.Element => {
  const [loadTime, setLoadTime] = useState<number>(0);

  const calculatePageLoadTime = () => {
    const pageEnd = performance.mark('pageEnd');
    setLoadTime(pageEnd.startTime / 1000);
  };

  useEffect(() => {
    calculatePageLoadTime();
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <Link className="footer__link link" to="/">
          <span className="footer__logo">DevShare, 2023</span>
        </Link>
        <span className="footer__load-time">
          {loadTime}
          s.
        </span>
        <Link className="footer__link link" to={URL}>
          <span className="footer__subscription">Also subscribe to my github 😊</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
