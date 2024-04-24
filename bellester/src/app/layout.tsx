// layout.tsx
import React from 'react';
import {Navbar,Footer} from '../components';
import './globals.css'; 

const Layout = ({ children }: { children: React.ReactNode }) => {
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

export default Layout;
