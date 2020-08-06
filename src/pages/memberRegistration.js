import React from 'react'
import Layout from '../components/layout'

export default function memberRegistration() {
  return (
    <Layout>
      <header id="header" className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Member Registration</h1>
            </div>
          </div>
        </div>
      </header>

      <div id="applications" className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div hidden>
                <h2>Project intake has now closed.</h2>
                <p className="p-heading p-large">
                  However, don't let this discourage you! We are still accepting
                  applications in case a new project becomes available, or if an
                  existing project requires more members than expected.
                </p>
              </div>

              <h2>Registration is now open!</h2>
              <p className="p-heading p-large">
                To accommodate our Summer 2020 project intake, we are recruiting
                executive roles with various responsibilities to aid our cause
                in helping non-profits.
              </p>

              <div className="m-4">
                <h4 className="p-large">
                  If you are interested in joining a team and working directly
                  on a project, <br /> please fill out the Programmer
                  Application Form.
                </h4>
                <a
                  className="btn-solid-lg"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScUPNsq5qOc9530bkgJ-5Jo57Wiq4kb2PILFPs8s-GZ-doCqw/viewform"
                >
                  Programmer Application Form
                </a>
              </div>

              <div className="m-4">
                <h4 className=" p-large">
                  If you are interested in joining an internal admin role,{' '}
                  <br />
                  please fill out the Admin Application Form.
                </h4>
                <a
                  className="btn-solid-lg"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdAIBmGULRIHRX9sGb9vKcXaEDZozbMNClBSKmG0cCKnPZ_hQ/viewform"
                >
                  Admin Application Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
