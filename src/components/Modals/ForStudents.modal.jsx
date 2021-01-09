import React from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal'

export default function StudentsModal({ show, onHide, ...rest }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      img={<img className='img-fluid' src='images/_rockets.jpg' alt='alternative' />}
      cta={
        <a className='btn-solid-reg mfp-close page-scroll' href='/projects'>
          PROJECTS
        </a>
      }
      {...rest}>
      <h3>Student Information</h3>
      <hr />
      <h5>What&apos;s in it for you?</h5>
      <p>
        You will be a part of a small team of programming students and will work together on
        projects to help charities and non-profits who don’t have the means to otherwise access
        expert technical services.
      </p>
      <p>
        You will also receive mentorship from senior programmers and technical leaders from around
        Calgary to expand your skillset and gain experience applying what you’ve learned in school
        to solve real-life problems.
      </p>
      <ul className='list-unstyled li-space-lg'>
        <li className='media'>
          <i className='fas fa-check' />
          <div className='media-body'>Network with likeminded individuals</div>
        </li>
        <li className='media'>
          <i className='fas fa-check' />
          <div className='media-body'>Work on real world problems</div>
        </li>
        <li className='media'>
          <i className='fas fa-check' />
          <div className='media-body'>Get some real world experience</div>
        </li>
        <li className='media'>
          <i className='fas fa-check' />
          <div className='media-body'>Work with industry mentors</div>
        </li>
        <li className='media'>
          <i className='fas fa-check' />
          <div className='media-body'>Use the power of technology for good</div>
        </li>
      </ul>
    </Modal>
  )
}

StudentsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
}
