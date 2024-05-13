import React from 'react';
import Image from 'next/image';
import dog from '../../../image/dog.jpg'; // Adjusted import path

export default function Dog() {
  return (
    <div>
      <h1>Dog</h1>
      <Image src={dog} alt="dog" height={500}></Image>
    </div>
  );
}
