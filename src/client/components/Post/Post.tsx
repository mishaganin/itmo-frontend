import React, { MouseEvent } from 'react';
import { redirect } from 'next/navigation';
import showDate from '@shared/utils/showDate';
import { IPost } from '@shared/types';

import styles from './Post.module.scss';

const Post = ({ id, title, content, image, author, date }: IPost): React.JSX.Element => {

  console.log(styles);

  const handlePostClick = () => {
    redirect(`/posts/${id}`);
  };

  const handleAuthorClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    redirect(`/accounts/${id}`);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.post} onClick={handlePostClick} onKeyDown={handlePostClick}>
      <div className={styles['post__image-wrapper']}>
        <img className={styles.post__image} src={image} alt="post" />
      </div>
      <h1 className={styles.post__title}>{title}</h1>
      <div className={styles.post__content}>{content}</div>
      <div className={styles.post__info}>
        <div className={styles.post__author}>
          by{' '}
          <button className={styles.post__link} type="button" onClick={handleAuthorClick}>
            {author}
          </button>
        </div>
        <div className={styles.post__date}>{showDate(date)}</div>
      </div>
    </div>
  );
};

export default Post;
