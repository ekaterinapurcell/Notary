import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


export default function NavBar() {
  return (
    <div className="navbar">
      <h1 className="birouname"> Biroul Notarial "Ludmila Purcel" </h1>
      <ul className="menu">

        <Link to="/">
        <li className="menuitem">Acasa</li>
        </Link>
        <li className="menuitem">Orarul de lucru</li>
        <Link to="Servicii">
          {" "}
          <li className="menuitem">Servicii</li>
        </Link>
        <li className="menuitem"> 0256-2-25-58</li>
      </ul>
    </div>
  );
}
