import React from 'react';
import Link from 'next/link';
import { HttpStatusCode } from '@shared/types';

import styles from './ErrorBoundary.module.scss';

const ErrorBoundary = () => {


  const renderErrorMessage = (): JSX.Element => {
    let errorMessage = 'Sorry.. there was an error';
    // if (isRouteErrorResponse(error)) {
    //   if (error.status === HttpStatusCode.NOT_FOUND) {
    //     errorMessage = 'This page doesn\'t exist!';
    //   }
    //
    //   if (error.status === HttpStatusCode.UNAUTHORIZED) {
    //     errorMessage = 'You aren\'t authorized to see this';
    //   }
    //
    //   if (error.status === HttpStatusCode.SERVICE_UNAVAILABLE) {
    //     errorMessage = 'Looks like our API is down';
    //   }
    //
    //   if (error.status === HttpStatusCode.I_AM_A_TEAPOT) {
    //     // errorMessage = '🫖';
    //     errorMessage = 'Teapot'
    //   }
    // }

    return <h1 className={styles.errorBoundary__title}>{errorMessage}</h1>;
  };

  return (
    <div className={styles.errorBoundary__link}>
      {renderErrorMessage()}
      <Link className={styles.errorBoundary__link} href="/">
        <span>Go back to home page</span>
      </Link>
    </div>
  );
};

export default ErrorBoundary;
