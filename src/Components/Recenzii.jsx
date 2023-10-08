import React, { useState } from "react";
import "./Recenzii.css";
import Ciuvak from "../Images/ciuvak.svg";
import Linie from "../Images/linie.png";
import tudarecenzii from "../Images/strelkatuda.svg";
import siudarecenzii from "../Images/strelkasiuda.svg";

export default function Recenzii() {
  // Define an array of content objects for each card
  const contentData = [
    {
      textdreapta:
        "Experiența la biroul notarial Ludmila Purcel a fost excepțională. Echipa lor profesionistă și atentă la detalii a făcut întregul proces notarial extrem de ușor și eficient.",
      numeavatar: "Nicolaiescu Petru",
    },
    {
      textdreapta:
        "Tare bună cantora imi place, oamenii is buni asta este principalul, in genere hai sa traim in pace !",
      numeavatar: "Jora Pantof",
    },
    {
      textdreapta:
        "Nu am fost la biroul dat niciodata da mai vreu!, recomand, Doamna Ludmila are o nepoțică foarte frumoasă, kudreavaya 0_o",
      numeavatar: "KIT",
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleBtnRecClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % contentData.length);
  };

  const handleBtnRecaClick = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + contentData.length) % contentData.length
    );
  };

  const currentContent = contentData[currentCardIndex];

  return (
    <div className="recenziimain">
      <div className="parteastanga">
        <h3 className="titlurecenzii">Recenzii</h3>
        <h1 className="noutate">Citește ce zic oamenii despre NOI</h1>
        <p className="paragraftext">Experiență excelentă la biroul notarial.</p>
      </div>
      <img src={Linie} />
      <div className="parteadreapta">
        <h4 className="textdreapta">{currentContent.textdreapta}</h4>
        <div className="ciuvak">
          <div className="stanga">
            <img src={Ciuvak} className="avatar" />
            <h4 className="numeavatar">{currentContent.numeavatar}</h4>
          </div>
          <div className="dreapta">
            <button className="btnreca" onClick={handleBtnRecaClick}>
              <img className="tudarec" src={tudarecenzii} alt="strelkatuda" />
            </button>
            <button className="btnrec" onClick={handleBtnRecClick}>
              <img
                className="siudarec"
                src={siudarecenzii}
                alt="strelkasiuda"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
