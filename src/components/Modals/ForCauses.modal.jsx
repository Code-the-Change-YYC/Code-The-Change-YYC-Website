import React from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal'

export default function CausesModal({ show, onHide, ...rest }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      img={<img className='img-fluid' src='images/_causesVector.jpg' alt='alternative' />}
      cta={
        <a className='btn-solid-reg mfp-close page-scroll' href=''>
          REGISTER
        </a>
      }
      {...rest}>
      <h3>Cause Information</h3>
      <hr />
      <h5>How will this work?</h5>
      <p>Project selection will be based on participating student group capacity, and skillset.</p>
      <p>
        Student groups will assign a member of their team to communicate with the cause over the
        course of the year. Your committment level will depend on the project. There is going to be
        ample oppotunities for regular check-ins with the team to provide feedback, guidance, and
        ensure they have all requirements and specifications to do their work.
      </p>
      <ul className='list-unstyled li-space-lg'>
        <li className='media'>
          <i className='fas fa-check' />
          <div className='media-body'>Get fresh perspectives</div>
        </li>
        <li className='media'>
          <i className='fas fa-check' />
          <div className='media-body'>Mentor young minds</div>
        </li>
        <li className='media'>
          <i className='fas fa-check' />
          <div className='media-body'>Outsource technical work</div>
        </li>
        <li className='media'>
          <i className='fas fa-check' />
          <div className='media-body'>Build a thorough technical solution</div>
        </li>
      </ul>
    </Modal>
  )
}

CausesModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
}
