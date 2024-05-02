import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './Footer.module.scss';

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
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link className={styles.footer__link} href="/">
          <span className={styles.footer__logo}>DevShare, 2023</span>
        </Link>
        <span className={styles['footer__load-time']}>
          {loadTime}
          s.
        </span>
        <Link className={styles.footer__link} href={URL}>
          <span className={styles.footer__subscription}>Also subscribe to my github 😊</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
