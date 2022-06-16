import { useState } from 'react';
import "../styles/map.css"
import Map, {Marker} from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN =  process.env.REACT_APP_MAPBOX_API;

const MapBox = ({flats}) => {

  const [viewState, setViewState] = useState({
    latitude: 47.3983,
    longitude: 8.5417,
    zoom: 8
  });

  return (
    <div className="map-container">
      <Map
        {...viewState}
        onMove={prev => setViewState(prev.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {flats.map(({id, lat, long}) => {
            return <Marker key={id} latitude={lat} longitude={long} color="blue" />
          })
        }
      </Map>
    </div>
  )
}

export default MapBox
