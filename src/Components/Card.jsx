import React from "react";
import "./Card.css";
export default function Card({
  servicename,
  price,
  contract1,
  contract2,
  contract3,
  contract4,
  contract5,
  contract6,
  contract7,
  contract8,
  contract9,
}) {

  const contracts = [
    contract1,
    contract2,
    contract3,
    contract4,
    contract5,
    contract6,
    contract7,
    contract8,
    contract9,
  ].filter((contract) => contract);

  return (
    <div className="cartocika">
      <div className="servicename">
        <h2 className="servicetext">{servicename}</h2>
      </div>

      <div className="cardinfo">
        <p className="price">{price}</p>
        <hr className="linie" />

        <ol className="documente">
          {contracts.map((contract, index) => (
            <li key={index}>{contract}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
