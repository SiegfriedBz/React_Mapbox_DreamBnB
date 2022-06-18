import { Link } from "react-router-dom";

const NavBar = ({setFetchedUserCoordinates}) => {



  return (
    <div className="navbar sticky-top navbar-expand-lg bg-light">
      <div className="d-flex justify-content-between container-fluid px-5">
      <Link
        to="/"
        onClick={() => setFetchedUserCoordinates({lat:"", long:""})}
        className="nav-link active"
        aria-current="page"
      >
        <h2 className='text-dark d-flex'><em><strong>DreamsBnB</strong></em></h2>
      </Link>
        <div className="d-flex">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse d-flex navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link
              to="/"
              onClick={() => setFetchedUserCoordinates({lat:"", long:""})}
              className="nav-link active"
              aria-current="page"
            >Home
            </Link>
            </li>
            <li className="nav-item">
              <Link to="flats" className="nav-link">Flats</Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">About</Link>
            </li>
          </ul>
        </div>

        </div>

      </div>
    </div>
  )
}

export default NavBar
