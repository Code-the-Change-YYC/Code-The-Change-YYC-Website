import React, { useState } from 'react'
import axios from 'axios'

export default function causes() {
  const [values, setValues] = useState({
    orgName: '',
    fullAddr: '',
    contactName: '',
    orgPhone: '',
    orgEmail: '',
    description: '',
    outcome: '',
    impact: '',
    timeline: '',
    budget: '',
  })
  const [formData, setFormData] = useState({})

  const handleChange = event => {
    const { id, name, value } = event.target
    setValues({ ...values, [id]: value })
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setFormData({ ...formData, submit: 'Submit' })

    //  Construct form-urlencoded payload based on formData
    const payload = Object.entries(formData)
      .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
      .join('&')

    //  Request options for axios
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      data: payload,
      url:
        'https://docs.google.com/forms/d/1IaQkxGmZ3KJfYunL0Bmtj6pzr-UDhrhBF5wBM6_YTC0/formResponse',
    }

    /*
    Send POST Simple Request using axios. Due to Google tightening security a CORS error response is
    returned but the form is still submitted & received.
    Limitation: This will not work if the form has > 1 pages.
    Despite being a Simple Request, the response status code is still 0 due to CORS; Hence .finally
    */
    // @ts-ignore
    axios(options).finally((window.location.href = '/success'))
  }

  return (
    <>
      <header id='header' className='ex-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>Cause Registration</h1>
            </div>
          </div>
        </div>
      </header>

      <div className='container'>
        <h2 className='mb-4 text-secondary font-weight-normal'>Cause Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <p>
              Please complete this form if you are interested in exploring options for a specific
              project or a new partnership with Code the Change YYC.
            </p>
            <div className='form-group'>
              <label htmlFor='org-name'>
                Organization Name
                <input
                  className='form-control'
                  id='org-name'
                  name='entry.1058055750'
                  type='text'
                  placeholder='Ex. Code the Change'
                  required
                  value={values.orgName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className='form-group'>
              <label htmlFor='full-addr'>
                Full Address
                <input
                  className='form-control'
                  id='fullAddr'
                  name='entry.1207943147'
                  type='text'
                  placeholder='Ex. 1234 1st Street NE, Calgary, AB A1B 2C3'
                  required
                  value={values.fullAddr}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className='form-group'>
              <div className='form-row'>
                <div className='col-12 col-md-4 pb-2'>
                  <label htmlFor='contact-name'>
                    Organizational Contact Name
                    <input
                      className='form-control'
                      id='contactName'
                      name='entry.2041250100'
                      type='text'
                      required
                      value={values.contactName}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className='col-12 col-md-4 pb-2'>
                  <label htmlFor='orgPhone'>
                    Phone Number
                    <input
                      className='form-control'
                      id='orgPhone'
                      name='entry.1472957584'
                      type='text'
                      placeholder='Ex. 403-123-4567'
                      required
                      value={values.orgPhone}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className='col-12 col-md-4 pb-2'>
                  <label htmlFor='orgEmail'>
                    Email Address
                    <input
                      className='form-control'
                      id='orgEmail'
                      name='entry.542306399'
                      type='email'
                      placeholder='Ex. user@example.com'
                      required
                      value={values.orgEmail}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='description'>
                Description - Provide a brief description of your project. If you have a project
                that is not yet fully formed, please share your ideas below.
                <textarea
                  className='form-control'
                  id='description'
                  name='entry.1266913022'
                  rows={4}
                  required
                  value={values.description}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className='form-group'>
              <label htmlFor='outcome'>
                Organizational outcomes - What are you hoping to achieve for your organization
                through this project? How will these outcomes contribute to the goals of your
                organization?
                <textarea
                  className='form-control'
                  id='outcome'
                  name='entry.599293182'
                  rows={4}
                  required
                  value={values.outcome}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className='form-group'>
              <label htmlFor='impact'>
                Community outcomes or impacts - How will the project benefit the community?
                <textarea
                  className='form-control'
                  id='impact'
                  name='entry.566463371'
                  rows={4}
                  required
                  value={values.impact}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className='form-group'>
              <label htmlFor='timeline'>
                Preferred timeline - Consideration needs to be made for peak academic periods and
                availability of students. Is the project time sensitive? Please provide your ideal
                project timeline below.
                <textarea
                  className='form-control'
                  id='timeline'
                  name='entry.1353105456'
                  rows={4}
                  required
                  value={values.timeline}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className='form-group'>
              <label htmlFor='budget'>
                Budget - Do you have a budget for this project? If so, how much is it? Websites will
                require annual hosting and domain fees, mobile applications will require annual
                developer fees, additional fees may also be required based on the specifications for
                the project (ex. databases)
                <textarea
                  className='form-control'
                  id='budget'
                  name='entry.530884051'
                  rows={4}
                  required
                  value={values.budget}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button type='submit' className='btn btn-outline-primary mt-2'>
              <h6 className='m-0'>Submit</h6>
            </button>
          </fieldset>
        </form>
      </div>
    </>
  )
}
