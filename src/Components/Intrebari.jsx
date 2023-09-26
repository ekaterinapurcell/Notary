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
            <h3>A UX Case Study Creating a Studious Environment for Students: </h3>
            <p className='pîî'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </li>

          <li>
            <h3>A UX Case Study Creating a Studious Environment for Students: </h3>
            <p className='pîî'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </li>

          <li>
            <h3>A UX Case Study Creating a Studious Environment for Students: </h3>
            <p className='pîî'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
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
