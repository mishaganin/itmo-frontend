import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import useMounted from '@/hooks/useMounted.ts';
import { IPost } from '@/types/types.ts';
import { PostsAPI } from '@/api/postsAPI.ts';
import Post from '@/components/Post/Post.tsx';
import Spinner from '@/components/Spinner/Spinner.tsx';
import Footer from '@/components/Footer/Footer.tsx';
import './PostsPage.scss';
import FilterBar from '@/components/FilterBar/FilterBar.tsx';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchPosts } from '@/store/slices/posts';

const PostsPage = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const { posts, status } = useAppSelector((state) => state.posts);

  const mounted = useMounted();

  const [isLoading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>('');

  const getPosts = useCallback(async () => {
    try {
      if (status === 'idle') {
        dispatch(fetchPosts());
      }

      if (mounted.current) {
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="posts">
      <Spinner enabled={status === 'loading'} className="posts__spinner" />
      {!isLoading && (
        <>
          <FilterBar
            onChange={(e: ChangeEvent<HTMLInputElement>, value: string) => setFilter(value)}
            className="posts__filter-bar"
          />
          <div className="posts__list">
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

export default PostsPage;
