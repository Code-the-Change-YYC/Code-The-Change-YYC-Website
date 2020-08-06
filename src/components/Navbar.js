import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

export default function Navbar({ location }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <AnchorLink className="navbar-brand logo-image" to="/#header">
        <img src="/images/_logo.png" alt="alternative" />
      </AnchorLink>
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
            <AnchorLink
              className="nav-link page-scroll"
              to="/#header"
              location={location}
            >
              Home
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              className="nav-link page-scroll"
              to="/#students"
              location={location}
            >
              Who is it for?
            </AnchorLink>
          </li>
          <li className="nav-item dropdown">
            <AnchorLink
              className="nav-link dropdown-toggle page-scroll"
              to="/#information"
              id="navbarDropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              location={location}
            >
              Details
            </AnchorLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/events">
                <span className="item-text">Events</span>
              </Link>
              <div className="dropdown-items-divide-hr"></div>
              <Link className="dropdown-item" to="/projects">
                <span className="item-text">Projects</span>
              </Link>
              <div className="dropdown-items-divide-hr"></div>
              <Link className="dropdown-item" to="/sponsors">
                <span className="item-text">Sponsors</span>
              </Link>
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
              <Link
                className="dropdown-item page-scroll"
                to="/memberRegistration"
              >
                <span className="item-text">Member Registration</span>
              </Link>
              <div className="dropdown-items-divide-hr"></div>
              <Link className="dropdown-item" to="/causeRegistration">
                <span className="item-text">Cause Registration</span>
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <AnchorLink
              className="nav-link page-scroll"
              to="/#about"
              location={location}
            >
              About
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink
              className="nav-link page-scroll"
              to="/#contact"
              location={location}
            >
              Contact
            </AnchorLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
