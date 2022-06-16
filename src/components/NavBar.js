import React, { useState } from 'react'

const NavBar = ({search}) => {

  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    search(userInput)
    setUserInput('')
  }

  return (
      <nav className="navbar sticky-top navbar-expand-lg bg-light">
        <div className="container-fluid px-5">
          <h1 className='text-dark'><em><strong>AirBnb</strong></em></h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
              <button className="btn btn-dark" type="submit"><h4>Search</h4></button>
            </form>
          </div>
        </div>
      </nav>
  )
}

export default NavBar
