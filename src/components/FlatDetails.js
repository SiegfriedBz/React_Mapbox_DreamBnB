import React from 'react'
import MapBox from './MapBox'
import { useParams } from 'react-router-dom'

const FlatDetails = ({flats}) => {
  const params = useParams()
  console.log("params", params)
  console.log(flats)
  return (
    <div className="backg-image">
      <div className="container my-3">
        <div className="row">
          <div className="col-md-8">
    <h1>{params.id}</h1>
          </div>
          <div className="col-md-4">
            {/* <MapBox flats={flats} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlatDetails
