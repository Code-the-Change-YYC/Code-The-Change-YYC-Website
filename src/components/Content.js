import React from "react"
import Modal from "react-modal"

export const ContentCenter = ({ id, children, cta, className }) => {
  return (
    <div id={id} className={`cards-1 ${className ? className : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {children}
            {cta}
          </div>
        </div>
      </div>
    </div>
  )
}

export const ContentLeft = ({ id, children, img, cta, className }) => {
  return (
    <div id={id} className={`cards-1 ${className ? className : ""}`}>
      <div className="basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                {children}
                {cta}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container">{img}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ContentRight = ({ id, children, img, cta, className }) => {
  return (
    <div id={id} className={`cards-1 ${className ? className : ""}`}>
      <div className="basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-container">{img}</div>
            </div>
            <div className="col-lg-6">
              <div className="text-container">
                {children}
                {cta}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ContentModal = ({
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
      <div className="container" id={id}>
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
              href="#back"
            >
              BACK
            </a>
          </div>
        </div>
      </div>
    </Modal>
  )
}
