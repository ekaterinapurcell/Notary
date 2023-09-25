import "./App.css";
import NavBar from "./Components/NavBar";
import Welcome from "./Components/Welcome";
import Orar from "./Components/Orar";
import Recenzii from "./Components/Recenzii";
import Intrebari from "./Components/Intrebari";
import Map from "./Components/Map";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function App() {
  const center = [51.505, -0.09]; // Coordonatele centrului hărții
  return (
    < div className="App">
      <NavBar />
      <Welcome />
      <Orar />
      <Recenzii />
      <Intrebari />


       <Map/>
    ``
    </div>
  );
}

export default App;
