import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import useMounted from '@client/hooks/useMounted';
import Post from '@client/components/Post/Post';
import Spinner from '@client/components/Spinner/Spinner';
import Footer from '@client/components/Footer/Footer';
import FilterBar from '@client/components/FilterBar/FilterBar';
import { useAppDispatch, useAppSelector } from '@client/store';
import { fetchPosts } from '@client/store/slices/posts';
import { IPost } from '@shared/types';

import styles from '@shared/styles/pages/posts.module.scss';
import { GetServerSideProps } from 'next';
import { fetch } from '@shared/utils/fetch';

type TPostsProps = {
  posts: IPost
}

const Posts = ({ posts = []}: { posts: IPost[] }): React.JSX.Element => {
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

  const getPosts = () => {
    console.log(posts);
    console.log(posts.filter(
      (post) =>
        post.title.toLowerCase().includes(filter) ||
        post.content.toLowerCase().includes(filter)));
    console.log(posts.filter(
      (post) =>
        post.title.toLowerCase().includes(filter) ||
        post.content.toLowerCase().includes(filter),
    )
      .map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          image={post.image}
          author={post.author}
          date={post.date}
        />
      )));
    return posts;
  }

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
                  post.content.toLowerCase().includes(filter),
              )
              .map((post) => (
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  content={post.content}
                  image={post.image}
                  author={post.author}
                  date={post.date}
                />
              ))}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<TPostsProps> = async ( ctx ) => {
  const posts = await fetch('/article/get-all');

  return { props: { posts } };
}

export default Posts;
