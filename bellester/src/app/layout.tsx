// layout.tsx
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './globals.css'; 

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
