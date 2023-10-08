import React from 'react'
import "./Intrebari.css";
import Intrebare from "../Images/intrebarica.png"
import Divider from "../Images/divider.png"
import Tuda from "../Images/strelkatuda.svg"
import Siuda from "../Images/strelkasiuda.svg"

export default function Intrebari() {
  return (

    <div>

      <h1 className='titluintrebari'>Cele mai frecvente întrebări</h1>
      <img className='dimensimagine' src={Intrebare} alt="imaginecutitlu" />

      <div className='coloane'>

        <ul className='allintrebari'>
          <li>
            <h3>Ce proceduri sunt implicate în încheierea unui contract de închiriere sau de vânzare-cumpărare pentru un bun imobiliar? </h3>
            <p className='pîî'>Procedurile implică în general negocierea termenilor, încheierea contractului, notarizarea acestuia și înregistrarea la Biroul Cadastral de Stat. Un notar va asigura autentificarea contractului.</p>
          </li>

          <li>
            <h3>Cum se pot proteja drepturile de proprietate intelectuală prin servicii notariale, cum ar fi depunerea unui brevet sau înregistrarea unui drept de autor? </h3>
            <p className='pîî'>Notarul poate autentifica documentele legate de protecția proprietății intelectuale, dar înregistrarea drepturilor de autor sau a brevetelor trebuie efectuată la oficiile specializate, cum ar fi Oficiul de Stat pentru Proprietate Intelectuală.</p>
          </li>

          <li>
            <h3>Care sunt cerințele pentru autentificarea unui acord prenupțial sau a unui acord de divorț? </h3>
            <p className='pîî'>Acordurile prenupțiale și cele de divorț pot fi notarizate. Părțile trebuie să ofere documente de identitate și să fie de acord cu termenii și condițiile acordului.</p>
          </li>
        </ul>
      </div>

      <div className='butoane'>
        <button className='knopkatuda'> <img className='TUDA' src={Tuda} alt="strelkatuda" />Înapoi</button>
        <button className='knopkasiuda'> Înainte <img className='SIUDA' src={Siuda} alt="strelkasiuda" /></button>
      </div>

      <img src={Divider} alt="imagine linie" />

    </div>
  )
}
