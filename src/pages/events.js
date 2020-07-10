import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { CardEvent } from "../components/Card"

export default function Events({ location, data }) {
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
            <div className="col-lg-12 ">
              <h2 className="text-center">2020</h2>
              <hr />
            </div>
          </div>
        </div>
      </div>

      {data.allMarkdownRemark.edges.map(({ node }, key) => {
        if (node.frontmatter.date.includes("2020"))
          return <CardEvent key={key}>{node}</CardEvent>
      })}

      <div className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="text-center">2019</h2>
              <hr />
            </div>
          </div>
        </div>
      </div>

      {data.allMarkdownRemark.edges.map(({ node }, key) => {
        if (node.frontmatter.date.includes("2019"))
          return <CardEvent key={key}>{node}</CardEvent>
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "updates" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date
            img
          }
        }
      }
    }
  }
`
