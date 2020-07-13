import React from "react"
import moment from "moment"

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
    <div className="container mb-4">
      <div className="row card-event">
        <div className="col-md-2">
          <div className="img-container">
            {children.frontmatter.img ? (
              <img
                className="img-thumbnail"
                src={children.frontmatter.img}
                alt=""
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="col-md-6">
          <h3 className="mt-4">{children.frontmatter.title}</h3>
          <p>{children.excerpt}</p>
          <a className="" href={children.fields.slug}>
            Details
          </a>
        </div>
        <div className="col-md-4">
          <MonthDayDate date={children.frontmatter.date} />
        </div>
      </div>
    </div>
  )
}

export const MonthDayDate = ({ date }) => {
  const eventDate = new Date(date)
  return (
    <div className="monthday-date">
      <div className="row">
        <h4 className="">{moment(eventDate).format("MMMM")}</h4>
      </div>
      <div className="row">
        <h2 className="">{moment(eventDate).format("D")}</h2>
      </div>
      <div className="row">
        <h4 className="">{moment(eventDate).format("hA")}</h4>
      </div>
    </div>
  )
}
