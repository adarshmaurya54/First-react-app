import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar shadow navbar-expand-lg navbar-${props.mode.classname}`} style={{ backgroundColor: props.mode.colorCode}}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" style={{ letterSpacing: "2px" }} href="/">{props.title}</a>
          <button className="shadow-none navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={props.about.link}>{props.about.text}</a>
              </li>
            </ul>
            <div className="fs-4 my-2 form-check form-switch swithcbtn">
              <input onClick={props.toggleDarkmode} className="form-check-input shadow-none" type="checkbox" />
              <label className="form-check-label">{(props.mode.classname === "dark") ? <i className="bi bi-brightness-low-fill text-light fs-3"></i>: <i className=" fs-4 text-dark bi bi-moon-stars-fill"></i>}</label>
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