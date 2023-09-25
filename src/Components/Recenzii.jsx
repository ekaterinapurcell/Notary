import React from 'react'
import "./Recenzii.css";
import Ciuvak from "../Images/ciuvak.svg"
import Linie from "../Images/linie.png"

export default function Recenzii() {
  return (
    <div className='recenziimain'>
<div className='parteastanga'>

    <h3 className='titlurecenzii'>Recenzii</h3>
    <h1 className='noutate'>Citește ce zic oamenii despre NOI</h1>
    <p className='paragraftext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
</div>

<img src={Linie} />

<div className='parteadreapta'>
<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
<div className='ciuvak'>
    <div className='stanga'>
<img src={Ciuvak} />
<h4>Jonathan Vallem</h4>
<p>New York, USA </p>
</div>

<div className='dreapta'>
<button></button>
<button></button>
</div>

</div>



</div>
    </div>
  )
}
