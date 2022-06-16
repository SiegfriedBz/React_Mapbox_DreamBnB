import React, { useState, useEffect, useRef } from 'react'
import "../styles/map.css"
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API


const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(47.3769);
  const [lng, setLng] = useState(8.5417);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
      map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
      });
    });

  return (
    <div ref={mapContainer} className="map-container" >
      <div className="sidebar">
        Latitude:{lat} | Longitude:{lng} | Zoom:{zoom}
      </div>
    </div>
  )
}

export default Map
