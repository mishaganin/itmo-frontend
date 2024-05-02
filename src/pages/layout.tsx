import React, { ReactNode } from 'react';
import Header from '@client/components/Header/Header';

const Layout = ({ children }: { children: ReactNode}) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout;
