//setja in functions hér sem er hægt að importa
import React from 'react';
export function Linkbutton(props:{link:string})
{

    return <a href={props.link}></a>

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
    <nav className="navbar bg-gray-800 text-white p-4">
      {/* Checkbox til að toggle valmyndina */}
      <input type="checkbox" id="nav-toggle" className="nav-toggle sr-only"/>
      {/* Label sem er hamborgaratáknið */}
      <label htmlFor="nav-toggle" className="navbar-toggle cursor-pointer">
        <span className="block w-6 h-px bg-white mt-1"></span>
        <span className="block w-6 h-px bg-white mt-1"></span>
        <span className="block w-6 h-px bg-white mt-1"></span>
      </label>
      {/* Dropdown valmyndin */}
      <div className="nav-menu hidden absolute top-full left-0 w-full bg-gray-800">
        <a href="/about" className="block text-white px-4 py-2">Um Okkur</a>
        <a href="/contact" className="block text-white px-4 py-2">Hafa Samband</a>
        <a href="/" className="block text-white px-4 py-2">Heim</a>
      </div>
    </nav>
  );
};