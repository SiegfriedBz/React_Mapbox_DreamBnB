import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Flats from './components/Flats';
import FlatDetails from './components/FlatDetails';
import { v4 as uuidv4 } from 'uuid';
import '../src/styles/index.css';

const MAPBOX_TOKEN =  process.env.REACT_APP_MAPBOX_API;

function App() {

  const initFlats = [
    {id: uuidv4(), address: "Locarno, Switzerland", description:"Lorem ipsum, adipisicing elit.", lat: 46.1670, long: 8.7943, price: 200, imgURL: "https://images.unsplash.com/photo-1613545325268-9265e1609167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: uuidv4(), address: "Tenero-Contra, Switzerland", description:"Lorem ipsum, adipisicing elit.", lat: 46.1805, long: 8.8491, price: 250, imgURL: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"},
    {id: uuidv4(), address: "Zurich, Switzerland", description:"Lorem ipsum, adipisicing elit.", lat: 47.3983, long: 8.5417, price: 200, imgURL: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: uuidv4(), address: "Zug, Switzerland", description:"Lorem ipsum, adipisicing elit.", lat: 47.1662, long: 8.5155, price: 200, imgURL: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: uuidv4(), address: "Sisikon, Switzerland", description:"Lorem ipsum, adipisicing elit.", lat: 46.9499, long: 8.6220, price: 200, imgURL: "https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: uuidv4(), address: "Interlaken, Switzerland", description:"Lorem ipsum, adipisicing elit.", lat: 46.6863, long: 7.8632, price: 200, imgURL: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: uuidv4(), address: "Ascona, Switzerland", description:"Lorem ipsum, adipisicing elit.", lat: 46.1616, long: 8.7750, price: 200, imgURL: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80"},
    {id: uuidv4(), address: "Rapperswil, Switzerland", description:"Lorem ipsum, adipisicing elit.", lat: 47.2266, long: 8.8184, price: 200, imgURL: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: uuidv4(), address: "Thun, Switzerland", description:"Lorem ipsum, adipisicing elit.", lat: 46.7580, long: 7.6280, price: 200, imgURL: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80"},

  ]

  const [flats, setFlats] = useState(initFlats)
  const [selectedFlat , setSelectedFlat] = useState(undefined)

  const [userLocationInput, setUserLocationInput] = useState("");
  const [userLocationCoordinates, setUserLocationCoordinates] = useState({lat:"", long:""});

  const handleSearchSubmit = async(e) => {
    e.preventDefault();
    try {
      const resp = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${userLocationInput}.json?access_token=${MAPBOX_TOKEN}`);
      const data = await resp.json();
      const [ long, lat ] = data.features[0].center;
      setUserLocationCoordinates({lat: lat, long: long});
    } catch (error) {
      console.log(error);
    }
  }

  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={
          <Home
            handleSearchSubmit={handleSearchSubmit}
            userLocationInput={userLocationInput}
            setUserLocationInput={setUserLocationInput}
            userLocationCoordinates={userLocationCoordinates}
          />} />
          <Route path="flats" element={
            <Flats
               flats={flats}
               selectedFlat={selectedFlat}
               handleSearchSubmit={handleSearchSubmit}
               userLocationInput={userLocationInput}
               setUserLocationInput={setUserLocationInput}
               userLocationCoordinates={userLocationCoordinates}
            />} >
            <Route path=":id" element={<FlatDetails flats={flats} selectedFlat={selectedFlat} setSelectedFlat={setSelectedFlat} />} />
          </Route>
          <Route path="about" element={<About />} />
        </Routes>
        <Footer  />
      </Router>
  );
}

export default App;
