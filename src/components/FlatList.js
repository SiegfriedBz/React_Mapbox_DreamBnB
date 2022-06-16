import React from 'react'
import Flat from './Flat'
import "../styles/cards.css"

const FlatList = ({ flats }) => {
  return (
    <div className="cards">
        {flats.map(flat => {
        return <Flat key={flat.id} flat={flat} />
        })
      }
    </div>
  )
}

export default FlatList
