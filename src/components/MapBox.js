import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Map, { Marker, Popup } from 'react-map-gl';
import clsx from "clsx"
import "../styles/map.css"

const MAPBOX_TOKEN =  process.env.REACT_APP_MAPBOX_API;

const MapBox = ({flats, ...rest}) => {

  const [viewPort, setViewPort] = useState({
    latitude: 47.3983,
    longitude: 8.5417,
    zoom: 8
  });

  const [markers, setMarkers] = useState("")

  useEffect(() => {
    let allMarkers = []
    let yellowMarker = ""
    let greenMarker = ""

    if(flats) {
      allMarkers = flats.map(flat => {
        return {...flat, color:"blue"}
      })
    }

    if(rest.selectedFlat) {
      let flat = rest.selectedFlat
      console.log(flat)
      yellowMarker = {...flat, color:"yellow"}
      allMarkers = allMarkers.filter(marker => marker.id !== flat.id)
      allMarkers = [...allMarkers, yellowMarker]
    }

    if(rest.userLocation) {
      let userLocation = rest.userLocation
      console.log(userLocation)
      greenMarker = { ...userLocation, color:"green"}
      allMarkers = [...allMarkers, greenMarker]
    }

    setMarkers(allMarkers)

  }, [flats, rest.selectedFlat, rest.userLocation])

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
            <Link
              to={`${marker.id}`}
              className={clsx({
                "btn btn-sm rounded-3 p-1": true,
                "btn-primary": marker.color === "blue",
                "btn-warning": marker.color === "yellow",
              })
              }>€{marker.price}
            </Link>
            <span className={clsx({
                "btn btn-sm rounded-3 p-1 btn-success": marker.color === "green",
              })}>Me</span>
          </Marker>
          )
        }
      </Map>
    </div>
  )
}

export default MapBox
