import React from "react"

import Layout from "../components/layout"
import { CardEvent } from "../components/Card"

export default function Events({ children, location }) {
  return (
    <Layout location={location}>
      <header id="header" className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Whats Happening YYC?</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-9"></div>
            <div className="col-lg-3">
              <h2>2020</h2>
            </div>
          </div>
        </div>
      </div>

      <CardEvent></CardEvent>
    </Layout>
  )
}
