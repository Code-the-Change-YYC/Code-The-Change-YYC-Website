import React from "react"

export const CardGroup = ({ children }) => {
  return (
    <div className="row">
      <div className="col-lg-12">{children}</div>
    </div>
  )
}

export const Card = ({ children, href, src, alt }) => {
  return (
    <div className="card">
      <a className="page-scroll" href={href}>
        <img className="card-image" src={src} alt={alt} />
        {children}
      </a>
    </div>
  )
}

export const CardEvent = ({ children }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-6">
          <h3>Event Title</h3>
          <p>Excerpt</p>
        </div>
        <div className="col-lg-4">
          <h3>date</h3>
        </div>
      </div>
    </div>
  )
}
