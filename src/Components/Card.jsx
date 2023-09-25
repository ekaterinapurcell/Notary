import React from "react";
import "./Card.css";
export default function Card({
  servicename,
  price,
  contract1,
  contract2,
  contract3,
}) {
  return (
    <div className="cartocika">
      <div className="servicename">
        <h2 className="servicetext">{servicename}</h2>
      </div>

      <div className="cardinfo">
        <p className="price">{price}</p>
        <hr className="linie" />

        <ol className="documente">
          <li>{contract1}</li>
          <li> {contract2}</li>
          <li> {contract3}</li>
        </ol>
      </div>
    </div>
  );
}
