import React, { MouseEvent } from 'react';
import showDate from '@shared/utils/showDate';
import { IPost } from '@shared/types';

import clsx from 'clsx';
import { useRouter } from 'next/router';
import styles from './Post.module.scss';

const Post = ({ id, title, description, imageUrl, author, createdAt }: IPost): React.JSX.Element => {
  const router = useRouter();

  const handlePostClick = () => {
    router.push(`/posts/${id}`);
  };

  const handleAuthorClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    router.push(`/profile/${author.id}`);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.post} onClick={handlePostClick} onKeyDown={handlePostClick}>
      <div className={styles['post__image-wrapper']}>
        <img className={styles.post__image} src={imageUrl} alt="post" />
      </div>
      <h1 className={styles.post__title}>{title}</h1>
      <div className={styles.post__content}>{description}</div>
      <div className={styles.post__info}>
        <div className={styles.post__author}>
          by{' '}
          <button className={clsx(styles.post__link, styles.link)} type="button" onClick={handleAuthorClick}>
            {author.username}
          </button>
        </div>
        <div className={styles.post__date}>{showDate(new Date(createdAt))}</div>
      </div>
    </div>
  );
};

export default Post;
