import React from 'react'
import FlatCard from './FlatCard'
import "../styles/cards.css"

const FlatsList = ({ flats }) => {
  return (
    <div className="cards">
        {flats.map(flat => {
        return <FlatCard key={flat.id} flat={flat} />
        })
      }
    </div>
  )
}

export default FlatsList
