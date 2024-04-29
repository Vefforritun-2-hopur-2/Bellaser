// layout.tsx
import React from 'react';
import {Navbar,Footer} from '../components';
import './globals.css'; 

export default function Layout({ children }: { children: React.ReactNode }){
  return (
    <>
      <html>
        <body>
          <Navbar />
            <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
};
