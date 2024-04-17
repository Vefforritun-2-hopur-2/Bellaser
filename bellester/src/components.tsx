//setja in functions hér sem er hægt að importa
import React from 'react';
export function Linkbutton(props:{link:string,text:string})
{
    return <a href={props.link}>{props.text}</a>
}



export const Footer = () => {
  return (
    <footer>
      {/* Innsetning á footer hér */}
    </footer>
  );
};



export const Navbar = () => {
    return (
      <nav>
        {/* Innsetning á navigation hér */}
      </nav>
    );
  };
  
