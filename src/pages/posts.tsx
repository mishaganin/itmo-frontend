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

import styles from '@shared/styles/pages/posts.module.scss';

type TPostsProps = {
  posts: IPost;
};

const Posts = ({ posts }: { posts: IPost[] }): React.JSX.Element => {
  const dispatch = useAppDispatch();
  // const { posts, status } = useAppSelector((state) => state.posts);

  const mounted = useMounted();

  const [isLoading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>('');

  // const getPosts = useCallback(async () => {
  //   try {
  //     if (status === 'idle') {
  //       dispatch(fetchPosts());
  //     }
  //
  //     if (mounted.current) {
  //       setLoading(false);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, [mounted]);
  //
  // useEffect(() => {
  //   getPosts();
  // }, [getPosts]);

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
            {posts
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
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      readerId: '5de4462a-3376-4c3c-82a0-0dd57c71fc41',
    }),
  };
  const posts = await fetch('/reader/get-articles');

  return { props: { posts } };
};

export default Posts;
