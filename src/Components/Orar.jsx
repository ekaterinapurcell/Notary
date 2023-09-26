import React from "react";
import "./Orar.css";
import Linieorar from "../Images/linieorar.png";

export default function orar() {
  return (

    <div className="mainmain">
      <h1 className="titluorar"> Orar de lucru</h1>
      <div className="orarmain">

        <div className="bordura">
          <div className="first-container">
            <div className="zile">
              <p className="zileleparagraf">Zilele de lucru</p>
              <h3 className="zileh">Luni-Vineri</h3>
              <h3 className="oreh">9:00-17:00</h3>
              <p className="adresaorar">Republica Moldova, Rîșcani, MD-5600, str. Independenței 20</p>
            </div>


            <div className="contacteaza">
              <p className="telefonparagraf">Contactează-ne</p>
              <h3 className="telefonorar">0256-2-25-56</h3>
              <p className="postaorar">hello@finsweet.com</p>
            </div>

          </div>
        </div>
        <div className="second-container">

          <div className="cifreblock">
            <h1 className="experienta">12+</h1>
            <h1 className="clienti">18K+</h1>
          </div>

          <img src={Linieorar} className="linieorar" />

          <div className="cuvinteblock">
            <h4 className="textexperienta">Ani de experiență</h4>
            <h4 className="textexperienta">Clienți satisfăcuți</h4>
          </div>


        </div>
      </div>
    </div>
  );
}