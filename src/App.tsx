import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import './styles/global.scss';

const App = (): React.JSX.Element => (
  <>
    <Header />
    <Outlet />
  </>
);

export default App;
