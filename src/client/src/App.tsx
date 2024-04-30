import React from 'react';
import { Outlet } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import Header from '@client/components/Header/Header.tsx';

import '@client/styles/global.scss';
import { makeReduxStore } from './store/store';

const App = (): React.JSX.Element => {
  const store = makeReduxStore();
  return (
    <ReduxProvider store={store}>
      <Header />
      <Outlet />
    </ReduxProvider>
  );
};

export default App;
