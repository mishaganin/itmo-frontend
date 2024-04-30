import React from 'react';
import image from '@client/assets/img/coding.png';
import './HomePage.scss';

const HomePage = (): React.JSX.Element => (
  <div className="home">
    <div className="home__column introduction">
      <div className="introduction__title">
        An open forum for <span className="introduction__title_red">writing</span> programming
        articles, <span className="introduction__title_green">reading</span> them, and{' '}
        <span className="introduction__title_blue">sharing</span> your thoughts
      </div>
      <div className="introduction__text">
        This platform provides a collaborative space for software enthusiasts, developers, and tech
        aficionados to share their expertise, experiences, and insights related to software
        development. Here, you can create posts to discuss coding techniques, programming languages,
        best practices, tools, and industry trends.
      </div>
    </div>
    <div className="home__column image__wrapper">
      <img className="image" src={image.src} alt="coding" />
    </div>
  </div>
);

export default HomePage;
