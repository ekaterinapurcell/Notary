import React from 'react'
import "./Intrebari.css";
import Intrebare from "../Images/intrebarica.png"
import Divider from "../Images/divider.png"

export default function Intrebari() {
  return (
    
    <div>
    
    <h1 className='titluintrebari'>Cele mai frecvente întrebări</h1>
    <img className= 'dimensimagine' src={Intrebare}  alt="imaginecutitlu" />

   <div className='coloane'>  
   
   <ul className='allintrebari'>
    <li>
    <h3>A UX Case Study Creating a Studious Environment for Students: </h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    </li>
    
    <li>
    <h3>A UX Case Study Creating a Studious Environment for Students: </h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    </li>
    
    <li>
    <h3>A UX Case Study Creating a Studious Environment for Students: </h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    </li>
   </ul>
    </div>

    <div className='butoane'>
    <button></button>
    <button></button>
    </div>
    
    <img src={Divider}  alt="imagine linie"/>
    
    </div>
  )
}
