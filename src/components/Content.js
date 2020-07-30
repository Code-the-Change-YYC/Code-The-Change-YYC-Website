import React, { useState } from 'react'
import Modal from 'react-modal'
import Collapsible from 'react-collapsible'

export const ContentCenter = ({ id, children, cta, className }) => {
  return (
    <div id={id} className={`cards-1 ${className ? className : ''}`}>
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
    <div id={id} className={`cards-1 ${className ? className : ''}`}>
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
    <div id={id} className={`cards-1 ${className ? className : ''}`}>
      <div className="basic-1">
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

export const ContentProject = ({ children }) => {
  const project = children.node
  const name = project.name || 'Default'
  const nonprofit = project.nonprofit || 'Default'
  const nonprofit_logo = project.nonprofit_logo || null
  const summary = project.summary || []
  const description = project.description.description || 'Default'
  const developers = project.developers || []
  const mentors = project.mentors || []
  const leads = project.leads || []
  const final_prod = project.final || ''

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div id={name} className="cards-1">
      <div className="basic-1 p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-container">
                <img
                  className="card-img"
                  src={nonprofit_logo.file.url}
                  alt={nonprofit_logo.description}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-container text-left">
                <h3 className="mt-3">{nonprofit}</h3>
                <h4>{name}</h4>
                <ul className=" li-space-lg text-left">
                  {summary.map((bullet) => {
                    return <li key={bullet}>{bullet}</li>
                  })}
                </ul>
                <button
                  className={`popup-with-move-anim page-scroll ${
                    isOpen ? 'btn-outline-reg' : 'btn-solid-reg'
                  }`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Details
                </button>
              </div>
            </div>
            <Collapsible open={isOpen}>
              <hr />
              <div className="row">
                <div className="col-md-6 ">
                  <div className="m-3">
                    <p>{description}</p>
                    <h5>
                      <a href={final_prod}>{final_prod}</a>
                    </h5>
                  </div>
                </div>
                <div className="col-md-6 p-3">
                  <div className="row">
                    {/* <div className="col-6">
                      <ul className="list-unstyled">
                        <h5>Mentors</h5>
                        {mentors.map((mentor) => {
                          return <li key={mentor}>{mentor}</li>
                        })}
                      </ul>
                    </div> */}
                    <div className="col-12">
                      <ul className="list-unstyled">
                        <h5>Developers</h5>
                        {developers.map((dev) => {
                          return <li key={dev}>{dev}</li>
                        })}
                      </ul>
                    </div>
                    <div className="col-12">
                      <ul className="list-unstyled">
                        <h5>Team Lead</h5>
                        {leads.map((dev) => {
                          return <li key={dev}>{dev}</li>
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </Collapsible>
          </div>
        </div>
      </div>
    </div>
  )
}
