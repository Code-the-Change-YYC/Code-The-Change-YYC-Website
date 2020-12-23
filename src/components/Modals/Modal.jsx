import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

export default function ContentModal({ id, children, img, cta, isOpen, onRequestClose, ...rest }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick
      className='lightbox-basic'
      overlayClassName='mfp-bg'
      {...rest}>
      <div className='container' id={id}>
        <div className='row'>
          <button
            title='Close (Esc)'
            type='button'
            className='mfp-close x-button'
            onClick={onRequestClose}>
            ×
          </button>
          <div className='col-lg-8'>
            <div className='image-container'>{img}</div>
          </div>
          <div className='col-lg-4'>
            {children}
            {cta}
            <a
              className='btn-outline-reg mfp-close as-button'
              onClick={onRequestClose}
              href='#back'>
              BACK
            </a>
          </div>
        </div>
      </div>
    </Modal>
  )
}

ContentModal.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  img: PropTypes.element.isRequired,
  cta: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
}
