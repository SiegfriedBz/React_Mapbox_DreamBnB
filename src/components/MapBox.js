import { useState, useEffect } from 'react';
import "../styles/map.css"
import Map, {Marker} from 'react-map-gl';
import clsx from "clsx"
// import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN =  process.env.REACT_APP_MAPBOX_API;

const MapBox = ({flats, ...rest}) => {

  const [viewPort, setViewPort] = useState({
    latitude: 47.3983,
    longitude: 8.5417,
    zoom: 8
  });

  const [selectedFlat, setSelectedFlat] = useState(null);

  // const myMarkerClass = clsx({
  //   "btn btn-sm": true,
  //   "btn-primary": marker.color === "blue",
  //   "btn-warning": marker.color === "red",
  // })

  const [markers, setMarkers] = useState("")



  useEffect(() => {
    let blueMarkers = []

    if(flats) {
      blueMarkers = flats.map(flat => {
        return {id: flat.id, lat: flat.lat, long: flat.long, color:"blue"}
      })
      setMarkers(blueMarkers)
    }

    if(rest.selectedFlat) {
      let redMarker = ""
      let flat = rest.selectedFlat
      let newBlueMarkers = blueMarkers.filter(marker => marker.id !== flat.id)
      redMarker = {id: flat.id, lat: flat.lat, long: flat.long, color:"red"}
      setMarkers([...newBlueMarkers, redMarker])
    }
  }, [flats, rest.selectedFlat])

  console.log(markers)

  return (
    <div className="map-container">
      <Map
        {...viewPort}
        onMove={prev => setViewPort(prev.viewPort)}
        onViewportChange={viewPort => setViewPort(viewPort)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {markers && markers.map(marker =>
           <Marker
            key={marker.id}
            latitude={marker.lat}
            longitude={marker.long}
            >
            <button
              className={clsx({
                "btn btn-sm": true,
                "btn-primary": marker.color === "blue",
                "btn-warning": marker.color === "red",
              })}>Pop</button>
            </Marker>
        )
        }
      </Map>
    </div>
  )
}

export default MapBox
