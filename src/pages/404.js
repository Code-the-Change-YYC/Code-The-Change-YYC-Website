import React from 'react'

import Layout from '../components/layout'
import { ContentCenter } from '../components/Content'

export default function oops() {
  return (
    <Layout>
      <header id="header" className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Page Not Found</h1>
            </div>
          </div>
        </div>
      </header>

      <ContentCenter>
        <h3>The page you were looking for was removed or relocated.</h3>
      </ContentCenter>
    </Layout>
  )
}
