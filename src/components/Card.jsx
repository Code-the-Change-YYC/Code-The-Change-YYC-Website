import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import moment from 'moment'
import Img from 'gatsby-image'

export const CardGroup = ({ children }) => (
  <div className='row'>
    <div className='col-lg-12'>{children}</div>
  </div>
)

export const Card = ({ children, href = '/', img }) => (
  <div className='card'>
    <a href={href}>
      {img}
      {children}
    </a>
  </div>
)

Card.propTypes = {
  children: PropTypes.element,
  href: PropTypes.string,
  img: PropTypes.element,
}

export const CardEvent = ({ children }) => {
  const event = children || null
  const title = event.name || 'DEFAULT'
  const date = event.date || '1000-01-01T00:00'
  const img = event.eventPoster || ''
  const details = event.details.details || ''
  return (
    <div className='container mb-4'>
      <div className='row card-event'>
        <div className='col-md-2'>
          <div className='img-container'>
            <img className='img-thumbnail' src={img.file.url} alt={img.title} />
          </div>
        </div>

        <div className='col-md-6'>
          <h3 className='mt-4'>{title}</h3>
          <p>{details}</p>
          <Link to={`/events/${children.slug}`}>Details</Link>
        </div>

        <div className='col-md-4'>
          <MonthDayDate date={date} />
        </div>
      </div>
    </div>
  )
}
CardEvent.propTypes = {
  children: PropTypes.element,
}

export const CardExecMember = ({ admin }) => {
  const fullName = admin.fullName || 'DEFAULT'
  const linkedIn = admin.linkedIn || 'DEFAULT'
  const position = admin.position || 'DEFAULT'
  const img = admin.profilePicture.fluid || ''

  return (
    <div className='team-member'>
      <div className='image-wrapper'>
        <Img className='img-fluid' fluid={img} alt={fullName} />
      </div>
      <p className='p-large'>
        <strong>{fullName}</strong>
      </p>
      <p className='job-title'>{position}</p>
      <span className='social-icons'>
        <span className='fa-stack'>
          <a href={linkedIn}>
            <i className='fas fa-circle fa-stack-2x' />
            <i className='fab fa-linkedin-in fa-stack-1x' />
          </a>
        </span>
      </span>
    </div>
  )
}
CardExecMember.propTypes = {
  admin: PropTypes.shape({
    fullName: PropTypes.string,
    linkedIn: PropTypes.string,
    position: PropTypes.string,
    img: PropTypes.object,
  }),
}

export const MonthDayDate = ({ date }) => (
  <div className='monthday-date'>
    <div className='row'>
      <h4 className=''>{moment(date).format('MMMM')}</h4>
    </div>
    <div className='row'>
      <h2 className=''>{moment(date).format('D')}</h2>
    </div>
    <div className='row'>
      <h4 className=''>{moment(date).format('hA')}</h4>
    </div>
  </div>
)

MonthDayDate.propTypes = {
  date: PropTypes.any,
}
