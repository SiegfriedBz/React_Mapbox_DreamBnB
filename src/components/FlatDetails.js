import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const FlatDetails = ({flats, selectedFlat, setSelectedFlat}) => {
  const params = useParams()

  useEffect(() => {
    if(params.id) {
    const flat = flats.find(flat => flat.id === params.id)
    setSelectedFlat (flat)
    }
  })

  if(typeof selectedFlat === 'undefined') return null

  return (
    <div className="container my-3">
      <div className="row">
          <div className="col-md-12">
            <div className="card card-category">
              <img src={selectedFlat.imgURL} className="card-img-top p-1 rounded-4" alt="..."/>
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-center">
                  <div className="fs-6">{selectedFlat.address}</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="fs-6 fw-normal">{selectedFlat.description}</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="fs-6 fw-normal">{selectedFlat.price} CHF/day</div>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary my-1 w-50">Book</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FlatDetails
