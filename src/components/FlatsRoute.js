import React from 'react'
import FlatList from './FlatList';
import MapBox from './MapBox';
import "../styles/backg-image.css"

const FlatsRoute = ({flats}) => {
  return (
    <div className="backg-image">
      <div className="container my-3">
        <div className="row">
          <div className="col-md-8">
            <FlatList flats={flats}/>
          </div>
          <div className="col-md-4">
            <MapBox flats={flats} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlatsRoute
