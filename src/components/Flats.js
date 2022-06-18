import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FlatsList from './FlatsList';
import MapBox from './MapBox';
import "../styles/backg-image.css"

const Flats = ({
  flats,
  selectedFlat,
  userInput,
  setUserInput,
  handleIsochroneSearch,
  fetchedUserCoordinates,
  fetchedGeoJson
}) => {

  return (
    <div className="backg-image">
      <div className="container my-3">

        <form onSubmit={handleIsochroneSearch} className="my-3">

          <div className="d-flex flex-column align-item-center">
            <input
              id="address"
              type="text"
              className='form-control w-50'
              placeholder='Enter a location'
              value={userInput.address}
              onChange={(e) => setUserInput({...userInput, [e.target.id]: e.target.value})}
              />

            <div className="bg-white d-flex form-control w-50">
              <h6>Choose a travel mode:</h6>
              <div className="d-flex ms-2">
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

            <div className="bg-white d-flex form-control w-50">
              <h6>Choose a maximum duration: </h6>
              <div className="d-flex ms-2">
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

            <button type="submit" className='btn btn-primary fw-bold my-1 w-50'>Search</button>
          </div>
        </form>

        <div className="row">
          <div className="col-md-8">
            <FlatsList flats={flats} />
          </div>
          <div className="col-md-4">
            <MapBox
              flats={flats}
              selectedFlat={selectedFlat}
              fetchedUserCoordinates={fetchedUserCoordinates}
              fetchedGeoJson={fetchedGeoJson}
              />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Flats
