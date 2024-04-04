import React from 'react';
import { SpinnerCircular } from 'spinners-react';

const Spinner = ({ ...props }): JSX.Element => (
  <SpinnerCircular
    enabled
    color="#f5da47"
    secondaryColor="#ffffff"
    className="spinner"
    {...props}
  />
);

export default Spinner;
