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

function App() {

  const initFlats = [
    {id: uuidv4(), address: "Zurich, Switzerland", lat: 47.3983, long: 8.5417, price: 200, imgURL: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: uuidv4(), address: "Wädenswil, Switzerland", lat: 47.2297, long: 8.6718, price: 250, imgURL: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"},
    {id: uuidv4(), address: "Locarno, Switzerland", lat: 46.1670, long: 8.7943, price: 200, imgURL: "https://images.unsplash.com/photo-1613545325268-9265e1609167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: uuidv4(), address: "Tenero-Contra, Switzerland", lat: 46.1805, long: 8.8491, price: 250, imgURL: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"},
    {id: uuidv4(), address: "Zurich, Switzerland", lat: 47.3983, long: 8.5417, price: 200, imgURL: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: uuidv4(), address: "Lugano, Switzerland", lat: 46.0037, long: 8.9511, price: 250, imgURL: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"},
    {id: uuidv4(), address: "Locarno, Switzerland", lat: 46.1670, long: 8.7943, price: 200, imgURL: "https://images.unsplash.com/photo-1613545325268-9265e1609167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: uuidv4(), address: "Tenero-Contra, Switzerland", lat: 46.1805, long: 8.8491, price: 250, imgURL: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"},
    {id: uuidv4(), address: "Zurich, Switzerland", lat: 47.3983, long: 8.5417, price: 200, imgURL: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
  ]

  console.log(initFlats[0].id)

  const [flats, setFlats] = useState(initFlats)
  const [selectedFlat , setSelectedFlat] = useState(undefined)


  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="flats" element={<Flats flats={flats} selectedFlat={selectedFlat} />} >
            <Route path=":id" element={<FlatDetails flats={flats} selectedFlat={selectedFlat} setSelectedFlat={setSelectedFlat} />} />
          </Route>
          <Route path="about" element={<About />} />
        </Routes>
        <Footer  />
      </Router>
  );
}

export default App;
