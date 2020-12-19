import Modal from './Modal'

export default function StudentsModal() {
    return (
        <Modal
        isOpen={causeModalOpen}
        onRequestClose={e => {
          setCauseModalOpen(!causeModalOpen)
        }}
        img={<img className='img-fluid' src='images/_causesVector.jpg' alt='alternative' />}
        cta={
          <a className='btn-solid-reg mfp-close page-scroll' href='/causes'>
            REGISTER
          </a>
        }>
        <h3>Cause Information</h3>
        <hr />
        <h5>How will this work?</h5>
        <p>
          Project selection will be based on participating student group capacity, and skillset.
        </p>
        <p>
          Student groups will assign a member of their team to communicate with the cause over the
          course of the year. Your committment level will depend on the project. There is going to
          be ample oppotunities for regular check-ins with the team to provide feedback, guidance,
          and ensure they have all requirements and specifications to do their work.
        </p>
        <ul className='list-unstyled li-space-lg'>
          <li className='media'>
            <i className='fas fa-check'></i>
            <div className='media-body'>Get fresh perspectives</div>
          </li>
          <li className='media'>
            <i className='fas fa-check'></i>
            <div className='media-body'>Mentor young minds</div>
          </li>
          <li className='media'>
            <i className='fas fa-check'></i>
            <div className='media-body'>Outsource technical work</div>
          </li>
          <li className='media'>
            <i className='fas fa-check'></i>
            <div className='media-body'>Build a thorough technical solution</div>
          </li>
        </ul>
      </Modal>
    )
}