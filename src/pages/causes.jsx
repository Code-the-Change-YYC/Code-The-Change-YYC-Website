import React, { useEffect } from 'react'

export default function causes() {
  useEffect(() => {
    window.location.replace(
      'https://docs.google.com/forms/d/1IaQkxGmZ3KJfYunL0Bmtj6pzr-UDhrhBF5wBM6_YTC0'
    )
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
              <a href='https://docs.google.com/forms/d/1IaQkxGmZ3KJfYunL0Bmtj6pzr-UDhrhBF5wBM6_YTC0'>
                Cause Project Submission Form
              </a>
            </span>
          </div>
        </div>
      </header>
    </>
  )
}
