import React from 'react'
import { Link } from 'gatsby'

export default function Navbar({ location }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <Link className="navbar-brand logo-image" to="/#header">
        <img src="/images/_logo.png" alt="alternative" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-awesome fas fa-bars"></span>
        <span className="navbar-toggler-awesome fas fa-times"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link page-scroll" to="/" location={location}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link page-scroll"
              to="/#students"
              location={location}
            >
              Who is it for?
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle page-scroll"
              to="/#information"
              id="navbarDropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              location={location}
            >
              Details
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/events">
                <span className="item-text">Events</span>
              </a>
              <div className="dropdown-items-divide-hr"></div>
              <a className="dropdown-item" href="/projects">
                <span className="item-text">Projects</span>
              </a>
              <div className="dropdown-items-divide-hr"></div>
              <a className="dropdown-item" href="/sponsors">
                <span className="item-text">Sponsors</span>
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle page-scroll"
              href="#signup"
              id="navbarDropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sign Up
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                className="dropdown-item page-scroll"
                href="/memberRegistration"
              >
                <span className="item-text">Member Registration</span>
              </a>
              <div className="dropdown-items-divide-hr"></div>
              <a className="dropdown-item" href="/causeRegistration">
                <span className="item-text">Cause Registration</span>
              </a>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link page-scroll"
              to="/index#about"
              location={location}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link page-scroll"
              to="/index#contact"
              location={location}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
