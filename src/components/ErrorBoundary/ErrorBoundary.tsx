import React from 'react';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { HttpStatusCode } from '@/types/types.ts';
import './ErrorBoundary.scss';

const ErrorBoundary = () => {
  const error = useRouteError();

  console.log(error);

  const renderErrorMessage = (): JSX.Element => {
    let errorMessage = 'Sorry.. there was an error';
    if (isRouteErrorResponse(error)) {
      if (error.status === HttpStatusCode.NOT_FOUND) {
        errorMessage = 'This page doesn\'t exist!';
      }

      if (error.status === HttpStatusCode.UNAUTHORIZED) {
        errorMessage = 'You aren\'t authorized to see this';
      }

      if (error.status === HttpStatusCode.SERVICE_UNAVAILABLE) {
        errorMessage = 'Looks like our API is down';
      }

      if (error.status === HttpStatusCode.I_AM_A_TEAPOT) {
        errorMessage = '🫖';
      }
    }

    return <h1 className="error-boundary__title">{errorMessage}</h1>;
  };

  return (
    <div className="error-boundary">
      {renderErrorMessage()}
      <Link className="error-boundary__link" to="/">
        <span>Go back to home page</span>
      </Link>
    </div>
  );
};

export default ErrorBoundary;
