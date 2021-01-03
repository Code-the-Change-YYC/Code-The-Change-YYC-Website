import React from 'react'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default function ContentModal({ children, img, cta, show, onHide, ...rest }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName='lightbox-basic'
      backdropClassName='mfp-bg'
      {...rest}>
      <Modal.Header>
        <button title='Close (Esc)' type='button' className='mfp-close x-button' onClick={onHide}>
          ×
        </button>
      </Modal.Header>
      <Modal.Body>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='image-container'>{img}</div>
            </div>
            <div className='col-lg-4'>
              {children}
              {cta}
              <a className='btn-outline-reg mfp-close as-button' onClick={onHide} href='#back'>
                BACK
              </a>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

ContentModal.propTypes = {
  children: PropTypes.element.isRequired,
  img: PropTypes.element.isRequired,
  cta: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
}
