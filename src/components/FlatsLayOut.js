import { Outlet } from 'react-router-dom';
import MapBox from './MapBox';
import "../styles/backg-image.css"

const FlatsLayOut = ({flats}) => {

  return (
    <div className="backg-image">
      <div className="container my-3">
        <div className="row">
          <div className="col-md-8">
            <Outlet />
          </div>
          <div className="col-md-4">
            {/* <MapBox flats={flats} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlatsLayOut
