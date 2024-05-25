import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { wrapper } from '@client/store/store';
import Layout from './layout';

import '@shared/styles/global.scss';

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <link rel="shortcut icon" href="../shared/assets/code.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
