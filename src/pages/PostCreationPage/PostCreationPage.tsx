import React, { ChangeEvent, FormEvent, useState } from 'react';
import './PostCreationPage.scss';

const PostCreationPage = () => {
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

  const handleSubmitClick = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
  };

  return (
    <div className="post-creation">
      <form className="post-form">
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
          <button
            type="submit"
            className="post-form__submit action-button"
            onSubmit={handleSubmitClick}
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCreationPage;
