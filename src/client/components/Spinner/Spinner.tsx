import React from 'react';
import { SpinnerCircular } from 'spinners-react';

import clsx from 'clsx';
import styles from './Spinner.module.scss';

const Spinner = ({ className, ...props }): JSX.Element => (
  <SpinnerCircular
    enabled
    color="#f5da47"
    secondaryColor="#ffffff"
    className={clsx(styles.spinner, className)}
    {...props}
  />
);

export default Spinner;
