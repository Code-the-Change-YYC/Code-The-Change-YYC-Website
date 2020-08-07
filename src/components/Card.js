import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'

export const CardGroup = ({ children }) => {
  return (
    <div className="row">
      <div className="col-lg-12">{children}</div>
    </div>
  )
}

export const Card = ({ children, href, img }) => {
  const redirect = href || '/'
  return (
    <div className="card">
      <a className="page-scroll" href={redirect}>
        {img}
        {children}
      </a>
    </div>
  )
}

export const CardEvent = ({ children }) => {
  const event = children || null
  const title = event.name || 'DEFAULT'
  const date = event.date || '1000-01-01T00:00'
  const img = event.eventPoster || ''
  const details = event.details.details || ''
  return (
    <div className="container mb-4">
      <div className="row card-event">
        <div className="col-md-2">
          <div className="img-container">
            <img className="img-thumbnail" src={img.file.url} alt={img.title} />
          </div>
        </div>

        <div className="col-md-6">
          <h3 className="mt-4">{title}</h3>
          <p>{details}</p>
          <Link to={`/events/${children.slug}`}>Details</Link>
        </div>

        <div className="col-md-4">
          <MonthDayDate date={date} />
        </div>
      </div>
    </div>
  )
}

export const CardExecMember = ({ admin }) => {
  const fullName = admin.fullName || 'DEFAULT'
  const linkedIn = admin.linkedIn || 'DEFAULT'
  const position = admin.position || 'DEFAULT'
  const img = admin.profilePicture.file.url || ''

  return (
    <div className="team-member">
      <div className="image-wrapper">
        <img className="img-fluid" src={img} alt={fullName} />
      </div>
      <p className="p-large">
        <strong>{fullName}</strong>
      </p>
      <p className="job-title">{position}</p>
      <span className="social-icons">
        <span className="fa-stack">
          <a href={linkedIn}>
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-linkedin-in fa-stack-1x"></i>
          </a>
        </span>
      </span>
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
