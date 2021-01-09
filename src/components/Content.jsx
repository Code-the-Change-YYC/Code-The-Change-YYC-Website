import React, { useState } from 'react'
import Collapsible from 'react-collapsible'

const ContentProject = ({ children }) => {
  const project = children.node
  const name = project.name || 'Default'
  const nonprofit = project.nonprofit || 'Default'
  const nonProfitLogo = project.nonprofit_logo || null
  const summary = project.summary || []
  const description = project.description.description || 'Default'
  const developers = project.developers || []
  const leads = project.leads || []
  const finalProd = project.final || ''
  // const mentors = project.mentors || []

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div id={name} className='cards-1'>
      <div className='basic-1 p-0'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='image-container'>
                <img
                  className='card-img'
                  src={nonProfitLogo.file.url}
                  alt={nonProfitLogo.description}
                />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='text-container text-left'>
                <h3 className='mt-3'>{nonprofit}</h3>
                <h4>{name}</h4>
                <ul className=' li-space-lg text-left'>
                  {summary.map(bullet => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <button
                  className={`popup-with-move-anim page-scroll ${
                    isOpen ? 'btn-outline-reg' : 'btn-solid-reg'
                  }`}
                  onClick={() => setIsOpen(!isOpen)}
                  type='button'>
                  Details
                </button>
              </div>
            </div>
            <Collapsible open={isOpen}>
              <hr />
              <div className='row'>
                <div className='col-md-6 '>
                  <div className='m-3'>
                    <p>{description}</p>
                    <h5>
                      <a href={finalProd}>{finalProd}</a>
                    </h5>
                  </div>
                </div>
                <div className='col-md-6 p-3'>
                  <div className='row'>
                    {/* <div className="col-6">
                      <ul className="list-unstyled">
                        <h5>Mentors</h5>
                        {mentors.map((mentor) => {
                          return <li key={mentor}>{mentor}</li>
                        })}
                      </ul>
                    </div> */}
                    <div className='col-12'>
                      <ul className='list-unstyled'>
                        <h5>Developers</h5>
                        {developers.map(dev => (
                          <li key={dev}>{dev}</li>
                        ))}
                      </ul>
                    </div>
                    <div className='col-12'>
                      <ul className='list-unstyled'>
                        <h5>Team Lead</h5>
                        {leads.map(dev => (
                          <li key={dev}>{dev}</li>
                        ))}
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

export default ContentProject
