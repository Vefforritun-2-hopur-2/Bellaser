//setja in functions hér sem er hægt að importa
import React from 'react';
export function Linkbutton(props:{link:string,text:string})
{
    return <a href={props.link}>{props.text}</a>
}

export const Header = () =>{

  return (
  <header>
    <div className="headerDiv">
            <div className="menu-icon" id="menu"><i className="fa fa-bars"></i></div>
            <a href="/"><div className="logo">bellaser</div></a>
            <a href="/login"><div className="profile-icon"><i className="fa fa-user"></i></div></a>
        </div>
       
        <nav className="dogBar">
            <button className="nav-button"><i className="fa fa-calendar"></i> Tímapantanir</button>
            <a href="/login"><button className="nav-button">Þarf að passa? [+]</button></a>
            <button className="nav-button">Filters <i className="fa fa-th-list"></i></button>
        </nav>

        <div className="nav-menu hidden absolute top-full left-0 w-full bg-gray-800">
          <nav className="navBar">
            <ul>
              <li><Linkbutton link='/' text='Home'/></li>
              <li><Linkbutton link='about' text='About Us'/></li>
              <li><Linkbutton link='contact' text='Contact'/></li>
              <li><Linkbutton link='help' text='Help'/></li>
            </ul>
          </nav>
        </div>
  </header>
  );
};



export const Body = () => {
  return(
    <body>
    </body>
  )
}

export const Footer = () => {
  return (
    <footer>
      bellaser® | 2024
    </footer>
  );
};

