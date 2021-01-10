import React, { useEffect } from 'react'

export default function causes() {
  useEffect(() => {
    window.location.replace('')
  }, [])

  return (
    <>
      <header id='header' className='ex-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>Cause Registration</h1>
            </div>
            <span>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSfOSVxP6L0dCUVeyWX1yI-jp1pYesaSpqz2-7i8z_JaiRu4YA/viewform?usp=sf_link'>
                Cause Project Submission Form
              </a>
            </span>
          </div>
        </div>
      </header>
    </>
  )
}
