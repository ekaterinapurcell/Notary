import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Cantar from "../Images/animation_ln0khfl1.json";
import "./Map.css";
import Lottie from "lottie-react";

const Map = () => {
  const center = [47.952762, 27.559078]; // Coordonatele centrului hărții

  return (
    <div >

      <h1 className='titlumap'>Aici ne găsești</h1>

      <div className="mapmain">
        <div className="mapcontainer">
          <MapContainer
            className="react-leaflet"
            center={center}
            zoom={15}
          >
            <TileLayer
              className="react-leaflet"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center}>
              <Popup>Biroul Notarial "Ludmila Purcel"</Popup>
            </Marker>
          </MapContainer>


        </div>


        <div className="animationblock">
          <Lottie class="Cantar" animationData={Cantar} />
        </div>



      </div>

    </div>
  );
};

export default Map;
