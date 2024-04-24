// layout.tsx
import React from 'react';
import {Header, Footer} from '../components';
import './globals.css'; 

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
