import React from 'react'
import Layout from '../components/layout'
import { ContentCenter } from '../components/Content'

export default function success() {
  return (
    <Layout>
      <header id="header" className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Thank You!</h1>
            </div>
          </div>
        </div>
      </header>

      <ContentCenter>
        <h3>
          Our team will review your submission and get back to you as soon as
          possible.
        </h3>
      </ContentCenter>
    </Layout>
  )
}
