import React from 'react'
import {Link} from 'react-router-dom';
interface props {
    heading: string;
}
export default function NavBar(props:props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="Navbar.tsx">{props.heading}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active"  to="/" >Home</Link>
              <Link className="nav-link" to="/aboutus" >About Us</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}


