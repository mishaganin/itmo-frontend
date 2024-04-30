import React, { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import showDate from '@client/utils/showDate.ts';
import { IPost } from '@client/types/types.ts';
import './Post.scss';

const Post = ({ id, title, content, image, author, date }: IPost): React.JSX.Element => {
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`/posts/${id}`);
  };

  const handleAuthorClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate(`/accounts/${id}`);
  };

  return (
    <div className="post" onClick={handlePostClick} onKeyDown={handlePostClick}>
      <div className="post__image-wrapper">
        <img src={image} alt="post" className="post__image" />
      </div>
      <h1 className="post__title">{title}</h1>
      <div className="post__content">{content}</div>
      <div className="post__info">
        <div className="post__author">
          by{' '}
          <span className="post__link link" onClick={handleAuthorClick}>
            {author}
          </span>
        </div>
        <div className="post__date">{showDate(date)}</div>
      </div>
    </div>
  );
};

export default Post;
