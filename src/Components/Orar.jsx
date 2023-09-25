import React from "react";
import "./Orar.css";
export default function orar() {
  return (
    <div className="allmain">
      <h1 className="titluorar"> Orar de lucru </h1>
      <div className="main">
        <div className="oraru">
          <div className={`contact-info-section`}>
            <div className={`notarial-info`}>
              <div className={`weekday-container`}>
                <p className={`working-days-title`}>Zilele de lucru</p>
                <div className={`work-days-divider`} />
              </div>
              <div className={`contact-section`}>
                <p className={`working-days-title`}>Contactează-ne</p>
                <div className={`work-days-divider`} />
              </div>
            </div>
            <div className={`working-hours-contact-info`}>
              <div className={`time-contact-section`}>
                <p className={`notarial-title`}>Luni - Vineri</p>
                <p className={`working-hours`}>9:00 - 17:00 </p>
              </div>
              <div className={`contact-info`}>
                <p className={`notarial-title`}>0256-2-25-56</p>
                <p className={`contact-info3`}>hello@finsweet.com</p>
              </div>
            </div>
            <p className={`address`}>
              Republica Moldova, Rîșcani, MD-5600, str. Independenței 20
            </p>
          </div>
        </div>

        <div className={`experience-container`}>
          <div className={`experience-stats`}>
            <div className={`stat-block`}>
              <p className={`count-label`}>12+</p>
              <p className={`count-label1`}>18K+</p>
            </div>
            <div className={`border-top-divider`} />
          </div>
          <div className={`experience-and-satisfaction`}>
            <p className={`experience-years`}>Ani de experiență</p>
            <p className={`satisfied-clients`}>Clienți satisfăcuți</p>
          </div>
        </div>
      </div>
    </div>
  );
}