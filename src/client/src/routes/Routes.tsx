import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@client/App.tsx';
import HomePage from '@client/pages/HomePage/HomePage.tsx';
import PostsPage from '@client/pages/PostsPage/PostsPage.tsx';
import ErrorBoundary from '@client/components/ErrorBoundary/ErrorBoundary.tsx';
import PostCreationPage from '@client/pages/PostCreationPage/PostCreationPage.tsx';

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
