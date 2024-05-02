import React from 'react';
import { SpinnerCircular } from 'spinners-react';

import styles from './Spinner.module.scss';

const Spinner = ({ ...props }): JSX.Element => (
  <SpinnerCircular
    enabled
    color="#f5da47"
    secondaryColor="#ffffff"
    className={styles.spinner}
    {...props}
  />
);

export default Spinner;
