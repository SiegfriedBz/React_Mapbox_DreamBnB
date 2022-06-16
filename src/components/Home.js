import React, { useState } from 'react'
import "../styles/backg-image.css"
import Typed from 'react-typed';

const Home = () => {

  return (
    <div className="backg-image" style={{height: "80vh"}}>

      <div className="container">

        <div className="d-flex flex-column justify-content-between" style={{height: "480px"}}>

          <h1 className='fs-1 fw-bolder text-white'>Welcome to your Dreams</h1>

          <div className="d-flex flex-row justify-content-end">
            <Typed
              className='fs-3 fw-bolder text-white'
              strings={['Discover dream Homes', 'Find unique experience', 'Book unique stays']}
              typeSpeed={40}
            />
          </div>

            <form>
              <div className="d-flex flex-column justify-content-start">
                <input
                  type="text"
                  className='form-control w-25'
                  placeholder='Search destination'
                  />
                <button type="submit" className='btn btn-primary fw-bold my-1 w-25'>Search</button>
              </div>
            </form>

        </div>
      </div>
    </div>
  )
}

export default Home
