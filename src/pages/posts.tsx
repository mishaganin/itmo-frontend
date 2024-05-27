import React, { ChangeEvent, useState } from 'react';
import { GetServerSideProps } from 'next';
import useMounted from '@client/hooks/useMounted';
import Post from '@client/components/Post/Post';
import Spinner from '@client/components/Spinner/Spinner';
import Footer from '@client/components/Footer/Footer';
import FilterBar from '@client/components/FilterBar/FilterBar';
import { useAppDispatch } from '@client/store';
import { IPost } from '@shared/types';
import { fetch } from '@shared/utils/fetch';
import { getCookieByName } from '@shared/utils/getCookieByName';

import styles from '@shared/styles/pages/posts.module.scss';

type TPostsProps = {
  posts: IPost;
};

const Posts = ({ posts = [] }: { posts: IPost[] }): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const mounted = useMounted();

  const [isLoading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>('');

  return (
    <div className={styles.posts}>
      <Spinner className={styles.posts__spinner} enabled={false} />
      {isLoading && (
        <>
          <FilterBar
            onChange={(e: ChangeEvent<HTMLInputElement>, value: string) => setFilter(value)}
            className={styles['posts__filter-bar']}
          />
          <div className={styles.posts__list}>
            {(Array.isArray(posts) ? posts : [])
              .filter(
                (post) =>
                  post.title.toLowerCase().includes(filter) ||
                  post.description.toLowerCase().includes(filter),
              )
              .map((post) => (
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  description={post.description}
                  imageUrl={post.imageUrl}
                  author={post.author}
                  createdAt={post.createdAt}
                />
              ))}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<TPostsProps> = async (ctx) => {
  const cookies: string = ctx.req.headers.cookie || '';
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getCookieByName(cookies, 'access_token')}`,
      'Content-Type': 'application/json',
    },
  };
  const posts = await fetch('/reader/get-articles', options);

  return { props: { posts } };
};

export default Posts;
