
import "./ServiciiMain.css";
import Siuda from "../Images/strelkasiuda.svg"
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function ServiciiMain() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://650719523a38daf4803f1daa.mockapi.io/Services")
            .then((res) => {
                setData(res.data);
            });
    }, []);

    return (
        <div className='SERVICII'>
            <div >
                <h1 className='titlikservicii'> Servicii</h1>
            </div>

            <div className='bothcategorii'>

                <div className='acte-personale'>
                    <div className='acte-pers-imobil'>
                        <button className='btnServicii'>Acte personale și Imobiliare</button>
                    </div>

                    <div className='content-block'>

                        {data.map((item) => item.actepers.map((service) => (
                            <div className='card-servicii'>


                                <h1 key={service.id} className='denumirica'> {service.servicename}</h1>
                            </div>



                        )))}

                    </div>
                </div>


                <div className='acte-personale'>
                    <div className='acte-pers-imobil'>
                        <button className='btnServicii'>Acte de Procură </button>
                    </div>

                    <div className='content-block'>

                        {data.map((item) => item.acteprocur.map((service) => (
                            <div className='card-servicii'>


                                <h1 key={service.id} className='denumirica'> {service.servicename}</h1>
                            </div>



                        )))}

                    </div>
                </div>
            </div>



            <button className='buton-pret'> vezi prețurile și documentele necesare <img className='SIUDA' src={Siuda} alt="strelkasiuda" /> </button>


        </div>
    )
}
