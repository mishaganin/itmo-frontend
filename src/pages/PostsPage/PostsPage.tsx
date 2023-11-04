import React from 'react';
import Post from '../../components/Post/Post.tsx';
import { IPost } from '../../types/types.ts';
import './PostsPage.scss';

const PostsPage = (): React.JSX.Element => {
  const posts: IPost[] = [
    {
      id: 0,
      title: 'That\'s my first title',
      content: 'Where is the colorful planet.',
      image: '',
      date: new Date(),
    },
    {
      id: 1,
      title: 'That\'s my second title',
      content: 'Peritus gloss ducunt ad fraticinida.',
      image: '',
      date: new Date(),
    },
    {
      id: 2,
      title: 'That\'s my third title',
      content: 'Use hooks to turn your components into draggable elements and droppable areas with just a few lines of code. Control every aspect of how your draggable and droppable components should behave.',
      image: '',
      date: new Date(),
    },
    {
      id: 3,
      title: 'That\'s my fourth title',
      content: 'Peritus gloss ducunt ad fraticinida.',
      image: '',
      date: new Date(),
    },
    {
      id: 4,
      title: 'That\'s my fifth title',
      content: 'Peritus gloss ducunt ad fraticinida.',
      image: '',
      date: new Date(),
    },
    {
      id: 5,
      title: 'That\'s my sixth title',
      content: 'Peritus gloss ducunt ad fraticinida.',
      image: '',
      date: new Date(),
    },
    {
      id: 6,
      title: 'That\'s my seventh title',
      content: 'Peritus gloss ducunt ad fraticinida.',
      image: '',
      date: new Date(),
    },
  ];
  return (
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
  );
};

export default PostsPage;
