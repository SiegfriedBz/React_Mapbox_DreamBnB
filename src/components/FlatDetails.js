import React from 'react'
import MapBox from './MapBox'
import { useParams } from 'react-router-dom'

const FlatDetails = ({flats}) => {
  const params = useParams()

  const flat = flats.find(flat => flat.id === params.id)

  return (
    <div className="backg-image">
      <div className="container my-3">

        <div className="row">

          <div className="col-md-8">
            <div className="card card-category">
              <img src={flat.imgURL} className="card-img-top p-1 rounded-4" alt="..."/>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-center">
                    <div className="fs-6">{flat.address}</div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="fs-6 fw-normal">{flat.price} CHF/day</div>
                  </div>
                </div>
            </div>

          </div>

          <div className="col-md-4">
            <MapBox flats={flats}/>
          </div>

        </div>

      </div>
    </div>
  )
}

export default FlatDetails
