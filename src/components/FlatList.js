import React from 'react'
import Flat from './Flat'

const FlatList = ({flats}) => {
  return (
    <div>
      {flats & flats.map(flat => {
      return <Flat flat={flat} />
      })
    }
    </div>
  )
}

export default FlatList
