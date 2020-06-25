import React from "react"
import Modal from "react-modal"

export const CustomModal = ({
  id,
  children,
  img,
  cta,
  isOpen,
  onRequestClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      className="lightbox-basic"
      overlayClassName="mfp-bg"
    >
      <div className="container">
        <div className="row">
          <button
            title="Close (Esc)"
            type="button"
            className="mfp-close x-button"
            onClick={onRequestClose}
          >
            ×
          </button>
          <div className="col-lg-8">
            <div className="image-container">{img}</div>
          </div>
          <div className="col-lg-4">
            {children}
            {cta}
            <a
              className="btn-outline-reg mfp-close as-button"
              onClick={onRequestClose}
            >
              BACK
            </a>
          </div>
        </div>
      </div>
    </Modal>
  )
}
