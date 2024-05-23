import React from 'react';
import Link from 'next/link';
// import { HttpStatusCode } from '@shared/types';

import styles from '@shared/styles/pages/404.module.scss';

const Error = () => {
  // const error = useRouteError();

  const renderErrorMessage = (): JSX.Element => {
    const errorMessage = 'Sorry.. there was an error';
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
    //     errorMessage = '🫖';
    //   }
    // }

    return <h1 className={styles['error-boundary__title']}>{errorMessage}</h1>;
  };

  return (
    <div className={styles['error-boundary']}>
      {renderErrorMessage()}
      <Link className={styles['error-boundary__link']} href="/">
        <span>Go back to home page</span>
      </Link>
    </div>
  );
};

export default Error;
