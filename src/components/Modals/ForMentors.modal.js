import { useState } from 'react'

export default function StudentsModal() {
  return (
    <ContentModal
      isOpen={mentorModalOpen}
      onRequestClose={e => {
        setMentorModalOpen(!mentorModalOpen)
      }}
      img={<img className='img-fluid' src='images/_mentors.jpg' alt='alternative' />}
      cta={
        <a className='btn-solid-reg mfp-close page-scroll' href='/events'>
          EVENTS
        </a>
      }>
      <h3>Mentor Information</h3>
      <hr />
      <h5>Why become a mentor?</h5>
      <p>
        Your ability to bring real world experience will allow the students' to apply their
        learnings, and ensure what they are practicing is relevant for the current job market.
      </p>
      <p>
        Once you have selected the team you would like to mentor, the team will set aside at least
        one hour a week for working session meetings. Please communicate with the team as to its
        frequency, when and where the meeting would take place.
      </p>
      <ul className='list-unstyled li-space-lg'>
        <li className='media'>
          <i className='fas fa-check'></i>
          <div className='media-body'>Give back to the community</div>
        </li>
        <li className='media'>
          <i className='fas fa-check'></i>
          <div className='media-body'>Take someone under your wings</div>
        </li>
        <li className='media'>
          <i className='fas fa-check'></i>
          <div className='media-body'>Help resource constrained causes</div>
        </li>
        <li className='media'>
          <i className='fas fa-check'></i>
          <div className='media-body'>Make a difference</div>
        </li>
        <li className='media'>
          <i className='fas fa-check'></i>
          <div className='media-body'>Grow your network</div>
        </li>
        <li className='media'>
          <i className='fas fa-check'></i>
          <div className='media-body'>Earn volunteer hours</div>
        </li>
      </ul>
    </ContentModal>
  )
}
