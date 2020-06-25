import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import { InternalLink } from "./InternalLink"

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
            <InternalLink
              className="nav-link page-scroll"
              to="/#header"
              location={location}
            >
              Home <span className="sr-only">(current)</span>
            </InternalLink>
          </li>
          <li className="nav-item">
            <InternalLink
              className="nav-link page-scroll"
              to="/#students"
              location={location}
            >
              Who is it for?
            </InternalLink>
          </li>
          <li className="nav-item dropdown">
            <InternalLink
              className="nav-link dropdown-toggle page-scroll"
              to="/#information"
              id="navbarDropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              location={location}
            >
              Details
            </InternalLink>
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
              href=""
              id="navbarDropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sign Up
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item page-scroll" href="members.html">
                <span className="item-text">Member Registration</span>
              </a>
              <div className="dropdown-items-divide-hr"></div>
              <a className="dropdown-item" href="causes.html">
                <span className="item-text">Cause Registration</span>
              </a>
            </div>
          </li>

          <li className="nav-item">
            <InternalLink
              className="nav-link page-scroll"
              to="/index#about"
              location={location}
            >
              About
            </InternalLink>
          </li>
          <li className="nav-item">
            <InternalLink
              className="nav-link page-scroll"
              to="/index#contact"
              location={location}
            >
              Contact
            </InternalLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
