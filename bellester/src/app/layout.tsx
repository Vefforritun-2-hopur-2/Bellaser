'use client'
// Main síða
import React from 'react';
import {Header, Navbar, Footer} from '../components';
import './globals.css'; 

export default function Layout({ children }: { children: React.ReactNode }){
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
