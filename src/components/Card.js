import React from 'react'
import moment from 'moment'

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
  const event = children.data
  const title = event.title.text
  const date = event.date
  const img = event.poster
  const details = event.details.text
  return (
    <div className="container mb-4">
      <div className="row card-event">
        <div className="col-md-2">
          <div className="img-container">
            <img className="img-thumbnail" src={img.url} alt={img.alt} />
          </div>
        </div>

        <div className="col-md-6">
          <h3 className="mt-4">{title}</h3>
          <p>{details}</p>
          <a href={`/events/${children.uid}`}>Details</a>
        </div>

        <div className="col-md-4">
          <MonthDayDate date={date} />
        </div>
      </div>
    </div>
  )
}

export const MonthDayDate = ({ date }) => {
  return (
    <div className="monthday-date">
      <div className="row">
        <h4 className="">{moment(date).format('MMMM')}</h4>
      </div>
      <div className="row">
        <h2 className="">{moment(date).format('D')}</h2>
      </div>
      <div className="row">
        <h4 className="">{moment(date).format('hA')}</h4>
      </div>
    </div>
  )
}
