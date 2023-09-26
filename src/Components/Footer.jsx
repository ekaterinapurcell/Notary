import React from "react";
import "./Footer.css";
import Facebook from "../Images/iconita.svg";

export default function Footer() {
  return (
    <div className="MainFooter">
      <div className="firstpart">
        <h1 className="titlufooter">Birou Notarial "Ludmila Purcel"</h1>
        <p className="numarfooter">0256-2-25-56</p>
      </div>

      <hr className="liniecumat" />

      <div className="orarfooter">
        <h1>Luni-Vineri</h1>
        <h1>9:00-17:00</h1>
      </div>

      <div className="bottompart">
        <div className="paragblock">
          <p className="par">Republica Moldova, Riscani, MD-5600,</p>
          <p className="par"> str.Independentei 20</p>
        </div>

        <img src={Facebook} className="facebook" />
      </div>
    </div>
  );
}
