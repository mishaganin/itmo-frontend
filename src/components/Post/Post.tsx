import React from 'react';
import { IPost } from '../../types/types.ts';
import './Post.scss';
import showDate from '../../utils/showDate.ts';

const Post = ({ id, title, content, image, author, date }: IPost): React.JSX.Element => (
  <div className="post">
    <div className="post__image-wrapper">
      <img
        src={image}
        alt="post"
        className="post__image"
      />
    </div>
    <h1 className="post__title">
      {title}
    </h1>
    <div className="post__content">
      {content}
    </div>
    <div className="post__info">
      <div className="post__author">
        by
        {' '}
        <span className="link">{author}</span>
      </div>
      <div className="post__date">
        {showDate(date)}
      </div>
    </div>
  </div>
);

export default Post;
