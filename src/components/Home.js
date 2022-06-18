import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import Typed from 'react-typed';
import "../styles/backg-image.css"

const Home = ({handleIsochroneSearch, userInput, setUserInput, fetchedUserCoordinates}) => {


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

            <form onSubmit={handleIsochroneSearch} >
              <div className="d-flex flex-column justify-content-start">
                <input
                  id="address"
                  type="text"
                  className='form-control w-25 text-center'
                  placeholder='Enter a location'
                  value={userInput.address}
                  onChange={(e) => setUserInput({...userInput, [e.target.id]: e.target.value})}
                  />

                <div className="bg-white d-flex flex-column form-control w-25">
                <h6 className='text-center'>Choose a travel mode</h6>
                  <div className="d-flex">
                    <input className="form-check-input" type="radio" name="profile" id="walking"
                      onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.id})}
                      />
                    <label className="form-check-label mx-2" htmlFor="walking">
                      Walking
                    </label>
                  </div>
                  <div className="d-flex">
                    <input className="form-check-input" type="radio" name="profile" id="cycling"
                      onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.id})}
                    />
                    <label className="form-check-label mx-2" htmlFor="cycling">
                      Cycling
                    </label>
                  </div>
                  <div className="d-flex">
                    <input className="form-check-input" type="radio" name="profile" id="driving"
                      onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.id})}
                    />
                    <label className="form-check-label mx-2" htmlFor="driving">
                      Driving
                    </label>
                  </div>
                </div>

                <div className="bg-white d-flex flex-column form-control w-25">
                <h6 className='text-center'>Choose a maximum duration</h6>
                  <div className="d-flex">
                    <input className="form-check-input" type="radio" name="duration" id="10"
                      onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.id})}
                      />
                    <label className="form-check-label mx-2" htmlFor="10">
                      10min
                    </label>
                  </div>
                  <div className="d-flex">
                    <input className="form-check-input" type="radio" name="duration" id="20"
                      onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.id})}
                    />
                    <label className="form-check-label mx-2" htmlFor="20">
                      20min
                    </label>
                  </div>
                  <div className="d-flex">
                    <input className="form-check-input" type="radio" name="duration" id="30"
                      onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.id})}
                    />
                    <label className="form-check-label mx-2" htmlFor="30">
                      30min
                    </label>
                  </div>
                </div>

                <button type="submit" className='btn btn-primary fw-bold my-1 w-25'>Search</button>
              </div>
            </form>
            {fetchedUserCoordinates &&
            <Navigate
              to='/flats'
              state= { fetchedUserCoordinates }/>
            }
        </div>
      </div>
    </div>
  )
}

export default Home
