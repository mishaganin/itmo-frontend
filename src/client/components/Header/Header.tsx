import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import BurgerMenu from '@client/assets/img/burger-menu';
import capitalizeFirstLetter from '@shared/utils/capitalizeFirstLetter';

import styles from './Header.module.scss';

const Header = (): React.JSX.Element => {
  const links: string[] = ['posts', 'contacts', 'login'];

  const [isLinksCollapsed, setLinksCollapsed] = useState<boolean>(false);

  const { pathname } = useRouter();

  const handleHamburgerMenuClick = () => {
    setLinksCollapsed((previousState) => !previousState);
  };

  return (
    <header className={styles.header}>
      <div className={clsx(styles.header__logo, styles.logo)}>
        <Link href="/" className={styles.logo__link}>
          <span className={styles.logo__text}>DevShare</span>
        </Link>
      </div>
      <nav className={clsx(styles.header__nav, styles.nav)}>
        <div className={clsx(styles.nav__links, isLinksCollapsed && styles.hidden)}>
          {links.map((link) => (
            <Link
              key={link}
              href={`/${link}`}
              className={clsx(
                styles.link,
                styles.nav__link,
                pathname.substring(1) === link && styles.active
              )}
            >
              <span>{capitalizeFirstLetter(link)}</span>
            </Link>
          ))}
        </div>
        <button type="button" aria-label="hamburger" className={clsx(
          styles.nav__hamburger,
          styles.hamburger
        )}>
          <BurgerMenu
            fill="white"
            className={styles.hamburger__image}
            onClick={handleHamburgerMenuClick}
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
