import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FlatsList from './FlatsList';
import MapBox from './MapBox';
import "../styles/backg-image.css"

const MAPBOX_TOKEN =  process.env.REACT_APP_MAPBOX_API;

const Flats = ({flats, selectedFlat}) => {
  // Get user coordinates from the Home page search
  const location = useLocation();
  const [userLocation, setUserLocation] = useState(location.state);

  // Get user coordinates from the Flats page search
  const [userLocationInput, setUserLocationInput] = useState("");

  const handleSearchSubmit = async(e) => {
    e.preventDefault();
    try {
      const resp = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${userLocationInput}.json?access_token=${MAPBOX_TOKEN}`);
      const data = await resp.json();
      const [ long, lat ] = data.features[0].center;
      setUserLocation({lat: lat, long: long});
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="backg-image">
      <div className="container my-3">

      <form onSubmit={handleSearchSubmit} >
              <div className="d-flex flex-column justify-content-start">
                <input
                  type="text"
                  className='form-control w-25'
                  placeholder='Search destination'
                  value={userLocationInput}
                  onChange={(e) => setUserLocationInput(e.target.value)}
                  />
                <button type="submit" className='btn btn-primary fw-bold my-1 w-25'>Search</button>
              </div>
            </form>
        <div className="row">
          <div className="col-md-8">
            <FlatsList flats={flats} />
          </div>
          <div className="col-md-4">
            <MapBox flats={flats} selectedFlat={selectedFlat} userLocation={userLocation}/>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Flats
