import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { CardEvent } from '../components/Card'

export default function Events({ data }) {
  return (
    <Layout>
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

      {data.allContentfulEvent.edges.map(({ node }, key) => {
        if (node.date.includes('2020')) {
          return <CardEvent key={key}>{node}</CardEvent>
        }
        return null
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

      {data.allContentfulEvent.edges.map(({ node }, key) => {
        if (node.date.includes('2019')) {
          return <CardEvent key={key}>{node}</CardEvent>
        }
        return null
      })}
    </Layout>
  )
}

export const query = graphql`
  query EventList {
    allContentfulEvent {
      edges {
        node {
          date
          details {
            details
          }
          slug
          name
          signupLink
          eventPoster {
            file {
              url
            }
            title
          }
          location
        }
      }
    }
  }
`
