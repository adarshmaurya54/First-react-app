import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  // function that show dark color as user's selection of color
  const handleDarkColor = (e) => {
    props.changDarkColor(e.target.value);
  }
  return (
    <>
      <nav className={`navbar sticky-top shadow navbar-expand-lg navbar-${props.mode.classname}`} style={{ backgroundColor: props.mode.colorCode }}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" style={{ letterSpacing: "2px" }} to="/">{props.title}</Link>
          <button className="shadow-none navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={props.about.link}>{props.about.text}</Link>
              </li>
            </ul>
            <div className="fs-4 my-2 justify-content-lg-end swithcbtn gap-3 w-50">
              <label onClick={props.toggleDarkmode} className={`order-lg-4 form-check-label`}>{(props.mode.classname === "dark") ? <i className="bi bi-brightness-low-fill text-light fs-3"></i> : <i className=" fs-4 text-dark bi bi-moon-stars-fill"></i>}</label>
              <input type="color" onChange={handleDarkColor} className={`shadow-none d-${(props.mode.classname === "dark") ? "inline-block" : "none"} order-lg-2 form-control form-control-color`} title="Choose your color" />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}


// This specifies the type of data that a property can accept.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.object.isRequired
}

//This provides default values to the props
Navbar.defaultProps = {
  title: "TextUtil",
  about: { link: "https://www.google.com", text: "About" }
}