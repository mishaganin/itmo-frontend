import React from 'react';
import { SpinnerCircular } from 'spinners-react';

const Spinner = ({ ...props }): JSX.Element => (
  <SpinnerCircular
    color="#f5da47"
    secondaryColor="#ffffff"
    enabled
    className="spinner"
    {...props}
  />
);

export default Spinner;
