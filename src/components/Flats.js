import { Outlet } from 'react-router-dom';
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
            <div className="d-flex justify-content-center">
              <input
                id="address"
                type="text"
                className='form-control text-center w-25'
                placeholder='Enter a location'
                value={userInput.address}
                onChange={(e) => setUserInput({...userInput, [e.target.id]: e.target.value})}
                />
            </div>

            <div className="d-flex">
              <div className="bg-white d-flex justify-content-around align-items-center form-control w-50">
                <p style={{margin: 0}}>Travel mode:</p>
              <div className="d-flex ms-2">
                <input className="form-check-input" type="radio" name="profile" id="walking"
                  onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.id})}
                  />
                <label className="form-check-label mx-1" htmlFor="walking">
                  Walking
                </label>
              </div>
              <div className="d-flex">
                <input className="form-check-input" type="radio" name="profile" id="cycling"
                  onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.id})}
                />
                <label className="form-check-label mx-1" htmlFor="cycling">
                  Cycling
                </label>
              </div>
              <div className="d-flex">
                <input className="form-check-input" type="radio" name="profile" id="driving"
                  onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.id})}
                />
                <label className="form-check-label mx-1" htmlFor="driving">
                  Driving
                </label>
              </div>
            </div>

            <div className="bg-white d-flex justify-content-around align-items-center form-control w-50">
              <p style={{margin: 0}}>Maximum duration:</p>
              <div className="d-flex ms-2">
                <input className="form-check-input" type="radio" name="duration" id="10"
                  onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.id})}
                  />
                <label className="form-check-label mx-1" htmlFor="10">
                  10min
                </label>
              </div>
              <div className="d-flex">
                <input className="form-check-input" type="radio" name="duration" id="20"
                  onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.id})}
                />
                <label className="form-check-label mx-1" htmlFor="20">
                  20min
                </label>
              </div>
              <div className="d-flex">
                <input className="form-check-input" type="radio" name="duration" id="30"
                  onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.id})}
                />
                <label className="form-check-label mx-1" htmlFor="30">
                  30min
                </label>
              </div>
              <div className="d-flex">
                  <input className="form-check-input" type="radio" name="duration" id="60"
                    onChange={(e) => setUserInput({...userInput, [e.target.name]: e.target.id})}
                  />
                  <label className="form-check-label mx-1" htmlFor="60">
                    60min
                  </label>
              </div>
            </div>
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className='btn btn-primary fw-bold my-1 w-25'>Search</button>
            </div>
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
