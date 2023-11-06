import React, { useCallback, useEffect, useState } from 'react';
import Post from '../../components/Post/Post.tsx';
import { IPost } from '../../types/types.ts';
import './PostsPage.scss';
import useMounted from '../../hooks/useMounted.ts';
// import { postsAPI } from '../../__fakeAPI__/postsAPI.ts';
import { PostsAPI } from '../../api/postsAPI.ts';

const PostsPage = (): React.JSX.Element => {
  const mounted = useMounted();

  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  const getPosts = useCallback(async () => {
    try {
      const data = await PostsAPI.getAll();

      if (mounted.current) {
        setPosts(data);
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
    <>
      {isLoading
        ? <div>Loading</div>
        : (
          <div className="posts">
            {posts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                image={post.image}
                date={post.date}
              />
            ))}
          </div>
        )}
    </>
  );
};

export default PostsPage;
