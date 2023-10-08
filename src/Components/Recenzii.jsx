import React from 'react'
import "./Recenzii.css";
import Ciuvak from "../Images/ciuvak.svg"
import Linie from "../Images/linie.png"
import tudarecenzii from "../Images/strelkatuda.svg"
import siudarecenzii from "../Images/strelkasiuda.svg"

export default function Recenzii() {
  return (
    <div className='recenziimain'>
      <div className='parteastanga'>

        <h3 className='titlurecenzii'>Recenzii</h3>
        <h1 className='noutate'>Citește ce zic oamenii despre NOI</h1>
        <p className='paragraftext'>Experiență excelentă la biroul notarial.</p>
      </div>

      <img src={Linie} />

      <div className='parteadreapta'>
        <h4 className='textdreapta'>Experiența la biroul notarial "Ludmila Purcel" a fost excepțională. Echipa lor profesionistă și atentă la detalii a făcut întregul proces notarial extrem de ușor și eficient.</h4>


        <div className='ciuvak'>
          <div className='stanga'>
            <img src={Ciuvak} className='avatar' />
            <h4 className='numeavatar'>Nicolaiescu Petru</h4>
          </div>

          <div className='dreapta'>
            <button className='btnreca'><img className='tudarec' src={tudarecenzii} alt="strelkatuda" /></button>
            <button className='btnrec'><img className='siudarec' src={siudarecenzii} alt="strelkasiuda" /></button>
          </div>

        </div>



      </div>
    </div>
  )
}
