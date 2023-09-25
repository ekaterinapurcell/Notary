import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";

const Map = () => {
  const center = [47.952762, 27.559078]; // Coordonatele centrului hărții

  return (
    <div className="mapcontainer">
      <MapContainer
        className="react-leaflet"
        center={center}
        zoom={15}
        style={{ height: "400px", width: "600px" }}
      >
        <TileLayer
          className="react-leaflet"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>Aici poate fi conținutul marker-ului.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;