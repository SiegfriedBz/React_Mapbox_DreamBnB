import { useState, useEffect } from 'react';
import "../styles/map.css"
import Map, {Marker} from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN =  process.env.REACT_APP_MAPBOX_API;

const MapBox = ({flats, ...rest}) => {

  const [viewStateAll, setViewStateAll] = useState({
    latitude: 47.3983,
    longitude: 8.5417,
    zoom: 8
  });

  const [markers, setMarkers] = useState("")

  useEffect(() => {
    let freshMarkers = []
    if(flats) {
      freshMarkers = flats.map(flat => {
        return <Marker key={flat.id} latitude={flat.lat} longitude={flat.long} color="blue" />
      })
      setMarkers([freshMarkers])

    }
  }, [flats])

  useEffect(() => {
    let freshMarkers = []
    if(flats && rest.selectedFlat) {
      let flat = rest.selectedFlat
      freshMarkers = flats.map(flat => {
        return <Marker key={flat.id} latitude={flat.lat} longitude={flat.long} color="blue" />
      })
      freshMarkers = [...freshMarkers, <Marker key={flat.id} latitude={flat.lat} longitude={flat.long} color="red" />]
      setMarkers([freshMarkers])
    }
  }, [rest.selectedFlat])


  return (
    <div className="map-container">
      <Map
        {...viewStateAll}
        onMove={prev => setViewStateAll(prev.viewStateAll)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {markers}
      </Map>
    </div>
  )
}

export default MapBox
