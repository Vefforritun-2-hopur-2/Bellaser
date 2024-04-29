'use client'
// Main síða
import React from 'react';
import {Header, Navbar, Footer} from '../components';
import './globals.css'; 

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (

    
    <html>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
      
    
  );
};

export default Layout;
