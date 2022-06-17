import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Map, {Marker} from 'react-map-gl';
import clsx from "clsx"
import "../styles/map.css"
// import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN =  process.env.REACT_APP_MAPBOX_API;

const MapBox = ({flats, ...rest}) => {

  const [viewPort, setViewPort] = useState({
    latitude: 47.3983,
    longitude: 8.5417,
    zoom: 8
  });

  const [markers, setMarkers] = useState("")

  useEffect(() => {
    let blueMarkers = []
    let redMarker = ""

    if(flats) {
      blueMarkers = flats.map(flat => {
        return {...flat, color:"blue"}
      })
      setMarkers(blueMarkers)
    }

    if(rest.selectedFlat) {
      let flat = rest.selectedFlat
      blueMarkers = blueMarkers.filter(marker => marker.id !== flat.id)
      redMarker = {...flat, color:"red"}
      setMarkers([...blueMarkers, redMarker])
    }
  }, [flats, rest.selectedFlat])

  return (
    <div className="map-container">
      <Map
        {...viewPort}
        onMove={prev => setViewPort(prev.viewPort)}
        onViewportChange={viewPort => setViewPort(viewPort)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {flats && markers && markers.map(marker =>
           <Marker
            key={marker.id}
            latitude={marker.lat}
            longitude={marker.long}
            >
              <Link to={`${marker.id}`}
                className={clsx({
                  "btn btn-sm rounded-3 p-1": true,
                  "btn-primary": marker.color === "blue",
                  "btn-success": marker.color === "red",
                })}>€{marker.price}
              </Link>


            </Marker>
        )
        }
      </Map>
    </div>
  )
}

export default MapBox
