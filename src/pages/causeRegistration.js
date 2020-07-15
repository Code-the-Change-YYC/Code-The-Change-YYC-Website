import React, { useState } from "react"
import axios from "axios"

import Layout from "../components/layout"

export default function CauseRegistration({ location }) {
  const action =
    "https://docs.google.com/forms/d/1IaQkxGmZ3KJfYunL0Bmtj6pzr-UDhrhBF5wBM6_YTC0"
  const [values, setValues] = useState({
    orgName: "",
    fullAddr: "",
    contactName: "",
  })
  const [formData, setFormData] = useState({})

  const handleChange = (event) => {
    const { id, name, value } = event.target
    setValues({ ...values, [id]: value })
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormData({ ...formData, submit: "Submit" })
    const payload = Object.entries(formData)
      .map(
        ([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
      )
      .join("&")

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: payload,
      url:
        "https://docs.google.com/forms/d/1IaQkxGmZ3KJfYunL0Bmtj6pzr-UDhrhBF5wBM6_YTC0/formResponse",
    }

    axios(options)
  }

  return (
    <Layout location={location}>
      <header id="header" className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Cause Registration</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <h2 className="mb-4 text-secondary font-weight-normal">
          Cause Registration Form
        </h2>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <p>
              Please complete this form if you are interested in exploring
              options for a specific project or a new partnership with Code the
              Change YYC.
            </p>
            <div className="form-group">
              <label htmlFor="org-name">Organization Name</label>
              <input
                className="form-control"
                id="orgName"
                name="entry.1058055750"
                type="text"
                placeholder="Ex. Code the Change"
                required
                value={values.orgName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="full-addr">Full Address</label>
              <input
                className="form-control"
                id="fullAddr"
                name="entry.1207943147"
                type="text"
                placeholder="Ex. 1234 1st Street NE, Calgary, AB A1B 2C3"
                value={values.fullAddr}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col-12 col-md-4 pb-2">
                  <label htmlFor="contact-name">
                    Organizational Contact Name
                  </label>
                  <input
                    className="form-control"
                    id="contactName"
                    name="entry.2041250100"
                    type="text"
                    value={values.contactName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-outline-primary mt-2">
              <h6 className="m-0">Submit</h6>
            </button>
          </fieldset>
        </form>
      </div>
    </Layout>
  )
}
