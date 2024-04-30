import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@client/App';
import HomePage from '@client/pages/HomePage/HomePage';
import PostsPage from '@client/pages/PostsPage/PostsPage';
import ErrorBoundary from '@client/components/ErrorBoundary/ErrorBoundary';
import PostCreationPage from '@client/pages/PostCreationPage/PostCreationPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'posts',
        element: <PostsPage />,
      },
      {
        path: 'create-post',
        element: <PostCreationPage />,
      },
    ],
  },
]);
