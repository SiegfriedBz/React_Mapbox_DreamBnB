import React from 'react'
import "../styles/cards.css"

const Flat = ({flat}) => {

  return (
    <div className="card">
      <img src={flat.imgURL} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h6 className="card-text">
        {flat.address}
        </h6>
        <p className="card-text">
        CHF {flat.price}
        </p>
      </div>
    </div>
  )
}

export default Flat
