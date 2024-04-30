import React, { FC } from 'react';
import { AppProps } from 'next/app';

const app: FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default app;
