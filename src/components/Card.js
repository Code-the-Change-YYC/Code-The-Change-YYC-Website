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
