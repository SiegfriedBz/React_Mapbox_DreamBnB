import React from 'react'
import { useParams } from 'react-router-dom'

const FlatDetails = ({flats}) => {
  const params = useParams()
  console.log("params", params)
  console.log(flats)
  return (
    <h1>{params.id}</h1>
  )
}

export default FlatDetails
