import React from 'react';
import {Linkbutton} from '../components'


export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* Meira innihald hér */}
      <Linkbutton link='about' text='about us'/>
    </div>
  );
};