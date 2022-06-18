import React, { useState } from 'react'
import { Navigate, Link } from "react-router-dom";

const MAPBOX_TOKEN =  process.env.REACT_APP_MAPBOX_API;

const NavBar = ({search}) => {

  const [userLocationInput, setUserLocationInput] = useState("");
  const [userLocationCoordinates, setUserLocationCoordinates] = useState({lat:"", long:""});

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const resp = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${userLocationInput}.json?access_token=${MAPBOX_TOKEN}`);
      const data = await resp.json();
      const [ long, lat ] = data.features[0].center;
      setUserLocationCoordinates({lat: lat, long: long});
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="navbar sticky-top navbar-expand-lg bg-light">
      <div className="d-flex justify-content-between container-fluid px-5">
        <h2 className='text-dark d-flex'><em><strong>DreamsBnB</strong></em></h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="flats" className="nav-link">Flats</Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">About</Link>
            </li>
          </ul>

          <form
            onSubmit={handleSubmit}
            className="d-flex"
            >
            <input
              className="form-control me-2"
              type="text"
              value={userLocationInput}
              onChange={(e) => setUserLocationInput(e.target.value)}
              placeholder="Search"
              aria-label="Search"
              />
            <button className="btn btn-dark" type="submit"><h6>Search</h6></button>
          </form>
          {userLocationCoordinates.lat && userLocationCoordinates.long &&
            <Navigate
              to='/flats'
              state= { userLocationCoordinates }/>
          }

        </div>
      </div>
    </div>
  )
}

export default NavBar
