import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/cards.css"

const Flat = ({flat}) => {

  return (
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
      <Link to={`${flat.id}`} className='btn btn-primary btn-sm my-1 w-25'>More</Link>
    </div>
  )
}

export default Flat
