import { useState } from 'react';
import FlatList from './components/FlatList';
import Flat from './components/Flat';
import Map from './components/Map';
import './App.css';


function App() {

  const [flats, setFlats] = useState(initFlats)
  // const [selectedFlatId, setSelectedFlatId] = useState(0)

  return (
    <div className="App">
      <div className="row">
        <div className="col-md-8">
          <FlatList flats={flats}/>
        </div>
        <div className="col-md-4">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
