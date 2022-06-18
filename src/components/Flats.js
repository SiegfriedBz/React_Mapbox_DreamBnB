import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FlatsList from './FlatsList';
import MapBox from './MapBox';
import "../styles/backg-image.css"

const Flats = ({flats, selectedFlat}) => {
  const location = useLocation();
  const [userLocation, setUserLocation] = useState(location.state);

  return (
    <div className="backg-image">
      <div className="container my-3">
        <div className="row">
          <div className="col-md-8">
            <FlatsList flats={flats} />
          </div>
          <div className="col-md-4">
            <MapBox flats={flats} selectedFlat={selectedFlat}/>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Flats
