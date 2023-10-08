import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./NavBar.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";



export default function NavBar() {
  return (
    <div className="navbar">
      <h1 className="birouname"> Biroul Notarial "Ludmila Purcel" </h1>
      <ul className="menu">

        <RouterLink to="/">
          <li className="menuitem">Acasa</li>
        </RouterLink>
        <li className="menuitem">Orarul de lucru</li>
        <RouterLink to="Servicii">
          {" "}
          <li className="menuitem">Servicii</li>
        </RouterLink>
        <li className="menuitem">
          <ScrollLink
            activeClass="active"
            to="Map"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset based on your layout
            duration={500} // Duration of the scroll animation
          >
            Contacte  </ScrollLink>   </li>
        <li className="menuitem"> 0256-2-25-58</li>
      </ul>
    </div>
  );
}
