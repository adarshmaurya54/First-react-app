import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
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
            <form className="d-flex">
              <input className="form-control shadow-none me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success shadow-none" type="submit">Search</button>
            </form>
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
  about: {link: "https://www.google.com", text: "About"}
}