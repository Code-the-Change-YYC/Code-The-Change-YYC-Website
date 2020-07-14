import React from "react"
import Layout from "../components/layout"

export default class causeRegistration extends React.Component {
  submitFormToGoogle(form) {
    form.preventDefault()
    try {
      var data = [].slice
        .call(form)
        .map(function (control) {
          return "value" in control && control.name
            ? control.name +
                "=" +
                (control.value === undefined ? "" : control.value)
            : ""
        })
        .join("&")
      var xhr = new XMLHttpRequest()

      /*
       this last 'false' parameter in the open method tells it to make a synchronous request,
       which helped to avoid timing issues with the redirect to the thankyou page.
      */
      xhr.open("POST", form.action + "/formResponse", false)
      xhr.setRequestHeader("Accept", "application/xml, text/xml, */*; q=0.01")
      xhr.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded; charset=UTF-8"
      )
      xhr.send(data)
    } catch (e) {}

    window.location.href = "thankyou.html"

    form.parentNode.className += " submitted"

    return false
  }

  render() {
    return (
      <Layout location={this.props.location}>
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
          <form
            id="partner-form"
            action="https://docs.google.com/forms/d/1IaQkxGmZ3KJfYunL0Bmtj6pzr-UDhrhBF5wBM6_YTC0"
            method="post"
            onSubmit={this.submitFormToGoogle}
          >
            <fieldset>
              <p>
                Please complete this form if you are interested in exploring
                options for a specific project or a new partnership with Code
                the Change YYC.
              </p>
              <div className="form-group">
                <label htmlFor="org-name">Organization Name</label>
                <input
                  className="form-control"
                  name="org-name"
                  name="entry.1058055750"
                  type="text"
                  placeholder="Ex. Code the Change"
                  required=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="full-addr">Full Address</label>
                <input
                  className="form-control"
                  name="full-addr"
                  name="entry.1207943147"
                  type="text"
                  placeholder="Ex. 1234 1st Street NE, Calgary, AB A1B 2C3"
                  required=""
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
                      name="contact-name"
                      name="entry.2041250100"
                      type="text"
                      placeholder="Ex. John Doe"
                      required=""
                    />
                  </div>
                  <div className="col-12 col-md-4 pb-2">
                    <label htmlFor="org-phone">Phone Number</label>
                    <input
                      className="form-control"
                      name="org-phone"
                      name="entry.1472957584"
                      type="text"
                      placeholder="Ex. 403-123-4567"
                      required=""
                    />
                  </div>
                  <div className="col-12 col-md-4 pb-2">
                    <label htmlFor="org-email">Email Address</label>
                    <input
                      className="form-control"
                      name="org-email"
                      name="entry.542306399"
                      type="email"
                      placeholder="Ex. user@example.com"
                      required=""
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="description">
                  Description - Provide a brief description of your project. If
                  you have a project that is not yet fully formed, please share
                  your ideas below.
                </label>
                <textarea
                  className="form-control"
                  name="description"
                  name="entry.1266913022"
                  rows="4"
                  required=""
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="outcome">
                  Organizational outcomes - What are you hoping to achieve for
                  your organization through this project? How will these
                  outcomes contribute to the goals of your organization?
                </label>
                <textarea
                  className="form-control"
                  name="outcome"
                  name="entry.599293182"
                  rows="4"
                  required=""
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="impact">
                  Community outcomes or impacts - How will the project benefit
                  the community?
                </label>
                <textarea
                  className="form-control"
                  name="impact"
                  name="entry.566463371"
                  rows="4"
                  required=""
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="timeline">
                  Preferred timeline - Consideration needs to be made for peak
                  academic periods and availability of students. Is the project
                  time sensitive? Please provide your ideal project timeline
                  below.
                </label>
                <textarea
                  className="form-control"
                  name="timeline"
                  name="entry.1353105456"
                  rows="4"
                  required=""
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="budget">
                  Budget - Do you have a budget for this project? If so, how
                  much is it? Websites will require annual hosting and domain
                  fees, mobile applications will require annual developer fees,
                  additional fees may also be required based on the
                  specifications for the project (ex. databases)
                </label>
                <textarea
                  className="form-control"
                  name="budget"
                  name="entry.530884051"
                  rows="4"
                  required=""
                ></textarea>
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
}
