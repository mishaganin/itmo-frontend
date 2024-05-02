import React from 'react';
import clsx from 'clsx';
import image from '@client/assets/img/coding.png';

import styles from '@shared/styles/pages/index.module.scss';

const HomePage = (): React.JSX.Element => (
  <div className={styles.home}>
    <div className={clsx(styles.home__column, styles.introduction)}>
      <div className={styles.introduction__title}>
        {/* eslint-disable-next-line max-len */}
        An open forum for <span className={styles.introduction__title_red}>writing</span> programming
        articles, <span className={styles.introduction__title_green}>reading</span> them, and{' '}
        <span className={styles.introduction__title_blue}>sharing</span> your thoughts
      </div>
      <div className={styles.introduction__text}>
        This platform provides a collaborative space for software enthusiasts, developers, and tech
        aficionados to share their expertise, experiences, and insights related to software
        development. Here, you can create posts to discuss coding techniques, programming languages,
        best practices, tools, and industry trends.
      </div>
    </div>
    <div className={clsx(styles.home__column, styles.image__wrapper)}>
      <img className={styles.image} src={image.src} alt="coding" />
    </div>
  </div>
);

export default HomePage;
