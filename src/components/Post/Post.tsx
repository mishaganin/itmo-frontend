import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import showDate from '../../utils/showDate.ts';
import { IPost } from '../../types/types.ts';
import './Post.scss';

const Post = ({ id, title, content, image, author, date }: IPost): React.JSX.Element => {
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <div
      className="post"
      onClick={handlePostClick}
      onKeyDown={handlePostClick}
    >
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
          <Link className="post__link link" to={`/accounts/${id}`}>
            {author}
          </Link>
        </div>
        <div className="post__date">
          {showDate(date)}
        </div>
      </div>
    </div>
  );
};

export default Post;
