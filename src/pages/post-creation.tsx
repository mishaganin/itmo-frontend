import React, { ChangeEvent, FormEvent, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import { IPost } from '@shared/types';
import { useAppDispatch } from '@client/store';
import { addPost } from '@client/store/slices/posts';

import styles from '@shared/styles/pages/post-creation.module.scss';
import { PublishArticleDto } from '@server/author/dto/publish-article.dto';
import { fetch } from '@shared/utils/fetch';

const DEFAULT_IMAGE_SRC =
  // eslint-disable-next-line max-len
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDU2M3wwfDF8c2VhcmNofDN8fGNvZGluZ3xlbnwwfDB8fHwxNzAyMDc3NTM5fDA&ixlib=rb-4.0.3&q=80&w=400';

const PostCreation = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newPost: PublishArticleDto = {
      title,
      description: content,
      imageUrl: DEFAULT_IMAGE_SRC,
      tags: ['Development', 'Programming'],
      authorId: '7c358ec6-2833-4a9c-bc02-a3cf0f3f7d81',
    };
    if (newPost.title && newPost.description) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      };
      // dispatch(addPost(newPost));
      console.log(options);
      fetch('/author/publish', options);
      router.push('/posts');
    }
  };

  return (
    <div className={styles['post-creation']}>
      <form className={styles['post-form']} onSubmit={handleSubmit}>
        <div className={styles['post-form__body']}>
          <div className={clsx(styles['post-form__editor'], styles.editor)}>
            <textarea
              className={clsx(styles.editor__title, styles.editor__textfield)}
              placeholder="Exploring the Wonders of React Hooks"
              value={title}
              onChange={handleTitleChange}
            />
            <div className={styles.editor__divider} />
            <textarea
              className={clsx(styles.editor__content, styles.editor__textfield)}
              placeholder="Type something..."
              value={content}
              onChange={handleContentChange}
            />
          </div>
          <aside className={styles['post-form__aside']}>
            <h2 className={styles['post-form__title']}>Creating a Masterpiece in Programming</h2>
            <p className={styles['post-form__text']}>
              Crafting a compelling post in the world of programming requires a delicate balance of
              technical depth and reader-friendly clarity. Your post title serves as the gateway to
              your content – a concise, engaging overview that sparks curiosity. Use keywords
              strategically to enhance discoverability through search engines.
            </p>
          </aside>
        </div>
        <div className={styles['post-form__footer']}>
          <button type="submit" className={clsx(
            styles['post-form__submit'],
            styles['action-button']
          )}>
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCreation;
