import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import "./ServiciiPage.css";
import axios from "axios";
import Lottie from "lottie-react";
import NoFound from "./Images/Animation - 1695204207193.json";


function ServiciiPage() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://650719523a38daf4803f1daa.mockapi.io/AllServices")
      .then((res) => {
        setItems(res.data);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.servicename.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="ServiciiMain">
      <NavBar />
      <div className="Infocontainer">
        <h1 className="Aicieraunmat">Servicii</h1>
        <p> Autentificăm viitorul - Protejăm prezentul </p>
      </div>
      <div className="input">
        <input
          className="inputStyle"
          type="text"
          id="fname"
          name="fname"
          placeholder="Cauta serviciul de care ai nevoie"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {filteredItems.length > 0 ? (
        <div>
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              servicename={item.servicename}
              price={item.price}
              contract1={item.contract1}
              contract2={item.contract2}
              contract3={item.contract3}
              contract4={item.contract4}
              contract5={item.contract5}
              contract6={item.contract6}
              contract7={item.contract7}
              contract8={item.contract8}
              contract9={item.contract9}
            />
          ))}
        </div>
      ) : (
        <div class="centered-container">
          <div class="text-center">
            <h1 class="nofoundtext">Nu am gasit nimic...</h1>
          </div>
          <div class="lottie-center">
            <Lottie class="NoFound" animationData={NoFound} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiciiPage;
