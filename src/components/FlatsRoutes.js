import React from 'react'
import { Outlet } from 'react-router-dom'
import FlatDetails from './FlatDetails'
import MapBox from './MapBox';
import "../styles/backg-image.css"


const FlatsRoutes = ({flats, children}) => {

  return (
    <div className="backg-image">
      <div className="container my-3">
        <div className="row">
          <div className="col-md-8">
            {children}
          </div>
          <div className="col-md-4">
            <MapBox flats={flats} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlatsRoutes
