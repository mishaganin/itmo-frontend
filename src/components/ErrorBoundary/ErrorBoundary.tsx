import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorBoundary.scss';

const ErrorBoundary = () => (
  <div className="error-boundary">
    <h1 className="error-boundary__title">Sorry.. there was an error</h1>
    <Link className="error-boundary__link" to="/">
      <span>Go back to home page</span>
    </Link>
  </div>
);

export default ErrorBoundary;
