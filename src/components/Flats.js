import FlatsList from './FlatsList';
import MapBox from './MapBox';
import { Outlet } from 'react-router-dom';
import "../styles/backg-image.css"

const Flats = ({flats}) => {

  return (
    <div className="backg-image">
      <div className="container my-3">
        <div className="row">
          <div className="col-md-8">
            <FlatsList flats={flats} />
          </div>
          <div className="col-md-4">
            <MapBox flats={flats} />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Flats
