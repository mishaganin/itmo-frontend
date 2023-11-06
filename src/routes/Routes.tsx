import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import HomePage from '../pages/HomePage/HomePage.tsx';
import PostsPage from '../pages/PostsPage/PostsPage.tsx';
import App from '../App.tsx';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary.tsx';

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
    ],
  },
]);
