import React from 'react';
import img from '../../assets/img/coding.png';
import './Post.scss';
import { IPost } from '../../types/types.ts';

const Post = ({ id, title, content, image, date }: IPost): React.JSX.Element => (
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
  </div>
);

export default Post;
