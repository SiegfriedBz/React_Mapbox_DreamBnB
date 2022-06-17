import React, { useState } from 'react'
import { Link } from "react-router-dom";

const NavBar = ({search}) => {

  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    search(userInput)
    setUserInput('')
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
              onChange={(e) => setUserInput(e.target.value)}
              className="form-control me-2"
              type="text"
              value={userInput}
              placeholder="Search"
              aria-label="Search"
              />
            <button className="btn btn-dark" type="submit"><h6>Search</h6></button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default NavBar
