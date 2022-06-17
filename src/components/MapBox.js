import { useState, useEffect } from 'react';
import "../styles/map.css"
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN =  process.env.REACT_APP_MAPBOX_API;

const MapBox = ({flats, ...rest}) => {

  const [viewStateAll, setViewStateAll] = useState({
    latitude: 47.3983,
    longitude: 8.5417,
    zoom: 8
  });

  const [markers, setMarkers] = useState("")

  useEffect(() => {
    let blueMarkers = []

    if(flats) {
      blueMarkers = flats.map(flat => {
        return <Marker key={flat.id} latitude={flat.lat} longitude={flat.long} color="blue" />
      })
      setMarkers(blueMarkers)
    }

    if(rest.selectedFlat) {
      let redMarker = ""
      let flat = rest.selectedFlat
      let newBlueMarkers = blueMarkers.filter(marker => marker.key !== flat.id)
      redMarker = <Marker key={flat.id} latitude={flat.lat} longitude={flat.long} color="red" />
      setMarkers([...newBlueMarkers, redMarker])
    }

  }, [flats, rest.selectedFlat])

  console.log(markers)

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
