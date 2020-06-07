import React from "react"
import Layout from "../components/layout"

export default function Projects({ location }) {
  return (
    <Layout location={location}>
      <header id="header" className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Projects Updates</h1>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  )
}
