import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App.tsx';
import HomePage from '@/pages/HomePage/HomePage.tsx';
import PostsPage from '@/pages/PostsPage/PostsPage.tsx';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary.tsx';
import PostCreationPage from '@/pages/PostCreationPage/PostCreationPage.tsx';

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
