import React from "react";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div className={`welcome-section`}>
      <p className={`welcome-message1`}>Bine ați venit pe site-ul nostru! </p>
      <p className={`welcome-message`}>
        Suntem dedicați furnizării serviciilor notariale de cea mai înaltă
        calitate, bazate pe experiență și integritate. Încrederea și
        confidențialitatea dumneavoastră sunt cheia succesului nostru.
        <br />
        Descoperiți cum putem fi de ajutor și nu ezitați să ne contactați pentru
        orice întrebare sau programare. Suntem aici pentru a vă asigura că toate
        afacerile dumneavoastră sunt tratate cu profesionalism și atenție
        sporită la detalii.
      </p>
      <button className="welcome-button">Vezi serviciile noastre</button>
    </div>
  );
}
