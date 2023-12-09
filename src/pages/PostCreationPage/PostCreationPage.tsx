import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';

import { v4 as uuidv4 } from 'uuid';
import postsPage from '@/pages/PostsPage/PostsPage.tsx';
import { IPost } from '@/types/types.ts';
import { useAppDispatch } from '@/store';
import { addPost } from '@/store/slices/posts';

import './PostCreationPage.scss';

const DEFAULT_IMAGE_SRC =
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDU2M3wwfDF8c2VhcmNofDN8fGNvZGluZ3xlbnwwfDB8fHwxNzAyMDc3NTM5fDA&ixlib=rb-4.0.3&q=80&w=400';

const PostCreationPage = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    console.log(e.target.value);
    setContent(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newPost: IPost = {
      id: uuidv4(),
      title,
      content,
      author: 'Misha Ganin',
      image: DEFAULT_IMAGE_SRC,
      date: new Date(),
    };
    if (newPost.title && newPost.content) {
      dispatch(addPost(newPost));
      navigate('/posts');
    }
  };

  return (
    <div className="post-creation">
      <form className="post-form" onSubmit={handleSubmit}>
        <div className="post-form__body">
          <div className="post-form__editor editor">
            <textarea
              className="editor__title editor__textfield"
              placeholder="Exploring the Wonders of React Hooks"
              value={title}
              onChange={handleTitleChange}
            />
            <div className="editor__divider" />
            <textarea
              className="editor__content editor__textfield"
              placeholder="Type something..."
              value={content}
              onChange={handleContentChange}
            />
          </div>
          <aside className="post-form__aside">
            <h2 className="post-form__title">Creating a Masterpiece in Programming</h2>
            {/* eslint-disable-next-line max-len */}
            <p className="post-form__text">
              Crafting a compelling post in the world of programming requires a delicate balance of
              technical depth and reader-friendly clarity. Your post title serves as the gateway to
              your content – a concise, engaging overview that sparks curiosity. Use keywords
              strategically to enhance discoverability through search engines.
            </p>
          </aside>
        </div>
        <div className="post-form__footer">
          <button type="submit" className="post-form__submit action-button">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCreationPage;
