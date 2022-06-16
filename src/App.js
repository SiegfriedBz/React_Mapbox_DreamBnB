import { useState } from 'react';
import NavBar from './components/NavBar';
import FlatList from './components/FlatList';
import Map from './components/Map';
import { v4 as uuidv4 } from 'uuid';
import '../src/styles/index.css';

function App() {

  const initFlats = [
    {id: uuidv4(), address: "Zurich, Switzerland", price: 200, imgURL: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: uuidv4(), address: "Lugano, Switzerland", price: 250, imgURL: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"},
    {id: uuidv4(), address: "Locarno, Switzerland", price: 200, imgURL: "https://images.unsplash.com/photo-1613545325268-9265e1609167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: uuidv4(), address: "Tenero-Contra, Switzerland", price: 250, imgURL: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"},
    {id: uuidv4(), address: "Zurich, Switzerland", price: 200, imgURL: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: uuidv4(), address: "Lugano, Switzerland", price: 250, imgURL: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"},
    {id: uuidv4(), address: "Locarno, Switzerland", price: 200, imgURL: "https://images.unsplash.com/photo-1613545325268-9265e1609167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: uuidv4(), address: "Tenero-Contra, Switzerland", price: 250, imgURL: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"},
    {id: uuidv4(), address: "Tenero-Contra, Switzerland", price: 250, imgURL: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"}
  ]

  const [flats, setFlats] = useState(initFlats)

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <FlatList flats={flats}/>
          </div>
          <div className="col-md-4">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
