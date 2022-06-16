import React from 'react'
import "../styles/cards.css"

const Flat = ({flat, selectedFlat}) => {

  return (
    <div className="card card-category ">
      <img src={flat.imgURL} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h6 className="card-text">
        {flat.address}
        </h6>
        <p className="card-text">
        CHF {flat.price}
        </p>
      </div>
      <button className='btn btn-primary btn-sm'>Visit</button>
    </div>
  )
}

export default Flat
